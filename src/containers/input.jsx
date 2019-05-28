import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";
import Page from "../components/input";

const mapStateToProps = state => {
  return {
    M: state.M,
    N: state.N,
    X: state.X
  };
};

const mapDispatchToProps = dispatch => {
  return {
    set_M: M => dispatch(actionCreators.set_M(M)),
    set_N: N => dispatch(actionCreators.set_N(N)),
    set_X: X => dispatch(actionCreators.set_X(X))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
