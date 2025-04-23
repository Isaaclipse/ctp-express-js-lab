const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Mock data (could be expanded or replaced by a database later)
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

// GET route to fetch all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// POST route to add a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  if (!newItem.id || !newItem.name) {
    return res.status(400).json({ error: 'ID and Name are required' });
  }
  items.push(newItem);
  res.status(201).json(newItem);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
