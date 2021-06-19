import React from 'react';
import Styles from './styles';
import { useDispatch } from 'react-redux';
import { updateItems } from 'store/actions';
import db from 'db';
import { validateNumber } from 'utils';

export interface IItemProps {
  id: number;
  name: string;
  iconName: string;
  qty: number;
}

const Item: React.FC<IItemProps> = ({ id, name, iconName, qty }) => {
  if (!id || !name || !qty) return null;

  const dispatch = useDispatch();

  const handleOnClickDelete = (): void => {
    if (!id) return;
    db.deleteItem(id, () => dispatch(updateItems(db.getAllItems())));
  };

  const addQty = (qty: number): number | void => {
    if (!qty || !validateNumber(qty)) return;
    return qty + 1;
  };

  const subtractQty = (qty: number): number | void => {
    if (!qty || !validateNumber(qty) || qty < 2) return;
    return qty - 1;
  };

  const handleOnClickQty = (qty: number): void => {
    if (!qty) return;
    db.updateItem({ id, name, iconName, qty }, (items) =>
      dispatch(updateItems(items))
    );
  };

  const sizeQtyIcons = 20;

  return (
    <Styles.Wrapper>
      <Styles.DeleteButton onClick={handleOnClickDelete}>
        <Styles.DeleteIcon iconName="delete" width={20} height={20} />
      </Styles.DeleteButton>
      <Styles.ItemIcon iconName={iconName} />
      <Styles.Title>{name}</Styles.Title>
      <Styles.WrapperQty>
        <Styles.QtyButtons
          disabled={qty < 2}
          onClick={() => handleOnClickQty(subtractQty(qty) as number)}
        >
          <Styles.QtyIcons
            iconName="minus"
            width={sizeQtyIcons}
            height={sizeQtyIcons}
          />
        </Styles.QtyButtons>
        <Styles.Qty>{qty}</Styles.Qty>
        <Styles.QtyButtons
          onClick={() => handleOnClickQty(addQty(qty) as number)}
        >
          <Styles.QtyIcons
            iconName="plus"
            width={sizeQtyIcons}
            height={sizeQtyIcons}
          />
        </Styles.QtyButtons>
      </Styles.WrapperQty>
    </Styles.Wrapper>
  );
};

export default Item;
