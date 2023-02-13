
const WU_TYUB_LDRG = require('./AFOA_BX/WU_TYUB_LDRG');
var NINI_ZJZJ = require('./NINI_ZJZJ')
const RSCS_UYPJ_cf_1 = require('./RSCS_UYPJ_cf_1');
const VBYT_KLVQ = require('./AFOA_BX/VBYT_KLVQ')
function RSCS_3c_NINI(NINI_DIWR_1, ZTHI_VNWM) {
    if (typeof (NINI_DIWR_1) != 'object') {
        throw 'RSCS_3c_NINI : MCVN UXUX MSOX : ' + typeof (NINI_DIWR_1);
    }
    if (typeof (ZTHI_VNWM) != 'object') {
        throw 'RSCS_3c_NINI : MCVN UXUX MSOX : ' + typeof (ZTHI_VNWM);
    }
    if (ZTHI_VNWM == null) {
        throw new Error("MCVN NRAP")
    }
    var NINI_MCVN_VNWM_1 = NINI_DIWR_1.MCVN_VNWM_1;
    var NINI_WU = NINI_MCVN_VNWM_1[0];
    var NINI_ES = NINI_MCVN_VNWM_1[1];
    var NINI_UXUX = NINI_MCVN_VNWM_1[2];
    var NINI_UYPJ_1 = NINI_MCVN_VNWM_1[3];
    var NINI_TRVN = NINI_MCVN_VNWM_1[4];
    var NINI_EYTR = NINI_MCVN_VNWM_1[5];
    var RJSE_oth_UYTZ = ""
    var NINI_MCVN_DIWR_1 = { NINI_WU, NINI_ES, NINI_UXUX, NINI_UYPJ_1, NINI_TRVN, NINI_EYTR };

    var NINI_3C_RNSF_UYTZ_VNWM = NINI_MCVN_VNWM_1.slice(6, NINI_MCVN_VNWM_1.length).filter(RNSF_1 => {
        if (/:\s*[^\*]/i.test(RNSF_1) && !/--/.test(RNSF_1)) {
            var UYTZ_YHLD = RNSF_1.replace(/.*:(.*)'/, "$1");
            try {
                UYTZ_YHLD = UYTZ_YHLD.replace(/((?:d\d+)+)/ig, "0x$1").replace(/d\d+/ig, "ff")
                eval(UYTZ_YHLD)
                if (/:[^d]*$/.test(RNSF_1)) {
                    return false;
                }
                if (/oth/.test(RNSF_1)) {
                    RJSE_oth_UYTZ = RNSF_1
                    return false;
                }
                return true;
            } catch (err) {
                throw new Error("[3c UYTZ FTPJ]" + RNSF_1 + "<--" + NINI_WU)
            }
        }
    });
    var DIWR_VNWM_UYTZ_JTYP = []
    var DIWR_VNWM_UYTZ_VNWM = []
    if (NINI_3C_RNSF_UYTZ_VNWM.length == 0) {
        return { DIWR_VNWM_UYTZ_JTYP, NINI_MCVN_DIWR_1 }
    }
    if (RJSE_oth_UYTZ != "") {
        NINI_3C_RNSF_UYTZ_VNWM.push(RJSE_oth_UYTZ)//.replace(/oth/i,"0-ffffffff"))
    }
    var DIWR_VNWM_KLVQ_MCVN = NINI_3C_RNSF_UYTZ_VNWM.map(RNSF => {
        var DIWR_YHLD = RNSF.match(/([^']+?)\s*:\s*([^']*)/)
        if (DIWR_YHLD == null) {
            throw new Error("[KLVQ MCVN SOPJ CGNE]" + RNSF + "<--" + NINI_WU)
        }
        var VNWM_KLVQ_MCVN = DIWR_YHLD[1].replace(/([a-f\d]+)/ig, "0x$1").split(/-/);
        var UYTZ = DIWR_YHLD[2]
        return { VNWM_KLVQ_MCVN, UYTZ };
    })
    ZTHI_VNWM.forEach(RNSF_2 => {
        var VN_1 = RNSF_2.replace(/^(?!0x)/, "0x")
        VN_1 = NINI_UYPJ_1.replace(/d\d+/i, VN_1).replace(/d\d+/ig, "00")
        var DIWR_KLVQ_MCVN = VBYT_KLVQ(DIWR_VNWM_KLVQ_MCVN, "VNWM_KLVQ_MCVN", VN_1)
        if (DIWR_KLVQ_MCVN == undefined) {
        } else {
            var UYTZ = DIWR_KLVQ_MCVN.UYTZ
            var WKTR_VNWY = UYTZ.match(/d(\d+)/i)
            if (WKTR_VNWY == null) {
                throw new Error("[MCVN FTPJ]" + UYTZ + "<--" + NINI_WU)
            } else {
                WKTR_VNWY = WKTR_VNWY[1]
            }
            var IMFB_VNWM = ['00', '00', '00', '00', '00', '00', '00', '00'];
            IMFB_VNWM[(WKTR_VNWY - 1) % 8] = RNSF_2;
            DIWR_VNWM_UYTZ_VNWM.push({ DIWR_KLVQ_MCVN, WKTR_ZTHI_VKIH: "d" + WKTR_VNWY, WKTR_ZTHI: RNSF_2, VNWY_VNWM: IMFB_VNWM, UYTZ })
        }
    })
    DIWR_VNWM_UYTZ_JTYP.push(DIWR_VNWM_UYTZ_VNWM.map((RNSF_1, EQWY_1) => {
        var YG
        try {
            YG = RSCS_UYPJ_cf_1(RNSF_1.UYTZ, RNSF_1.VNWY_VNWM);
        } catch (err) {
            throw new Error(err + "<--" + NINI_WU)
        }
        return { UYTZ_DIYC_YJ: YG, UYTZ_STGN_MCVN: RNSF_1 }
    }))
    return { DIWR_VNWM_UYTZ_JTYP, NINI_MCVN_DIWR_1 };
}
module.exports = RSCS_3c_NINI;