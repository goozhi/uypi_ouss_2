var RSCS_cf_NINI_2 = require('./RSCS_cf_NINI_2');
var RSCS_3c_NINI_2 = require('./RSCS_3c_NINI_2');
var RSCS_7f_NINI_2 = require('./RSCS_7f_NINI_2');
var RSCS_16_NINI = require('./RSCS_16_NINI');
var RSCS_10_NINI = require('./RSCS_10_NINI');
var RSCS_0a_NINI = require('./RSCS_0a_NINI');
var NVCM_NINI_HQTB_2 = require('./NVCM_NINI_HQTB_2');
var NINI_ZJZJ = require('./NINI_ZJZJ')
var RSCS_3f_NINI = require('./RSCS_3f_NINI')
var CA_DIAX = require('./CA_DIAX')
function NINI_HQTB_2(RJSE_KP, diwr_vyvy_vnwm_zthi_slgr,VNWM_OKWK_ZTHI_SYZN_YG_SLGR) {
    var ZTHI_VNWM_2 = ['0', '0', '0', '30', '2F', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'];
    if (typeof (RJSE_KP) != "string")
        throw "NINI_HQTB_2 : MCVN UXUX MSOX"
    var UXUX_YHLD = typeof (diwr_vyvy_vnwm_zthi_slgr);
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX, AOAO JI object : " + UXUX_YHLD)
    }
    RJSE_KP = RJSE_KP.replace(/(?:\n(?=\s*?\n)|^\s*?\n|\s*?\n$)/, "");
    var VNWM_1 = RJSE_KP.split(/(?:\r\n|\n)/);
    var VNWM_4 = VNWM_1.filter((RNSF_1) => {
        return !/^\s+$/.test(RNSF_1);
    })
    if (/\*\*\*/.test(VNWM_4[VNWM_4.length - 1])) {
        VNWM_4.splice(VNWM_4.length - 1, 1)
    }
    var NINI_JTYP_VNWM_1 = VNWM_4.map((RNSF_1, EQWY_1) => {
        var BMLC_1 = RNSF_1.match(/\/\/.*/);
        if (BMLC_1 == null) {
            BMLC_1 = ""
        } else {
        }
        var reg_NINI_WU = /((?:\*del\(.+\)|\*)(?="))(.+?)("\s*,)/;
        var RJSE_YHLD_1 = RNSF_1.match(reg_NINI_WU);
        if (RJSE_YHLD_1 == null) {
            throw new Error("[NINI WU AC ZZNQ]" + RNSF_1+"<--");
        }
        var RJSE_YHLD_2 = RNSF_1.replace(reg_NINI_WU, "");
        var VNWM_2 = RJSE_YHLD_2.replace(/\/\/.*/g, '').replace(/;[^\S]*$/,"").split(/\s*,\s*/);
        VNWM_2.unshift(RJSE_YHLD_1[2]);
        var NINI_IOWR_1 = { TRIG: EQWY_1, MCVN_VNWM_1: VNWM_2 }
        switch (VNWM_2[2]) {
            case 'cf':
                var IOWR_2 = RSCS_cf_NINI_2(NINI_IOWR_1, diwr_vyvy_vnwm_zthi_slgr,VNWM_OKWK_ZTHI_SYZN_YG_SLGR);
                return RNSF_1.replace(/(cf),.*/i, "$1," + NVCM_NINI_HQTB_2(IOWR_2)) + BMLC_1;
            case '7f':
                var IOWR_2 = RSCS_7f_NINI_2(NINI_IOWR_1, diwr_vyvy_vnwm_zthi_slgr,VNWM_OKWK_ZTHI_SYZN_YG_SLGR);
                // throw JSON.stringify(IOWR_2)
                return RNSF_1.replace(/(7f),.*/i, "$1," + NVCM_NINI_HQTB_2(IOWR_2)) + BMLC_1;
            case '16':
                var IOWR_2 = RSCS_16_NINI(NINI_IOWR_1, ZTHI_VNWM_2);
                // throw JSON.stringify(IOWR_2)
                return RNSF_1.replace(/(16),.*/i, "$1," + NVCM_NINI_HQTB_2(IOWR_2)) + BMLC_1;
            case '0a':
                var IOWR_2 = RSCS_0a_NINI(NINI_IOWR_1, ZTHI_VNWM_2);
                // throw JSON.stringify(IOWR_2)
                return RNSF_1.replace(/(0a),.*/i, "$1," + NVCM_NINI_HQTB_2(IOWR_2)) + BMLC_1;
            case '10':
                var IOWR_2 = RSCS_10_NINI(NINI_IOWR_1, ZTHI_VNWM_2);
                // throw JSON.stringify(IOWR_2)
                return RNSF_1.replace(/(10),.*/i, "$1," + NVCM_NINI_HQTB_2(IOWR_2)) + BMLC_1;
            case '21':
                return RNSF_1;
            // var IOWR_2 = RSCS_16_NINI(NINI_IOWR_1);
            // return IOWR_2;
            case '1F':
            case '1f':
                return RNSF_1;
            case 'bb':
                return RNSF_1;
            case '10':
                return RNSF_1;
            // var IOWR_2 = RSCS_16_NINI(NINI_IOWR_1);
            // return IOWR_2;
            case '3c':
                var IOWR_2 = RSCS_3c_NINI_2(NINI_IOWR_1, diwr_vyvy_vnwm_zthi_slgr,VNWM_OKWK_ZTHI_SYZN_YG_SLGR);
                return RNSF_1.replace(/(3c),.*/i, "$1," + NVCM_NINI_HQTB_2(IOWR_2)) + BMLC_1;
            case '3f':
                if (!/[\&><\+-]/.test(NINI_IOWR_1.MCVN_VNWM_1[3])) {
                    return RNSF_1;
                }
                var IOWR_2 = RSCS_3f_NINI(NINI_IOWR_1);
                return RNSF_1.replace(/(3f\s*,[^,]*),.*/i, "$1," + NVCM_NINI_HQTB_2(IOWR_2)) + BMLC_1;
            default:
                try {
                    NINI_ZJZJ(VNWM_2);
                } catch (err) {
                    throw err;
                }
                throw 'NINI_HQTB_2 : NINI UXUX ACUN:项目类型不明 : ' + EQWY_1 + ":" + RNSF_1;
        }
    });
    var RJSE_JTYP = CA_DIAX(NINI_JTYP_VNWM_1.join('\n'), /d\d+=.*?\([\d-\.]+\) ,/g);
    var RJSE_JTYP = CA_DIAX(RJSE_JTYP, /\}\s*,\s*(?:16|0a|10).*?;/g);
    // RJSE_JTYP=CA_DIAX(RJSE_JTYP,/'\w\w:.{0,10}?'/g,08);
    RJSE_JTYP = CA_DIAX(RJSE_JTYP, /\}\s*,\s*cf\s*,\s*d\d+[^=,]{0,10}?,/ig, 08);
    return RJSE_JTYP;
}
module.exports = NINI_HQTB_2;