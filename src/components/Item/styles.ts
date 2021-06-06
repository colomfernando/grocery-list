import styled from 'styled-components';
import palette from 'theme/palette';
import Icon from 'components/Icon';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: ${palette.primary.main};
  border-radius: 5px;
  padding: 10px;
`;

const IconItem = styled(Icon)`
  color: ${palette.common.white};
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 5px 0;
  color: ${palette.common.white};
`;

Wrapper.displayName = 'Item';
export default { Wrapper, IconItem, Title };
