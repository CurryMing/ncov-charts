import axios from "axios";

var key = "c707f6dbaa1b5e751eea380e762b2aa6";
export const getNcovData = () => {
  console.log("axios");
  return axios
    .get(`https://api.tianapi.com/ncov/index`, {
      headers: {
        // Access-Control-Allow-Origin
      },
      params: {
        key,
      },
    })
    .then((response) => {
      //   console.log(response.data);
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

export const getRetData = () => {
  console.log("axios");
  return axios
    .get(`https://yupn.api.storeapi.net/api/94/221`, {
      headers: {
        // Access-Control-Allow-Origin
      },
      params: {
        format: "json",
        appid: "14725",
        city_name: "深圳",
        sign: "1453528e9708ba9e611a07da8af98d3c"
      },
    })
    .then((response) => {
      //   console.log(response.data);
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};
