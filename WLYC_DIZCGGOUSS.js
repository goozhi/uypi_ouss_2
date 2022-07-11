var DIZCGGOUSS =require('./DIZCGGOUSS');
function WLYC_DIZCGGOUSS(req,res){
    res.render('DIZCGGOUSS', {JTYP_1: DIZCGGOUSS(req.body.VDZV_1,999)});
}
module.exports=WLYC_DIZCGGOUSS;