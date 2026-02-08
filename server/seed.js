const mongoose = require('mongoose');
require('dotenv').config();

// 1. DEFINE THE BLUEPRINT
// We have to tell this script what a "Item" looks like, 
// just like we did in index.js.
const ItemSchema = new mongoose.Schema({
  itemId: String,
  name: String,
  price: Number,
  description: String,
  imageURL: String,
});

const ItemModel = mongoose.model('Item', ItemSchema);

// 2. PREPARE THE DATA
// This is the raw data we want to insert.
const sampleItems = [
  {
    itemId: "001",
    name: "Classic Apple Pie",
    price: 9.99,
    description: "Our Famous homemade apple pie",
    imageURL: "https://placehold.co/400x300/png?text=Apple+Pie", 
  },
  {
    itemId: "002",
    name: "Chocolate Fudge Brownie",
    price: 12.99,
    description: "Rich and gooey chocolate fudge brownie",
    imageURL: "https://placehold.co/400x300/png?text=Chocolate+Brownie",
  },
  {
    itemId: "003",
    name: "Lemon Meringue Pie",
    price: 11.99,
    description: "Tangy lemon filling topped with fluffy meringue",
    imageURL: "https://placehold.co/400x300/png?text=Lemon+Pie",
  },
];

// 3. THE MAIN ROUTINE
const seedDB = async () => {
  try {
    // A. Connect to the Database
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to DB');

    // B. Clean the Slate (Crucial Step!)
    // We delete EVERYTHING in this collection first. 
    // This prevents duplicates if you run this script 5 times.
    await ItemModel.deleteMany({});
    console.log('🧹 Cleared old data');

    // C. Insert the New Data
    await ItemModel.insertMany(sampleItems);
    console.log('🥧 Pies added to the pantry!');
    
    // D. Hang up the phone
    mongoose.connection.close();
    console.log('🔌 Connection closed');
  } catch (err) {
    console.error('❌ Error:', err);
  }
};

// Run the function
seedDB();