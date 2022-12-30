function ZJZJ_sys_FTXB(RJSE_KP){
	RJSE_KP=RJSE_KP.replace(/\r/g,"");
	var ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ=require('./ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ')
	if(RJSE_KP==null){
		throw new Error("MCVN NRAP");
	}
	var diwr_RJSE_MSOX=ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ(RJSE_KP,"sysData")
	// return RJSE_MSOX;
	return new Promise((resolve,reject)=>{
		Promise.all([diwr_RJSE_MSOX]).then(jtyj=>{
			var RJSE_MSOX;
			if(jtyj[0]==""){
				RJSE_MSOX="[HMPC MSOX]";
			}else{
				RJSE_MSOX=jtyj[0];
			}
			resolve(RJSE_MSOX)
		})
	})
	
}
module.exports=ZJZJ_sys_FTXB;