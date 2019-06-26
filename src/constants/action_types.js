export const WINDOW_FOCUSED = 'WINDOW_FOCUSED';
export const DAEMON_READY = 'DAEMON_READY';
export const DAEMON_VERSION_MATCH = 'DAEMON_VERSION_MATCH';
export const DAEMON_VERSION_MISMATCH = 'DAEMON_VERSION_MISMATCH';
export const VOLUME_CHANGED = 'VOLUME_CHANGED';

// Navigation
export const CHANGE_AFTER_AUTH_PATH = 'CHANGE_AFTER_AUTH_PATH';
export const WINDOW_SCROLLED = 'WINDOW_SCROLLED';
export const HISTORY_NAVIGATE = 'HISTORY_NAVIGATE';

// Upgrades
export const UPGRADE_CANCELLED = 'UPGRADE_CANCELLED';
export const DOWNLOAD_UPGRADE = 'DOWNLOAD_UPGRADE';
export const UPGRADE_DOWNLOAD_STARTED = 'UPGRADE_DOWNLOAD_STARTED';
export const UPGRADE_DOWNLOAD_COMPLETED = 'UPGRADE_DOWNLOAD_COMPLETED';
export const UPGRADE_DOWNLOAD_PROGRESSED = 'UPGRADE_DOWNLOAD_PROGRESSED';
export const CHECK_UPGRADE_AVAILABLE = 'CHECK_UPGRADE_AVAILABLE';
export const CHECK_UPGRADE_START = 'CHECK_UPGRADE_START';
export const CHECK_UPGRADE_SUCCESS = 'CHECK_UPGRADE_SUCCESS';
export const CHECK_UPGRADE_FAIL = 'CHECK_UPGRADE_FAIL';
export const CHECK_UPGRADE_SUBSCRIBE = 'CHECK_UPGRADE_SUBSCRIBE';
export const UPDATE_VERSION = 'UPDATE_VERSION';
export const UPDATE_REMOTE_VERSION = 'UPDATE_REMOTE_VERSION';
export const SKIP_UPGRADE = 'SKIP_UPGRADE';
export const START_UPGRADE = 'START_UPGRADE';
export const AUTO_UPDATE_DECLINED = 'AUTO_UPDATE_DECLINED';
export const AUTO_UPDATE_DOWNLOADED = 'AUTO_UPDATE_DOWNLOADED';
export const CLEAR_UPGRADE_TIMER = 'CLEAR_UPGRADE_TIMER';

// Wallet
export const GET_NEW_ADDRESS_STARTED = 'GET_NEW_ADDRESS_STARTED';
export const GET_NEW_ADDRESS_COMPLETED = 'GET_NEW_ADDRESS_COMPLETED';
export const FETCH_TRANSACTIONS_STARTED = 'FETCH_TRANSACTIONS_STARTED';
export const FETCH_TRANSACTIONS_COMPLETED = 'FETCH_TRANSACTIONS_COMPLETED';
export const FETCH_SUPPORTS_STARTED = 'FETCH_SUPPORTS_STARTED';
export const FETCH_SUPPORTS_COMPLETED = 'FETCH_SUPPORTS_COMPLETED';
export const ABANDON_SUPPORT_STARTED = 'ABANDON_SUPPORT_STARTED';
export const ABANDON_SUPPORT_COMPLETED = 'ABANDON_SUPPORT_COMPLETED';
export const UPDATE_BALANCE = 'UPDATE_BALANCE';
export const UPDATE_TOTAL_BALANCE = 'UPDATE_TOTAL_BALANCE';
export const CHECK_ADDRESS_IS_MINE_STARTED = 'CHECK_ADDRESS_IS_MINE_STARTED';
export const CHECK_ADDRESS_IS_MINE_COMPLETED = 'CHECK_ADDRESS_IS_MINE_COMPLETED';
export const SEND_TRANSACTION_STARTED = 'SEND_TRANSACTION_STARTED';
export const SEND_TRANSACTION_COMPLETED = 'SEND_TRANSACTION_COMPLETED';
export const SEND_TRANSACTION_FAILED = 'SEND_TRANSACTION_FAILED';
export const SUPPORT_TRANSACTION_STARTED = 'SUPPORT_TRANSACTION_STARTED';
export const SUPPORT_TRANSACTION_COMPLETED = 'SUPPORT_TRANSACTION_COMPLETED';
export const SUPPORT_TRANSACTION_FAILED = 'SUPPORT_TRANSACTION_FAILED';
export const WALLET_ENCRYPT_START = 'WALLET_ENCRYPT_START';
export const WALLET_ENCRYPT_COMPLETED = 'WALLET_ENCRYPT_COMPLETED';
export const WALLET_ENCRYPT_FAILED = 'WALLET_ENCRYPT_FAILED';
export const WALLET_UNLOCK_START = 'WALLET_UNLOCK_START';
export const WALLET_UNLOCK_COMPLETED = 'WALLET_UNLOCK_COMPLETED';
export const WALLET_UNLOCK_FAILED = 'WALLET_UNLOCK_FAILED';
export const WALLET_DECRYPT_START = 'WALLET_DECRYPT_START';
export const WALLET_DECRYPT_COMPLETED = 'WALLET_DECRYPT_COMPLETED';
export const WALLET_DECRYPT_FAILED = 'WALLET_DECRYPT_FAILED';
export const WALLET_LOCK_START = 'WALLET_LOCK_START';
export const WALLET_LOCK_COMPLETED = 'WALLET_LOCK_COMPLETED';
export const WALLET_LOCK_FAILED = 'WALLET_LOCK_FAILED';
export const WALLET_STATUS_START = 'WALLET_STATUS_START';
export const WALLET_STATUS_COMPLETED = 'WALLET_STATUS_COMPLETED';
export const SET_TRANSACTION_LIST_FILTER = 'SET_TRANSACTION_LIST_FILTER';
export const UPDATE_CURRENT_HEIGHT = 'UPDATE_CURRENT_HEIGHT';
export const SET_DRAFT_TRANSACTION_AMOUNT = 'SET_DRAFT_TRANSACTION_AMOUNT';
export const SET_DRAFT_TRANSACTION_ADDRESS = 'SET_DRAFT_TRANSACTION_ADDRESS';

// Claims
export const RESOLVE_URIS_STARTED = 'RESOLVE_URIS_STARTED';
export const RESOLVE_URIS_COMPLETED = 'RESOLVE_URIS_COMPLETED';
export const FETCH_CHANNEL_CLAIMS_STARTED = 'FETCH_CHANNEL_CLAIMS_STARTED';
export const FETCH_CHANNEL_CLAIMS_COMPLETED = 'FETCH_CHANNEL_CLAIMS_COMPLETED';
export const FETCH_CLAIM_LIST_MINE_STARTED = 'FETCH_CLAIM_LIST_MINE_STARTED';
export const FETCH_CLAIM_LIST_MINE_COMPLETED = 'FETCH_CLAIM_LIST_MINE_COMPLETED';
export const ABANDON_CLAIM_STARTED = 'ABANDON_CLAIM_STARTED';
export const ABANDON_CLAIM_SUCCEEDED = 'ABANDON_CLAIM_SUCCEEDED';
export const FETCH_CHANNEL_LIST_STARTED = 'FETCH_CHANNEL_LIST_STARTED';
export const FETCH_CHANNEL_LIST_COMPLETED = 'FETCH_CHANNEL_LIST_COMPLETED';
export const CREATE_CHANNEL_STARTED = 'CREATE_CHANNEL_STARTED';
export const CREATE_CHANNEL_COMPLETED = 'CREATE_CHANNEL_COMPLETED';
export const CREATE_CHANNEL_FAILED = 'CREATE_CHANNEL_FAILED';
export const PUBLISH_STARTED = 'PUBLISH_STARTED';
export const PUBLISH_COMPLETED = 'PUBLISH_COMPLETED';
export const PUBLISH_FAILED = 'PUBLISH_FAILED';
export const SET_PLAYING_URI = 'SET_PLAYING_URI';
export const SET_CONTENT_POSITION = 'SET_CONTENT_POSITION';
export const SET_CONTENT_LAST_VIEWED = 'SET_CONTENT_LAST_VIEWED';
export const CLEAR_CONTENT_HISTORY_URI = 'CLEAR_CONTENT_HISTORY_URI';
export const CLEAR_CONTENT_HISTORY_ALL = 'CLEAR_CONTENT_HISTORY_ALL';
export const CLAIM_SEARCH_STARTED = 'CLAIM_SEARCH_STARTED';
export const CLAIM_SEARCH_COMPLETED = 'CLAIM_SEARCH_COMPLETED';
export const CLAIM_SEARCH_FAILED = 'CLAIM_SEARCH_FAILED';

// Comments
export const COMMENT_LIST_STARTED = 'COMMENT_LIST_STARTED';
export const COMMENT_LIST_COMPLETED = 'COMMENT_LIST_COMPLETED';
export const COMMENT_CREATE_STARTED = 'COMMENT_CREATE_STARTED';
export const COMMENT_CREATE_COMPLETED = 'COMMENT_CREATE_COMPLETED';
export const COMMENT_CREATE_FAILED = 'COMMENT_CREATE_FAILED';

// Files
export const FILE_LIST_STARTED = 'FILE_LIST_STARTED';
export const FILE_LIST_SUCCEEDED = 'FILE_LIST_SUCCEEDED';
export const FETCH_FILE_INFO_STARTED = 'FETCH_FILE_INFO_STARTED';
export const FETCH_FILE_INFO_COMPLETED = 'FETCH_FILE_INFO_COMPLETED';
export const LOADING_VIDEO_STARTED = 'LOADING_VIDEO_STARTED';
export const LOADING_VIDEO_COMPLETED = 'LOADING_VIDEO_COMPLETED';
export const LOADING_VIDEO_FAILED = 'LOADING_VIDEO_FAILED';
export const DOWNLOADING_STARTED = 'DOWNLOADING_STARTED';
export const DOWNLOADING_PROGRESSED = 'DOWNLOADING_PROGRESSED';
export const DOWNLOADING_COMPLETED = 'DOWNLOADING_COMPLETED';
export const DOWNLOADING_CANCELED = 'DOWNLOADING_CANCELED';
export const PLAY_VIDEO_STARTED = 'PLAY_VIDEO_STARTED';
export const FETCH_AVAILABILITY_STARTED = 'FETCH_AVAILABILITY_STARTED';
export const FETCH_AVAILABILITY_COMPLETED = 'FETCH_AVAILABILITY_COMPLETED';
export const FILE_DELETE = 'FILE_DELETE';
export const SET_FILE_LIST_SORT = 'SET_FILE_LIST_SORT';
export const PURCHASE_URI_STARTED = 'PURCHASE_URI_STARTED';
export const PURCHASE_URI_COMPLETED = 'PURCHASE_URI_COMPLETED';
export const PURCHASE_URI_FAILED = 'PURCHASE_URI_FAILED';
export const DELETE_PURCHASED_URI = 'DELETE_PURCHASED_URI';
export const LOADING_FILE_STARTED = 'LOADING_FILE_STARTED';
export const LOADING_FILE_COMPLETED = 'LOADING_FILE_COMPLETED';
export const LOADING_FILE_FAILED = 'LOADING_FILE_FAILED';

// Search
export const SEARCH_START = 'SEARCH_START';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';
export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';
export const UPDATE_SEARCH_OPTIONS = 'UPDATE_SEARCH_OPTIONS';
export const UPDATE_SEARCH_SUGGESTIONS = 'UPDATE_SEARCH_SUGGESTIONS';
export const SEARCH_FOCUS = 'SEARCH_FOCUS';
export const SEARCH_BLUR = 'SEARCH_BLUR';

// Settings
export const DAEMON_SETTINGS_RECEIVED = 'DAEMON_SETTINGS_RECEIVED';
export const CLIENT_SETTING_CHANGED = 'CLIENT_SETTING_CHANGED';
export const UPDATE_IS_NIGHT = 'UPDATE_IS_NIGHT';

// User
export const AUTHENTICATION_STARTED = 'AUTHENTICATION_STARTED';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
export const USER_EMAIL_DECLINE = 'USER_EMAIL_DECLINE';
export const USER_EMAIL_NEW_STARTED = 'USER_EMAIL_NEW_STARTED';
export const USER_EMAIL_NEW_SUCCESS = 'USER_EMAIL_NEW_SUCCESS';
export const USER_EMAIL_NEW_EXISTS = 'USER_EMAIL_NEW_EXISTS';
export const USER_EMAIL_NEW_FAILURE = 'USER_EMAIL_NEW_FAILURE';
export const USER_EMAIL_VERIFY_SET = 'USER_EMAIL_VERIFY_SET';
export const USER_EMAIL_VERIFY_STARTED = 'USER_EMAIL_VERIFY_STARTED';
export const USER_EMAIL_VERIFY_SUCCESS = 'USER_EMAIL_VERIFY_SUCCESS';
export const USER_EMAIL_VERIFY_FAILURE = 'USER_EMAIL_VERIFY_FAILURE';
export const USER_EMAIL_VERIFY_RETRY = 'USER_EMAIL_VERIFY_RETRY';
export const USER_PHONE_RESET = 'USER_PHONE_RESET';
export const USER_PHONE_NEW_STARTED = 'USER_PHONE_NEW_STARTED';
export const USER_PHONE_NEW_SUCCESS = 'USER_PHONE_NEW_SUCCESS';
export const USER_PHONE_NEW_FAILURE = 'USER_PHONE_NEW_FAILURE';
export const USER_PHONE_VERIFY_STARTED = 'USER_PHONE_VERIFY_STARTED';
export const USER_PHONE_VERIFY_SUCCESS = 'USER_PHONE_VERIFY_SUCCESS';
export const USER_PHONE_VERIFY_FAILURE = 'USER_PHONE_VERIFY_FAILURE';
export const USER_IDENTITY_VERIFY_STARTED = 'USER_IDENTITY_VERIFY_STARTED';
export const USER_IDENTITY_VERIFY_SUCCESS = 'USER_IDENTITY_VERIFY_SUCCESS';
export const USER_IDENTITY_VERIFY_FAILURE = 'USER_IDENTITY_VERIFY_FAILURE';
export const USER_FETCH_STARTED = 'USER_FETCH_STARTED';
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE';
export const USER_INVITE_STATUS_FETCH_STARTED = 'USER_INVITE_STATUS_FETCH_STARTED';
export const USER_INVITE_STATUS_FETCH_SUCCESS = 'USER_INVITE_STATUS_FETCH_SUCCESS';
export const USER_INVITE_STATUS_FETCH_FAILURE = 'USER_INVITE_STATUS_FETCH_FAILURE';
export const USER_INVITE_NEW_STARTED = 'USER_INVITE_NEW_STARTED';
export const USER_INVITE_NEW_SUCCESS = 'USER_INVITE_NEW_SUCCESS';
export const USER_INVITE_NEW_FAILURE = 'USER_INVITE_NEW_FAILURE';
export const FETCH_ACCESS_TOKEN_SUCCESS = 'FETCH_ACCESS_TOKEN_SUCCESS';

// Rewards
export const FETCH_REWARDS_STARTED = 'FETCH_REWARDS_STARTED';
export const FETCH_REWARDS_COMPLETED = 'FETCH_REWARDS_COMPLETED';
export const CLAIM_REWARD_STARTED = 'CLAIM_REWARD_STARTED';
export const CLAIM_REWARD_SUCCESS = 'CLAIM_REWARD_SUCCESS';
export const CLAIM_REWARD_FAILURE = 'CLAIM_REWARD_FAILURE';
export const CLAIM_REWARD_CLEAR_ERROR = 'CLAIM_REWARD_CLEAR_ERROR';
export const FETCH_REWARD_CONTENT_COMPLETED = 'FETCH_REWARD_CONTENT_COMPLETED';

// Language
export const DOWNLOAD_LANGUAGE_SUCCEEDED = 'DOWNLOAD_LANGUAGE_SUCCEEDED';
export const DOWNLOAD_LANGUAGE_FAILED = 'DOWNLOAD_LANGUAGE_FAILED';

// Subscriptions
export const CHANNEL_SUBSCRIBE = 'CHANNEL_SUBSCRIBE';
export const CHANNEL_UNSUBSCRIBE = 'CHANNEL_UNSUBSCRIBE';
export const HAS_FETCHED_SUBSCRIPTIONS = 'HAS_FETCHED_SUBSCRIPTIONS';
export const SET_SUBSCRIPTION_LATEST = 'SET_SUBSCRIPTION_LATEST';
export const SET_SUBSCRIPTION_NOTIFICATION = 'SET_SUBSCRIPTION_NOTIFICATION';
export const SET_SUBSCRIPTION_NOTIFICATIONS = 'SET_SUBSCRIPTION_NOTIFICATIONS';
export const CHECK_SUBSCRIPTION_STARTED = 'CHECK_SUBSCRIPTION_STARTED';
export const CHECK_SUBSCRIPTION_COMPLETED = 'CHECK_SUBSCRIPTION_COMPLETED';
export const CHECK_SUBSCRIPTIONS_SUBSCRIBE = 'CHECK_SUBSCRIPTIONS_SUBSCRIBE';

// Publishing
export const CLEAR_PUBLISH = 'CLEAR_PUBLISH';
export const UPDATE_PUBLISH_FORM = 'UPDATE_PUBLISH_FORM';
export const PUBLISH_START = 'PUBLISH_START';
export const PUBLISH_SUCCESS = 'PUBLISH_SUCCESS';
export const PUBLISH_FAIL = 'PUBLISH_FAIL';
export const CLEAR_PUBLISH_ERROR = 'CLEAR_PUBLISH_ERROR';
export const REMOVE_PENDING_PUBLISH = 'REMOVE_PENDING_PUBLISH';
export const DO_PREPARE_EDIT = 'DO_PREPARE_EDIT';

// Notifications
export const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
export const EDIT_NOTIFICATION = 'EDIT_NOTIFICATION';
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';
export const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION';
export const CREATE_TOAST = 'CREATE_TOAST';
export const DISMISS_TOAST = 'DISMISS_TOAST';
export const CREATE_ERROR = 'CREATE_ERROR';
export const DISMISS_ERROR = 'DISMISS_ERROR';

export const FETCH_DATE = 'FETCH_DATE';

// Cost info
export const FETCH_COST_INFO_STARTED = 'FETCH_COST_INFO_STARTED';
export const FETCH_COST_INFO_COMPLETED = 'FETCH_COST_INFO_COMPLETED';
export const FETCH_COST_INFO_FAILED = 'FETCH_COST_INFO_FAILED';
// Tags
export const TOGGLE_TAG_FOLLOW = 'TOGGLE_TAG_FOLLOW';
export const TAG_ADD = 'TAG_ADD';
export const TAG_DELETE = 'TAG_DELETE';
