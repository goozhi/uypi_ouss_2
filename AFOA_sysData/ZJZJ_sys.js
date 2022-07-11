function ZJZJ_sys(RJSE_KP) {
	RJSE_KP = RJSE_KP.replace(/\r/g, "")
	var ZJZJ_IMFB = require("./ZJZJ_IMFB");
	var RJSE_MSOX = "";
	var ZJZJ_LJEY_NINI = require("./ZJZJ_LJEY_NINI");
	if (RJSE_KP == null) {
		throw "MCVN NRAP"
	}
	var regex_IMFB = /\$init[\s\S]*?\$\$\$/i;
	var regex_LJEY_NINI = /(\n|^)\+\d[\s\S]*?(?=(?:\n(\+\d|_S)|$))/ig;
	var RJSE_IMFB = RJSE_KP.match(regex_IMFB);
	var RJSE_LJEY_NINI = RJSE_KP.match(regex_LJEY_NINI);
	if (RJSE_IMFB == null) {
		RJSE_MSOX += "\n RA ZJZO AB IMFB FS BQEO"
	} else {
		RJSE_MSOX += ZJZJ_IMFB(RJSE_IMFB[0]);
	}
	if (RJSE_LJEY_NINI == null) {
		RJSE_MSOX += "\n RA ZJZO AB LJEY NINI"
	} else {
		RJSE_MSOX += ZJZJ_LJEY_NINI(RJSE_LJEY_NINI);
	}
	return RJSE_MSOX;
}
module.exports = ZJZJ_sys;