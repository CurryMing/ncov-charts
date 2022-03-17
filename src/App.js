import "./App.css";
import React from "react";
// import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import HighGraph from "./components/HighGraph";
import MidGraph from "./components/MidGraph";
import RetData from "./components/RetData";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl main-box text-center drop-shadow-lg text-gray-800">
        <h1 className="web-title text-4xl py-3 bg-slate-800 text-white rounded">
          深圳疫情实时动态
        </h1>
        {/* <div className="my-nav">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink
                to="higharea"
                className={({ isActive }) =>
                  "nav-link high-link" + (isActive ? " high-nav-active" : "")
                }
              >
                高风险
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="midarea"
                className={({ isActive }) =>
                  "nav-link mid-link" + (isActive ? " mid-nav-active" : "")
                }
              >
                中风险
              </NavLink>
            </li>
          </ul>
        </div> */}
        {/* <div className="route-box">
          <Routes>
            <Route path="/higharea" element={<HighGraph isHigh={true} />} />
            <Route path="/midarea" element={<MidGraph isHigh={false} />} />
            <Route path="/" element={<Navigate to="/higharea" />} />
          </Routes>
        </div> */}
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active high-nav"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              高风险
            </button>
            <button
              className="nav-link mid-nav"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              中风险
            </button>
            <button
              className="nav-link ret-nav"
              id="nav-ret-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-ret"
              type="button"
              role="tab"
              aria-controls="nav-ret"
              aria-selected="false"
            >
              总数据
            </button>
          </div>
        </nav>
        <div className="tab-content mt-2" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <HighGraph />
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <MidGraph />
          </div>
          <div
            className="tab-pane fade"
            id="nav-ret"
            role="tabpanel"
            aria-labelledby="nav-ret-tab"
          >
            <RetData />
          </div>
        </div>
        <h2 className="mt-2">
          开发者：<strong>橙系圆</strong>
        </h2>
        <p>数据每隔6个小时更新一次</p>
      </div>
    </div>
  );
}

export default App;
