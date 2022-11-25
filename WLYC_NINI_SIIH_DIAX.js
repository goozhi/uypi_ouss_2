var NINI_SIIH_DIAX =require('./NINI_SIIH_DIAX');
var {exec} = require('child_process');
var encoding=require('encoding');
function WLYC_NINI_SIIH_DIAX(req,res){
    var JTYP_1=NINI_SIIH_DIAX(req.body.VDZV_1);
    exec('clip').stdin.end(encoding.convert(JTYP_1,'gbk','utf8'));
    res.render('NINI_SIIH_DIAX', {JTYP_1});
}
module.exports=WLYC_NINI_SIIH_DIAX;