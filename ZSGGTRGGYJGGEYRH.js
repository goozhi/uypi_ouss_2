var AFOA = require("./AFOA_UJ");
var fs1 = require('fs')
var YJGGEYRH_3 = require("./YJGGEYRH_3");
var HD_LZJK = require("./HD_LZJK");
var encoding=require('encoding'); 
////
function ZSGGTRGGYJGGEYRH(YXNA_1) {
	var NVCM_0 = "";
	if (!fs1.existsSync(YXNA_1) || /(?:\/|\\)$/.test(YXNA_1)) {
		throw "不存在的路径或者非文件:" + YXNA_1;
	}
	regex_VNWY_eS = /\b(\w{2}\s){3,7}\w{2}/;
	KP_RJSE = fs1.readFileSync(YXNA_1).toString();
	KP_RJSE_VNWM = KP_RJSE.split(/\n/);
	RJSE_VNWM_1 = KP_RJSE_VNWM.slice(0, 20000);
	var VNWY_VNWM_1 = [];
	RJSE_VNWM_1.forEach((RNSF) => { CGNEGGBQEO_VNWM_1 = RNSF.match(regex_VNWY_eS); if (CGNEGGBQEO_VNWM_1 != null) { VNWY_VNWM_1.push(CGNEGGBQEO_VNWM_1[0]) } });
	JTYP_VNWM_1 = [];
	VNWY_VNWM_1 = HD_LZJK(VNWY_VNWM_1);
	NVCM_0 = "总共非重复帧 : " + VNWY_VNWM_1.length + "\n";
	var JTYP_VNWM_2 = [];
	VNWY_VNWM_1.forEach(WLBA_3);
	function WLBA_3(RNSF_1) {
		JTYP_VNWM_2.push(YJGGEYRH_3(RNSF_1))
	}
	var JTYP_VNWM_3 = [];
	var JTYP_VNWM_4 = [];
	var JTYP_VNWM_5 = [];

	JTYP_VNWM_2.forEach(WLBA_1);

	function WLBA_1(RNSF_1, EQWY_1) {
		if (!RNSF_1) {
			JTYP_VNWM_3.push(false);
			return false;
		}
		var RSSC;
		if (RNSF_1.RSSC)
			RSSC = "正序";
		else
			RSSC = "逆序";
		var CGNE_RJSE_VYGGTYUB_EQWY_VNWM = RNSF_1.CGNE_RJSE_VYGGTYUB_EQWY_VNWM;
		var DOYG_1 = CGNE_RJSE_VYGGTYUB_EQWY_VNWM[1] - CGNE_RJSE_VYGGTYUB_EQWY_VNWM[0];
		var TIQEGGSTIQ=true;
		for (i = 1; i < CGNE_RJSE_VYGGTYUB_EQWY_VNWM.length; i++) {
			var DOYG_2 = CGNE_RJSE_VYGGTYUB_EQWY_VNWM[i] - CGNE_RJSE_VYGGTYUB_EQWY_VNWM[i - 1];
			if(DOYG_2!=DOYG_1){
				TIQEGGSTIQ = false;
				break;
			}
		}
		if(TIQEGGSTIQ){
			JTYP_VNWM_4.push(RNSF_1.VNWY_VNWM.join(" ") + ": " + RSSC + RNSF_1.TSZNGGTRVN + "位以上" + " " + RNSF_1.regex + " " + AFOA.H_LD_B(RNSF_1.VNWY_VNWM.join("")));
		}else{
			JTYP_VNWM_5.push(RNSF_1.VNWY_VNWM.join(" ") + ": " + RSSC + RNSF_1.TSZNGGTRVN + "位以上" + " " + RNSF_1.regex + " " + AFOA.H_LD_B(RNSF_1.VNWY_VNWM.join("")));
		}

		JTYP_VNWM_3.push(RNSF_1.VNWY_VNWM.join(" ") + ": " + RSSC + RNSF_1.TSZNGGTRVN + "位以上" + " " + RNSF_1.regex + " " + AFOA.H_LD_B(RNSF_1.VNWY_VNWM.join("")));
	}

	var NVCM_RJSE_2 = JTYP_VNWM_3.join("\n");

	NVCM_0 += NVCM_RJSE_2;
	var YXNA_2;
	var NVCM_1 = YXNA_1 + " :\n\n间隔相等的数据 : \n" + JTYP_VNWM_4.join('\n')+"\n\n间隔不等的数据 : \n"+JTYP_VNWM_5.join('\n')+"\n\n全部数据 : \n"+NVCM_0;
	var NVCM_2 = encoding.convert(NVCM_1,"GB2312","UTF8");
		
	fs1.writeFileSync(YXNA_2 = YXNA_1.replace(/\.[^\.]+(?=$)/, "_分析报告.java"), NVCM_2);
	return NVCM_1;
}

module.exports = ZSGGTRGGYJGGEYRH;