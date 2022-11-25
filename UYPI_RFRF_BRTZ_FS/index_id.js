const fs=require('fs');
const zhqh = require('.');
function index1(rjse_kp){
    var rj1=fs.readFileSync(rjse_kp).toString()
    return zhqh(rj1)
}
module.exports=index1;