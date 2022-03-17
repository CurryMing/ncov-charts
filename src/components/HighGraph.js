import React, { useEffect, useState, useRef } from "react";
import { getNcovDataAction } from "../redux/actions";
import * as echarts from "echarts";
import { chart_Data } from "../helper/helper";
import {rootStore} from "../redux/store";
import { Chart, ArcElement } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
import List from "./List";
import moment from "moment";
Chart.register(ArcElement);

export default function Graph() {
  const doughNode = useRef(null);
  var myecharts = null;

  var riskarea = [];
  var higharea = [];
  var szMidarea = [];
  var szHigharea = [];
  var [total, setTotal] = useState(0);
  // var [graphData, setGraph] = useState();
  var [listData, setList] = useState();
  var [nsData, setNs] = useState();
  var [ftData, setFt] = useState();
  var [lhuData, setLhu] = useState();
  var [lgData, setLg] = useState();
  var [ytData, setYt] = useState();
  var [lhData, setLh] = useState();
  var [psData, setPs] = useState();
  var [gmData, setGm] = useState();

  useEffect(() => {
    var diff = 25;
    var time = localStorage.getItem("ht");
    if (time) diff = timeDiff(time);
    console.log("diff: " + diff);
    if (diff >= 6) {
      localStorage.setItem("ht", moment(new Date()));
      const validate = rootStore.dispatch(getNcovDataAction());
      validate
        .then((data) => {
          // eslint-disable-next-line
          riskarea = rootStore.getState().newslist[0].riskarea;
          // eslint-disable-next-line
          higharea = riskarea.high;
          // eslint-disable-next-line
          szHigharea = higharea.filter((area) => area.includes("深圳市"));
          localStorage.setItem("higharea", JSON.stringify(szHigharea));
          
          setArea(szHigharea);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      szHigharea = JSON.parse(localStorage.getItem("higharea"));
      setArea(szHigharea);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      myecharts && myecharts.resize();
    });
  }, [szMidarea, szHigharea]);

  function timeDiff(startDate) {
    var endDate = moment(new Date());
    startDate = moment(new Date(startDate));
    var totalMinute = endDate.diff(startDate) / (1000 * 60);
    return Math.floor(totalMinute / 60);
    // return totalMinute;
  }

  function setArea(riskarea) {
    if (riskarea) setTotal(riskarea.length);
    const renderedInstance = echarts.getInstanceByDom(doughNode.current);
    if (renderedInstance) {
      myecharts = renderedInstance;
    } else {
      myecharts = echarts.init(doughNode.current);
    }
    myecharts.setOption(chart_Data(riskarea), true);
    setList(
      <List
        data={riskarea.filter((area) => area.includes("宝安区"))}
        color={0}
        areaName={"宝安"}
      ></List>
    );
    setNs(
      <List
        data={riskarea.filter((area) => area.includes("南山区"))}
        color={1}
        areaName={"南山"}
      ></List>
    );
    setFt(
      <List
        data={riskarea.filter((area) => area.includes("福田区"))}
        color={2}
        areaName={"福田"}
      ></List>
    );
    setLhu(
      <List
        data={riskarea.filter((area) => area.includes("罗湖区"))}
        color={3}
        areaName={"罗湖"}
      ></List>
    );
    setLg(
      <List
        data={riskarea.filter((area) => area.includes("龙岗区"))}
        color={4}
        areaName={"龙岗"}
      ></List>
    );
    setYt(
      <List
        data={riskarea.filter((area) => area.includes("盐田区"))}
        color={5}
        areaName={"盐田"}
      ></List>
    );
    setLh(
      <List
        data={riskarea.filter((area) => area.includes("龙华区"))}
        color={6}
        areaName={"龙华"}
      ></List>
    );
    setPs(
      <List
        data={riskarea.filter((area) => area.includes("坪山区"))}
        color={7}
        areaName={"坪山"}
      ></List>
    );
    setGm(
      <List
        data={riskarea.filter((area) => area.includes("光明区"))}
        color={8}
        areaName={"光明"}
      ></List>
    );
  }

  return (
    <div className="chart-box">
      <div className="chart relative">
        <h3 className="font-bold title">
          Total
          <span className="block text-3xl text-emerald-400">{total}</span>
        </h3>
        <div
          ref={doughNode}
          className="doughNode"
          style={{ width: "380px", height: "450px" }}
        ></div>
      </div>
      <div className="list">
        <div className="area-list">{listData}</div>
        <div className="area-list">{nsData}</div>
        <div className="area-list">{ftData}</div>
        <div className="area-list">{lhuData}</div>
        <div className="area-list">{lgData}</div>
        <div className="area-list">{ytData}</div>
        <div className="area-list">{lhData}</div>
        <div className="area-list">{psData}</div>
        <div className="area-list">{gmData}</div>
      </div>
    </div>
  );
}
