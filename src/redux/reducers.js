import * as actionType from "./types";

const initialState = {};

export function rootReducer(state = initialState, action) {
  const { type, payload } = action;
//   console.log(payload);
  switch (type) {
    case actionType.GETNCOVDATA:
      return payload;
    default:
      return state;
  }
}

export function retReducer(state = initialState, action) {
  const { type, payload } = action;
//   console.log(payload);
  switch (type) {
    case actionType.GETRETDATA:
      return payload;
    default:
      return state;
  }
}
