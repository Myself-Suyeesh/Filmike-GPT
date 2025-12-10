export const checkValidData = (
  email: string,
  password: string,
  isSignIn: boolean,
  name: string,
  confirmPass: string
) => {
  const errors: Record<string, string> = {};

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const isNameValid = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name);

  if (!isEmailValid) errors.email = "Email is not valid";
  if (!isPasswordValid)
    errors.password =
      "Password must be 8+ chars, include A-Z, a-z, number & symbol";

  if (!isSignIn) {
    if (!isNameValid) errors.name = "Name should contain only alphabets";
    if (password !== confirmPass)
      errors.confirmPass = "Password does not match";
  }

  return Object.keys(errors).length ? errors : null;
};
