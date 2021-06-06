import React from 'react';
import InputSearch from 'components/InputSearch';
import Styles from './styles';

const Header: React.FC = () => {
  return (
    <Styles.Header>
      <InputSearch />
    </Styles.Header>
  );
};

export default Header;
