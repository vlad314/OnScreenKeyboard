
import React from 'react';
import './history.css';

const History = ({history, addState}) => {
  
  const saveState = event => {
    addState();
  }  

  return (
    <div className="wrhItems">
      <button className="save" onClick={saveState}>Save to history</button>
      <div className="hItems">
        {history.map((el, index) => {
          console.log("el");
          console.log(el);
          return <div className="hItem" key={index}>{el.textString}</div>
        })}
      </div>
    </div>
  )
}

export default History;