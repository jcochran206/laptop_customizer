import React from 'react';

function Summary(props){
    const summarized = Object.keys(this.state.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.state.selected[feature];
  
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
            {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(props.selected)}
            </div>
          </div>
        );
      });
}

export default Summary;