function ZJZJ_sys(RJSE_KP) {
	RJSE_KP = RJSE_KP.replace(/\r/g, "")
	var ZJZJ_TSJQ_Init = require("./ZJZJ_TSJQ_Init");
	var RJSE_MSOX = "";
	var ZJZJ_LJEY_NINI = require("./ZJZJ_LJEY_NINI");
	if (RJSE_KP == null) {
		throw "MCVN NRAP"
	}
	var regex_IMFB = /\$Init\b(?:(?!\$)[\S\s])*?(?=\$|$)/ig;
	var regex_LJEY_NINI = /(\n|^)\+\d[\s\S]*?(?=(?:\n(\+\d|_S)|$))/ig;
	var VNWM_IMFB = RJSE_KP.match(regex_IMFB);
	var RJSE_LJEY_NINI = RJSE_KP.match(regex_LJEY_NINI);
	if (VNWM_IMFB == null&&RJSE_LJEY_NINI == null) {

	} else if(VNWM_IMFB == null&&RJSE_LJEY_NINI != null){
		RJSE_MSOX += "\n<RA ZJZO AB IMFB FS BQEO>"+RJSE_KP.replace(/([\S\s]{599})[\S\s]+/,"$1...")+"\n</RA ZJZO AB IMFB FS BQEO>";
		RJSE_MSOX += ZJZJ_LJEY_NINI(RJSE_LJEY_NINI);
	}
	else if(VNWM_IMFB != null&&RJSE_LJEY_NINI == null){
		VNWM_IMFB.forEach(element => {
			RJSE_MSOX += ZJZJ_TSJQ_Init(element);			
		});
	}else{
		VNWM_IMFB.forEach(element => {
			RJSE_MSOX += ZJZJ_TSJQ_Init(element);			
		});
		RJSE_MSOX += ZJZJ_LJEY_NINI(RJSE_LJEY_NINI);
	}
	return RJSE_MSOX.replace(/\n\/\/line \d+/g,"\n");
}
module.exports = ZJZJ_sys;