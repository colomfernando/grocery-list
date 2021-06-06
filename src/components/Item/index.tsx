import React from 'react';
import Styles from './styles';

export interface IItemProps {
  id: number;
  name: string;
  iconName: string;
  qty: number;
}

const Item: React.FC<IItemProps> = ({ id, name, iconName, qty }) => {
  if (!id || !name || !qty) return null;

  return (
    <Styles.Wrapper>
      <Styles.IconItem iconName={iconName} />
      <Styles.Title>{name}</Styles.Title>
      <Styles.Qty>{qty}</Styles.Qty>
    </Styles.Wrapper>
  );
};

export default Item;
