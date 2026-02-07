import { TextField } from './TextField';
import { TextFieldComment } from './TextFieldComment';

interface FormProps {
  title: string;
  description: string;
}

export function Form({ title, description }: FormProps) {
  return (
    <section className="mx-auto flex w-2/3 flex-col">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
      <form className="mt-8 flex flex-col gap-4">
        <TextField label="Full Name" />
        <TextField label="Email" type="email" />
        <TextField label="Phone" />
        <TextFieldComment label="Comment" />
      </form>
      <button
        type="submit"
        className="bg-pie-orange/30 mt-4 mr-auto px-10 py-2 text-xs tracking-wide uppercase"
      >
        Submit
      </button>
    </section>
  );
}
