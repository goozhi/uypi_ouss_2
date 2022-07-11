function ZJZJ_ACUN(RJSE_KP){
	regex_1=/^\s*\/\/[^\$]*$/;
	regex_RGQH=/^\s.*$/;
	var VNWM_2=new Array()
	var VNWM_1 =RJSE_KP.split(/\n/);
	for (FO_1 in VNWM_1){
		if(regex_1.test(VNWM_1[FO_1])){
			
		}else if(regex_RGQH.test(VNWM_1[FO_1])){
		}else{
			VNWM_2.push(VNWM_1[FO_1]);
		}
	}
	var RJSE_MSOX=VNWM_2.join("");
	return RJSE_MSOX;
}
module.exports=ZJZJ_ACUN;
