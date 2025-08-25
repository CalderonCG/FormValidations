import { forwardRef, type InputHTMLAttributes } from "react";
import './FormInput.scss'

type InputProps = {
  label: string;
  placeholder: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, error, ...props }, ref) => {
    return (
      <div className="input">
        <label className="input_label">{label}</label>
        <input className="input_field" ref={ref} {...props} 
        type="text" placeholder={placeholder} />
        {error && (<p className="input_error">{error}</p>)}
      </div>
    );
  }
);

export default FormInput;
