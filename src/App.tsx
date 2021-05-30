import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import Icon from 'components/Icon';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <p>test</p>
        <Icon iconName="eggs" />
      </div>
    </>
  );
};

export default App;
