// * EVENTS

const EventEmiiter = require("node:events");

const emitter = new EventEmiiter();
// 1. on (listner)
emitter.on("ON_LLM_CALL", () => {
  console.log("Hello LLM is calling 🤯");
});

// 2. emit
// emitter.emit("ON_LLM_CALL");

setTimeout(() => {
  emitter.emit("ON_LLM_CALL");
}, 3000);

setInterval(() => {
  emitter.emit("ON_LLM_CALL");
}, 3000);

