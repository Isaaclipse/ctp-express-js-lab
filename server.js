const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Mock data (could be expanded or replaced by a database later)
let items = [];

// Load from data.json on server start
try {
  const data = fs.readFileSync('./data.json');
  items = JSON.parse(data);
} catch (err) {
  console.log('No existing data.json found. Starting with default items.');
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ];
}

// GET route to fetch all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// POST route to add a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;

  // Add the new item to the in-memory array
  items.push(newItem); // Use the correct variable

  // Write the updated array back to data.json
  fs.writeFileSync('./data.json', JSON.stringify(items, null, 2));

  // Send the response
  res.status(201).json(newItem);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
