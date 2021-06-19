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
  margin: 8px 0 15px;
  color: ${palette.common.white};
`;

const WrapperQty = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Qty = styled.p`
  font-size: 18px;
  margin: 0 15px;
  color: ${palette.common.white};
`;

const DeleteButton = styled.button`
  position: absolute;
  display: flex;
  top: 4px;
  right: 4px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
`;

const QtyButtons = styled.button`
  background-color: transparent;
  display: flex;
  cursor: pointer;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  color: ${palette.common.white};
  &:disabled {
    color: ${palette.grey[400]};
    cursor: not-allowed;
  }
`;

const QtyIcons = styled(Icon)`
  color: inherit;
`;

const DeleteIcon = styled(Icon)`
  color: ${palette.common.white};
`;

Wrapper.displayName = 'Item';
export default {
  Wrapper,
  ItemIcon,
  Title,
  WrapperQty,
  Qty,
  DeleteButton,
  DeleteIcon,
  QtyButtons,
  QtyIcons,
};
