import React from 'react';

export default class Experiment extends React.Component {
    render() {  
      return (
        <div>
            <p>{this.props.title}</p>
            <div>
                <p>{this.props.funnel}</p>
                <p>{this.props.type}</p>
            </div>
            <div>
                {
                    this.props.tools.map(tool => (
                        <p>{tool}</p>
                    ))
                }
            </div>
        </div>
      );
    }
}