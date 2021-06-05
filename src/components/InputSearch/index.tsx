import React, { InputHTMLAttributes, useState } from 'react';
import Styles from './styles';
import palette from 'theme/palette';
import Chip from 'components/Chip';

type IInputSearchProps = InputHTMLAttributes<HTMLInputElement>;

const InputSearch: React.FC<IInputSearchProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    setValue(value);
  };

  return (
    <Styles.Wrapper>
      <Styles.IconSearch
        iconName="search"
        width={20}
        height={20}
        color={palette.grey[700]}
      />
      <Styles.Input
        onChange={handleOnChange}
        value={value}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        placeholder="What do you need to buy?"
      />
      {isOpen && (
        <Styles.WrapperOptions>
          <Chip iconName="eggs" text="Eggs" onClick={() => null} />
        </Styles.WrapperOptions>
      )}
    </Styles.Wrapper>
  );
};

export default InputSearch;
