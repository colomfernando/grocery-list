// Items payload
export interface IItem {
  id: number;
  name: string;
  qty: number;
  iconName: string;
}

// actions
interface IActionBase<T> {
  type: string;
  payload?: T;
}

export type IAction = IAction<Items[]>;

// State
export interface IState {
  items: Item[];
  loading: boolean;
}
