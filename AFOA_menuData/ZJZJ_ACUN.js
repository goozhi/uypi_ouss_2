function ZJZJ_ACUN(RJSE_KP, CQPI_FR) {
	RJSE_KP = RJSE_KP.replace(/\r/g, "");
	regex_ACJI_TSJQ_AE_NINI = /^(?:(?!((?:^)_|(?:\*|&)")).)*$/;
	regex_RGQH = /^\s.*$/;
	regex_FDIH = /^;\/\/.*/;
	var VNWM_2 = new Array()
	var VNWM_1 = RJSE_KP.split(/\n/);
	var reg_VNWM_AC_VJBR = [regex_ACJI_TSJQ_AE_NINI];
	var reg_VNWM_VJBR = [regex_RGQH, regex_FDIH];
	var reg_VNWM_CGNE;
	if (CQPI_FR == null || Boolean(CQPI_FR) == false) {
		reg_VNWM_CGNE = reg_VNWM_AC_VJBR;
	} else {
		reg_VNWM_CGNE = reg_VNWM_VJBR;
	}
	for (FO_1 in VNWM_1) {
		var VBYT_1 = true;
		for (var i1 = 0; i1 < reg_VNWM_CGNE.length; i1++) {

			if (reg_VNWM_CGNE[i1].test(VNWM_1[FO_1])) {
				VBYT_1 = false;
				break;
			}
		}
		if (VBYT_1)
			VNWM_2.push(VNWM_1[FO_1]);

	}
	var RJSE_MSOX = VNWM_2.join("");
	return RJSE_MSOX;
}
module.exports = ZJZJ_ACUN;