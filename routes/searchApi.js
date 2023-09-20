const express = require('express');
const router = express.Router();

// GET /api/search
router.get('/', (req, res) => {
    const { keyword, category } = req.query;

    // Dummy response for /api/search
    const searchResults = [
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

    res.json(searchResults);
});

// GET /api/search/filter
router.get('/filter', (req, res) => {
    const { category } = req.query;

    // Dummy response for /api/search/filter
    const filteredResults = [
        {
            id: 3,
            name: 'Product 3',
            price: 39.99,
            description: 'Description of Product 3',
        },
        {
            id: 4,
            name: 'Product 4',
            price: 49.99,
            description: 'Description of Product 4',
        },
    ];

    res.json(filteredResults);
});

module.exports = router;
