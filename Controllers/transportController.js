// controllers/transportController.js
const Transport = require('../Models/Transport');

// Create a new transport listing
// Create a new transport listing
exports.createTransport = async (req, res) => {
    try {
      const { county, from, to, sacco, fareRange, postedBy } = req.body;
      const transport = new Transport({
        county,
        from,
        to,
        sacco,
        fareRange,
        postedBy,
      });
  
      await transport.save();
      res.status(201).json(transport);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

// Get all transport listings
exports.getAllTransport = async (req, res) => {
  try {
    const transportListings = await Transport.find();
    res.json(transportListings);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single transport listing by ID
exports.getTransportById = async (req, res) => {
  try {
    const transport = await Transport.findById(req.params.id);
    if (!transport) {
      return res.status(404).json({ error: 'Transport not found' });
    }
    res.json(transport);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a transport listing by ID
exports.updateTransport = async (req, res) => {
  try {
    const transport = await Transport.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!transport) {
      return res.status(404).json({ error: 'Transport not found' });
    }
    res.json(transport);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a transport listing by ID
exports.deleteTransport = async (req, res) => {
  try {
    const transport = await Transport.findByIdAndRemove(req.params.id);
    if (!transport) {
      return res.status(404).json({ error: 'Transport not found' });
    }
    res.json({ message: 'Transport deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
