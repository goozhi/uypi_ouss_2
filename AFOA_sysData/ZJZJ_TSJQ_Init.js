const ZJZJ_ES = require('./ZJZJ_ES');

function ZJZJ_TSJQ_Init(RJSE_KP) {
	var UXUX_YHLD = typeof (RJSE_KP);
	if (UXUX_YHLD != "string") {
		throw new Error("MCVN UXUX MSOX : " + UXUX_YHLD + RJSE_KP)
	}
	var RJSE_1 = RJSE_KP;
	if (/^.*\$init.*$/i.test(RJSE_1)) {
		return "";
	}
	var RJSE_MSOX = ""
	var reg_in = /\bin\b.*/;
	var reg_link = /\blink\b.*/;
	var reg_CAN = /\bCAN\b.*/;
	var reg_KW2000 = /\bKW2000\b.*/;
	var reg_J1939 = /\bJ1939\b.*/;
	var reg_exit = /\bexit({.*}).*/;
	var reg_Init_LG_MCVN = /\$Init\(\).*/i;
	var IOWR_YHLD = RJSE_KP.match(reg_Init_LG_MCVN);
	if (IOWR_YHLD == null) {
		RJSE_MSOX += "\n<init LG MCVN MSOX>\n" + RJSE_KP + "\n</init LG MCVN MSOX>";
	} else {
		RJSE_1 = RJSE_1.replace(reg_Init_LG_MCVN, "")
	}
	var IOWR_YHLD = RJSE_1.match(reg_exit);
	if (IOWR_YHLD == null) {
		RJSE_MSOX += "\n<Init exit MCVN AC ZZNQ>\n" + RJSE_KP + "\n</Init exit MCVN AC ZZNQ>"
	} else {
		RJSE_1 = RJSE_1.replace(reg_exit, "");
		if (/^\{null\}$/.test(IOWR_YHLD[1])) {
		} else {
			RJSE_YHLD = ZJZJ_ES((IOWR_YHLD[1]));
			if (RJSE_MSOX != "")
				RJSE_MSOX += RJSE_YHLD + IOWR_YHLD[0];
		}
	}
	var IOWR_YHLD = RJSE_1.match(reg_in)
	if (IOWR_YHLD == null) {
		RJSE_MSOX += "\n[in MCVN AC ZZNQ] " + RJSE_KP.match(/.*\/\/line \d+/);
	} else {
		var reg_in_CXAV_TSJQ = /[a-z]+(?:\{.*?\}|\(.*\))/ig;
		var VNWM_in_CXAV_TSJQ = IOWR_YHLD[0].match(reg_in_CXAV_TSJQ);
		if (VNWM_in_CXAV_TSJQ == null) {
			RJSE_MSOX += "\n[in MCVN MSOX] " + IOWR_YHLD[0] + " <--";
		} else {
			VNWM_in_CXAV_TSJQ.forEach(RNSF => {
				switch (true) {
					case /in\{null\}/i.test(RNSF):
						break;
					case /in\{.*\}/i.test(RNSF):
						RJSE_MSOX += ZJZJ_ES(RNSF.replace(/in/, ""));
						break;
					case /FaultSend\(.*\)/i.test(RNSF):
						break;
					case /PSW27\{.*\}/i.test(RNSF):
						break;
					default:
						RJSE_MSOX += "\n[in ACUN MCVN] " + RNSF + "<--";
				}
			});
		}
		if (RJSE_MSOX != "") {
			RJSE_MSOX += IOWR_YHLD[0].match(/.*\/\/line \d+/)
		}
		RJSE_1 = RJSE_1.replace(reg_in, "");
	}
	var IOWR_YHLD = RJSE_1.match(reg_link)
	if (IOWR_YHLD == null) {
		RJSE_MSOX += "[link MCVN AC ZZNQ] " + RJSE_KP.match(/.*\/\/line \d+/);
	} else {
		var reg_link_MCVN = /link(\{.*\})\d,\d+ms,\s*(?:\/\/.*|)$/;
		var IOWR_link_MCVN = IOWR_YHLD[0].match(reg_link_MCVN)
		if (IOWR_link_MCVN == null) {
			RJSE_MSOX += "[link MCVN SDRH BRTZ FTPJ] " + IOWR_YHLD[0] + "<--"
		} else {
			if (/^\{null\}$/i.test(IOWR_link_MCVN[1])) {

			} else {

				var RJSE_YHLD = ZJZJ_ES(IOWR_link_MCVN[1]);
				if (RJSE_YHLD != "") {

					RJSE_MSOX += RJSE_YHLD + IOWR_YHLD[0]
				}
			}
		}
		RJSE_1 = RJSE_1.replace(reg_link, "");
	}
	var IOWR_YHLD = RJSE_1.match(reg_CAN)
	if (IOWR_YHLD == null) {
	} else {
		RJSE_1 = RJSE_1.replace(reg_CAN, "");
		var VNWM_1 = IOWR_YHLD[0].split(/\s*,\s*/);
		var UXUX = VNWM_1[0]
		var UXUX_2 = VNWM_1[1]
		var WIKU_NP = VNWM_1[2]
		var WYQW = VNWM_1[3]
		var ECU_ID = VNWM_1[4]
		var ES = VNWM_1[5]
		var ZDTI = VNWM_1[6]
		var JTCO_FR = VNWM_1[7]
		var I = { UXUX, UXUX_2, WYQW, WIKU_NP, ECU_ID, ES, ZDTI, JTCO_FR };
		if (!/^(?:11|29)\D*$/.test(UXUX_2)) {
			RJSE_MSOX += "\n[CAN UXUX MCVN FTPJ] " + UXUX_2 + " <==" + IOWR_YHLD[0];
		}
		if (!/^(?:pin:)\d+\+\d+$/i.test(WYQW)) {
			RJSE_MSOX += "\n[CAN MCVN FTPJ] " + WYQW + " <==" + IOWR_YHLD[0];
		}
		if (!/^\d+K$/i.test(WIKU_NP)) {
			RJSE_MSOX += "\n[CAN MCVN FTPJ] " + WIKU_NP + " <==" + IOWR_YHLD[0];
		}
		if (!/^(?:[A-F]|\d)+\/(?:[A-F]|\d)+\/(?:[A-F]|\d)+$/i.test(ECU_ID)) {
			RJSE_MSOX += "\n[CAN MCVN FTPJ] " + ECU_ID + " <==" + IOWR_YHLD[0];
		}
		if (!/^\d+.({.*})$/i.test(ES)) {
			RJSE_MSOX += "\n[CAN MCVN FTPJ] " + ES + " <==" + IOWR_YHLD[0];
		} else {
			var RJSE_YHLD = ZJZJ_ES(ES.match(/{.*}/)[0]);
			if (RJSE_YHLD != "") {
				RJSE_MSOX += RJSE_YHLD + " " + IOWR_YHLD[0];
			}
		}
		if (!/^\w+:\d+\/\d+\/\d+\/\d+\/\d+$/i.test(ZDTI)) {
			RJSE_MSOX += "\n[CAN MCVN FTPJ] " + ZDTI + " <==" + IOWR_YHLD[0];
		}
	}
	var IOWR_YHLD = RJSE_1.match(reg_KW2000)
	if (IOWR_YHLD == null) {
	} else {
		RJSE_1 = RJSE_1.replace(reg_KW2000, "");
		var VNWM_1 = IOWR_YHLD[0].split(/\s*,\s*/);
		var UXUX = VNWM_1[0]
		var UXUX_2 = VNWM_1[1]
		var WIKU_NP = VNWM_1[2]
		var WYQW = VNWM_1[3]
		var ECU_ID = VNWM_1[4]
		var con = VNWM_1[5]
		var ZDTI = VNWM_1[6]
		var JTCO_FR = VNWM_1[7]
		var I = { UXUX, UXUX_2, WYQW, WIKU_NP, ECU_ID, ES, ZDTI, JTCO_FR };
		if (!/^.*ms$/.test(UXUX_2)) {
			RJSE_MSOX += "\n[KW2000 UXUX MCVN FTPJ] " + UXUX_2 + " <==" + IOWR_YHLD[0];
		}
		if (!/^(?:pin:)\d+(?: \d+)*$/i.test(WYQW)) {
			RJSE_MSOX += "\n[KW2000 MCVN FTPJ] " + WYQW + " <==" + IOWR_YHLD[0];
		}
		if (!/^\d+bps$/i.test(WIKU_NP)) {
			RJSE_MSOX += "\n[KW2000 MCVN FTPJ] " + WIKU_NP + " <==" + IOWR_YHLD[0];
		}
		if (!/^(?:[A-F]|\d)+$/i.test(ECU_ID)) {
			RJSE_MSOX += "\n[KW2000 MCVN FTPJ] " + ECU_ID + " <==" + IOWR_YHLD[0];
		}
		if (!/^con:\d+$/i.test(con)) {
			RJSE_MSOX += "\n[KW2000 MCVN FTPJ] " + con + " <==" + IOWR_YHLD[0];
		}
		if (!/^\w+:\d+\/\d+\/\d+\/\d+\/\d+$/i.test(ZDTI)) {
			RJSE_MSOX += "\n[KW2000 MCVN FTPJ] " + ZDTI + " <==" + IOWR_YHLD[0];
		}
	}
	var IOWR_YHLD = RJSE_1.match(reg_J1939)
	if (IOWR_YHLD == null) {
	} else {
		RJSE_1 = RJSE_1.replace(reg_J1939, "");
		var VNWM_1 = IOWR_YHLD[0].split(/\s*,\s*/);
		var UXUX = VNWM_1[0]
		var UXUX_2 = VNWM_1[1]
		var WIKU_NP = VNWM_1[2]
		var WYQW = VNWM_1[3]
		var ZDTI = VNWM_1[4]
		var JTCO_FR = VNWM_1[5]
		var I = { UXUX, UXUX_2, WYQW, WIKU_NP, ECU_ID, ES, ZDTI, JTCO_FR };
		if (!/^NER$/.test(UXUX_2)) {
			RJSE_MSOX += "\n[J1939 UXUX MCVN FTPJ] " + UXUX_2 + " <==" + IOWR_YHLD[0];
		}
		if (!/^pin:\d+\+\d+$/i.test(WYQW)) {
			RJSE_MSOX += "\n[J1939 MCVN FTPJ] " + WYQW + " <==" + IOWR_YHLD[0];
		}
		if (!/^\d+K$/i.test(WIKU_NP)) {
			RJSE_MSOX += "\n[J1939 MCVN FTPJ] " + WIKU_NP + " <==" + IOWR_YHLD[0];
		}
		if (!/^\w+:\d+\/\d+\/\d+\/\d+\/\d+$/i.test(ZDTI)) {
			RJSE_MSOX += "\n[J1939 MCVN FTPJ] " + ZDTI + " <==" + IOWR_YHLD[0];
		}
	}
	RJSE_1 = RJSE_1.replace(/(?:\n|^)\/\/.*/g, "").replace(/^\s*$/, "")
	if (RJSE_1 != "") {
		RJSE_MSOX += "\n<ZJZJ Init ZD VODY ACUN TSJQ>" + RJSE_1 + "\n</ZJZJ Init ZD VODY ACUN TSJQ>"
	}
	if (RJSE_MSOX != "") {
		RJSE_MSOX = "\n" + RJSE_MSOX
	}
	return RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_Init;
