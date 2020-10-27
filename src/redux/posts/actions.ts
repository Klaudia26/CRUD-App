import { PostsActionTypes as types, PostsAction } from './types';
import { IPost } from '../../api/api.types';
import { AnyAction, Dispatch } from 'redux';
import apiService from '../../api/api.services';

export const create = (posts: IPost): PostsAction => ({
  type: types.CREATE,
  posts
});

export const del = (id: string): PostsAction => ({
  type: types.DELETE,
  id
});

export const patch = (payload: IPost): PostsAction => ({
  type: types.PATCH,
  payload
});

export const get = (posts: IPost[]): PostsAction => ({
  type: types.GET,
  posts
});

export const createPost = (name: string) => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  try {
    const apiResponse = await apiService.postPosts(name);
    dispatch(create(apiResponse));
  } catch (error) {
    console.log(error, 'error');
  }
};

export const editPosts = (id: string, name: string) => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  try {
    const apiResponse = await apiService.patchPost(id, name);
    dispatch(patch(apiResponse));
  } catch (error) {
    console.log(error, 'error');
  }
};

export const getPosts = () => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  //dispatch loading

  try {
    const apiResponse = await apiService.getPost();
    // dispatch<Get>(get(apiResponse));
    dispatch(get(apiResponse));
    console.log(apiResponse, 'apiResponse');
  } catch (error) {
    console.log(error, 'error');
  } finally {
    console.log('finally');
  }
};
