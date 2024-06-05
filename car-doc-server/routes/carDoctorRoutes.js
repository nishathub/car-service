const {getAllUsers, createUser, getAllServices, getOneService, createOrder, getAllOrders, deleteOrder, updateOrderStatus, getOneOrder} = require('../controllers/carServiceControllers.js');
const express = require('express');

const router = express.Router();

router.get('/allUsers', getAllUsers);
router.get('/allOrders', getAllOrders);
// router.get('/allOrders/:orderID', getOneOrder);
router.get('/allServices', getAllServices);
router.get('/allServices/:serviceID', getOneService);
router.get('/allOrders/:orderID', getOneOrder);
router.post('/allUsers', createUser);
router.post('/allOrders', createOrder);
router.patch('/allOrders/:orderID', updateOrderStatus);
router.delete('/allOrders/:orderID', deleteOrder);

module.exports = router;