export const checkValidData = (email, password, name) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isValidName =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      name
    );
  if (!isValidEmail) {
    return "Email is not Valid";
  }
  if (!isValidPassword) {
    return "Password is not Valid";
  }
  if (!isValidName) {
    return "Name is not Valid";
  }
  return null;
};
