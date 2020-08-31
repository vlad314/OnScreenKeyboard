import React from 'react';

import Key from './keys/key.js';
import "./keyboard.css";

const Keyboard = ({caps, onPressKey}) => {
  //for encrypting the text
  let row1 = ['1','2','3','4','5','6','7','8','9','0','(',')'];
  let keyBkp = 'Backspace';
  let row2 = ['q','w','e','r','t','y','u','i','o','p','{','}'];
  let row3 = ['a','s','d','f','g','h','j','k','l',';','@'];
  let keyCaps = 'CapsLock';
  let row4 = ['z','x','c','v','b','n','m',',','.','?'];
  let Space = ' ';

  // let keys = {keyA:chars[0], keyB:chars[1]};
  // let keyBkp = 'Bkp';
  // let keyCaps = 'Caps';

  return (
    <>
      <div className="keyboardGrid">

        <div className="kbrow1">
          {row1.map((el, index) => {
              console.log("el");
              console.log(el);
              return <Key key={index}  className="key" buttonId={el} onPressKey={onPressKey} />
            })}
            <Key   className="key" buttonId={keyBkp} onPressKey={onPressKey} />
        </div>

        <div className="kbrow2">
          {row2.map((el, index) => {
              console.log("el");
              console.log(el);
              return <Key key={index}  className="key" buttonId={el} onPressKey={onPressKey}/>
            })}
        </div>

        <div className="kbrow3">
          {row3.map((el, index) => {
              console.log("el");
              console.log(el);
              return <Key key={index}  className="key" buttonId={el}  onPressKey={onPressKey}/>
            })}
            <Key   className="key" buttonId={keyCaps} onPressKey={onPressKey} />
        </div>

        <div className="kbrow4">
          {row4.map((el, index) => {
            console.log("el");
            console.log(el);
            return <Key key={index}  className="key" buttonId={el} onPressKey={onPressKey}/>
          })}
        </div>

        <div className="spaceBar">
          <Key  className="key" buttonId={Space} onPressKey={onPressKey} />
        </div>
      </div>
    </>
  )
}

export default Keyboard;


// {/* 
//           <Key  className="key" buttonId={row1[0]} onPressKey={onPressKey} />
//           <Key  className="key"  buttonId={row1[0]} onPressKey={onPressKey} />
//           <Key  className="key" buttonId={row1[0]} onPressKey={onPressKey} /> */}