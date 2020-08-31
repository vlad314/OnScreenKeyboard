import React, {useEffect, useRef} from 'react';

const Box = ({text, updateCursor, getCursor}) => {
  
  let textBox = useRef(null);
  console.log("in box cursor" + getCursor);

  useEffect(() => {
    textBox.current.focus();
    textBox.current.setSelectionRange(getCursor,getCursor);
  }, [text,getCursor]);

  const cursorSel = event => {
    let s = event.target.selectionStart;
    console.log("in box " +s);
    updateCursor(s);
  }

  return (
    <>
    <textarea value={text}  onClick={cursorSel} ref={textBox} />
    </>
  )
}

export default Box;