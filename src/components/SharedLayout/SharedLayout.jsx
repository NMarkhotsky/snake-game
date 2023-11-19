import AppRoutes from '../../routes/AppRoutes';
import { Header } from '../Header/Header';
import { Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <AppRoutes />
      </Main>
    </>
  );
};
