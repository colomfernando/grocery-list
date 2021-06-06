import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import Header from 'components/Header';
import Body from 'components/Body';
import { Provider } from 'react-redux';
import store from 'store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <Body />
    </Provider>
  );
};

export default App;
