(this.webpackJsonposkey=this.webpackJsonposkey||[]).push([[0],[,function(e,t,a){e.exports={keyInv:"keyboard_keyInv__2NxVa",keyCaps:"keyboard_keyCaps__2K40q",spaceBar:"keyboard_spaceBar__5nwUU",longRow:"keyboard_longRow__38SbI",shortRow:"keyboard_shortRow__le7cc",keyboardGrid:"keyboard_keyboardGrid__WE96x",kbrow1:"keyboard_kbrow1__1THud",kbrow2:"keyboard_kbrow2__1Xj0U",kbrow3:"keyboard_kbrow3__3h9ZO",kbrow4:"keyboard_kbrow4__1d9G3"}},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),s=a.n(o),c=(a(14),a(15),a(7)),l=a(8),u=a(4),i=(a(16),function(e){var t=e.text,a=e.updateCursor,o=e.getCursor,s=Object(n.useRef)(null);console.log("in box cursor"+o),Object(n.useEffect)((function(){s.current.focus(),s.current.setSelectionRange(o,o)}),[t,o]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("textarea",{className:"textBox",value:t,onClick:function(e){var t=e.target.selectionStart;console.log("in box "+t),a(t)},ref:s}))}),m=(a(17),function(e){var t=e.classN,a=e.buttonId,n=e.onPressKey;return r.a.createElement("button",{className:t,id:a,onClick:function(e){n(a)}},a)}),d=a(1),y=a.n(d),k=function(e){e.caps;var t=e.onPressKey;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.a.keyboardGrid},r.a.createElement("div",{className:y.a.kbrow1},r.a.createElement("div",{className:y.a.longRow},r.a.createElement(m,{classN:"keyRst",buttonId:"Reset",onPressKey:t}),["1","2","3","4","5","6","7","8","9","0"].map((function(e,a){return console.log("el"),console.log(e),r.a.createElement(m,{key:a,classN:"key",buttonId:e,onPressKey:t})}))),r.a.createElement("div",{className:y.a.shortRow},["(",")"].map((function(e,a){return console.log("el"),console.log(e),r.a.createElement(m,{key:a,classN:"key",buttonId:e,onPressKey:t})}))),r.a.createElement(m,{classN:"keyBkp",buttonId:"Backspace",onPressKey:t})),r.a.createElement("div",{className:y.a.kbrow2},r.a.createElement(m,{classN:"keyInv",buttonId:"",onPressKey:t}),r.a.createElement("div",{className:y.a.longRow},["q","w","e","r","t","y","u","i","o","p"].map((function(e,a){return console.log("el"),console.log(e),r.a.createElement(m,{key:a,classN:"key",buttonId:e,onPressKey:t})}))),r.a.createElement("div",{className:y.a.shortRow},["{","}"].map((function(e,a){return console.log("el"),console.log(e),r.a.createElement(m,{key:a,classN:"key",buttonId:e,onPressKey:t})}))),r.a.createElement(m,{classN:"keyInv",buttonId:"",onPressKey:t})),r.a.createElement("div",{className:y.a.kbrow3},r.a.createElement(m,{classN:"keyCaps",buttonId:"CapsLock",onPressKey:t}),r.a.createElement("div",{className:y.a.longRow},["a","s","d","f","g","h","j","k","l"].map((function(e,a){return console.log("el"),console.log(e),r.a.createElement(m,{key:a,classN:"key",buttonId:e,onPressKey:t})}))),r.a.createElement("div",{className:y.a.shortRow},[";","@","#"].map((function(e,a){return console.log("el"),console.log(e),r.a.createElement(m,{key:a,classN:"key",buttonId:e,onPressKey:t})})))),r.a.createElement("div",{className:y.a.kbrow4},r.a.createElement(m,{classN:"keyBksl",buttonId:["\\"],onPressKey:t}),r.a.createElement("div",{className:y.a.longRow},["z","x","c","v","b","n","m"].map((function(e,a){return console.log("el"),console.log(e),r.a.createElement(m,{key:a,classN:"key",buttonId:e,onPressKey:t})}))),r.a.createElement("div",{className:y.a.shortRow},[",",".","?"].map((function(e,a){return console.log("el"),console.log(e),r.a.createElement(m,{key:a,classN:"key",buttonId:e,onPressKey:t})})))),r.a.createElement("div",{className:y.a.spaceBar},r.a.createElement(m,{classN:"key",buttonId:" ",onPressKey:t}))))},b=(a(18),function(e){var t=e.history,a=e.addState;return r.a.createElement("div",{className:"wrhItems"},r.a.createElement("button",{className:"save",onClick:function(e){a()}},"Save to history"),r.a.createElement("div",{className:"hItems"},t.map((function(e,t){return console.log("el"),console.log(e),r.a.createElement("div",{className:"hItem",key:t},e.textString)}))))}),p=(a(19),function(e){var t=Object(n.useState)({currentCh:"",textString:"",cursorPos:0,uppercase:!1}),a=Object(u.a)(t,2),o=a[0],s=a[1],m=Object(n.useState)([{}]),d=Object(u.a)(m,2),y=d[0],p=d[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"bkwr"},r.a.createElement("div",{className:"title"},"After you've typed some text, you can place the cursor anywhere on the text to change it."),r.a.createElement("div",{className:"box"},r.a.createElement(i,{text:o.textString,updateCursor:function(e){s((function(t){return{currentCh:t.currentCh,textString:t.textString,cursorPos:e}}))},getCursor:o.cursorPos})),r.a.createElement("div",{className:"keyb"},r.a.createElement(k,{onPressKey:function(e){var t="",a="",n="";"CapsLock"===e?s((function(e){return{currentCh:e.currentCh,textString:e.textString,cursorPos:e.cursorPos,uppercase:!e.uppercase}})):"Reset"===e?s((function(t){return{currentCh:e,textString:"",cursorPos:t.cursorPos-1,uppercase:t.uppercase}})):"Backspace"===e?(t=o.textString.substr(0,o.cursorPos-1),a=o.textString.substr(o.cursorPos),n=(n=n.concat(t)).concat(a),s((function(t){return{currentCh:e,textString:n,cursorPos:t.cursorPos-1,uppercase:t.uppercase}}))):(t=o.textString.substr(0,o.cursorPos),a=o.textString.substr(o.cursorPos),n=n.concat(t),n=(n=!0===o.uppercase?n.concat(e.toUpperCase()):n.concat(e)).concat(a),s((function(t){return{currentCh:e,textString:n,cursorPos:t.cursorPos+1,uppercase:t.uppercase}})))},caps:o.uppercase}))),r.a.createElement("div",{className:"hist"},r.a.createElement("div",{className:"history"},r.a.createElement(b,{history:y,addState:function(){var e=Object(l.a)({},o),t=Object(c.a)(y);console.log("tempList"),console.log(t),t.push(e),p(t)}})))))});var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.678bb46a.chunk.js.map