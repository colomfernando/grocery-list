import React, { InputHTMLAttributes, useState, useEffect } from 'react';
import Styles from './styles';
import palette from 'theme/palette';
import { saveItem, getCountItems } from 'utils/ItemsCache';
import { useDispatch } from 'react-redux';
import { addItemAction } from 'store/actions';
import db from 'db';
import { validateObj, getItemIcon } from '../../utils/index';

type IInputSearchProps = InputHTMLAttributes<HTMLInputElement>;

interface IItemChip {
  text: string;
  iconName: string;
}

const InputSearch: React.FC<IInputSearchProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [infoChips, setInfoChips] = useState<IItemChip[] | []>([]);

  const dispatch = useDispatch();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    if (!isOpen) setIsOpen(true);
    setValue(value);
  };

  const handleSubmit = (): void => {
    if (!value) return;
    saveItem(value);
    db.saveItem({ name: value }, (item) => dispatch(addItemAction(item)));
    setValue('');
    setIsOpen(false);
  };

  const handleOnKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    const { key } = event;
    if (key === 'Enter') handleSubmit();
  };

  const getChips = (): IItemChip[] | [] => {
    const countItems = getCountItems();
    if (!countItems || !validateObj(countItems)) return [];

    const itemsKey = Object.keys(countItems);
    const itemsByQty = itemsKey.filter((item) => countItems[item] > 2);

    if (!itemsByQty || !itemsByQty.length) return [];
    return itemsByQty.map((key) => ({ text: key, iconName: getItemIcon(key) }));
  };

  useEffect(() => {
    if (isOpen) {
      const chips = getChips();
      if (chips.length) setInfoChips(chips);
    }
  }, [isOpen]);

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
      {isOpen && infoChips && infoChips.length && (
        <Styles.WrapperOptions>
          {infoChips.map((chip, idx) => (
            <Styles.Chip key={idx.toString()} {...chip} onClick={() => null} />
          ))}
        </Styles.WrapperOptions>
      )}
    </Styles.Wrapper>
  );
};

export default InputSearch;
