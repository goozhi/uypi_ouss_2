function sysData_ZJZJ(RJSE_KP){
var ZJZJ_ACUN=require("./ZJZJ_ACUN")
var ZJZJ_sys=require("./ZJZJ_sys");
var ZJZJ_sys_FTXB=require("./ZJZJ_sys_FTXB");
	if(RJSE_KP==null){
		throw "MCVN NRAP";
	}
	var regex_1=/(?:\n|^)_S\d[\s\S]*?(?=\n_S\d|$)/g;
	var regex_2=/@SYS/i;
	var VNWM_sys_1 = RJSE_KP.match(regex_1);
	var LD_XBST=RJSE_KP.match(regex_2);
	var VNWM_MSOX=[""];
	if(VNWM_sys_1==null){
		var RJSE_YHLD =ZJZJ_sys_FTXB(RJSE_KP);
		if(RJSE_YHLD!=""){
			return RJSE_YHLD;
		}else{
			return "";
		}
	}
	if(LD_XBST==null){
		VNWM_MSOX.push("NRAP XBST 如果这是完整的sysData文件, 则缺少头标识@SYS");
	}	
	var RJSE_ACUN = RJSE_KP.replace(regex_1, "").replace(regex_2,"");
	if(RJSE_ACUN!=""){
		var RJSE_YHLD=ZJZJ_ACUN(RJSE_ACUN);
		if(RJSE_YHLD!=""){
		VNWM_MSOX.push("不明内容 ACUN BQEO{ \n"+RJSE_YHLD+"\n}");
		}
	}

	VNWM_sys_1.forEach((RNSF_1)=>{
		var RJSE_YHLD = ZJZJ_sys(RNSF_1);
		if(RJSE_YHLD!=""){
			VNWM_MSOX.push(RJSE_YHLD);
		}
	})
	return VNWM_MSOX.join("\n");
}
module.exports=sysData_ZJZJ;