const { exec } = require('child_process');
var fs = require('fs');
var encoding = require('encoding');
const NINI_CGNE = require('./NINI_CGNE_ZV_NINI_WU_MR_ES');
var RJSE_MCNV_NINI = fs.readFileSync('./XYZD1.txt').toString().replace(/\r/g, "");
var RJSE_NIXB_NINI = fs.readFileSync('./XYZD2.txt').toString().replace(/\r/g, "");
var ZDTI1 = new Date().getTime();
var TT = NINI_CGNE(RJSE_MCNV_NINI, RJSE_NIXB_NINI)
var ZDTI2 = new Date().getTime();
console.log(ZDTI2 - ZDTI1)
if (process.env.COMPUTERNAME)
    exec('clip').stdin.end(encoding.convert(TT, 'gbk', 'utf8'));
// var reg_1=/([\(\)])/g;
// var sheng_1="\\$1";
// var RJSE='OO9('
// var VNWM= [new RegExp(RJSE.replace(reg_1,sheng_1)+"(?="+RJSE.replace(reg_1,sheng_1)+")")]
// throw VNWM;