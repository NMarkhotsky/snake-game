import PropTypes from 'prop-types';
import { FormContainer } from './AuthFormContainer.styled';

export const AuthForm = ({ children, onSubmit }) => {
  return <FormContainer onSubmit={onSubmit}>{children}</FormContainer>;
};

AuthForm.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
