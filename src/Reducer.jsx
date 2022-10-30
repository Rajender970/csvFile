import React from "react";

const initialState = {
  data: [],
  search: [],
  headers: [],
  searchStatus: ""
};
function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATA":
      return { ...state, data: payload, search: [] };
    case "GET_HEADERS":
      return { ...state, headres: payload };
    case "SEARCH_DATA":
      let data = payload;
      let stock = data
        .map((d) => parseInt(d.stock))
        .reduce((x, y) => {
          return x + y;
        });
      let rate = data.map((r) => parseFloat(r.rate));
      console.log("rate : ", Math.max(...rate));
      let mrp = data.map((r) => parseFloat(r.mrp));
      console.log("mrp : ", Math.max(...mrp));
      let name, free, deal, exp;
      data.map((m) => {
        name = m.name;
        free = m.free;
        deal = m.deal;
        exp = m.exp;
      });
      let searchData = [
        {
          name: name,
          batch: data.map((b) => b.batch),
          stock: stock,
          free: free,
          deal: deal,
          mrp: Math.max(...mrp),
          rate: Math.max(...rate),
          exp: exp
        }
      ];
      console.log(searchData);
      return { ...state, search: searchData };

    default:
      return state;
  }
}

export default reducer;
