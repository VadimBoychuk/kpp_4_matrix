import * as actionTypes from "./actionsTypes";



export const set_matrix = matrix => {
  return {
    type: actionTypes.SET_MATRIX,
    payload: matrix,
  };
};

export const set_matr = matr => {
  return {
    type: actionTypes.SET_MATR,
    payload: matr,
  };
};

export const set_averVal = averVal => {
  return {
    type: actionTypes.SET_AVERVAL,
    payload: averVal,
  };
};

export const set_M = M => {
  return {
    type: actionTypes.SET_M,
    payload: M,
  };
};

export const set_N = N => {
  return {
    type: actionTypes.SET_N,
    payload: N,
  };
};

export const set_X = X => {
  return {
    type: actionTypes.SET_X,
    payload: X,
  };
};

export const set_id = arr => {
  return {
    type: actionTypes.SET_ID,
    payload: arr,
  };
};

