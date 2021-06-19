import styled from 'styled-components';
import palette from 'theme/palette';

const Header = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  padding: 15px 0;
  height: 102px;
  z-index: 10;
  background-color: ${palette.secondary.main};
`;

Header.displayName = 'Header';
export default { Header };
