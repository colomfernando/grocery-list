import styled from 'styled-components';
import palette from 'theme/palette';
import Icon from 'components/Icon';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: ${palette.primary.main};
  border-radius: 5px;
  padding: 10px;
`;

const ItemIcon = styled(Icon)`
  color: ${palette.common.white};
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0;
  color: ${palette.common.white};
`;

const Qty = styled.p`
  font-size: 18px;
  color: ${palette.common.white};
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
`;

const DeleteIcon = styled(Icon)`
  color: ${palette.common.white};
`;

Wrapper.displayName = 'Item';
export default { Wrapper, ItemIcon, Title, Qty, DeleteButton, DeleteIcon };
