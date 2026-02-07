import Pies from '@/Components/Pies';
import { Form } from '@/Components/Form';
import '@/styles/theme.css';


export default function App() {
  return (
    <div className="bg-pie-pink min-h-screen">
      <Pies/>
      <Form
        title="We'd love to hear from you!"
        description="Please fill out the form below to let us know how we can help."
      />
    </div>
  );
}
