import React from 'react';
import palette from 'theme/palette';
import Styles from './styles';

interface IChipProps {
  iconName: string;
  text: string;
  onClick: () => void;
}
const Chip: React.FC<IChipProps> = ({ iconName, text, onClick }) => {
  return (
    <Styles.Wrapper onClick={onClick}>
      <Styles.Icon
        iconName={iconName}
        width={25}
        height={25}
        color={palette.common.white}
      />
      <Styles.Text>{text}</Styles.Text>
    </Styles.Wrapper>
  );
};

export default Chip;
