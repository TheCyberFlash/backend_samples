const express = require('express');
const router = express.Router();

// GET /api/products
router.get('/', (req, res) => {
    // Dummy response for /api/products
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 19.99,
            description: 'Description of Product 1',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 29.99,
            description: 'Description of Product 2',
        },
    ];
    res.json(products);
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
    // Dummy response for /api/products/:id
    const productId = req.params.id;
    const product = {
        id: productId,
        name: `Product ${productId}`,
        price: 19.99,
        description: `Description of Product ${productId}`,
    };
    res.json(product);
});

// POST /api/products
router.post('/', (req, res) => {
    // Dummy response for /api/products (POST)
    const newProduct = req.body;

    res.json({ message: 'Product created successfully' });
});

router.put('/:id', (req, res) => {
    // Dummy response for /api/products/:id (PUT)
    const productId = req.params.id;
    const updatedProduct = req.body;

    res.json({ message: 'Product updated successfully' });
});

router.delete('/:id', (req, res) => {
    // Dummy response for /api/products/:id (DELETE)
    const productId = req.params.id;

    res.json({ message: 'Product deleted successfully' });
});

module.exports = router;