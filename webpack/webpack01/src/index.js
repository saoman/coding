// 1 require
// const sayHi = require("./a.js")
// sayHi("kaikeba")

// 2 import from 
// import sayHi from('./a.js')
// sayHi("kaikeba")

// 3 import function
import('./a.js')
  .then(sayHi => {
    sayHi.default("sakdkjk");
  })
  .catch(error => {
    /* Error handling */
  })
