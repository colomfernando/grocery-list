import React, { InputHTMLAttributes, useState } from 'react';
import Styles from './styles';
import palette from 'theme/palette';
import Chip from 'components/Chip';
import { saveItem } from 'utils/ItemsCache';
import db from 'db';

type IInputSearchProps = InputHTMLAttributes<HTMLInputElement>;

const InputSearch: React.FC<IInputSearchProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    setValue(value);
  };

  const handleSubmit = (): void => {
    if (!value) return;
    saveItem(value);
    db.saveItem({ name: value });
    setValue('');
  };

  const handleOnKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    const { key } = event;
    if (key === 'Enter') handleSubmit();
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
        onKeyDown={handleOnKeyDown}
        value={value}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        placeholder="What do you need to buy?"
      />
      <Styles.SaveItem type="submit" disabled={!value} onClick={handleSubmit}>
        <Styles.IconSave
          iconName="check"
          width={20}
          height={20}
          color={!value ? palette.grey[700] : palette.success.main}
        />
      </Styles.SaveItem>
      {isOpen && (
        <Styles.WrapperOptions>
          <Chip iconName="eggs" text="Eggs" onClick={() => null} />
        </Styles.WrapperOptions>
      )}
    </Styles.Wrapper>
  );
};

export default InputSearch;
