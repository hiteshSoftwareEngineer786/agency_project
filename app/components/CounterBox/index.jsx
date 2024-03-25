import React from "react";
import "./CounterBox.scss";
const index = () => {
  return (
    <section className="counterBoxSection pt100">
      <div className="container">
        <div className="counterBoxWrapper">
          <div className="detailBox">
            <h3>42%</h3>
            <p>Years of experience</p>
          </div>
          <div className="detailBox">
            <h3>73+</h3>
            <p>Agency members</p>
          </div>
          <div className="detailBox">
            <h3>5.000</h3>
            <p>Projects complete</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
