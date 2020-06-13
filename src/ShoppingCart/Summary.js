import React from 'react';

function Summary(props){
  //console.log(props.selected)
  const summary = Object.keys(props.selected).map(key => (
    <div className="summary__option" key={key}>
        <div className="summary__option__label">{key}</div>
        <div className="summary__option__value">{props.selected[key].name}</div>
        <div className="summary__option__cost">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                .format(props.selected[key].cost)}
        </div>
    </div>
  ));
        return (
         <div>
           {summary}
         </div>
        )
}

export default Summary;