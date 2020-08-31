
import React from 'react';

const History = ({history, addState}) => {
  
  const saveState = event => {
    addState();
  }  

  return (
    <div>
      <button className="save" onClick={saveState}>Save</button>
      <div>
        {history.map((el, index) => {
          console.log("el");
          console.log(el);
          return <div key={index}>{el.textString}</div>
        })}
      </div>
    </div>
  )
}

export default History;