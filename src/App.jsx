import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from './redux/auth/operations';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { SharedLayout } from './components/SharedLayout/SharedLayout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }),
    [dispatch];

  return (
    <>
      <SharedLayout />
      <GlobalStyle />
    </>
  );
}

export default App;
