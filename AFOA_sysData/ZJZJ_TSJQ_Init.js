const ZJZJ_ES = require('./ZJZJ_ES');

function ZJZJ_TSJQ_Init(RJSE_KP) {
	var ZJZJ_LIQH_ZV_reg_VNWM = require('./ZJZJ_LIQH_ZV_reg_VNWM');
	var UXUX_YHLD = typeof (RJSE_KP);
	if (UXUX_YHLD != "string") {
		throw new Error("MCVN UXUX MSOX : " + UXUX_YHLD + RJSE_KP)
	}
	var RJSE_1=RJSE_KP;
	var RJSE_MSOX=""
	var reg_in = /\bin\b.*/;
	var IOWR_YHLD=RJSE_1.match(reg_in)
	if(IOWR_YHLD==null){
		RJSE_MSOX+="[in MCVN AC ZZNQ] "+RJSE_KP.match(/.*\/\/line \d+/);
	}else{
		var reg_in_CXAV_TSJQ = /[a-z]+(?:\{.*?\}|\(.*\))/ig;
		var VNWM_in_CXAV_TSJQ = IOWR_YHLD[0].match(reg_in_CXAV_TSJQ);
		if(VNWM_in_CXAV_TSJQ==null){
			RJSE_MSOX+="[in MCVN MSOX] "+IOWR_YHLD[0]+" <--";
		}else{
			VNWM_in_CXAV_TSJQ.forEach(RNSF => {
				switch(true){
					case /in\{null\}/i.test(RNSF):
						break;
					case /in\{.*\}/i.test(RNSF):
						RJSE_MSOX+=ZJZJ_ES(RNSF.replace(/in/,""));
					break;
					case /FaultSend\(.*\)/i.test(RNSF):
					break;
					case /PSW27\{.*\}/i.test(RNSF):
					break;
					default:
						RJSE_MSOX+="\n[in ACUN MCVN] "+RNSF +"<--";
				}
			});
		}
		if(RJSE_MSOX!=""){
			RJSE_MSOX+=IOWR_YHLD[0].match(/.*\/\/line \d+/)
		}
		var RJSE_1=RJSE_1.replace(reg_in,"");
	}
	var reg_BX = require('./reg_BX');
	var reg_BX_VXUX = new reg_BX();
	var VNWM_YHLD = reg_BX_VXUX.hang_VNWM_init;
	RJSE_MSOX += ZJZJ_LIQH_ZV_reg_VNWM(RJSE_1, VNWM_YHLD);
	return RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_Init;
