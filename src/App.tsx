import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import Header from 'components/Header';
import Body from 'components/Body';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Body />
    </>
  );
};

export default App;
