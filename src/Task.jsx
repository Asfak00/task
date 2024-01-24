import React from "react";

// import data
import { data } from "./data";

const Task = () => {
  return (
    <main className="taskContainer">
      <section className="section">
        <button className="btn">{data[0]?.title}</button>
        <hr className="hr" />
        <button className="plusBtn">+</button>
        <hr className="hr" />
        <button className="btn">{data[1]?.title}</button>
        <hr className="hr" />
        <button className="plusBtn">+</button>
        <hr className="hr" />
        <button className="btn">{data[2]?.title}</button>

        <div className="sub-tree">
          {data[2]?.child?.map((item, index) => (
            <>
              <div className="sub-tree-div" key={index}>
                <hr className="hr" />
                <button className="subTree-btn">{item.title}</button>
              </div>
            </>
          ))}

          <svg
            className="svgLeft"
            id="epI4ez3ry2U1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 300 300"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            width="300"
            height="300">
            <path
              d="M79.628676,57.546616c0,11.862394,7.584593,43.703324,12.474905,54.985754c14.649642,33.79816,71.217828,13.001639,74.225685,94.110231"
              transform="matrix(2.367662 0 0 1.950386-157.742136-103.032835)"
              fill="none"
              stroke="#333333"
              stroke-width="0.6"
            />
          </svg>
          <svg
            className="svgRight"
            id="eeD5sqRdU941"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 300 300"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            width="300"
            height="300">
            <path
              d="M86.02332,65.357472c0,10.32672,5.596699,38.045608,9.205278,47.867444C106.038622,142.647656,147.780492,124.543397,150,195.151887"
              transform="matrix(-3.209721-.005069-.003966 2.511204 482.232092-189.305806)"
              fill="none"
              stroke="#333333"
              stroke-width="0.6"
            />
          </svg>

          <button className="plusBtn right">+</button>
          <button className="plusBtn left">+</button>
          <div className="tree-end-btn">
            {data[2]?.child?.map((item, index) => (
              <button className="btn">{item?.child[0]?.title}</button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Task;
