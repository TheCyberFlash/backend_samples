// public/js/ecommerce.js
// JavaScript logic for the E-commerce page

// Variables to keep track of the current page and total pages
let currentPage = 1;
let productsPerPage = 9;
let allProducts = [];

// Function to fetch all products
function fetchAllProducts() {
    // Use Fetch API to make a GET request to the FakeStore API
    fetch('https://fakestoreapi.com/products')
        .then((response) => {
            // Handle the response as JSON
            return response.json();
        })
        .then((data) => {
            allProducts = data;
            totalPages = Math.ceil(allProducts.length / productsPerPage);
            fetchProducts();
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        });
}

// Function to fetch and display products for the current page
function fetchProducts() {
    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = currentPage * productsPerPage;

    // Get products for the current page
    const productsForPage = allProducts.slice(startIndex, endIndex);

    // Handle the fetched data here
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; // Clear the grid before adding new products

    // Loop through the data and create product cards
    productsForPage.forEach((product) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">$${product.price}</p>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Function to load the next page of products
function loadNextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        fetchProducts();
    }
}

// Function to load the previous page of products
function loadPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        fetchProducts();
    }
}

// Add event listeners to the "Previous" and "Next" buttons
$('.prev-button').on('click', loadPreviousPage);
$('.next-button').on('click', loadNextPage);

// Function to show the product grid
function showProductGrid() {
    $('.get-products').show();
}

// Function to hide the product grid
function hideProductGrid() {
    $('.get-products').hide();
}

// Add click event listener to toggle the product grid
$('#toggleGetProducts').on('click', function () {
    const productGrid = $('.get-products');
    
    if (productGrid.is(':visible')) {
        // If the product grid is visible, hide it
        hideProductGrid();
    } else {
        // If the product grid is not visible, fetch products and show it
        fetchProducts();
        showProductGrid();
    }
});

// Function to show the product grid
function showProductForm() {
    $('.post-products').show();
}

// Function to hide the product grid
function hideProductForm() {
    $('.post-products').hide();
}

$('#togglePostProducts').on('click', function () {
    const productGrid = $('.post-products');
    
    if (productGrid.is(':visible')) {
        // If the product form is visible, hide it
        hideProductForm();
    } else {
        // If the product form is not visible, show it
        showProductForm();
    }
});

// Function to handle form submission
function handleFormSubmit(event) {
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
        });
}

// Add event listener for form submission
$('#addProductForm').on('submit', handleFormSubmit);


// Initially hide the product sections
hideProductGrid();

// Call the fetchAllProducts function to load all products initially
fetchAllProducts();



// Call the fetchAllProducts function to load all products initially
fetchAllProducts();
