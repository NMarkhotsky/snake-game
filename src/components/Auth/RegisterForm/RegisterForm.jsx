import { useForm } from 'react-hook-form';
import { AuthForm } from '../AuthFormContainer/AuthFormContainer';
import {
  Button,
  ButtonLink,
  Field,
  InputField,
  Title,
} from './RegisterForm.styled';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registration } from '../../../redux/auth/operations';

export const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      password: '',
    },
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(registration(data));

    reset();
  };

  return (
    <>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Register!</Title>
        <Field>
          <InputField
            placeholder="Login"
            type="text"
            {...register('name', { required: true })}
          />
        </Field>
        <Field>
          <InputField
            placeholder="Password"
            type="password"
            {...register('password', { required: true })}
          />
        </Field>
        <Button type="submit">Register</Button>
        <NavLink to="/login">
          <ButtonLink>Do you have an account?</ButtonLink>
        </NavLink>
      </AuthForm>
    </>
  );
};
