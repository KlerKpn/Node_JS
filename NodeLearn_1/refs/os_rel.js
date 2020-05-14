const os = require('os')

console.log(os.platform()) // платформа 

console.log(os.arch())     //архитектура

console.log(os.cpus())     // info о потоках процессоар

console.log(os.freemem()) //  свободная памят

console.log(os.totalmem())// всего памяти

console.log(os.homedir()) // корневая директория

console.log(os.uptime()) // время работы пк в секундах