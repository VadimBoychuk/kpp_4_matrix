import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";
import Page from "../components/error";

const mapStateToProps = state => {
  return {
    M: state.M,
    N: state.N,
    X: state.X
  };
};

export default connect(mapStateToProps)(Page);
