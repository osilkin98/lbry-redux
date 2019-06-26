// @flow
import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import { selectClaimsByUri, selectClaimsById } from 'redux/selectors/claims';

export function doCommentList(uri: string) {
  return (dispatch: Dispatch, getState: GetState) => {
    const state = getState();
    const claim = selectClaimsByUri(state)[uri];
    const claimId = claim ? claim.claim_id : null;

    dispatch({
      type: ACTIONS.COMMENT_LIST_STARTED,
    });
    Lbry.comment_list({
      claim_id: claimId,
    })
      .then(results => {
        dispatch({
          type: ACTIONS.COMMENT_LIST_COMPLETED,
          data: {
            comments: results,
            claimId: claimId,
            uri: uri,
          },
        });
      })
      .catch(error => {
        dispatch({
          'type': ACTIONS.COMMENT_CREATE_FAILED,
          'data': error,
        });
      });
  };
}

export function doCommentCreate(comment: string = '', claim_id: string = '',
  channel: ?string, parent_id: ?string) {
  return (dispatch, getState) => {
    const state = getState();
    const claimUri = selectClaimsById(state)[claim_id].permanent_url;
    dispatch({
      'type': ACTIONS.COMMENT_CREATE_STARTED,
    });
    return Lbry.comment_create({
      comment,
      claim_id,
      channel,
      parent_id,
    })
      .then((result: Comment) => {
        dispatch({
          'type': ACTIONS.COMMENT_CREATE_COMPLETED,
          'data': {
            'comment': result,
            'uri': claimUri,
          },
        });
      })
      .catch(error => {
        dispatch({
          'type': ACTIONS.COMMENT_CREATE_FAILED,
          'data': error,
        });
      });
  };
}
