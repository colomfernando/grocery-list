import styled from 'styled-components';
import IconComponent from 'components/Icon';
import palette from 'theme/palette';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${palette.common.white};
  padding: 5px;
  border-radius: 5px;
  margin: 0 10px;
  width: 100%;
  max-width: 380px;
  flex-wrap: wrap;
`;

const IconSearch = styled(IconComponent)``;

const Input = styled.input`
  flex-basis: 80%;
  border: none;
  padding: 0 10px;
  width: 100%;
  outline: none;
  color: ${palette.grey[700]};
`;

const WrapperOptions = styled.div`
  flex-basis: 100%;
  padding: 10px 0 5px;
`;

Wrapper.displayName = 'InputSearch';
export default { Wrapper, Input, IconSearch, WrapperOptions };
