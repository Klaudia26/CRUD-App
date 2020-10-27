import { IPost } from './api.types';
import axios, { AxiosResponse } from 'axios';

export const API_BASE_URL = 'http://localhost:4000';

const httpClient = axios.create({
  headers: {
    accept: 'application/json',
    'content-Type': 'application/json'
  },
  baseURL: API_BASE_URL
});

httpClient.interceptors.response.use((response: AxiosResponse) => response);

const getPost = async (): Promise<IPost[]> => {
  const response = await httpClient.get('/posts');
  return response.data;
};

const patchPost = async (id: string, name: string): Promise<IPost> => {
  const response = await httpClient.patch(`/posts/${id}`, { name });
  return response.data;
};

const postPosts = async (name: string): Promise<IPost> => {
  const response = await httpClient.post('/posts', { name });
  return response.data;
};

export default {
  getPost,
  patchPost,
  postPosts
};
