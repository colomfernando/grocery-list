import React from 'react';
import palette from 'theme/palette';
import Styles from './styles';

export interface IChipProps {
  iconName: string;
  text: string;
  onClick: () => void;
}
const Chip: React.FC<IChipProps> = ({ iconName, text, onClick, ...props }) => {
  return (
    <Styles.Wrapper onClick={onClick} {...props}>
      <Styles.Icon
        iconName={iconName}
        width={23}
        height={23}
        color={palette.common.white}
      />
      <Styles.Text>{text}</Styles.Text>
    </Styles.Wrapper>
  );
};

export default Chip;
