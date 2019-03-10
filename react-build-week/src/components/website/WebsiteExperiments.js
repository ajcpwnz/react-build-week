import React from 'react';
import experiments1 from './img/experiments1.png';
import experiments2 from './img/experiments2.png';
import experiments3 from './img/experiments3.png';
import experiments4 from './img/experiments4.png';

const images = [
  { id: 1, image: experiments1 },
  { id: 2, image: experiments2 },
  { id: 3, image: experiments3 },
  { id: 4, image: experiments4 },
  { id: 5, image: experiments1 },
  { id: 6, image: experiments2 },
  { id: 7, image: experiments3 },
  { id: 8, image: experiments4 }
];

const WebsiteExperiments = () => {
  return (
    <section className="experiments">
      <div className="slider">
        <div className="cards">
          {images.map(img => <WebsiteCard key={img.id} image={img.image} />)}
        </div>
      </div>
    </section>
  )
};

class WebsiteCard extends React.Component {
  render() {
    return (
      <div className="card"><img src={this.props.image} alt="experiments"/></div>
    )
  }
};

export default WebsiteExperiments;