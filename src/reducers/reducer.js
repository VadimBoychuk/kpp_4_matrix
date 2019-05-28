import * as actionTypes from "../actions/actionsTypes";

const initState = {
  M: "4",
  N: "4",
  X: "4",
  matrix: [[]],
  averVal: [],
  num: 3,
  arr: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_MATRIX: {
      return {
        ...state,
        matrix: action.payload
      };
    }
    case actionTypes.SET_MATR: {
      return {
        ...state,
        matr: action.payload
      };
    }
    case actionTypes.SET_AVERVAL: {
      return {
        ...state,
        averVal: action.payload
      };
    }
    case actionTypes.SET_M: {
      return {
        ...state,
        M: action.payload
      };
    }
    case actionTypes.SET_N: {
      return {
        ...state,
        N: action.payload
      };
    }
    case actionTypes.SET_X: {
      return {
        ...state,
        X: action.payload
      };
    }
    case actionTypes.SET_ID: {
      return {
        ...state,
        arr: action.payload
      };
    }
  }

  return state;
};

export default reducer;
