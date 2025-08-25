import { useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "../FormInput/FormInput";
import "./Form.scss";

type FormType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  city: string;
  state: string;
  zip: string;
};

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>KonnektConference</h1>
      <div className="form_label">Online event registration</div>
      <div className="form_names">
        <FormInput
          {...register("firstName", {
            required: {
              value: true,
              message: "Please complete the required fields",
            },
          })}
          type="text"
          label="First Name"
          error={errors.firstName?.message}
        />
        <FormInput
          {...register("lastName", {
            required: {
              value: true,
              message: "Please complete the required fields",
            },
          })}
          type="text"
          label="Last Name"
          error={errors.lastName?.message}
        />
      </div>

      <FormInput
        {...register("email", {
          required: {
            value: true,
            message: "Please complete the required fields",
          },
        })}
        type="text"
        label="Email Address"
        error={errors.email?.message}
      />
      <FormInput
        {...register("password", {
          required: {
            value: true,
            message: "Please complete the required fields",
          },
        })}
        type="password"
        label="Password"
        error={errors.password?.message}
      />
      <FormInput
        {...register("passwordConfirm", {
          required: {
            value: true,
            message: "Please complete the required fields",
          },
        })}
        type="password"
        label="Confirm Password"
        error={errors.passwordConfirm?.message}
      />

      <div className="form_location">
        <FormInput {...register("city")} type="text" label="City" />
        <FormInput
          {...register("state", {
            required: {
              value: true,
              message: "Please complete the required fields",
            },
          })}
          type="text"
          label="State"
          error={errors.state?.message}
        />
        <FormInput
          {...register("zip", {
            required: {
              value: true,
              message: "Please complete the required fields",
            },
          })}
          type="text"
          label="Zip Code"
          error={errors.zip?.message}
        />
      </div>

      <button className="form_register">Register</button>
    </form>
  );
}

export default Form;
