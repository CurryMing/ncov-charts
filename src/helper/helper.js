export function chart_Data(szMidarea) {
  var baArea = [];
  var nsArea = [];
  var ftArea = [];
  var lhuArea = [];
  var lgArea = [];
  var ytArea = [];
  var lhArea = [];
  var psArea = [];
  var gmArea = [];

  var labels = [
    "宝安区",
    "南山区",
    "福田区",
    "罗湖区",
    "龙岗区",
    "盐田区",
    "龙华区",
    "坪山区",
    "光明区",
  ];
  baArea = szMidarea.filter((area) => area.includes("宝安"));
  nsArea = szMidarea.filter((area) => area.includes("南山"));
  ftArea = szMidarea.filter((area) => area.includes("福田"));
  lhuArea = szMidarea.filter((area) => area.includes("罗湖"));
  lgArea = szMidarea.filter((area) => area.includes("龙岗"));
  lhArea = szMidarea.filter((area) => area.includes("龙华"));
  ytArea = szMidarea.filter((area) => area.includes("盐田"));
  psArea = szMidarea.filter((area) => area.includes("坪山"));
  gmArea = szMidarea.filter((area) => area.includes("光明"));
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: baArea.length, name: labels[0] },
          { value: nsArea.length, name: labels[1] },
          { value: ftArea.length, name: labels[2] },
          { value: lhuArea.length, name: labels[3] },
          { value: lgArea.length, name: labels[4] },
          { value: ytArea.length, name: labels[5] },
          { value: lhArea.length, name: labels[6] },
          { value: psArea.length, name: labels[7] },
          { value: gmArea.length, name: labels[8] },
        ],
      },
    ],
  };

  // const config = {
  //   data: {
  //     labels,
  //     datasets: [
  //       {
  //         label: "NCOV Risk Area",
  //         data: [
  //           baArea.length,
  //           nsArea.length,
  //           ftArea.length,
  //           lhuArea.length,
  //           lgArea.length,
  //           ytArea.length,
  //           lhArea.length,
  //           psArea.length,
  //           gmArea.length,
  //         ],
  //         backgroundColor: [
  //           "rgb(255, 99, 132)",
  //           "rgb(54, 162, 235)",
  //           "rgb(255, 205, 86)",
  //           "rgb(25, 135, 84)",
  //           "rgb(108,117,125)",
  //           "rgb(13,202,240)",
  //           "rgb(33,37,41)",
  //           "rgb(13,110,253)",
  //           "rgb(220,53,69)",
  //         ],
  //         hoverOffset: 4,
  //         borderRadius: 20,
  //         spacing: 10,
  //       },
  //     ],
  //   },
  //   options: {
  //     cutout: 125,
  //     plugins: {
  //       legend: {
  //         display: true,
  //       },
  //     },
  //     animations: {
  //       tension: {
  //         duration: 1000,
  //         easing: "linear",
  //         from: 1,
  //         to: 0,
  //         loop: true,
  //       },
  //     },
  //   },
  // };

  return option;
}

export function ret_Data(retData) {
  var option = {
    legend: {
      top: "bottom",
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "Nightingale Chart",
        type: "pie",
        radius: [50, 250],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        data: [
          { value: retData.confirm, name: "总确认" },
          { value: retData.heal, name: "治愈" },
          { value: retData.died, name: "死亡" },
          { value: retData.nativeRelative, name: "本土新增" },
          { value: retData.curConfirm, name: "当前确认" },
        ],
      },
    ],
  };

  option = {
    title: {
      // text: "",
      // subtext: "",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "",
        type: "pie",
        radius: "50%",
        data: [
          { value: retData.confirm, name: "总确认" },
          { value: retData.heal, name: "治愈" },
          { value: retData.nativeRelative, name: "本土新增" },
          { value: retData.died, name: "死亡" },
          { value: retData.curConfirm, name: "当前确认" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return option;
}
