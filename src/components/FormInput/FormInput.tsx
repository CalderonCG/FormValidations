import { forwardRef, type InputHTMLAttributes } from "react";
import './FormInput.scss'
import clsx from "clsx";

type InputProps = {
  label: string;
  error?: string;
  type: 'text'| 'password' | 'number'
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, error, ...props }, ref) => {
    return (
      <div className='input'>
        <label className="input_label">{label}</label>
        <input className={clsx('input_field', {error_input: error})} ref={ref} {...props} 
        type={type} placeholder={label} />
        {error && (<p className="input_error">{error}</p>)}
      </div>
    );
  }
);

export default FormInput;
