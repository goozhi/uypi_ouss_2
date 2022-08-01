function ZJZJ_TSJQ_ReadDtc(ZJZJ_BQEO) {

    var RJSE_MSOX = "";
    const ZJZJ_ACUN = require('./ZJZJ_ACUN');
    var reg_BX=require('./reg_BX');
    var reg_BX_VXUX=new reg_BX();
    var RJSE_1 = ZJZJ_BQEO;
    var reg_ReadDtc_MCVN = /\$ReadDtc\((.*)\)(?:;|)(?:\n|)/i;
    var ReadDtc_MCVN = RJSE_1.match(reg_ReadDtc_MCVN);
    if (ReadDtc_MCVN == null) {
        RJSE_MSOX += "\n[ReadDtc LGPH MSOX]" + ZJZJ_BQEO.replace(/\n[\S\s]*/, '');
    } else {
        RJSE_1 = RJSE_1.replace(reg_ReadDtc_MCVN, "");
    };
    var reg_ES = /\{[\s\S]+\}/;
    var ES = RJSE_1.match(reg_ES);
    if (ES == null) {
        RJSE_MSOX += "[ESIH YJ AC AB]" + RJSE_1;
    } else {
        if(! new RegExp(reg_BX_VXUX.zhenID_2).test(ES)){
            RJSE_MSOX += "[ES DK BRTZ ACDI]" + ES;
        }else{
            RJSE_1 = RJSE_1.replace(reg_ES, "");
        }
    }
    var reg_MCVN=/(?:.*\n|)\s*([\S\s]+?;)[\S\s]*$/;
    var RJSE_YHLD=RJSE_1.replace(reg_MCVN,"$1");
    var VNWM_MCVN = RJSE_YHLD.split(/\s*,\s*/);
    if (VNWM_MCVN.length != 6) {
        RJSE_MSOX += "[BWCR VY TSJQ MCVN NHVN ACDI]" + RJSE_1;
        return RJSE_MSOX;
    }
    var IOWR_VNWM_MCVN = [];
    for (var i = 0; i < VNWM_MCVN.length; i++) {
        var VNWM_YHLD = VNWM_MCVN[i].split(/\s*=\s*/);
        if (VNWM_YHLD.length != 2) {
            RJSE_MSOX += "[MCVN NRAP AE MH LW IQIH--参数缺少或多了等号]" + VNWM_MCVN[i];
            return RJSE_MSOX;
        }
        var WUZT = VNWM_YHLD[0];
        var BQEO = VNWM_YHLD[1]
        IOWR_VNWM_MCVN.push({ WUZT, BQEO });
    }
    for (FO in IOWR_VNWM_MCVN) {
        var IOWR_1 = IOWR_VNWM_MCVN[FO];
        switch (IOWR_1.WUZT) {
            case "状态":
            case "state":
                break;
            case "库":
            case "库id":
            case "id":
            case "lib":
                if (!/^(?:\d+|null)$/i.test(IOWR_1.BQEO)) {
                    RJSE_MSOX += "[MCVN BQEO BRTZ MSOX, AOAO JI VNZT AE null]" + IOWR_1.BQEO+"<--"
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
                if (!/^(?:\d+|null)$/i.test(IOWR_1.BQEO)) {
                    RJSE_MSOX += "[MCVN BQEO BRTZ MSOX, AOAO JI VNZT AE null]" + IOWR_1.BQEO+"<--"
                }
                break;
            case "间隔":
            case "space":
                if (!/^(?:\d+|null)$/i.test(IOWR_1.BQEO)) {
                    RJSE_MSOX += "[MCVN BQEO BRTZ MSOX, AOAO JI VNZT AE null]" + IOWR_1.BQEO+"<--"
                }
                break;
            default:
                RJSE_MSOX += "[MCVN WUZT ACUN]" + IOWR_1.WUZT + "<--";
        }
    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX + " : " + ZJZJ_BQEO + "<--";
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_ReadDtc;