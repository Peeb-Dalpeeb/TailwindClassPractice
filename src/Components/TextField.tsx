import { INPUT_CLASSES } from '../styles/formStyles';
import { LABEL_CLASSES } from '../styles/formStyles';

type TextFieldProps = {
  label: string;
  type?: string;
};

export function TextField({ label, type = 'text' }: TextFieldProps) {
  return (
    <label className={LABEL_CLASSES}>
      <span>{label}</span>
      <input type={type} className={`${INPUT_CLASSES} h-10`} />
    </label>
  );
}
