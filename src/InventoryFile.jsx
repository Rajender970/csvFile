import { connect } from "react-redux";
const InventoryFile = ({ storedata, headers }) => {
  return (
    <>
      <h4>CSVFileData</h4>
      <table>
        {
          <tr>
            {headers.map((h) => (
              <td>{h}</td>
            ))}
          </tr>
        }
        {storedata.map((d) => (
          <tr>
            <td>{d.code}</td>
            <td>{d.name}</td>
            <td>{d.batch}</td>
            <td>{d.stock}</td>
            <td>{d.deal}</td>
            <td>{d.free}</td>
            <td>{d.mrp}</td>
            <td>{d.rate}</td>
            <td>{d.exp}</td>
            <td>{d.company}</td>
            <td>{d.supplier}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
const mapStateToProps = (state) => ({
  storedata: state.data,
  sData: state.search,
  headers: state.headers,
  sStatus: state.searchStatus
});
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (storeData) => dispatch({ type: "GET_DATA", payload: storeData }),
    getSearchData: (search) =>
      dispatch({ type: "SEARCH_DATA", payload: search })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InventoryFile);
