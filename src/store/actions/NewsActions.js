import { NEWS_LOADED, NEWS_RESET } from '../types';

export const getNewsPosts = () => dispatch => {
  dispatch({
    type: NEWS_LOADED,
    payload: {
      posts: [1, 2, 3, 4, 5]
    }
  })
};
