

var encoding=require('encoding');
var {exec}=require('child_process');
const VR_AFOA_RJOK = require('./VR_AFOA_RJOK');
function WLYC_VR_EBWU_ATRS(req,res){
    var RJSE_KP=req.body.VDZV_1
    var RJOK_SOPC
        RJOK_SOPC=VR_AFOA_RJOK(RJSE_KP,"sopc","yhrj")        
    res.render('VR_EBWU_ATRS', {RJOK_SOPC});
    // exec('clip').stdin.end(encoding.convert(RJOK_SOPC,'gbk','utf8'))
}
module.exports=WLYC_VR_EBWU_ATRS;