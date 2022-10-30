export const getData = (value) => async (dispatch) => {
  dispatch({
    payload: value,
    type: "GET_DATA"
  });
};
export const getSearchData = (value) => async (dispatch) => {
  dispatch({
    payload: value,
    type: "SEARCH_DATA"
  });
};
export const getHeaders = (value) => async (dispatch) => {
  dispatch({
    payload: value,
    type: "GET_HEADERS"
  });
};
