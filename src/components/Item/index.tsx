import React from 'react';
import Styles from './styles';
import { useDispatch } from 'react-redux';
import { updateItems } from 'store/actions';
import db from 'db';

export interface IItemProps {
  id: number;
  name: string;
  iconName: string;
  qty: number;
}

const Item: React.FC<IItemProps> = ({ id, name, iconName, qty }) => {
  if (!id || !name || !qty) return null;

  const dispatch = useDispatch();

  const handleOnClickDelete = (): void | null => {
    if (!id) return null;
    db.deleteItem(id, () => dispatch(updateItems(db.getAllItems())));
  };

  return (
    <Styles.Wrapper>
      <Styles.ItemIcon iconName={iconName} />
      <Styles.Title>{name}</Styles.Title>
      <Styles.Qty>{qty}</Styles.Qty>
      <Styles.DeleteButton onClick={handleOnClickDelete}>
        <Styles.DeleteIcon iconName="delete" width={20} height={20} />
      </Styles.DeleteButton>
    </Styles.Wrapper>
  );
};

export default Item;
