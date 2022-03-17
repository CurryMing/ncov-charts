import React, { useEffect, useRef } from "react";
import { getRetDataAction } from "../redux/actions";
import * as echarts from "echarts";
import { ret_Data } from "../helper/helper";
import {retStore} from "../redux/store";
import moment from "moment";

export default function Graph() {
  const retNode = useRef(null);
  var myecharts = null;

  var retdata = {};

  useEffect(() => {
    var time = localStorage.getItem("rt");
    var diff = 25;
    if (time) diff = timeDiff(time);
    console.log("diff: " + diff);
    if (diff >= 6) {
      localStorage.setItem("rt", moment(new Date()));
      const validate = retStore.dispatch(getRetDataAction());
      validate
        .then((data) => {
          // eslint-disable-next-line
          retdata = retStore.getState().retdata;
          localStorage.setItem("retdata", JSON.stringify(retdata));
          setRet(retdata);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      retdata = JSON.parse(localStorage.getItem("retdata"));
      setRet(retdata);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      myecharts && myecharts.resize();
    });
  }, []);

  function timeDiff(startDate) {
    var endDate = moment(new Date());
    startDate = moment(new Date(startDate));
    var totalMinute = endDate.diff(startDate) / (1000 * 60);
    return Math.floor(totalMinute / 60);
    // return totalMinute;
  }

  function setRet(retData) {
    const renderedInstance = echarts.getInstanceByDom(retNode.current);
    if (renderedInstance) {
      myecharts = renderedInstance;
    } else {
      myecharts = echarts.init(retNode.current);
    }
    myecharts.setOption(ret_Data(retData), true);
  }

  return (
    <div className="chart-box">
      <div className="chart relative">
        <h3 className="font-bold title">
          <span className="block text-3xl text-emerald-400"></span>
        </h3>
        <div
          ref={retNode}
          className="retNode"
          style={{ width: "380px", height: "450px" }}
        ></div>
      </div>
    </div>
  );
}
