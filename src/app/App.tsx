import { Item } from "@/Components/Item";
import aiPieImage from "@/assets/AIPie.png";
import "@/styles/theme.css";


export default function App() {
  return (
    <div className="bg-pie-pink min-h-screen ">
    <Item
      item="Item # 00000001"
      Name="Classic Apple Pie"
      price={9.99123123}
      description="Our Famous homemade apple pie"
      imageURL={aiPieImage}
    />
    </div>
  );
}
