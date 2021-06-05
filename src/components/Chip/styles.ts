import styled from 'styled-components';
import IconComponent from 'components/Icon';
import palette from 'theme/palette';

const Wrapper = styled.button`
  cursor: pointer;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  background: ${palette.primary.main};
`;

const Icon = styled(IconComponent)`
  margin-right: 8px;
`;

const Text = styled.p`
  color: ${palette.common.white};
  font-size: 14px;
`;

Wrapper.displayName = 'Chip';
export default { Wrapper, Icon, Text };
