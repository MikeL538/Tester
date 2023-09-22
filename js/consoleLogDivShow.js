const consoleLog = document.querySelector(".console-log");

if (typeof console != "undefined")
  if (typeof console.log != "undefined") console.olog = console.log;
  else console.olog = function () {};

console.log = function (message) {
  console.olog(message);
  const br = document.createElement("br");
  consoleLog.append(message);
  consoleLog.append(br);
};

console.error = console.debug = console.info = console.log;

window.onerror = function (message, source, line, column, error) {
  console.error(message);
};
