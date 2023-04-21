var RSCS_cf_NINI_2 = require('./RSCS_cf_NINI_2');
var RSCS_3c_NINI_2 = require('./RSCS_3c_NINI_2');
var RSCS_7f_NINI_2 = require('./RSCS_7f_NINI_2');
var RSCS_16_NINI = require('./RSCS_16_NINI');
var RSCS_10_NINI = require('./RSCS_10_NINI');
var RSCS_0a_NINI = require('./RSCS_0a_NINI');
var NVCM_NINI_HQTB_2 = require('./NVCM_NINI_HQTB_2');
var NINI_ZJZJ = require('./NINI_ZJZJ')
var RSCS_3f_NINI = require('./RSCS_3f_NINI')
var CA_DIAX = require('./CA_DIAX');
const RSCS_bb_NINI = require('./RSCS_bb_NINI');
const RSCS_1F_NINI = require('./RSCS_1F_NINI');
async function NINI_HQTB_2(RJSE_KP, diwr_vyvy_vnwm_zthi_slgr, VNWM_OKWK_ZTHI_SYZN_YG_SLGR) {
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
    var NINI_JTYP_VNWM_1 = VNWM_4.map(async (RNSF_1, EQWY_1) => {
        var BMLC_1 = RNSF_1.match(/\/\/.*/);
        if (BMLC_1 == null) {
            BMLC_1 = ""
        } else {
        }
        var reg_NINI_WU = /((?:\*del\(.+\)|\*)(?="))(.+?)("\s*,)/;
        var RJSE_YHLD_1 = RNSF_1.match(reg_NINI_WU);
        if (RJSE_YHLD_1 == null) {
            throw new Error("[NINI WU AC ZZNQ]" + RNSF_1 + "<--");
        }
        var RJSE_YHLD_2 = RNSF_1.replace(reg_NINI_WU, "");
        var VNWM_2 = RJSE_YHLD_2.replace(/\/\/.*/g, '').replace(/;[^\S]*$/, "").replace(/('[^']+),([^']*')/g, "$1\u917e$2").split(/\s*,\s*/).join('\u568f').replace(/\u917e/g, ",").split(/\u568f/);
        VNWM_2.unshift(RJSE_YHLD_1[2]);
        var NINI_DIWR_1 = { TRIG: EQWY_1, MCVN_VNWM_1: VNWM_2 }
        switch (VNWM_2[2]) {
            case 'cf':
                var DIWR_2 = RSCS_cf_NINI_2(NINI_DIWR_1, diwr_vyvy_vnwm_zthi_slgr, VNWM_OKWK_ZTHI_SYZN_YG_SLGR);
                return RNSF_1.replace(/(cf),.*/i, "$1," + NVCM_NINI_HQTB_2(DIWR_2)) + BMLC_1;
            case '7f':
                var DIWR_2 = RSCS_7f_NINI_2(NINI_DIWR_1, diwr_vyvy_vnwm_zthi_slgr, VNWM_OKWK_ZTHI_SYZN_YG_SLGR);
                // throw JSON.stringify(DIWR_2)
                return RNSF_1.replace(/(7f),.*/i, "$1," + NVCM_NINI_HQTB_2(DIWR_2)) + BMLC_1;
            case '16':
                var DIWR_2 = RSCS_16_NINI(NINI_DIWR_1, ZTHI_VNWM_2);
                // throw JSON.stringify(DIWR_2)
                return RNSF_1.replace(/(16),.*/i, "$1," + NVCM_NINI_HQTB_2(DIWR_2)) + BMLC_1;
            case '0a':
                var DIWR_2 = RSCS_0a_NINI(NINI_DIWR_1, ZTHI_VNWM_2);
                // throw JSON.stringify(DIWR_2)
                return RNSF_1.replace(/(0a),.*/i, "$1," + NVCM_NINI_HQTB_2(DIWR_2)) + BMLC_1;
            case '10':
                var DIWR_2 = RSCS_10_NINI(NINI_DIWR_1, ZTHI_VNWM_2);
                // throw JSON.stringify(DIWR_2)
                return RNSF_1.replace(/(10),.*/i, "$1," + NVCM_NINI_HQTB_2(DIWR_2)) + BMLC_1;
            case '21':
                return RNSF_1;
            // var DIWR_2 = RSCS_16_NINI(NINI_DIWR_1);
            // return DIWR_2;
            case '1F':
            case '1f':
                return RSCS_1F_NINI(NINI_DIWR_1, ZTHI_VNWM_2);
            case 'bb':
                var DIWR_2 = RSCS_bb_NINI(NINI_DIWR_1, ZTHI_VNWM_2);
                return RNSF_1.replace(/(bb),.*/i, "$1," + NVCM_NINI_HQTB_2(DIWR_2)) + BMLC_1;
            case '10':
                return RNSF_1;
            // var DIWR_2 = RSCS_16_NINI(NINI_DIWR_1);
            // return DIWR_2;
            case '3c':
                var DIWR_2 = RSCS_3c_NINI_2(NINI_DIWR_1, diwr_vyvy_vnwm_zthi_slgr, VNWM_OKWK_ZTHI_SYZN_YG_SLGR);
                return RNSF_1.replace(/(3c),.*/i, "$1," + NVCM_NINI_HQTB_2(DIWR_2)) + BMLC_1;
            case '3f':
                if (!/[\&><\+-]/.test(NINI_DIWR_1.MCVN_VNWM_1[3])) {
                    return RNSF_1;
                }
                var DIWR_2
                try {
                    DIWR_2 = await RSCS_3f_NINI(NINI_DIWR_1);
                } catch (err) {
                    throw err
                }
                return RNSF_1.replace(/(3f\s*,[^,]*),.*/i, "$1," + NVCM_NINI_HQTB_2(DIWR_2)) + BMLC_1;
            default:
                try {
                    NINI_ZJZJ(VNWM_2);
                } catch (err) {
                    throw err;
                }
                throw 'NINI_HQTB_2 : NINI UXUX ACUN:项目类型不明 : ' + EQWY_1 + ":" + RNSF_1;
        }
    });
    return new Promise((resolve, reject) => {
        Promise.all(NINI_JTYP_VNWM_1).then(jtyj_1 => {
            var RJSE_JTYP = CA_DIAX(jtyj_1.join('\n'), /d\d+=.*?\([\d-\.]+\) ,/g);
            var RJSE_JTYP = CA_DIAX(RJSE_JTYP, /\}\s*,\s*(?:16|0a|10).*?;/g);
            // RJSE_JTYP=CA_DIAX(RJSE_JTYP,/'\w\w:.{0,10}?'/g,08);
            RJSE_JTYP = CA_DIAX(RJSE_JTYP, /\}\s*,\s*cf\s*,\s*d\d+[^=,]{0,10}?,/ig, 08);
            resolve(RJSE_JTYP)
        }).catch(err => {
            reject(err)
        })
    })

}
module.exports = NINI_HQTB_2;