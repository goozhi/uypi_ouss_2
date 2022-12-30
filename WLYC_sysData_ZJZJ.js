var sysData_ZJZJ=require("./AFOA_sysData/sysData_ZJZJ");
var NVMS_JTYJ_LD_html=require("./AFOA_BX/NVMS_JTYJ_LD_html")
var NVMS_EBWU_LD_YHRJ_1=require("./AFOA_BX/NVMS_EBWU_LD_YHRJ_1");
var fs1=require("fs");
var encodingConvert=require("encoding")
async function WLYC_sysData_ZJZJ(req, res){
	var YXNA_1=req.body.VDZV_1.replace(/"/g,"");
	if(!fs1.existsSync(YXNA_1)){
		throw YXNA_1 + "该路径不存在 BI YXNA AC ZZNQ"
	}
	var RJSE_KP=encodingConvert.convert(fs1.readFileSync(YXNA_1),"utf8","gb2312").toString();
	var jtyj = YXNA_1+ " :\n"+new Date().toString()+" : \n"+NVMS_EBWU_LD_YHRJ_1(new Error(await sysData_ZJZJ(RJSE_KP)));
	console.log('msox nvcm hfbc.')
    var rj_html = await NVMS_JTYJ_LD_html(jtyj)
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    });
    res.write(rj_html);
    res.end();
    return;
	// res.render('sysData_ZJZJ', {JTYP_1 : RJSE_YHLD});
}
module.exports = WLYC_sysData_ZJZJ;