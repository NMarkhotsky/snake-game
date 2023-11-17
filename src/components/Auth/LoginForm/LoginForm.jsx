import { useForm } from 'react-hook-form';
import { AuthForm } from '../AuthFormContainer/AuthFormContainer';
import {
  Button,
  ButtonLink,
  Field,
  InputField,
  Title,
} from '../RegisterForm/RegisterForm.styled';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/auth/operations';

export const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      password: '',
    },
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(login(data));
    console.log(data);
    reset();
  };

  return (
    <>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Log In!</Title>
        <Field>
          <InputField
            placeholder="Login"
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
        <Button type="submit">Login</Button>
        <NavLink to="/register">
          <ButtonLink>Do not have an account?</ButtonLink>
        </NavLink>
      </AuthForm>
    </>
  );
};
