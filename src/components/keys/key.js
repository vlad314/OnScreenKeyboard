import React from 'react';
import "./key.css";

const Key = ({classN, buttonId, onPressKey}) => {
  const writeCh = event => {
    onPressKey(buttonId);
  }  

  return (
    <button className={classN} id={buttonId} onClick={writeCh}>{buttonId}</button>
  )
}

export default Key;