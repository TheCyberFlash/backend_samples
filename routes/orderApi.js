const express = require('express');
const router = express.Router();

const {
    orderInvoice,
    orderDetails,
    allOrders,
    updatedOrder,
    userOrders,
    orderTotal,
    filteredOrders,
    newOrder
  } = require('../dummyOrderData');

// Create an Order
router.post('/', (req, res) => {
    // const newOrder = req.body; 

    res.json(newOrder); 
});

// Get Order Details by ID
router.get('/:orderId', (req, res) => {
    const orderId = req.params.orderId;

    res.json(orderDetails);
});

// List All Orders
router.get('/', (req, res) => {

    res.json(allOrders);
});

// Update Order Status by ID
router.put('/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    const newStatus = req.body.status; 

    res.json(updatedOrder); 
});

// Cancel an Order by ID
router.delete('/:orderId', (req, res) => {
    const orderId = req.params.orderId;

    res.json({ message: 'Order canceled successfully' }); 
});

// List Orders by User
router.get('/:userId/orders', (req, res) => {

    const userId = req.params.userId;

    res.json(userOrders);
});

// Calculate Order Total by ID
router.get('/:orderId/total', (req, res) => {

    const orderId = req.params.orderId;

    res.json(orderTotal);
});

// Filter Orders by Status
router.get('/', (req, res) => {
    const status = req.query.status; 

    res.json(filteredOrders);
});

// Mark Order as Paid by ID
router.put('/:orderId/mark-as-paid', (req, res) => {
    const orderId = req.params.orderId;

    res.json(updatedOrder); 
});

// Generate Order Invoice by ID
router.get('/:orderId/invoice', (req, res) => {
    const orderId = req.params.orderId;

    res.json(orderInvoice);
});

module.exports = router;