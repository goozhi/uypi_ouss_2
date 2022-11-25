var DIZCGGOUSS =require('./DIZCGGOUSS');
const { exec } = require('child_process');
const iconv = require('iconv-lite');

function WLYC_DIZCGGOUSS(req,res){
    var JTYP_2=req.body.VDZV_2
    JTYP_0=DIZCGGOUSS(req.body.VDZV_1,999,JTYP_2)
    exec('clip').stdin.end(iconv.encode(JTYP_0, 'gbk'));
    res.render('DIZCGGOUSS', {JTYP_1: JTYP_0, JTYP_2});
}
module.exports=WLYC_DIZCGGOUSS;