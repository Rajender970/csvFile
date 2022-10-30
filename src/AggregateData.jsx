import { connect } from "react-redux";
const AggregateData = ({ sData }) => {
  return (
    <>
      <h4>Aggregate Data:</h4>
      <table>
        {
          <tr>
            <td>Name</td>
            <td>Batch</td>
            <td>Stock</td>
            <td>Deal</td>
            <td>Free</td>
            <td>MRP</td>
            <td>Rate</td>
            <td>Exp</td>
          </tr>
        }
        {sData.map((d) => (
          <tr>
            <td>{d.name}</td>
            <td>
              <select>
                <option>All</option>
                {d.batch.map((b) => (
                  <option>{b}</option>
                ))}
              </select>
            </td>
            <td>{d.stock}</td>
            <td>{d.deal}</td>
            <td>{d.free}</td>
            <td>{d.mrp}</td>
            <td>{d.rate}</td>
            <td>{d.exp}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
const mapStateToProps = (state) => ({
  sData: state.search
});
export default connect(mapStateToProps)(AggregateData);
