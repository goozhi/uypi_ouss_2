var ESIH_BRTZ_FS =require('./ESIH_BRTZ_FS');
const { exec } = require('child_process');
const iconv = require('iconv-lite');

function WLYC_ESIH_BRTZ_FS(req,res){
    JTYP_0=ESIH_BRTZ_FS(req.body.VDZV_1)
    exec('clip').stdin.end(iconv.encode(JTYP_0, 'gbk'));

    res.render('ESIH_BRTZ_FS', {JTYP_1: JTYP_0});
}
module.exports=WLYC_ESIH_BRTZ_FS;