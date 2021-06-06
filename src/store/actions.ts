import actionTypes from './actionTypes';
import { IItem, IAction } from './type';

export const initDb = (items: IItem[]): IAction => ({
  type: actionTypes.INIT_DB,
  payload: items,
});
