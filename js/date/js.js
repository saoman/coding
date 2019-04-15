let date = fecha.parse('2018-12-17 07:00','YYYY-MM-DD HH:mm'); // new Date(2010, 11, 10, 14, 11, 12)

let b = fecha.format(date,'YYYY-MM-DD HH:mm'); // 'Nov 20, 2015'
let d = fecha.parse('2018-08-13T17:14:22+08:00','YYYY-MM-DDTHH:mm:ss'); // new Date(2010, 11, 10, 14, 11, 12)
let bb = fecha.format(d,'YYYY-MM-DDTHH:mm:ss'); // 'Nov 20, 2015'
