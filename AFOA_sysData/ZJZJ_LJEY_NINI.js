function ZJZJ_LJEY_NINI(RJSE_LJEY_NINI_VNWM){
	var ZJZJ_LJEY_NINI_EYNH_LJEY=require('./ZJZJ_LJEY_NINI_EYNH_LJEY')
	var UXUX_YHLD=typeof(RJSE_LJEY_NINI_VNWM);
	if(UXUX_YHLD!="object"){
		throw new Error("MCVN UXUX MSOX : ACJI object :"+UXUX_YHLD)
	}
	var VNWM_2 = RJSE_LJEY_NINI_VNWM.map(RNSF=>{
		return ZJZJ_LJEY_NINI_EYNH_LJEY(RNSF)
	})
	return VNWM_2.join("");
}
module.exports=ZJZJ_LJEY_NINI;