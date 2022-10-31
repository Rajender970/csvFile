import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AggregateData from "./AggregateData";
import InventoryFile from "./InventoryFile";

function CsvFileDisplay({
  storedata,
  sData,
  getHeaders,
  getData,
  getSearchData
}) {
  const [csvData, setCsvData] = useState(null);

  const [search, setSearch] = useState("");

  const processCsvFile = (str, delim = ",") => {
    const headers = str.slice(0, str.indexOf("\n")).split(delim);
    getHeaders(headers);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");
    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObj = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});

      return eachObj;
    });
    console.log(newArray.slice(1));
    getData(newArray.slice(1));
  };
  const getCsvDataFile = (e) => {
    console.log("csv data : ", csvData);
    if (csvData === null) {
      alert("Please select csv File");
    } else {
      const file = csvData;
      const reader = new FileReader();
      reader.onload = function (e) {
        const text = e.target.result;

        processCsvFile(text);
      };
      reader.readAsText(file);
    }
  };
  const dataSearch = () => {
    let d = storedata.filter((f) => f.name === search.trim());
    if (d.length === 0) {
      alert("Please enter any valid name");
    } else getSearchData(d);
  };
  useEffect(() => {}, []);
  return (
    <div className="App">
      <form>
        <input
          type="file"
          accept=".csv"
          onChange={(e) => setCsvData(e.target.files[0])}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            getCsvDataFile();
          }}
        >
          Show Data
        </button>
      </form>
      <br />
      <br />
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={() => dataSearch()}>Search</button>
      <hr />
      <div>{sData.length > 0 ? <AggregateData /> : <InventoryFile />}</div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  storedata: state.data,
  sData: state.search,
  headers: state.headres,
  sStatus: state.searchStatus
});
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (storeData) => dispatch({ type: "GET_DATA", payload: storeData }),
    getSearchData: (search) =>
      dispatch({ type: "SEARCH_DATA", payload: search }),

    getHeaders: (headers) => dispatch({ type: "GET_HEADERS", payload: headers })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CsvFileDisplay);
q
