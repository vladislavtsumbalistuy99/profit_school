import validator from 'validatorjs';

// export const validatePhone = (value) => {
//   let error = '';
//   console.log('Error putin');
//   if (value === undefined) {
//     error = "Поле обов'язкове!";
//   } else if (!validator.isMobilePhone(value)) {
//     error = 'телефон не валідний';
//   }
//   return error;
// };

//Validation
export const required = (value) => (value ? undefined : 'Fill in the field');
export const maxLength15 = (value) =>
  value && value.length > 15 ? '15 characters maximum' : undefined;
export const minLength6 = (value) =>
  value && value.length < 6 ? '8 characters minimum' : undefined; //Минимум 8 можно поставить
export const number = (value) =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;
export const minValue18 = minValue(18);
export const isValidEmail = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Incorrect email'
    : undefined;
//Warning
export const isYahooMail = (value) =>
  value && /.+@yahoo\.com/.test(value)
    ? 'Really? You still use yahoo mail?'
    : undefined;
