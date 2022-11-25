function ZJZJ_sys_FTXB(RJSE_KP){
	RJSE_KP=RJSE_KP.replace(/\r/g,"");
	var ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ=require('./ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ')
	if(RJSE_KP==null){
		throw new Error("MCVN NRAP");
	}
	var RJSE_MSOX=ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ(RJSE_KP,"sysData")
	if(RJSE_MSOX==""){
		RJSE_MSOX="[HMPC MSOX]";
	}
	return RJSE_MSOX;
	
}
module.exports=ZJZJ_sys_FTXB;