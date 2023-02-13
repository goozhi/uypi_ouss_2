function ZJZJ_TSJQ_ReadDtc(ZJZJ_BQEO_KP) {
    var ZJZJ_ES = require('./ZJZJ_ES')
    var RJSE_MSOX = "";
    var reg_BX = require('./reg_BX');
    var reg_BX_VXUX = new reg_BX();
    var RJSE_1 = ZJZJ_BQEO_KP.replace(/,'.*'(?:\w+|)(?:;\/\/.*|)/, ";");
    var reg_ReadDtc_MCVN = /\$ReadDtc\((.*)\)(?:;|)(?:\n|)/i;
    var ReadDtc_MCVN = RJSE_1.match(reg_ReadDtc_MCVN);
    if (ReadDtc_MCVN == null) {
        RJSE_MSOX += "\n[ReadDtc LGPH MSOX]" + ZJZJ_BQEO_KP.replace(/\n[\S\s]*/, '');
    } else {
        RJSE_1 = RJSE_1.replace(reg_ReadDtc_MCVN, "");
    };
    var reg_ES = /\{[\s\S]+\}/;
    var DIWR_ES = RJSE_1.match(reg_ES);
    if (DIWR_ES == null) {
        RJSE_MSOX += "[ESIH YJ AC AB]" + RJSE_1;
    } else {
        var VNWM_ES = DIWR_ES[0].match(/\{[^\}]+\}/g);
        VNWM_ES.forEach(RNSF => {
            RJSE_MSOX += ZJZJ_ES(RNSF);
        });
        RJSE_1 = RJSE_1.replace(reg_ES, "");
    }
    var reg_MCVN = /[^;\n]*=[^;\n]*=[^;\n]*;/;
    var DIWR_YHLD = RJSE_1.match(reg_MCVN);
    if (DIWR_YHLD == null) {
        RJSE_MSOX += "\n<SOPJ YJAB ReadDtc MCVN>\n" + ZJZJ_BQEO_KP + "\n</SOPJ YJAB ReadDtc MCVN>";
        return RJSE_MSOX;
    }
    var VNWM_MCVN = DIWR_YHLD[0].split(/\s*,\s*/);
    var DIWR_VNWM_MCVN = [];
    for (var i = 0; i < VNWM_MCVN.length; i++) {
        var VNWM_YHLD = VNWM_MCVN[i].split(/\s*=\s*/);
        if (VNWM_YHLD.length != 2) {
            RJSE_MSOX += "[MCVN NRAP AE MH LW IQIH--参数缺少或多了等号]" + VNWM_MCVN[i];
            return RJSE_MSOX;
        }
        var WUZT = VNWM_YHLD[0];
        var BQEO = VNWM_YHLD[1]
        DIWR_VNWM_MCVN.push({ WUZT, BQEO });
    }
    for (FO in DIWR_VNWM_MCVN) {
        var DIWR_1 = DIWR_VNWM_MCVN[FO];
        switch (DIWR_1.WUZT) {
            case "状态":
            case "status":
                break;
            case "state":
                break;
            case "库":
            case "库id":
            case "库ID":
            case "id":
            case "lib":
                if (!/^(?:\d+|null)$/i.test(DIWR_1.BQEO)) {
                    RJSE_MSOX += "[MCVN BQEO BRTZ MSOX, AOAO JI VNZT AE null]" + DIWR_1.BQEO + "<--"
                }
                break;
            case "num":
            case "个数":
                break;
            case "开始":
            case "start":
                break;
            case "code":
            case "编码":
                if (!/^(?:\d+|null)$/i.test(DIWR_1.BQEO)) {
                    RJSE_MSOX += "[MCVN BQEO BRTZ MSOX, AOAO JI VNZT AE null]" + DIWR_1.BQEO + "<--"
                }
                break;
            case "间隔":
            case "space":
                if (!/^(?:\d+|null)$/i.test(DIWR_1.BQEO)) {
                    RJSE_MSOX += "[MCVN BQEO BRTZ MSOX, AOAO JI VNZT AE null]" + DIWR_1.BQEO + "<--"
                }
                break;
            default:
                RJSE_MSOX += "[MCVN WU FTPJ] " + DIWR_1.WUZT + " <--";
        }
    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX + " : " + ZJZJ_BQEO_KP + "<--";
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_ReadDtc;