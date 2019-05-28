import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";
import Page from "../components/matrix";

const mapStateToProps = state => {
  return {
    matrix: state.matrix,
    averVal: state.averVal,
    M: state.M,
    N: state.N,
    X: state.X,
    arr: state.arr
  };
};

const mapDispatchToProps = dispatch => {
  return {
    set_matrix: matrix => dispatch(actionCreators.set_matrix(matrix)),
    set_id: id => dispatch(actionCreators.set_id(id)),
    set_matr: matr => dispatch(actionCreators.set_matr(matr)),
    set_averVal: averVal => dispatch(actionCreators.set_averVal(averVal))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
