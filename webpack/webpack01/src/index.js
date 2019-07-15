// const sayHi = require("./a.js")
// sayHi("kaikeba")

// debugger
// const Index = () => import('./a.js')

const sayHi = () => import('./a.js')

// const sayHi = function(){
//     return import('./a.js')
// }

// const sayHi = import('./a.js')
// debugger

sayHi.default("kaikeba")

