// routes/transportRoutes.js
const express = require('express');
const router = express.Router();
const transportController = require('../Controllers/transportController');

// Create a new transport listing
router.post('/create', transportController.createTransport);

// Get all transport listings
router.get('/', transportController.getAllTransport);

// Get a single transport listing by ID
router.get('/:id', transportController.getTransportById);

// Update a transport listing by ID
router.put('/:id', transportController.updateTransport);

// Delete a transport listing by ID
router.delete('/:id', transportController.deleteTransport);

module.exports = router;
