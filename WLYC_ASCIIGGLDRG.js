var LD_ASCII =require('./LD_ASCII');
var ASCII_LD_RJSE =require('./ASCII_LD_RJSE');
function WLYC_ASCIIGGLDRG(req,res){
    res.render('ASCIIGGLDRG', {JTYP_1: LD_ASCII(req.body.VDZV_1, ' '), JTYP_2: ASCII_LD_RJSE(req.body.VDZV_2, ' ')});
}
module.exports=WLYC_ASCIIGGLDRG;