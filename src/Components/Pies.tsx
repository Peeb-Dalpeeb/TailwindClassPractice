import { useState, useEffect } from 'react';
import '@/styles/theme.css';
import { Item } from '@/Components/Item';

// 1. Define the shape of the data coming from MongoDB
// (This matches what you see in your screenshot)
type BakeryItemData = {
  _id: string;
  itemId: string;
  name: string;
  price: number;
  description: string;
  imageURL: string;
};

export default function Pies() {
  // 2. Create a "bucket" (State) to hold the pies once we fetch them
  const [items, setItems] = useState<BakeryItemData[]>([]);

  // 3. Use useEffect to fetch data when the component loads
  useEffect(() => {
    fetch('https://tailwindclasspractice.onrender.com/api/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching pies:", err));
  }, []);

  return (
    <div className="flex flex-col gap-6 py-8">
      {items.map((pie) => (
        <Item
          key={pie._id}        // Use the unique MongoDB ID
          item={pie.itemId}    // Pass DB 'itemId' to the component's 'item' prop
          Name={pie.name}      // Pass DB 'name' to the component's 'Name' prop
          price={pie.price}
          description={pie.description}
          imageURL={pie.imageURL}
        />
      ))}
    </div>
  );
}