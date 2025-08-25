import { useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "../FormInput/FormInput";
import "./Form.scss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z.string().min(1, "First name should not be empty"),
  lastName: z.string().min(1, "Last name should not be empty"),
  email: z.email(),
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  passwordConfirm: z.string().min(8),
  city: z.string(),
  state: z.string().min(1, "State should not be empty"),
  zip: z
    .string()
    .min(4, "Zip code must be 4 digits")
    .max(4, "Zip code must be 4 digits"),
});

type FormType = z.infer<typeof schema>;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<FormType>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    const match = data.password === data.passwordConfirm;
    if (!match) {
      setError("passwordConfirm", {
        type: "password",
        message: "Password must match",
      });
      return;
    }
    console.log(data);
    reset();
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>KonnektConference</h1>
      <div className="form_label">Online event registration</div>
      <div className="form_names">
        <FormInput
          {...register("firstName")}
          type="text"
          label="First Name"
          placeholder="Christopher"
          error={errors.firstName?.message}
        />
        <FormInput
          {...register("lastName")}
          type="text"
          label="Last Name"
          placeholder="Calderon"
          error={errors.lastName?.message}
        />
      </div>

      <FormInput
        {...register("email")}
        type="text"
        label="Email Address"
        placeholder="email@address.com"
        error={errors.email?.message}
      />
      <FormInput
        {...register("password")}
        type="password"
        label="Password"
        placeholder="Must contain at least 8 characters, 1 uppercase and 1 digit"
        error={errors.password?.message}
      />
      <FormInput
        {...register("passwordConfirm")}
        type="password"
        label="Confirm Password"
        placeholder="Must contain at least 8 characters, 1 uppercase and 1 digit"
        error={errors.passwordConfirm?.message}
      />

      <div className="form_location">
        <FormInput {...register("city")} type="text" label="City" placeholder="Santa Tecla" />
        <FormInput
          {...register("state")}
          type="text"
          label="State"
          error={errors.state?.message}
          placeholder="La Libertad"
        />
        <FormInput
          {...register("zip")}
          type="number"
          label="Zip Code"
          error={errors.zip?.message}
          placeholder="4 digits"
        />
      </div>

      <button className="form_register">Register</button>
    </form>
  );
}

export default Form;
