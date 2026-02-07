import { INPUT_CLASSES } from '../styles/formStyles';
import { LABEL_CLASSES } from '../styles/formStyles';

type TextFieldCommentProps = {
  label: string;
};

export function TextFieldComment({ label }: TextFieldCommentProps) {
  return (
    <label className={LABEL_CLASSES}>
      <span>{label}</span>
      <textarea className={`${INPUT_CLASSES} h-20`} />
    </label>
  );
}
