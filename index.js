const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const transportRoutes = require('./Routes/transportRoutes');
const { verifyToken } = require('./MiddleWares/authMiddleware');
const authRoutes = require('./Routes/UserRoutes');

const app = express();
const port = 5000; // You can change the port if needed
const dbURI = "mongodb+srv://meshakotieno343:JOWPB64VeCFhvM1G@cluster0.brepk4p.mongodb.net/?retryWrites=true&w=majority"// Replace with your MongoDB URI

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

// Routes
app.use('/api/transport',transportRoutes);
app.use('/api/user', authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
