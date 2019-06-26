// @flow
declare type Comment = {
  comment: string,
  comment_id: [string],
  claim_id: string,
  timestamp: number,
  channel_url?: string,
  channel_id?: string,
  channel_name?: string,
  signature?: string,
  signing_ts?: string,
  parent_id?: string,
};

declare type CommentsState = {
  byId: {[string]: Array<Comment>}, /* 12345 -> { comment } */
  isLoading: boolean,
  commentsByUri: { [string]: string }, /* lbry://lfdhsfd#12345 -> 12345 */
}
