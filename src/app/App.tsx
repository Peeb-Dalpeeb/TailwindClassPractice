import { Item } from '@/Components/Item';
import aiPieImage from '@/assets/AIPie.png';
import { Form } from '@/Components/Form';
import '@/styles/theme.css';



export default function App() {
  return (
    <div className="bg-pie-pink min-h-screen">
      <Item
        item="Item # 00000001"
        Name="Classic Apple Pie"
        price={9.99123123}
        description="Our Famous homemade apple pie"
        imageURL={aiPieImage}
      />
      
      <Form
        title="We'd love to hear from you!"
        description="Please fill out the form below to let us know how we can help."
      />
    </div>
  );
}
