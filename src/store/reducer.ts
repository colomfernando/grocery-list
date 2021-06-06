import actionTypes from './actionTypes';
import { IAction, IState } from './type';
const initialState = {
  items: [],
};

const reducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case actionTypes.INIT_DB:
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

export default reducer;
