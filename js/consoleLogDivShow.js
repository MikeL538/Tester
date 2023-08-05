const button = document.querySelector(".click");
const span = document.querySelector(".info");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const div = document.querySelector(".div");
const consoleLog = document.querySelector(".console-log");

if (typeof console != "undefined")
  if (typeof console.log != "undefined") console.olog = console.log;
  else console.olog = function () {};

console.log = function (message) {
  console.olog(message);
  const br = document.createElement("br");
  consoleLog.prepend(br);
  consoleLog.prepend(message);
};

console.error = console.debug = console.info = console.log;

window.onerror = function (message, source, line, column, error) {
  console.error(message);
};
