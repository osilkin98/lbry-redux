// @flow
import * as ACTIONS from 'constants/action_types';
import { doToast } from 'redux/actions/notifications';

// TODO change to handleActions()
// const commentsReducer = handleActions( {
const reducers = {};

const defaultState: CommentsState = {
  byId: {},
  commentsByUri: {},
  isLoading: false,
};

reducers[ACTIONS.COMMENT_CREATE_STARTED] = (
  state: CommentsState,
  action: any
): CommentsState => {
  return {...state,
    isLoading: true,
  };
};

reducers[ACTIONS.COMMENT_CREATE_FAILED] = (
  state: CommentsState,
  action: any
): CommentsState => {
  doToast({
    'message': 'Whoops, looks like we ran into an error.\n' +
      'Check the developer console for more details.',
    'isError': true,
  });
  const { errorMessage } = action.data;
  console.error(errorMessage);
  return {...state,
    isLoading: false,
  };
};

reducers[ACTIONS.COMMENT_CREATE_COMPLETED] = (state: CommentsState, action: any): CommentsState => {
  const { comment, uri } = action.data;
  const byId = Object.assign({}, state.byId);
  const { claimId } = comment;
  const comments = byId[claimId];
  const newComments = comments.slice();
  newComments.unshift(comment);
  byId[claimId] = newComments;
  const idByUri = Object.assign({}, state.commentsByUri);
  if (!(claimId in state.commentsByUri)) {
    idByUri[uri] = claimId;
  }
  return {
    ...state,
    commentsByUri: newComments,
    byId: idByUri,
    isLoading: false,
  };
};

reducers[ACTIONS.COMMENT_LIST_STARTED] = state =>
  Object.assign({}, state, {
    isLoading: true,
  });

reducers[ACTIONS.COMMENT_LIST_COMPLETED] = (state: CommentsState, action: any) => {
  const { comments, claimId, uri } = action.data;
  const byId = Object.assign({}, state.byId);
  const commentsByUri = Object.assign({}, state.commentsByUri);

  if (comments['items']) {
    byId[claimId] = comments['items'];
    commentsByUri[uri] = claimId;
  }
  return Object.assign({}, state, {
    byId,
    commentsByUri,
    isLoading: false,
  });
};

export function commentReducer(state: CommentsState = defaultState, action: any) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
