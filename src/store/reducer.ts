import actionTypes from './actionTypes';
import { IAction, IState } from './type';

const initialState = {
  items: [],
  loading: false,
};

const reducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case actionTypes.INIT_DB:
      return { ...state, items: action.payload };

    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };

    case actionTypes.ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };

    case actionTypes.UPDATE_ITEMS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default reducer;
