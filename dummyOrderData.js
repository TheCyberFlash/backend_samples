// Dummy data for orderInvoice
const orderInvoice = {
    orderId: '12345',
    orderDate: '2023-09-20',
    customerName: 'John Doe',
    totalAmount: 100.0,
    items: [
      { productId: '1', productName: 'Product A', quantity: 2, unitPrice: 25.0 },
      { productId: '2', productName: 'Product B', quantity: 1, unitPrice: 50.0 },
      { productId: '3', productName: 'Product C', quantity: 3, unitPrice: 10.0 },
    ],
  };
  
  // Dummy data for orderDetails
  const orderDetails = {
    orderId: '12345',
    orderDate: '2023-09-20',
    customerName: 'John Doe',
    status: 'Processing',
    items: [
      { productId: '1', productName: 'Product A', quantity: 2, unitPrice: 25.0 },
      { productId: '2', productName: 'Product B', quantity: 1, unitPrice: 50.0 },
      { productId: '3', productName: 'Product C', quantity: 3, unitPrice: 10.0 },
    ],
  };
  
  // Dummy data for allOrders
  const allOrders = [
    { orderId: '12345', orderDate: '2023-09-20', customerName: 'John Doe', status: 'Processing' },
    { orderId: '67890', orderDate: '2023-09-21', customerName: 'Jane Smith', status: 'Shipped' },
  ];
  
  // Dummy data for updatedOrder
  const updatedOrder = {
    orderId: '12345',
    status: 'Shipped',
  };
  
  // Dummy data for userOrders
  const userOrders = [
    { orderId: '12345', orderDate: '2023-09-20', status: 'Processing' },
    { orderId: '67890', orderDate: '2023-09-21', status: 'Shipped' },
  ];
  
  // Dummy data for orderTotal
  const orderTotal = {
    orderId: '12345',
    totalAmount: 100.0,
  };
  
  // Dummy data for filteredOrders
  const filteredOrders = [
    { orderId: '12345', orderDate: '2023-09-20', customerName: 'John Doe', status: 'Processing' },
  ];

  // Dummy data for newOrder
const newOrder = {
    orderId: '67890',
    orderDate: '2023-09-21',
    customerName: 'Jane Smith',
    status: 'Pending',
    items: [
      { productId: '4', productName: 'Product D', quantity: 4, unitPrice: 15.0 },
      { productId: '5', productName: 'Product E', quantity: 2, unitPrice: 30.0 },
    ],
  };
  
  // Export the dummy data
  module.exports = {
    orderInvoice,
    orderDetails,
    allOrders,
    updatedOrder,
    userOrders,
    orderTotal,
    filteredOrders,
    newOrder
  };
  