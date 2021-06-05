import localStorage from 'browser-localstorage-expire';
import { validateString, validateArr } from 'utils';

const cache = localStorage();
const ITEMS_CACHE_KEY = 'savedItems';

interface parseItems {
  [key: string]: number | never;
}

export const saveItem = (item: string): void | null => {
  if (!validateString(item)) return null;

  const cacheItems = cache.getItem(ITEMS_CACHE_KEY);
  const newItems =
    !cacheItems || !validateArr(cacheItems) || !cacheItems.length
      ? [item]
      : [...cacheItems, item];

  return cache.setItem(ITEMS_CACHE_KEY, newItems, 99);
};

export const getCountItems = (): parseItems => {
  const items = cache.getItem(ITEMS_CACHE_KEY);
  if (!items || !validateArr(items) || !items.length) return {};

  const parseItems = items.reduce(
    (acc: parseItems, act: string) => ({ ...acc, [act]: (acc[act] || 0) + 1 }),
    {}
  );

  return parseItems;
};
