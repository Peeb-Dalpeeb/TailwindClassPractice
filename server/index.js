const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ----------------------------------------------------
// THE DATA MODEL (Schema)
// ----------------------------------------------------
const ItemSchema = new mongoose.Schema({
  itemId: String,
  name: String,
  price: Number,
  description: String,
  imageURL: String,
});

const ItemModel = mongoose.model('Item', ItemSchema);

// ----------------------------------------------------
// THE ROUTES
// ----------------------------------------------------
app.get('/api/items', async (req, res) => {
  try {
    const items = await ItemModel.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------------------------------------------
// START THE SERVER
// ----------------------------------------------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});