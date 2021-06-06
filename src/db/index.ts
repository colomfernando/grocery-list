import localStorage from 'browser-localstorage-expire';
import { validateArr, validateNumber } from 'utils';
import { validateObj } from '../utils/index';

const DB_KEY = 'itemsDb';
const dbCache = localStorage();

interface INewItem {
  [key: string]: unknown;
  name: string;
}
interface IItem extends INewItem {
  id: number;
  qty: number;
}
interface IDb {
  getAllItems: () => IItem[] | [];
  getItemById: (id: number) => IItem | Partial<IItem>;
  saveItem: (item: INewItem) => void;
  updateItem: (item: IItem) => void;
  deleteItem: (id: number) => void;
}

const setItemCache = (data: IItem[] | Partial<IItem>[]) =>
  dbCache.setItem(DB_KEY, data, 1440);

const createId = (): number => Date.now();

const getAllItems = () => dbCache.getItem(DB_KEY);

const saveItem = (item: INewItem): void => {
  const items = getAllItems();
  return setItemCache([...items, { id: createId(), qty: 1, ...item }]);
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
    oldItem.id === id ? { id, ...rest } : oldItem
  );
  setItemCache(newItems);
};

const getItemById = (id: number): IItem | Partial<IItem> => {
  if (!id || !validateNumber(id)) return {};
  const items = getAllItems();
  if (!validateArr(items)) return {};

  const [item] = items.filter((item: IItem) => item.id === id);
  return item;
};

const db = (): IDb => {
  const itemsStorage = dbCache.getItem(DB_KEY);
  if (!itemsStorage) setItemCache([]);

  return {
    getAllItems,
    getItemById: (id: number) => getItemById(id),
    deleteItem: (id: number) => deleteItem(id),
    saveItem: (item: INewItem) => saveItem(item),
    updateItem: (item: IItem) => updateItem(item),
  };
};

export default db();
