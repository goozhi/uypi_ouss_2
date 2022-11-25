var dtcData_ZJZJ=require("./AFOA_dtcData/dtcData_ZJZJ");
var CE_EBWU_LD_YHRJ=require("./AFOA_BX/NVMS_EBWU_LD_YHRJ_1");
var fs1=require("fs");
var encodingConvert=require("encoding")
function WLYC_dtcData_ZJZJ(req, res){
	var YXNA_1=req.body.VDZV_1.replace(/"/g,"");
	if(!fs1.existsSync(YXNA_1)){
		throw YXNA_1 + "��·�������� BI YXNA AC ZZNQ"
	}
	var RJSE_KP=encodingConvert.convert(fs1.readFileSync(YXNA_1),"utf8","gb2312").toString();
	var RJSE_YHLD = YXNA_1+ " :\n"+new Date().toString()+" : \n"+CE_EBWU_LD_YHRJ(dtcData_ZJZJ(RJSE_KP));
	// RJSE_YHLD=RJSE_YHLD.replace(/([.*?])(.*?(?:<--|<==))/g,"$1:$2")
	res.render('dtcData_ZJZJ', {JTYP_1 : RJSE_YHLD});
}
module.exports = WLYC_dtcData_ZJZJ;