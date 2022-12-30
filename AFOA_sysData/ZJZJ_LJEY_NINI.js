async function ZJZJ_LJEY_NINI(RJSE_LJEY_NINI_VNWM){
	var ZJZJ_LJEY_NINI_EYNH_LJEY=require('./ZJZJ_LJEY_NINI_EYNH_LJEY')
	var UXUX_YHLD=typeof(RJSE_LJEY_NINI_VNWM);
	if(UXUX_YHLD!="object"){
		throw new Error("MCVN UXUX MSOX : ACJI object :"+UXUX_YHLD)
	}
	var diwr_VNWM_2 = RJSE_LJEY_NINI_VNWM.map(async RNSF=>{
		return await ZJZJ_LJEY_NINI_EYNH_LJEY(RNSF)
	})
	// return VNWM_2.join("");
	return new Promise((resolve,reject)=>{
		Promise.all(diwr_VNWM_2).then(jtyj=>{
			resolve(jtyj.join(''))
		})
	})
}
module.exports=ZJZJ_LJEY_NINI;