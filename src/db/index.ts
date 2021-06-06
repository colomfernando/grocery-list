import localStorage from 'browser-localstorage-expire';
import { validateString, validateObj } from 'utils';
import svgsDb from './svgsDb';

const DB_KEY = 'itemsDb';
const dbCache = localStorage();

interface INewItem {
  [key: string]: unknown;
  name: string;
}
export interface IItem extends INewItem {
  id: number;
  qty: number;
  iconName: string;
}
interface IDb {
  getAllItems: () => IItem[] | [];
  saveItem: (item: INewItem) => void;
  updateItem: (item: IItem) => void;
  deleteItem: (id: number) => void;
}

const setItemCache = (data: IItem[] | Partial<IItem>[]) =>
  dbCache.setItem(DB_KEY, data, 1440);

const createId = (): number => Date.now();

const getAllItems = () => dbCache.getItem(DB_KEY);

const getItemIcon = (name: string): string => {
  if (!name || !validateString(name)) return 'grocery';
  const svgsKey = Object.keys(svgsDb);

  const [matchIcon] = svgsKey.filter((svgKey) => svgsDb[svgKey].includes(name));

  return !matchIcon ? 'grocery' : matchIcon;
};

const saveItem = (item: INewItem): void => {
  const items = getAllItems();
  return setItemCache([
    ...items,
    { id: createId(), qty: 1, iconName: getItemIcon(item.name), ...item },
  ]);
};

const deleteItem = (id: number): void => {
  const items = getAllItems();
  const filterItems = items.filter((item: IItem) => item.id !== id);
  return setItemCache(filterItems);
};

const updateItem = (item: IItem): void => {
  if (!validateObj(item)) return;

  const { id, ...rest } = item;
  if (!id) return;

  const oldItems = getAllItems();
  const newItems = oldItems.map((oldItem: IItem) =>
    oldItem.id === id
      ? { id, ...rest, iconName: getItemIcon(item.name) }
      : oldItem
  );
  setItemCache(newItems);
};

const db = (): IDb => {
  const itemsStorage = dbCache.getItem(DB_KEY);
  if (!itemsStorage) setItemCache([]);

  return {
    getAllItems,
    deleteItem: (id: number) => deleteItem(id),
    saveItem: (item: INewItem) => saveItem(item),
    updateItem: (item: IItem) => updateItem(item),
  };
};

export default db();
