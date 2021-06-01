import React, { InputHTMLAttributes, useState } from 'react';
import Styles from './styles';
import palette from 'theme/palette';

interface IInputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: () => void;
}

const InputSearch: React.FC<IInputSearchProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styles.Wrapper>
      <Styles.IconSearch
        iconName="search"
        width={20}
        height={20}
        color={palette.grey[700]}
      />
      <Styles.Input
        onChange={onChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        placeholder="What do you need to buy?"
      />
      {isOpen && (
        <Styles.WrapperOptions>
          <p>test</p>
          <p>adfadfs</p>
        </Styles.WrapperOptions>
      )}
    </Styles.Wrapper>
  );
};

export default InputSearch;
