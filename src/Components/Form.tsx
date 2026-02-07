import { TextField } from './TextField';
import { TextAreaField } from './TextAreaField';

interface FormProps {
  title: string;
  description: string;
}

export function Form({ title, description }: FormProps) {
  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col px-4">
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p className="mt-2">{description}</p>
      <form className="mt-8 flex flex-col gap-4">
        <TextField label="Full Name" />
        <TextField label="Email" type="email" />
        <TextField label="Phone" />
        <TextAreaField label="Comment" />
        <button
          type="submit"
          className="bg-pie-orange/30 mt-4 mr-auto px-12 py-2 text-xs tracking-wide uppercase cursor-pointer mb-10"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
