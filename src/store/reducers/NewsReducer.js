import { NEWS_LOADED, NEWS_RESET } from "../types";

const INITIAL_STATE = {
  news: [],
  page: 0,
  count: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEWS_LOADED:
      const { news, page, count } = action.payload;
      return {
        ...state,
        news,
        page,
        count
      };
    default:
      return state;
  }
};
