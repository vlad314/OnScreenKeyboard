import React from 'react';

import Key from './keys/key.js';
import classes from "./keyboard.module.css";

const Keyboard = ({caps, onPressKey}) => {
  //for encrypting the text
  let row10 = ['1','2','3','4','5','6','7','8','9','0'];//,'(',')'];
  let row11 = ['(',')'];
  let keyBkp = 'Backspace';
  let row20 = ['q','w','e','r','t','y','u','i','o','p'];//,'{','}'];
  let row21 = ['{','}'];
  let row30 = ['a','s','d','f','g','h','j','k','l']//,';','@'];
  let row31  = [';','@','#'];
  let keyCaps = 'CapsLock';
  let keyBksl = ['\\'];
  let row40 = ['z','x','c','v','b','n','m'];
  let row41 = [',','.','?'];
  let Space = ' ';

  // let keys = {keyA:chars[0], keyB:chars[1]};
  // let keyBkp = 'Bkp';
  // let keyCaps = 'Caps';

  return (
    <>
      <div className={classes.keyboardGrid}>

        <div className={classes.kbrow1}>
          <div className={classes.longRow}>
          <Key   classN="keyRst" buttonId="Reset" onPressKey={onPressKey} />
          {row10.map((el, index) => {
              console.log("el");
              console.log(el);
              return <Key key={index} classN="key" buttonId={el} onPressKey={onPressKey} />
            })}
            </div>
            <div className={classes.shortRow}>
            {row11.map((el, index) => {
              console.log("el");
              console.log(el);
              return <Key key={index} classN="key" buttonId={el} onPressKey={onPressKey} />
            })}
            </div>
            <Key   classN="keyBkp" buttonId={keyBkp} onPressKey={onPressKey} />
        </div>

        <div className={classes.kbrow2}>
        <Key  classN="keyInv" buttonId="" onPressKey={onPressKey} />
          <div className={classes.longRow}>
            {row20.map((el, index) => {
                console.log("el");
                console.log(el);
                return <Key key={index}  classN="key" buttonId={el} onPressKey={onPressKey}/>
              })}
          </div>
          <div className={classes.shortRow}>
            {row21.map((el, index) => {
                console.log("el");
                console.log(el);
                return <Key key={index}  classN="key" buttonId={el} onPressKey={onPressKey}/>
              })}
          </div>
          <Key   classN="keyInv" buttonId="" onPressKey={onPressKey} />
        </div>

        <div className={classes.kbrow3}>
        <Key   classN="keyCaps" buttonId={keyCaps} onPressKey={onPressKey} />
          <div className={classes.longRow}>
            {row30.map((el, index) => {
                console.log("el");
                console.log(el);
                return <Key key={index}  classN="key" buttonId={el}  onPressKey={onPressKey}/>
              })}
          </div>
          <div className={classes.shortRow}>
            {row31.map((el, index) => {
                console.log("el");
                console.log(el);
                return <Key key={index}  classN="key" buttonId={el}  onPressKey={onPressKey}/>
              })}
          </div> 
        </div>

        <div className={classes.kbrow4}>
        <Key  classN="keyBksl" buttonId={keyBksl} onPressKey={onPressKey} />
          <div className={classes.longRow}>
            {row40.map((el, index) => {
              console.log("el");
              console.log(el);
              return <Key key={index}  classN="key" buttonId={el} onPressKey={onPressKey}/>
            })}
          </div>
          <div className={classes.shortRow}>
            {row41.map((el, index) => {
              console.log("el");
              console.log(el);
              return <Key key={index}  classN="key" buttonId={el} onPressKey={onPressKey}/>
            })}
          </div>
        </div>
        <div className={classes.spaceBar}>
          <Key  classN="key" buttonId={Space} onPressKey={onPressKey} />
        </div>
      </div>
    </>
  )
}

export default Keyboard;