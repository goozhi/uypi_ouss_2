var TYUB_LDRG_PAAW =require('./TYUB_LDRG_PAAW');
function WLYC_TYUB_LDRG(req,res){
    res.render('TYUB_LDRG', {JTYP_1: TYUB_LDRG_PAAW(req.body.VDZV_1,req.body.VDZV_2,req.body.VDZV_3)});
}
module.exports=WLYC_TYUB_LDRG;