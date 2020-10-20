import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { del, editPosts, getPosts } from '../redux/posts/actions';
import { getPostSelector } from '../redux/posts/selectors';
import Container from './Container';
import H4 from './H4';

export default function Main() {
  const dispatch = useDispatch();
  const posts = useSelector(getPostSelector);

  const alert = {
    delete: 'Do you really want to delete this post?',
    edit: 'New Post Name:'
  };
  const deletePost = (id: string) => {
    if (window.confirm(alert.delete)) {
      dispatch(del(id));
    }
  };

  const editPost = (id: string, prevName: string) => {
    const newName = prompt(alert.edit, prevName);

    if (newName && newName !== prevName) {
      dispatch(editPosts(id, newName));
    }
  };

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Container>
      <H4>POSTS</H4>
      <div>
        {posts.map(post => {
          return (
            <div>
              <h3>{post.name}</h3>
              <ul key={post.id}>
                <li>Organizer: {post.organizer}</li>
                <li>Post: {post.post}</li>
                <li>Start Date: {post.startDate}</li>
              </ul>
              <button onClick={() => editPost(post.id, post.name)}>EDIT</button>
              <button onClick={() => deletePost(post.id)}>DELETE</button>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
