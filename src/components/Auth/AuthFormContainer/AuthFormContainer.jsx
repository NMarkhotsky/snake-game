/* eslint-disable react/prop-types */
import { FormContainer } from './AuthFormContainer.styled';

export const AuthForm = ({ children, onSubmit }) => {
  return <FormContainer onSubmit={onSubmit}>{children}</FormContainer>;
};
