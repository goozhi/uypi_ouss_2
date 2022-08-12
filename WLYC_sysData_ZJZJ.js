var sysData_ZJZJ=require("./AFOA_sysData/sysData_ZJZJ");
var CE_EBWU_LD_YHRJ=require("./KPLU/CE_EBWU_LD_YHRJ");
var fs1=require("fs");
var encodingConvert=require("encoding")
function WLYC_sysData_ZJZJ(req, res){
	var YXNA_1=req.body.VDZV_1;
	if(!fs1.existsSync(YXNA_1)){
		throw YXNA_1 + "该路径不存在 BI YXNA AC ZZNQ"
	}
	var RJSE_KP=encodingConvert.convert(fs1.readFileSync(YXNA_1),"utf8","gb2312").toString();
	var RJSE_YHLD = YXNA_1+ " : "+new Date().toString()+" : \n"+CE_EBWU_LD_YHRJ(sysData_ZJZJ(RJSE_KP));
	res.render('sysData_ZJZJ', {JTYP_1 : RJSE_YHLD});
}
module.exports = WLYC_sysData_ZJZJ;