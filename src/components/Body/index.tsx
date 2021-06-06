import React, { useEffect, useState } from 'react';
// import Item from 'components/Item';
import db, { IItem } from 'db';
import Styles from './styles';

const Body: React.FC = () => {
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    const itemsDb = db.getAllItems();
    if (!itemsDb.length) return;
    setItems(itemsDb);
  }, []);

  return (
    <Styles.Wrapper>
      <p>body</p>
    </Styles.Wrapper>
  );
};

export default Body;
