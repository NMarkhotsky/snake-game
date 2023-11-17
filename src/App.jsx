import { useDispatch } from 'react-redux';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { useEffect } from 'react';
import { fetchCurrentUser } from './redux/auth/operations';

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
