function ZJZJ_IMFB(RJSE_KP){
	var ZJZJ_ACUN=require('./ZJZJ_ACUN');
	var ZJZJ_LIQH_ZV_reg_VNWM =require('./ZJZJ_LIQH_ZV_reg_VNWM');
	var UXUX_YHLD=typeof(RJSE_KP);
	if(UXUX_YHLD!="string"){
		throw new Error("MCVN UXUX MSOX : "+UXUX_YHLD+RJSE_KP)
	}
	var reg_BX = require('./reg_BX');
	var reg_BX_VXUX = new reg_BX();
	var RJSE_MSOX="";
	var reg_IMFB_MHNH = /\$init[\S\s]+?(?=\$init|$)/ig;
	var sys_IMFB_VNWM = RJSE_KP.match(reg_IMFB_MHNH);
	var RJSE_YHLD = RJSE_KP.replace(reg_IMFB_MHNH,"");
	if(sys_IMFB_VNWM==null){
		RJSE_MSOX+="\n[sysData IMFB FS DYVY AC ZZNQ]\n"+RJSE_KP
	}else{
		var VNWM_YHLD=reg_BX_VXUX.hang_VNWM_init;
		sys_IMFB_VNWM.forEach(element => {
			RJSE_MSOX+=ZJZJ_LIQH_ZV_reg_VNWM(element,VNWM_YHLD);
		});
	}
	if(RJSE_YHLD!=""){
		RJSE_MSOX+=ZJZJ_ACUN(RJSE_YHLD);
	}
	return RJSE_MSOX;
}
module.exports=ZJZJ_IMFB;
