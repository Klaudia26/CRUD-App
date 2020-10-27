import { Reducer } from 'redux';
import {
  PostsActionTypes as types,
  Get,
  IPostsState,
  Delete,
  Patch,
  Create
} from './types';
import reducerCreator from '../reducer';

const initialState: IPostsState = {
  posts: []
};

// @ts-ignore
const create: Reducer<IPostsState, Create> = (
  state: IPostsState,
  { posts }
): IPostsState => ({
  ...state,
  posts: [posts, ...state.posts]
});

// @ts-ignore
const del: Reducer<IPostsState, Delete> = (
  state: IPostsState,
  { id }
): IPostsState => ({
  ...state,
  posts: state.posts.filter(post => post.id !== id)
});

// @ts-ignore
const get: Reducer<IPostsState, Get> = (
  state: IPostsState,
  { posts }
): IPostsState => ({
  ...state,
  posts
});

// @ts-ignore
const patch: Reducer<IPostsState, Patch> = (
  state: IPostsState,
  { payload }
): IPostsState => ({
  ...state,
  posts: [payload, ...state.posts.filter(post => post.id !== payload.id)]
});

const actionHandlers = {
  [types.GET]: get,
  [types.DELETE]: del,
  [types.PATCH]: patch,
  [types.CREATE]: create
};

export type postsActionHandlers = typeof actionHandlers;
export default reducerCreator(initialState, actionHandlers);
