const e=document.querySelector(".console-log");"undefined"!=typeof console&&(void 0!==console.log?console.olog=console.log:console.olog=function(){}),console.log=function(o){console.olog(o);let t=document.createElement("br");e.append(o),e.append(t)},console.error=console.debug=console.info=console.log,window.onerror=function(e,o,t,n,c){console.error(e)},document.querySelector(".click");const o=document.querySelector(".div");document.querySelector(".div-tests"),document.querySelector(".info"),document.querySelector(".input1"),document.querySelector(".input2"),document.querySelector(".input3"),document.querySelector(".function1"),document.querySelector(".function2"),document.querySelector("#select"),document.querySelectorAll(".checkbox"),document.querySelector(".range"),o.innerHTML+="W A S D to move";const t=document.createElement("div");t.setAttribute("id","player"),t.style.width="75px",t.style.height="75px",t.style.border="1px solid",o.append(t);let n=0,c=0;document.addEventListener("keydown",e=>{"s"===e.key?c+=10:"w"===e.key?c+=-10:"a"===e.key?n+=-10:"d"===e.key&&(n+=10),t.style.transform=`translate(${n}px, ${c}px)`});
//# sourceMappingURL=index.88120911.js.map
