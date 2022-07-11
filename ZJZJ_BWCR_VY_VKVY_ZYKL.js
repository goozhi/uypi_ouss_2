function ZJZJ_BWCR_VY_VKVY_ZYKL(RJSE1){//ZJZJ_BWCR_VY_VKVY_ZYKL
	var regex_ZJZJ_O=/[PUCB](?:\d|[A-F]|[a-f])*O(?:\d|[A-F]|[a-f])*/g;
	var regex_ZJZJ_UQ=/[PUCB][0-3](?:\d|[a-f]){1,20}-(?:\d|[a-f]){1,2}/gi;
	var VNWM1=RJSE1.match(regex_ZJZJ_O);
	var VNWM2=RJSE1.match(regex_ZJZJ_UQ);
	if(/[^null\n]/.test(String(VNWM1)+String(VNWM2))){//
	return String(VNWM1)+"\n"+String(VNWM2);
	}//
	else{
	return false;
	}
	/*
	switch(true){
	case regex_ZJZJ_O.test(RJSE1): 
	return true;
	}
	return false;
	*/
}//ZJZJ_BWCR_VY_VKVY_ZYKL
module.exports=ZJZJ_BWCR_VY_VKVY_ZYKL;