const express = require('express');
const path = require('path');
const itemRoutes = require('./routes/itemRoutes'); // Import your routes

const app = express();
const port = process.env.PORT || 3000;

// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// Use itemRoutes for routing
app.use(itemRoutes);  // Make sure itemRoutes is a valid router

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
