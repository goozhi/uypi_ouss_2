
var VR_EBWU_AFOA_BRTZ_FS =require('./VR_EBWU_AFOA_BRTZ_FS');
var encoding=require('encoding');
var {exec}=require('child_process');
function WLYC_VR_EBWU_AFOA_BRTZ_FS(req,res){
    var RJSE_KP=req.body.VDZV_1
    var JTYP_1;
        JTYP_1=VR_EBWU_AFOA_BRTZ_FS(RJSE_KP)
    res.render('VR_EBWU_BRTZ_FS', {JTYP_1,RJSE_KP});
    exec('clip').stdin.end(encoding.convert(JTYP_1,'gbk','utf8'))
}
module.exports=WLYC_VR_EBWU_AFOA_BRTZ_FS;