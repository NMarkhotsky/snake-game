import AppRoutes from '../../routes/AppRoutes';
import { Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Main>
        <AppRoutes />
      </Main>
    </>
  );
};
