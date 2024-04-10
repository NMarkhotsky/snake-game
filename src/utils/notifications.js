import { toast } from 'react-toastify';

export const errorMessage = (message) => {
  toast.error(`${message}`, {
    position: 'bottom-right',
    autoClose: 5000,
    theme: 'colored',
  });
};

export const successMessage = (message) => {
  toast.success(`${message}`, {
    position: 'bottom-right',
    autoClose: 2000,
    theme: 'colored',
  });
};

export const messageLogin = {
  success: 'You have successfully Log in!',
  error: 'Login or password is wrong',
};

export const messageRegister = {
  success: 'You have successfully Registered!',
  error:
    'Please enter a valid login and password. (Password should contain at least one uppercase letter and a digit.)',
};
