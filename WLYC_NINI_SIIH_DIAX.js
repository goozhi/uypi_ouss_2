var NINI_SIIH_DIAX =require('./NINI_SIIH_DIAX');
function WLYC_NINI_SIIH_DIAX(req,res){
    res.render('NINI_SIIH_DIAX', {JTYP_1: NINI_SIIH_DIAX(req.body.VDZV_1)});
}
module.exports=WLYC_NINI_SIIH_DIAX;