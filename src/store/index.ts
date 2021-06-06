import { createStore, applyMiddleware, Store, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { IState, IAction } from './type';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store: Store<IState, IAction> = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
