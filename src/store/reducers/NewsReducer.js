import { NEWS_LOADED, NEWS_RESET } from '../types';

const INITIAL_STATE = {
  news: [],
  page: 0,
  count: 0,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_LOADED:
      console.log(action.payload);
      return {
        ...state,
        news: action.payload.posts
      };
    default:
      return state;
  }
}
