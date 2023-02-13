function ZJZJ_dtc(RJSE_KP) {
	RJSE_KP = RJSE_KP.replace(/\r/g, "")
	var RJSE_MSOX = ""
	var RJSE_1 = RJSE_KP;
	var reg_LG_MCVN_1 = /(?:\n|^)\w+\(\)\{.*/;
	if (reg_LG_MCVN_1.test(RJSE_1)) {
		RJSE_1 = RJSE_1.replace(reg_LG_MCVN_1, "")
	} else {
		RJSE_MSOX += "\n<dtc LG MCVN BRTZ MSOX>\n" + RJSE_KP.split(/\n+/).slice(0, 4).join("\n") + "\n</dtc LG MCVN BRTZ MSOX>"
	}
	var reg_LG_MCVN_2 = /(?:\n|^):DTC.*/;
	if (reg_LG_MCVN_2.test(RJSE_1)) {
		RJSE_1 = RJSE_1.replace(reg_LG_MCVN_2, "")
	} else {
		RJSE_MSOX += "\n<dtc LG MCVN NRAP DTC XBST>\n" + RJSE_KP.split(/\n+/).slice(0, 4).join("\n") + "\n</dtc LG MCVN NRAP DTC XBST>"
	}
	var reg_DS_MCVN_1 = /(?:\n|^):END/;
	if (reg_DS_MCVN_1.test(RJSE_1)) {
		RJSE_1 = RJSE_1.replace(reg_DS_MCVN_1, "")
	} else {
		RJSE_MSOX += "\n<dtc DSPH MCVN NRAP END XBST>\n" + RJSE_KP + "\n</dtc DSPH MCVN NRAP END XBST>"
	}
	var reg_DS_MCVN_1 = /\}/;
	if (reg_DS_MCVN_1.test(RJSE_1)) {
		RJSE_1 = RJSE_1.replace(reg_DS_MCVN_1, "")
	} else {
		RJSE_MSOX += "\n<dtc DSPH MCVN NRAP SIIH XBST>\n" + RJSE_KP + "\n</dtc DSPH MCVN NRAP SIIH XBST>"
	}
	var reg_NINI = /(?:\n|^)\w+.*\[.*\].*/g;
	var VNWM_NINI = RJSE_1.match(reg_NINI);
	if (VNWM_NINI != null) {
		RJSE_1 = RJSE_1.replace(reg_NINI, "");
		VNWM_NINI.forEach(RNSF => {
			var DIWR_YHLD = RNSF.match(/(?:\n|^)(\w+) \[.*\].*;/);
			if (DIWR_YHLD==null) {
				RJSE_MSOX += "\n[NINI BRTZ MSOX] " + RNSF.replace(/\n/,"") + " <=="
			}else{
				var VN_16 = DIWR_YHLD[1];
				if(!/^(?:[A-F]|\d)+$/i.test(VN_16)){
					RJSE_MSOX+="\n[NINI MCVN FTPJ] "+VN_16+" <=="+RNSF.replace(/\n/,"");
				}
			}
		});
		var VNWM_NINI_KP = []
		for (FO_1 in VNWM_NINI) {
			VNWM_NINI_KP.push(VNWM_NINI[FO_1])
		}
		if (RJSE_MSOX == "") {

			VNWM_NINI.sort();
			if (VNWM_NINI.join('\n').replace(/\[.*/g, "") != VNWM_NINI_KP.join('\n').replace(/\[.*/g, "")) {
				RJSE_MSOX += "\n<dtc NINI MAGM MSOX>\n" + RJSE_KP + "\n</dtc NINI MAGM MSOX>";
			}
		}

	}
	if (RJSE_1 != "") {
		var RJSE_YHLD = RJSE_1.replace(/\/\/.*/g, '');
		if (!/^\s*$/.test(RJSE_YHLD)) {
			RJSE_MSOX += "\n<dtc TSJQ BQ PC ACUN BQEO>" + RJSE_1 + "\n</dtc TSJQ BQ PC ACUN BQEO>"
		}
	}
	if (RJSE_MSOX != "") {
		RJSE_MSOX = "\n" + RJSE_MSOX;
	}
	return RJSE_MSOX;
}
module.exports = ZJZJ_dtc;