import { NEWS_LOADED, NEWS_RESET } from "../types";
import axios from "axios";
import { get as prop } from "lodash";
import { API_KEY, API_URL } from "../../config";

export const getNewsPosts = (page = 1) => dispatch => {
  return axios
    .get(API_URL, {
      params: {
        pageSize: 10,
        apiKey: API_KEY,
        country: "us"
      }
    })
    .then(res =>
      dispatch({
        type: NEWS_LOADED,
        payload: {
          news: prop(res, "data.articles", []),
          count: prop(res, "data.totalResults", 0),
          page
        }
      })
    );
};
