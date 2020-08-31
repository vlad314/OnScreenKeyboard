import React from 'react';
import "./key.css";

const Key = ({buttonId, onPressKey}) => {
  const writeCh = event => {
    onPressKey(buttonId);
  }  

  return (
    <button className="key" id={buttonId} onClick={writeCh}>{buttonId}</button>
  )
}

export default Key;