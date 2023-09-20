// Function to make an API request and update the response text box
function callApi(endpoint, method) {
  const requestOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json', // Modify this as needed
    },
  };

  // Make an API request using the Fetch API
  fetch(endpoint, requestOptions)
    .then(response => {
      // Check if the response status code indicates success (e.g., 200 OK)
      if (response.ok) {
        // Parse the response as JSON
        return response.json();
      } else {
        // If the response status is not OK, throw an error
        throw new Error('API request failed');
      }
    })
    .then(data => {
      // Update the response text box with the API response
      const responseBox = document.querySelector(`.${getResponseBoxClass(endpoint)}`);
      responseBox.value = JSON.stringify(data, null, 2); // Pretty-print JSON data
    })
    .catch(error => {
      console.error(error);
      // Handle the error and display it in the response text box
      const responseBox = document.querySelector(`.${getResponseBoxClass(endpoint)}`);
      responseBox.value = `Error: ${error.message}`;
    });
}

// Add click event listeners to API lines
const apiLines = document.querySelectorAll('.api-line');
apiLines.forEach(line => {
  line.addEventListener('click', () => {
    const endpoint = line.getAttribute('data-endpoint');
    const method = line.getAttribute('data-type');
    callApi(endpoint, method);
  });
});

// Function to determine the response box class based on the endpoint
function getResponseBoxClass(endpoint) {

  console.log(endpoint);
  // Check the endpoint or its contents to determine the class
  if (endpoint.includes('products')) {
    return 'product-response-box';
  } else if (endpoint.includes('user')) {
    return 'user-response-box';
  } else if (endpoint.includes('categories')) {
    return 'category-response-box';
  } else if (endpoint.includes('order')) {
    return 'order-response-box';
  } else if (endpoint.includes('search')) {
    return 'search-response-box';
  } else {
    // Default to generic response box class if no match
    return 'product-response-box';
  }
}