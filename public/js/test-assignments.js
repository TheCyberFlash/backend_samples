function CallApi(apiType) {
    const apiUrl = getApiUrl(apiType);
    const apiResultDiv = document.getElementById("api-result");

    // Make a GET request to the appropriate API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display the result based on the API type
            displayApiResult(apiType, data, apiResultDiv);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            apiResultDiv.innerHTML = "Error fetching data";
        });
}

function displayApiResult(apiType, data, apiResultDiv) {
    switch (apiType) {
        case "Cat":
            apiResultDiv.innerHTML = `Fact: ${data.fact}`;
            break;
        case "Dog":
            apiResultDiv.innerHTML = `<img src="${data.message}" alt="Dog Image" class="img-fluid">`;
            break;
        case "Bored":
            apiResultDiv.innerHTML = `
                <div>
                    <p>Activity: ${data.activity}</p>
                    <p>Type: ${data.type}</p>
                    <p>Participants: ${data.participants}</p>
                    <p>Price: ${data.price}</p>
                </div>`;
            break;
        default:
            apiResultDiv.innerHTML = "Invalid API type";
            break;
    }
}

function getApiUrl(apiType) {
    switch (apiType) {
        case "Cat":
            return "https://catfact.ninja/fact";
        case "Dog":
            return "https://dog.ceo/api/breeds/image/random";
        case "Bored":
            return "https://www.boredapi.com/api/activity";
        default:
            return "";
    }
}

// Function to handle form submission
function handleFormSubmit(event) {
    console.log("clicked");
    event.preventDefault();

    // Get form input values
    const title = $('#title').val();
    const price = parseFloat($('#price').val());
    const description = $('#description').val();
    const image = $('#image').val();
    const category = $('#category').val();

    // Prepare the request body
    const requestBody = {
        title,
        price,
        description,
        image,
        category,
    };

    // Make a POST request to the API
    fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Product added:', data);

            // Clear the form fields
            $('#title').val('');
            $('#price').val('');
            $('#description').val('');
            $('#image').val('');
            $('#category').val('');

            // Display success message
            $('#successMessage').text('Product successfully added. Please note that nothing in real will insert into the database. so if you want to access the new id you will get a 404 error..');

            // Hide the success message after 3 seconds with a fade-out effect
            setTimeout(function () {
                $('#successMessage').fadeOut('slow');
            }, 3000); // 3000 milliseconds (3 seconds)
        })
        .catch((error) => {
            console.error('Error adding product:', error);

            // Clear the form fields
            $('#title').val('');
            $('#price').val('');
            $('#description').val('');
            $('#image').val('');
            $('#category').val('');

            // Display success message
            $('#successMessage').text('Error adding product: ' + error + '  :(..');

            // Hide the success message after 3 seconds with a fade-out effect
            setTimeout(function () {
                $('#successMessage').fadeOut('slow');
            }, 3000); // 3000 milliseconds (3 seconds)
        });
}

// Add event listener for form submission
$('#addProductForm').on('submit', handleFormSubmit);