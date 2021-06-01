import React from 'react';
import Styles from './styles';

const Header: React.FC = ({ children }) => {
  return <Styles.Header>{children}</Styles.Header>;
};

export default Header;
