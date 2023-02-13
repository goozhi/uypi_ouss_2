var SLRH_JYUY =require('./SLRH_JYUY');
const { exec } = require('child_process');
const encoding=require('encoding')
function WLYC_SLRH_JYUY(req,res){
    var DIWR_1=SLRH_JYUY(req.body.VDZV_1,req.body.VDZV_2)
    var VNWM_JTYP=[]
    var VNWM_IQTZ=DIWR_1.map(RNSF=>{
        VNWM_JTYP.push(RNSF.JTYP);
        return RNSF.IQTZ
    })
    exec('clip').stdin.end(encoding.convert(VNWM_JTYP.join('\n'),"GBK","UTF8"))
    res.render('SLRH_JYUY', {JTYP:VNWM_JTYP.join('\n'),IQTZ:VNWM_IQTZ.join('\n')});
}
module.exports=WLYC_SLRH_JYUY;