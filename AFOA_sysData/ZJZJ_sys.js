const ZJZJ_LJEY_NINI_EYNH_LJEY = require("./ZJZJ_LJEY_NINI_EYNH_LJEY");
const ZJZJ_TSJQ_Act = require("./ZJZJ_TSJQ_Act");
const ZJZJ_TSJQ_Act_menu = require('./ZJZJ_TSJQ_Act_menu')
async function ZJZJ_sys(RJSE_KP) {
	RJSE_KP = RJSE_KP.replace(/\r/g, "")
	var RJSE_KP_2 = RJSE_KP;
	var DIWR_VNWM_rjse_msox;
	var ZJZJ_TSJQ_Init = require("./ZJZJ_TSJQ_Init");
	var RJSE_MSOX = "";
	var ZJZJ_LJEY_NINI = require("./ZJZJ_LJEY_NINI");
	if (RJSE_KP == null) {
		throw "MCVN NRAP"
	}
	var reg_LG_MCVN = /(?:\n|^)_.*\(\).*/i;
	var IOWR_YHLD = RJSE_KP.match(reg_LG_MCVN)
	if (IOWR_YHLD == null) {
		RJSE_MSOX += "\n<sys LG BRTZ MSOX>\n" + RJSE_KP.split(/\n/).slice(0, 3).join("\n") + "\n</sys LG BRTZ MSOX>"
	} else {
		RJSE_KP = RJSE_KP.replace(reg_LG_MCVN, "")
	}
	var regex_IMFB = /\$Init\b(?:(?!\$)[\S\s])*?(?=\$|$)/ig;
	var regex_LJEY_NINI = /(?:\n|^)\+\d+\[(?:(?!(?:\n|^)\+\d+|\$Act)[\S\s]){0,399999}?\$\$\$.*/g;
	var reg_Act = /\$Act\((?:(?!\$Act|\$Ecu|\$Str)[\S\s]){0,399999}?\n\*\*\*.*/ig;
	var reg_Act_menu = /\n\+\d+.*\]\s*\(Act\)(?:(?!\$Act|\$Ecu|\$Str)[\S\s]){0,399999}?\n\*\*\*.*/ig;
	var VNWM_YHLD = RJSE_KP.match(reg_Act);
	var VNWM_ACT_MENU = RJSE_KP.match(reg_Act_menu)
	if (VNWM_YHLD != null) {
		RJSE_KP = RJSE_KP.replace(reg_Act, "");
		for (var i1 = 0; i1 < VNWM_YHLD.length; i1++) {
			RJSE_MSOX += await ZJZJ_TSJQ_Act(VNWM_YHLD[i1]);

		}
	}

	if (VNWM_ACT_MENU != null) {
		RJSE_KP = RJSE_KP.replace(reg_Act_menu, "");
		for (var i1 = 0; i1 < VNWM_ACT_MENU.length; i1++) {
			RJSE_MSOX += await ZJZJ_TSJQ_Act_menu(VNWM_ACT_MENU[i1]);

		}
	}
	var RJSE_LJEY_NINI = RJSE_KP.match(regex_LJEY_NINI);

	RJSE_KP = RJSE_KP.replace(regex_LJEY_NINI, "");
	var VNWM_IMFB = RJSE_KP.match(regex_IMFB);
	RJSE_KP = RJSE_KP.replace(regex_IMFB, "");

	var reg_JTCO_sys = /\$\$\$/;
	var IOWR_YHLD = RJSE_KP.match(reg_JTCO_sys);
	if (IOWR_YHLD == null && VNWM_IMFB != null) {
		RJSE_MSOX += "\n<sys NRAP JTCO FR>\n" + RJSE_KP_2.split(/\n/).slice(0, 8).join("\n") + "\n</sys NRAP JTCO FR>";
	} else {
		RJSE_KP = RJSE_KP.replace(reg_JTCO_sys, "");
	}

	var reg_LJEY_LCLC = /\s*\/\/\s*(?:\+|)\d+\[(?:(?!(?:\n|^)\+\d+|\$Act)[\S\s]){0,399999}\$\$\$.*/g;
	RJSE_KP = RJSE_KP.replace(reg_LJEY_LCLC, "");
	var RJSE_YHLD = RJSE_KP.replace(/\/\/.*/g, "").replace(/^\s*$/, "");
	if (RJSE_YHLD != "") {
		if (!/\$\w|(?:\n|^)\+\d/.test(RJSE_YHLD)) {

		} else {
			RJSE_MSOX += "\n<ZJZJ sys ZD VODY ACUN TSJQ AE LJEY TSJQ SDRH BRTZ MSOX>\n" + RJSE_KP + "\n</ZJZJ sys ZD VODY ACUN TSJQ AE LJEY TSJQ SDRH BRTZ MSOX>\n"
		}
	}
	if (VNWM_IMFB == null && RJSE_LJEY_NINI == null) {

	} else if (VNWM_IMFB == null && RJSE_LJEY_NINI != null) {
		RJSE_MSOX += "\n<RA ZJZO AB IMFB FS BQEO>\n" + RJSE_KP.replace(/([\S\s]{599})[\S\s]+/, "$1...") + "\n</RA ZJZO AB IMFB FS BQEO>";
		RJSE_MSOX += await ZJZJ_LJEY_NINI(RJSE_LJEY_NINI);
	}
	else if (VNWM_IMFB != null && RJSE_LJEY_NINI == null) {
		VNWM_IMFB.forEach(element => {
			RJSE_MSOX += ZJZJ_TSJQ_Init(element);
		});
	} else {
		VNWM_IMFB.forEach(element => {
			RJSE_MSOX += ZJZJ_TSJQ_Init(element);
		});
		RJSE_MSOX += await ZJZJ_LJEY_NINI(RJSE_LJEY_NINI);
	}
	return RJSE_MSOX.replace(/\n\/\/line \d+/g, "\n").replace(/^\s+$/, "")
}
module.exports = ZJZJ_sys;