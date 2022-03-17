import * as actionType from "./types";
import { getNcovData,getRetData } from "../services/ncov.service";

export const getNcovDataAction = () => (dispatch) => {
  return getNcovData()
    .then((data) => {
      // ! 传递参数给store
      dispatch({
        type: actionType.GETNCOVDATA,
        payload: data,
      });
      return Promise.resolve(data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export const getRetDataAction = () => (dispatch) => {
  return getRetData()
    .then((data) => {
      // ! 传递参数给store
      dispatch({
        type: actionType.GETRETDATA,
        payload: data,
      });
      return Promise.resolve(data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
