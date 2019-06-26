// @flow
import { createSelector } from 'reselect';

const selectState = state => state.comments || {};

export const selectCommentsById = createSelector(
  selectState,
  comments => (comments.byId || {})
);

export const selectCommentsByUri = createSelector(
  selectState,
  selectCommentsById,
  (state, byId) => {
    const byUri = state.commentsByUri || {};
    const comments = {};
    Object.keys(byUri).forEach(uri => {
      const claimId = byUri[uri];
      if (claimId === null) {
        comments[uri] = null;
      } else {
        comments[uri] = byId[claimId];
      }
    });
    return comments;
  }
);

export const makeSelectCommentsForUri = (uri: string) =>
  createSelector(
    selectCommentsByUri,
    selectCommentsById,
    (byUri, byId) => {
      const claimId = byUri[uri];
      return byId && byId[claimId];
    }
  );
