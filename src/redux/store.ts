import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer, { IApplicationState } from './combineReducer';

const initialAppState = {} as IApplicationState;

function initializeStore(preloadedState = initialAppState) {
  const middlewares = [thunk];

  return createStore(
    // @ts-ignore
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
}
export function useStore(initialState: undefined) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
