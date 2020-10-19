import { IApplicationState } from '../combineReducer';
import { createSelector } from 'reselect';
import { IPost } from '../../api/api.types';

export const postSelector = (state: IApplicationState) => state.posts;

export const getPostSelector = createSelector(
  postSelector,
  (postState): IPost[] => postState.posts
);
