var BRTZ_FS_3f =require('./BRTZ_FS_3f');
function WLYC_BRTZ_FS_3f(req,res){
    var RJSE_1 = req.body.VDZV_1;
    if(!/\n999/.test(RJSE_1)){
        RJSE_1="998\n"+RJSE_1+"\n999";
    }
    res.render('BRTZ_FS_3f', {JTYP_1: BRTZ_FS_3f(RJSE_1)});
}
module.exports=WLYC_BRTZ_FS_3f;