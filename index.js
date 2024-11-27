const express = require('express');
const path = require('path');

// Import the test routes from itemRoutes.js
const itemRoutes = require('./routes/itemRoutes');

console.log('itemRoutes:', itemRoutes);  // Log the value of itemRoutes to verify

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

// Use itemRoutes for routing
app.use(itemRoutes);  // This should now be a valid router

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
