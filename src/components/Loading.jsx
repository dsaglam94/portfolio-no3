import React from "react";
import logo from "../assets/dawn_logo2.svg";

const Loading = ({ loading }) => {
  return (
    <div
      className={
        loading
          ? "w-screen h-screen flex items-center justify-center bg-primary fixed top-0 left-0 z-[100000] -translate-y-0 duration-150"
          : "w-screen h-screen flex items-center justify-center bg-primary fixed top-0 left-0 z-[100000] translate-y-[100vh] duration-700 "
      }
    >
      <div className="loading relative w-[200px] h-[200px]">
        <div className="blocks" style={{ "--i": 1 }}></div>
        <div className="blocks" style={{ "--i": 2 }}></div>
        <div className="blocks" style={{ "--i": 3 }}></div>
        <div className="blocks" style={{ "--i": 4 }}></div>
        <div className="blocks" style={{ "--i": 5 }}></div>
        <div className="blocks" style={{ "--i": 6 }}></div>
        <div className="blocks" style={{ "--i": 7 }}></div>
        <div className="blocks" style={{ "--i": 8 }}></div>
        <div className="blocks" style={{ "--i": 9 }}></div>
        <div className="blocks" style={{ "--i": 10 }}></div>
        <div className="blocks" style={{ "--i": 11 }}></div>
        <div className="blocks" style={{ "--i": 12 }}></div>
        <div className="blocks" style={{ "--i": 13 }}></div>
        <div className="blocks" style={{ "--i": 14 }}></div>
        <div className="blocks" style={{ "--i": 15 }}></div>
        <div className="blocks" style={{ "--i": 16 }}></div>
        <div className="blocks" style={{ "--i": 17 }}></div>
        <div className="blocks" style={{ "--i": 18 }}></div>
        <div className="blocks" style={{ "--i": 19 }}></div>
        <div className="blocks" style={{ "--i": 20 }}></div>
        <div className="w-[80px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img className="loading-logo w-full" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
