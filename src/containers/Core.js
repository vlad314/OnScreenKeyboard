import React, {useState, useEffect} from 'react';

import Box from "../components/box.js";
import Keyboard from "../components/keyboard.js";
import History from "../components/history.js";
import  "./Core.css";

const Core = props => {


 const[inputState, setInputState]  = useState({currentCh: "", textString: "", cursorPos:0, uppercase:false});
 const [historyState, setHistoryState] = useState([{}]);

  const addStateHandler = () => {
    let temp = {...inputState};
    let tempList = [...historyState];
    console.log("tempList");
    console.log(tempList);
    tempList.push(temp);
    setHistoryState(tempList);
  }

    const pressKey = character => {
    let before = "";
    let after = "";
    let newTextString = "";
    if (character === "CapsLock"){
      setInputState(prevInputState => ({
        currentCh: prevInputState.currentCh, 
        textString: prevInputState.textString, 
        cursorPos:prevInputState.cursorPos,
        uppercase: !prevInputState.uppercase})
      );
    }
    else if (character === "Reset"){
      setInputState(prevInputState => ({
        currentCh: character, 
        textString: "", 
        cursorPos:prevInputState.cursorPos-1,
        uppercase: prevInputState.uppercase})
      );
    }
    else if (character === "Backspace"){
      before = inputState.textString.substr(0,inputState.cursorPos-1);
      after = inputState.textString.substr(inputState.cursorPos);
      newTextString = newTextString.concat(before);
      newTextString = newTextString.concat(after);
      setInputState(prevInputState => ({
        currentCh: character, 
        textString: newTextString, 
        cursorPos:prevInputState.cursorPos-1,
        uppercase: prevInputState.uppercase})
      );
    }
    else {
      before = inputState.textString.substr(0,inputState.cursorPos);
      after = inputState.textString.substr(inputState.cursorPos);//change to cursorPos+1 for Insert
      newTextString = newTextString.concat(before);
      if (inputState.uppercase === true){
        newTextString = newTextString.concat(character.toUpperCase());
      } else {
        newTextString = newTextString.concat(character);
      }
      newTextString = newTextString.concat(after);
      setInputState(prevInputState => ({
        currentCh: character, 
        textString: newTextString, 
        cursorPos:prevInputState.cursorPos + 1,
        uppercase: prevInputState.uppercase})
      );
    } 
  }  

  const placeCursor = c =>{
    setInputState(prevInputState => ({
      currentCh: prevInputState.currentCh, 
      textString: prevInputState.textString, 
      cursorPos:c}));
  }

  return(
    <>
      <div className="wrapper"> 
       <div className="bkwr">
         <div className="title" >After you've typed some text, you can place the cursor anywhere on the text to change it.</div>
        <div className="box">
          <Box 
            text={inputState.textString}
            updateCursor={placeCursor}
            getCursor={inputState.cursorPos}
          />
        </div>
        <div className="keyb">
          <Keyboard 
            onPressKey={pressKey}
            caps = {inputState.uppercase}
          />
        </div>
        </div>
        <div className="hist">
        <div className="history">
         
          <History 
            history={historyState}
            addState={addStateHandler}
          />
          </div>
        </div>
      </div>
    </>
  )

}

export default Core;