var RJQT_FDMJ =require('./RJQT_FDMJ');
function WLYC_RJQT_FDMJ(req,res){
    var RJSE_YHLD;
    if(req.body.VDZV_4!=""){
        RJSE_YHLD=req.body.VDZV_4
    }
    var YXNA_2;
    if(!/\//.test(req.body.VDZV_2)){
        YXNA_2=req.body.VDZV_2.replace(/\/[^/]+/,"/RJQT_FDMJ/")
    }else{
        YXNA_2=req.body.VDZV_2
    }
    var RJSE_VDUM_RJQT_WU_SLGR=req.body.VDZV_5;
    var reg_1=req.body.VDZV_6
    res.render('RJQT_FDMJ', {JTYP_1: RJQT_FDMJ(req.body.VDZV_1,YXNA_2,req.body.VDZV_3,RJSE_YHLD,RJSE_VDUM_RJQT_WU_SLGR,reg_1)});
}
module.exports=WLYC_RJQT_FDMJ;