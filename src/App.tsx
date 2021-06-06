import React, { useEffect } from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import Header from 'components/Header';
import Body from 'components/Body';
import { useDispatch } from 'react-redux';
import { initDbAction } from 'store/actions';
import db from 'db';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const items = db.getAllItems();
    dispatch(initDbAction(items));
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Body />
    </>
  );
};

export default App;
