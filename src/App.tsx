import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import Header from 'components/Header';
import InputSearch from 'components/InputSearch';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <InputSearch onChange={() => console.log('change')} />
      </Header>
    </>
  );
};

export default App;
