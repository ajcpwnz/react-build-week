import React from 'react';

import process1 from './img/process1.png'
import process2 from './img/process2.png'
import process3 from './img/process3.png'
import btn1 from './img/btn1.png'
import btn2 from './img/btn2.png'
import btn3 from './img/btn3.png'

class Process extends React.Component {
  render() {
    return (
      <section className="process">
        <div className="growth-levers">
          <div className="gl-left">
          <img className="number" src={btn1} alt="step"></img>
            <h3>We uncover your company growth levers</h3>
            <p className="lorem">orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="gl-right mobile-none"><img src={process1} alt="coworkers" height="270px" width="600px" /></div>
        </div>
        <div className="growth-experiments">
          <div className="ge-left mobile-none"><img src={process2} alt="coworkers" height="270px" width="600px" /></div>
          <div className="ge-right">
          <img className="number" src={btn2} alt="step"></img>
            <h3>We pre-select proven growth experiments</h3>
            <p className="lorem">orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="design-build-analyse">
          <div className="dba-left">
          <img className="number" src={btn3} alt="step"></img>
            <h3>We design, build & analyse your growth experiments</h3>
            <p className="lorem">orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="dba-right mobile-none"><img src={process3} alt="coworkers" height="270px" width="600px" /></div>
        </div>
      </section>
    )
  }
};  

export default Process;