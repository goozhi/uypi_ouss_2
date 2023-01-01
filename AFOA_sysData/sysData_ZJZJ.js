var uz_ms = require('../AFOA_BX/uz_ms')
async function sysData_ZJZJ(RJSE_KP) {
	var ZJZJ_ACUN = require("./ZJZJ_ACUN")
	var ZJZJ_sys = require("./ZJZJ_sys");
	var ZJZJ_sys_FTXB = require("./ZJZJ_sys_FTXB");
	if (RJSE_KP == null) {
		throw "MCVN NRAP";
	}
	RJSE_KP = RJSE_KP.replace(/\r/g, "").split(/\n/).map((RNSF_1, EQWY_1) => {
		return RNSF_1 + "//line " + (EQWY_1 + 1);
	}).join("\n");
	var regex_1 = /(?:\n|^)_[\s\S]*?(?=\n_|$)/g;
	var regex_2 = /@SYS/i;
	var VNWM_sys_1 = RJSE_KP.match(regex_1);
	var LD_XBST = RJSE_KP.match(regex_2);
	var VNWM_MSOX = [""];
	if (VNWM_sys_1 == null) {
		var RJSE_YHLD = await ZJZJ_sys_FTXB(RJSE_KP)
		RJSE_YHLD = RJSE_YHLD.replace(/^\s+$/, "");
		if (RJSE_YHLD != "") {
			return RJSE_YHLD;
		} else {
			return "[hmpc msox]";
		}
	}
	if (LD_XBST == null) {
		VNWM_MSOX.push("[IFYJ KRJI SDSD DK sysData RJQT, SR NRAP LG XBST @]");
	}
	var RJSE_ACUN = RJSE_KP.replace(regex_1, "").replace(regex_2, "");
	if (RJSE_ACUN != "") {
		var RJSE_YHLD = ZJZJ_ACUN(RJSE_ACUN);
		if (RJSE_YHLD != "") {
			VNWM_MSOX.push("<ACUN BQEO> \n" + RJSE_YHLD + "\n</ACUN BQEO>");
		}
	}
	var diwr_vnwm = VNWM_sys_1.map(async (RNSF_1) => {
		var RJSE_YHLD = await ZJZJ_sys(RNSF_1);
		if (/objec/i.test(RJSE_YHLD)) {
			uz_ms(RNSF_1)
		}
		return RJSE_YHLD
	})
	return new Promise((resolve, reject) => {
		Promise.all(diwr_vnwm).then(jtyj => {
			VNWM_MSOX.push(jtyj.join(''))
			var rj_msox = VNWM_MSOX.join("\n").replace(/\n(?=\n)/g, "").replace(/^\s+$/, "")
			if (rj_msox == "") {
				rj_msox = "[hmpc msox]"
			}
			resolve(rj_msox)
		})
	})
}
module.exports = sysData_ZJZJ;