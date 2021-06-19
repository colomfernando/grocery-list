import styled from 'styled-components';
import IconComponent from 'components/Icon';
import palette from 'theme/palette';
import ChipComponent from 'components/Chip';

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
const IconSave = styled(IconComponent)``;

const Input = styled.input`
  flex-basis: 80%;
  border: none;
  padding: 0 10px;
  width: 100%;
  outline: none;
  color: ${palette.grey[700]};
`;

const SaveItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const WrapperOptions = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 100%;
  padding: 10px 0 5px;
`;

const Chip = styled(ChipComponent)`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

Wrapper.displayName = 'InputSearch';
export default {
  Wrapper,
  Input,
  IconSearch,
  WrapperOptions,
  IconSave,
  SaveItem,
  Chip,
};
