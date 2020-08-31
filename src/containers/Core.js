import React, {useState, useEffect} from 'react';

import Box from "../components/box.js";
import Keyboard from "../components/keyboard.js";
import History from "../components/history.js";

const Core = props => {


 const[inputState, setInputState]  = useState({currentCh: "", textString: "", cursorPos:0, uppercase:false});
 const [historyState, setHistoryState] = useState([{}]);

  const addStateHandler = () => {
    let temp = {... inputState};
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
  if (character === "Caps"){
      setInputState(prevInputState => ({
        currentCh: prevInputState.currentCh, 
        textString: prevInputState.textString, 
        cursorPos:prevInputState.cursorPos,
        uppercase: !prevInputState.uppercase})
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
      // console.log(before);
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
        <Box 
          text={inputState.textString}
          updateCursor={placeCursor}
          getCursor={inputState.cursorPos}
        />
        <Keyboard 
          onPressKey={pressKey}
          caps = {inputState.uppercase}
        />
        <History className="history"
          history={historyState}
          addState={addStateHandler}
        />
      </div>
    </>
  )

}

export default Core;