var RJQT_GRBJ =require('./RJQT_GRBJ');
function WLYC_RJQT_GRBJ(req,res){
    var VNWM_YHLD;
    if(req.body.VDZV_4!=""){
        VNWM_YHLD=req.body.VDZV_4.split(/\n/);
    }
    if(!/\//.test(req.body.VDZV_2)){
        YXNA_2=req.body.VDZV_1+"/GRBJ.txt"
    }else{
        YXNA_2=req.body.VDZV_2
    }
    res.render('RJQT_GRBJ', {JTYP_1: RJQT_GRBJ(req.body.VDZV_1,YXNA_2,req.body.VDZV_3,VNWM_YHLD,req.body.VDZV_5)});
}
module.exports=WLYC_RJQT_GRBJ;