import { AnyAction, combineReducers } from 'redux';
import posts from '../redux/posts/reducers';
import { IPostsState } from './posts/types';

export interface IApplicationState {
  posts: IPostsState;
}

const appReducer = combineReducers<IApplicationState>({
  posts
});

const rootReducer = (state: IApplicationState, action: AnyAction) => {
  return appReducer(state, action);
};

export default rootReducer;
