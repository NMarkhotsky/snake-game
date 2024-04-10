import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { fetchCurrentUser } from './redux/auth/operations';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <SharedLayout />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
