import React from 'react';
import Styles from './styles';
import Item from 'components/Item';
import { useSelector } from 'react-redux';
import { IItem, IState } from 'store/type';

const Body: React.FC = () => {
  const items = useSelector((state: IState): IItem[] => state.items);

  return (
    <Styles.Wrapper>
      {!!items.length && items.map((item) => <Item key={item.id} {...item} />)}
    </Styles.Wrapper>
  );
};

export default Body;
