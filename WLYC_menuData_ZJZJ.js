var menuData_ZJZJ=require("./AFOA_menuData/menuData_ZJZJ");
var CE_EBWU_LD_YHRJ=require("./AFOA_BX/NVMS_EBWU_LD_YHRJ_1");
function WLYC_menuData_ZJZJ(req, res){
	var RJSE_KP=req.body.VDZV_1;
	var RJSE_YHLD = new Date().toString()+" : \n"+CE_EBWU_LD_YHRJ(menuData_ZJZJ(RJSE_KP));
	res.render('menuData_ZJZJ', {JTYP_1 : RJSE_YHLD});
}
module.exports = WLYC_menuData_ZJZJ;