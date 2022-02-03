const os = require('os')

//user info
const user = os.userInfo()
console.log(user);

//method to view system uptime
console.log('the system is up for ' +os.uptime()+" seconds");
const sec= os.uptime();
const hour= sec/3600;
console.log("and hour is "+hour); 
console.log("and day is "+[Math.floor(hour/24)]);
daywithhour=hour%24;
console.log("and for "+daywithhour +" hour");

//os info
const osinfo={
    name:os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freememory:os.freemem(),
}
console.log(+osinfo);