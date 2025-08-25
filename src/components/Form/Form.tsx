import { useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "../FormInput/FormInput";
import "./Form.scss";

type FormType = {
  firstName: string;
};

function Form() {
  const { register, handleSubmit } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>KonnektConference</h1>
      <div className="form_label">Online event registration</div>
      <div className="form_names">
        <FormInput
          {...register("firstName")}
          label="First Name"
          placeholder="First Name"
        />
        <FormInput
          {...register("firstName")}
          label="First Name"
          placeholder="First Name"
        />
      </div>

      <FormInput
        {...register("firstName")}
        label="First Name"
        placeholder="First Name"
      />
      <FormInput
        {...register("firstName")}
        label="First Name"
        placeholder="First Name"
      />

      <div className="form_location">
        <FormInput
          {...register("firstName")}
          label="First Name"
          placeholder="First Name"
        />
        <FormInput
          {...register("firstName")}
          label="First Name"
          placeholder="First Name"
        />
        <FormInput
          {...register("firstName")}
          label="First Name"
          placeholder="First Name"
        />
      </div>


      <button className="form_register">Register</button>
    </form>
  );
}

export default Form;
