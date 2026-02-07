import { Item } from '@/Components/Item';
import aiPieImage from '@/assets/AIPie.png';
import { Form } from '@/Components/Form';
import '@/styles/theme.css';

type BakeryItem = {
  item: string;
  Name: string;
  price: number;
  description: string;
  imageURL: string;
};


export default function App() {

const bakeryItems: BakeryItem[] = [
  {
    item: "Item # 00000001",
    Name: "Classic Apple Pie",
    price: 9.99,
    description: "Our Famous homemade apple pie",
    imageURL: aiPieImage,
  },
  {
    item: "Item # 00000002",
    Name: "Chocolate Fudge Brownie",
    price: 12.99,
    description: "Rich and gooey chocolate fudge brownie",
    imageURL: aiPieImage,
  },
  {
    item: "Item # 00000003",
    Name: "Lemon Meringue Pie",
    price: 11.99,
    description: "Tangy lemon filling topped with fluffy meringue",
    imageURL: aiPieImage,
  },
];

  return (
    <div className="bg-pie-pink min-h-screen">
      {bakeryItems.map(({ item, Name, price, description, imageURL }) => (
        <Item
          key={item}
          item={item}
          Name={Name}
          price={price}
          description={description}
          imageURL={imageURL}
        />
      ))}

      <Form
        title="We'd love to hear from you!"
        description="Please fill out the form below to let us know how we can help."
      />
    </div>
  );
}
