import React from 'react';
import Styles from './styles';

export interface IItemProps {
  id: number;
  name: string;
  qty: number;
}

const Item: React.FC<IItemProps> = ({ id, name, qty }) => {
  if (!id || !name || !qty) return null;

  return (
    <Styles.Wrapper>
      <Styles.IconItem iconName="eggs" />
      <Styles.Title>{name}</Styles.Title>
      <p>{qty}</p>
    </Styles.Wrapper>
  );
};

export default Item;
