const express = require('express');
const router = express.Router();

// GET /api/categories
router.get('/', (req, res) => {
    // Dummy response for retrieving all categories
    const categories = [
        {
            id: 1,
            name: 'Category 1',
            description: 'Description of Category 1',
        },
        {
            id: 2,
            name: 'Category 2',
            description: 'Description of Category 2',
        },
    ];
    res.json(categories);
});

// GET /api/categories/:id
router.get('/:id', (req, res) => {
    const categoryId = req.params.id;

    // Dummy response for retrieving a specific category by ID
    const category = {
        id: categoryId,
        name: 'Category ' + categoryId,
        description: 'Description of Category ' + categoryId,
    };
    res.json(category);
});

// POST /api/categories
router.post('/', (req, res) => {
    const newCategory = req.body;
    // Dummy response for creating a new category
    res.json({ message: 'Category created successfully', id: 1 });
});

// PUT /api/categories/:id
router.put('/:id', (req, res) => {
    const categoryId = req.params.id;
    const updatedCategory = req.body;

    // Dummy response for updating a category by ID
    updatedCategory.id = categoryId; 
    res.json({ message: 'Category updated successfully', id: categoryId });
});

// DELETE /api/categories/:id
router.delete('/:id', (req, res) => {
    const categoryId = req.params.id;

    // Dummy response for deleting a category by ID
    res.json({ message: 'Category deleted successfully', id: categoryId });
});

module.exports = router;
