import { object, string, ref } from "yup";

const passwordMin = 6;
const pwMatch = /^[a-zA-Z0-9_.-]*$/;

export const createUserSchema = object({
  body: object({
    name: string().required("Name is required"),
    password: string()
      .required("Password is required")
      .min(passwordMin, `Password have a minimum of ${passwordMin} characters.`)
      .matches(pwMatch, "Password can only contain Latin letters."),
    passwordConfirmation: string().oneOf(
      [ref("password"), null],
      "Passwords must match"
    ),
    email: string()
      .email("Must be a valid email")
      .required("Email is required"),
  }),
});
