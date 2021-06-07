import actionTypes from './actionTypes';
import { IItem, IAction } from './type';

export const initDbAction = (items: IItem[]): IAction => ({
  type: actionTypes.INIT_DB,
  payload: items,
});

export const addItemAction = (item: IItem): IAction => ({
  type: actionTypes.ADD_ITEM,
  payload: item,
});

export const setLoadingAction = (bool: boolean): IAction => ({
  type: actionTypes.SET_LOADING,
  payload: bool,
});

export const updateItems = (items: IItem[]): IAction => ({
  type: actionTypes.UPDATE_ITEMS,
  payload: items,
});
