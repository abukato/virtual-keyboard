!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(2),e.exports=n(1)},function(e,t,n){},function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.r(t);var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.keyCode=t.code,this.engValue=t.eng,this.ruValue=t.ru,this.pritable=t.printable,this.lang=n}var t,n,r;return t=e,(n=[{key:"createKey",value:function(){var e="";switch(this.lang){case"ru":e='\n          <button class="key '.concat(this.keyCode.toLowerCase(),'" data-printable=').concat(this.pritable,'>\n            <span class="engLow">').concat(this.engValue[0],'</span>\n            <span class="engUp">').concat(this.engValue[1],'</span>\n            <span class="ruLow visible">').concat(this.ruValue[0],'</span>\n            <span class="ruUp">').concat(this.ruValue[1],"</span>\n          </button>\n        ");break;default:e='\n          <button class="key '.concat(this.keyCode.toLowerCase(),'" data-printable=').concat(this.pritable,'>\n            <span class="engLow visible">').concat(this.engValue[0],'</span>\n            <span class="engUp">').concat(this.engValue[1],'</span>\n            <span class="ruLow">').concat(this.ruValue[0],'</span>\n            <span class="ruUp">').concat(this.ruValue[1],"</span>\n          </button>\n        ")}return e}}])&&a(t.prototype,n),r&&a(t,r),e}(),i=[[{code:"Backquote",eng:["`","~"],ru:["ё","Ё"],printable:!0},{code:"Digit1",eng:["1","!"],ru:["1","!"],printable:!0},{code:"Digit2",eng:["2","@"],ru:["2",'"'],printable:!0},{code:"Digit3",eng:["3","#"],ru:["3","№"],printable:!0},{code:"Digit4",eng:["4","$"],ru:["4",";"],printable:!0},{code:"Digit5",eng:["5","%"],ru:["5","%"],printable:!0},{code:"Digit6",eng:["6","^"],ru:["6",":"],printable:!0},{code:"Digit7",eng:["7","&"],ru:["7","?"],printable:!0},{code:"Digit8",eng:["8","*"],ru:["8","*"],printable:!0},{code:"Digit9",eng:["9","("],ru:["9","("],printable:!0},{code:"Digit0",eng:["0",")"],ru:["0",")"],printable:!0},{code:"Minus",eng:["-","_"],ru:["-","_"],printable:!0},{code:"Equal",eng:["=","+"],ru:["=","+"],printable:!0},{code:"Backspace",eng:["Backspace ⟵","Backspace ⟵"],ru:["Backspace ⟵","Backspace ⟵"],printable:!1}],[{code:"Tab",eng:["Tab ↹","Tab ↹"],ru:["Tab ↹","Tab ↹"],printable:!1},{code:"KeyQ",eng:["q","Q"],ru:["й","Й"],printable:!0},{code:"KeyW",eng:["w","W"],ru:["ц","Ц"],printable:!0},{code:"KeyE",eng:["e","E"],ru:["у","У"],printable:!0},{code:"KeyR",eng:["r","R"],ru:["к","К"],printable:!0},{code:"KeyT",eng:["t","T"],ru:["е","Е"],printable:!0},{code:"KeyY",eng:["y","Y"],ru:["н","Н"],printable:!0},{code:"KeyU",eng:["u","U"],ru:["г","Г"],printable:!0},{code:"KeyI",eng:["i","I"],ru:["ш","Ш"],printable:!0},{code:"KeyO",eng:["o","O"],ru:["щ","Щ"],printable:!0},{code:"KeyP",eng:["p","P"],ru:["з","З"],printable:!0},{code:"BracketLeft",eng:["[","{"],ru:["х","Х"],printable:!0},{code:"BracketRight",eng:["]","}"],ru:["ъ","Ъ"],printable:!0},{code:"Backslash",eng:["\\","|"],ru:["\\","/"],printable:!0}],[{code:"CapsLock",eng:["Caps Lock","Caps Lock"],ru:["Caps Lock","Caps Lock"],printable:!1},{code:"KeyA",eng:["a","A"],ru:["ф","Ф"],printable:!0},{code:"KeyS",eng:["s","S"],ru:["ы","Ы"],printable:!0},{code:"KeyD",eng:["d","D"],ru:["в","В"],printable:!0},{code:"KeyF",eng:["f","F"],ru:["а","А"],printable:!0},{code:"KeyG",eng:["g","G"],ru:["п","П"],printable:!0},{code:"KeyH",eng:["h","H"],ru:["р","Р"],printable:!0},{code:"KeyJ",eng:["j","J"],ru:["о","О"],printable:!0},{code:"KeyK",eng:["k","K"],ru:["л","Л"],printable:!0},{code:"KeyL",eng:["l","L"],ru:["д","Д"],printable:!0},{code:"Semicolon",eng:[";",":"],ru:["ж","Ж"],printable:!0},{code:"Quote",eng:["'",'"'],ru:["э","Э"],printable:!0},{code:"Enter",eng:["Enter ↵","Enter ↵"],ru:["Enter ↵","Enter ↵"],printable:!1}],[{code:"ShiftLeft",eng:["Shift ⇧","Shift ⇧"],ru:["Shift ⇧","Shift ⇧"],printable:!1},{code:"KeyZ",eng:["z","Z"],ru:["я","Я"],printable:!0},{code:"KeyX",eng:["x","X"],ru:["ч","Ч"],printable:!0},{code:"KeyC",eng:["c","C"],ru:["с","С"],printable:!0},{code:"KeyV",eng:["v","V"],ru:["м","М"],printable:!0},{code:"KeyB",eng:["b","B"],ru:["и","И"],printable:!0},{code:"KeyN",eng:["n","N"],ru:["т","Т"],printable:!0},{code:"KeyM",eng:["m","M"],ru:["ь","Ь"],printable:!0},{code:"Comma",eng:[",","<"],ru:["б","Б"],printable:!0},{code:"Period",eng:[".",">"],ru:["ю","Ю"],printable:!0},{code:"Slash",eng:["/","?"],ru:[".",","],printable:!0},{code:"ArrowUp",eng:["↑","↑"],ru:["↑","↑"],printable:!0},{code:"ShiftRight",eng:["Shift ⇧","Shift ⇧"],ru:["Shift ⇧","Shift ⇧"],printable:!1}],[{code:"ControlLeft",eng:["Ctrl","Ctrl"],ru:["Ctrl","Ctrl"],printable:!1},{code:"MetaLeft",eng:["Win","Win"],ru:["Win","Win"],printable:!1},{code:"AltLeft",eng:["Alt","Alt"],ru:["Alt","Alt"],printable:!1},{code:"Space",eng:[" "," "],ru:[" "," "],printable:!1},{code:"AltRight",eng:["Alt","Alt"],ru:["Alt","Alt"],printable:!1},{code:"ControlRight",eng:["Ctrl","Ctrl"],ru:["Ctrl","Ctrl"],printable:!1},{code:"ArrowLeft",eng:["←","←"],ru:["←","←"],printable:!0},{code:"ArrowDown",eng:["↓","↓"],ru:["↓","↓"],printable:!0},{code:"ArrowRight",eng:["→","→"],ru:["→","→"],printable:!0}]],o=[192,49,50,51,52,53,54,55,56,57,48,189,187,8,220,221,219,80,79,73,85,89,84,82,69,87,81,9,20,65,83,68,70,71,72,74,75,76,186,222,13,16,191,190,188,77,78,66,86,67,88,90,91,18,32,18,17,37,40,38,39],c=[8,9,13,32,91],l=[192,49,50,51,52,53,54,55,56,57,48,189,187,220,221,219,80,79,73,85,89,84,82,69,87,81,65,83,68,70,71,72,74,75,76,186,222,191,190,188,77,78,66,86,67,88,90,37,40,38,39];function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var u=document.querySelector("body"),d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t.title,this.osInfo=t.osInfo,this.switchLanguageInfo=t.switchLanguageInfo,this.gitHubLink=t.gitHubLink,this.textAreaValue="",this.keysData=i,this.lang=localStorage.lang||"eng",this.isCapsLock=!1}var t,n,a;return t=e,(n=[{key:"showDesiredKeys",value:function(){var e=document.querySelectorAll("span"),t=document.querySelectorAll(".engUp"),n=document.querySelectorAll(".engLow"),a=document.querySelectorAll(".ruUp"),r=document.querySelectorAll(".ruLow"),i=function(e){return e.classList.add("visible")};e.forEach((function(e){return e.classList.remove("visible")})),this.isCapsLock&&"eng"===this.lang?t.forEach((function(e){return i(e)})):this.isCapsLock||"eng"!==this.lang?this.isCapsLock&&"ru"===this.lang?a.forEach((function(e){return i(e)})):r.forEach((function(e){return i(e)})):n.forEach((function(e){return i(e)}))}},{key:"printKeyValue",value:function(e){var t=e.querySelector(".visible").innerText,n=document.querySelector(".output__field");this.textAreaValue+=t,n.value=this.textAreaValue}},{key:"keysDataCaseToggler",value:function(){this.isCapsLock=!this.isCapsLock,this.showDesiredKeys()}},{key:"changeLanguage",value:function(){this.lang="eng"===this.lang?"ru":"eng",localStorage.lang=this.lang,this.showDesiredKeys()}},{key:"doKeyAction",value:function(e){var t=document.querySelector(".output__field"),n=e.classList;n.contains("backspace")&&(this.textAreaValue=this.textAreaValue.slice(0,-1),t.value=this.textAreaValue),n.contains("space")&&(this.textAreaValue="".concat(this.textAreaValue," "),t.value=this.textAreaValue),n.contains("enter")&&(this.textAreaValue="".concat(this.textAreaValue,"\n"),t.value=this.textAreaValue),n.contains("tab")&&(this.textAreaValue="".concat(this.textAreaValue,"    "),t.value=this.textAreaValue),n.contains("capslock")&&(n.contains("capslock__active")?n.remove("capslock__active"):n.add("capslock__active"),this.keysDataCaseToggler(e)),n.contains("shiftleft")&&this.keysDataCaseToggler(e)}},{key:"onMouseClickHandler",value:function(e){var t=e.target.closest("button");t&&("true"===t.dataset.printable?this.printKeyValue(t):(t.classList.contains("metaleft")&&this.changeLanguage(),this.doKeyAction(t)))}},{key:"onKeyDownHandler",value:function(e){if(e.preventDefault(),o.includes(e.keyCode)){var t=e.code.toLowerCase(),n=document.querySelector(".".concat(t));n.classList.add("key__press"),e.ctrlKey&&e.altKey&&this.changeLanguage(),16!==e.keyCode||e.repeat||this.doKeyAction(n),20!==e.keyCode||e.repeat||this.doKeyAction(n),c.includes(e.keyCode)&&this.doKeyAction(n),l.includes(e.keyCode)&&this.printKeyValue(n)}}},{key:"onKeyUpHandler",value:function(e){if(e.preventDefault(),o.includes(e.keyCode)){var t=e.code.toLowerCase(),n=document.querySelector(".".concat(t));n.classList.remove("key__press"),16!==e.keyCode||e.repeat||this.doKeyAction(n)}}},{key:"createKeyboardKey",value:function(){for(var e=document.querySelector(".keyboard__keys"),t=this.keysData.length,n=0;n<t;n+=1){var a=document.createElement("div");a.classList.add("row","row".concat(n+1)),e.append(a);for(var i=0;i<this.keysData[n].length;i+=1){var o=new r(this.keysData[n][i],this.lang).createKey();document.querySelector(".row".concat(n+1)).insertAdjacentHTML("beforeend",o)}}}},{key:"init",value:function(){var e='\n      <header>\n        <h1 class="title">'.concat(this.title,'</h1>\n      </header>\n      <main>\n        <section class="output">\n          <textarea class="output__field" disabled>').concat(this.textAreaValue,'</textarea>\n        </section>\n        <section class="keyboard">\n          <div class="keyboard__keys">\n          </div>\n        </section>\n        <p>').concat(this.osInfo,"</p>\n        <p>").concat(this.switchLanguageInfo,'</p>\n      </main>\n      <footer>\n        <a class="github-link" href=').concat(this.gitHubLink,">GitHub</a>\n      </footer>\n    ");u.innerHTML=e,this.createKeyboardKey(),document.querySelector(".keyboard__keys").addEventListener("click",this.onMouseClickHandler.bind(this)),u.addEventListener("keydown",this.onKeyDownHandler.bind(this)),u.addEventListener("keyup",this.onKeyUpHandler.bind(this))}}])&&s(t.prototype,n),a&&s(t,a),e}(),p={title:"RS School Task: Virtual Keyboard",osInfo:"Создано в ОС Windows",switchLanguageInfo:"Переключение языка: ALT + CTRL на физической клавиатуре или конпка WIN при клике мышью",gitHubLink:"https://github.com/abukato/virtual-keyboard/tree/gh-pages"};window.onload=function(){new d(p).init()}}]);