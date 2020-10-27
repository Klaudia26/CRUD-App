import { IPost } from '../../api/api.types';

export enum PostsActionTypes {
  GET = 'GET',
  DELETE = 'DELETE',
  EDIT = 'EDIT',
  PATCH = 'PATCH',
  CREATE = 'CREATE'
}

export interface IPostsState {
  posts: IPost[];
}

export type Create = {
  type: typeof PostsActionTypes.CREATE;
  posts: IPost;
};

export type Delete = {
  type: typeof PostsActionTypes.DELETE;
  id: string;
};

export type Patch = {
  type: typeof PostsActionTypes.PATCH;
  payload: IPost;
};

export type Edit = {
  type: typeof PostsActionTypes.EDIT;
  payload: IPost;
};

export type Get = {
  type: typeof PostsActionTypes.GET;
  posts: IPost[];
};

export type PostsAction = Get | Delete | Patch | Edit | Create;
