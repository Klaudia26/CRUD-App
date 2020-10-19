import { postsActionHandlers } from './posts/reducers';
import { IPostsState, PostsAction } from './posts/types';

type InitialStates = IPostsState;
type ActionHandlers = postsActionHandlers;
export type Actions = PostsAction;

export default function reducerCreator(
  initialState: InitialStates,
  actionHandlers: ActionHandlers
) {
  return (state = initialState, action: Actions) => {
    // @ts-ignore
    const handler = actionHandlers[action.type];
    // @ts-ignore
    return handler ? handler(state, action) : state;
  };
}
