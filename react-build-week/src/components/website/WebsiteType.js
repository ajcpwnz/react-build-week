import React from 'react';

import saas from './img/saas.png'
import marketplace from './img/marketplace.png'
import ecommerce from './img/ecommerce.png'

const Type = () => {
    return (
      <section className="type">
        <div className="type-title"><h3>Who we work with</h3></div>
        <div className="type-categories">
            <div className="SaaS category">
                <img src={saas} alt="step"></img>
                <div><h4>SaaS</h4></div>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
            </div>
            <div className="Marketplace category">
                <img src={marketplace} alt="step"></img>
                <div><h4>Markeplace</h4></div>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
            </div>
            <div className="Ecommerce category">
                <img src={ecommerce} alt="step"></img>
                <div><h4>Ecommerce</h4></div>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
            </div>
        </div>
      </section>
    )
};  

export default Type;