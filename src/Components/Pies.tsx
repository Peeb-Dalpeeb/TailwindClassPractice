import '@/styles/theme.css';
import { Item } from '@/Components/Item';
import aiPieImage from '@/assets/AIPie.png';

type BakeryItem = {
  item: string;
  Name: string;
  price: number;
  description: string;
  imageURL: string;
};

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

export default function Pies() {
  return (
    <div className="flex flex-col gap-6 py-8">
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
    </div>
    );
}
