const EYTR_ZYKL_FS = require("./AFOA_BX/EYTR_ZYKL_FS");
const QOJK_AGVN_NODO = require("./AFOA_BX/QOJK_AGVN_NODO");
const uz_ms = require("./AFOA_BX/uz_ms");

function VR_EBWU_BRTZ_FS_ZV_PC_FRIH_NINI(RJSE_KP) {
    var UXUX_YHLD = typeof (RJSE_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("csrf-MCVN UXUX MSOX , AOAO JI strin-" + UXUX_YHLD)
    }
    var RJSE_1 = RJSE_KP
    var BMLC = RJSE_1.match(/\/\/.*/)
    if (BMLC !== null) {
        RJSE_1 = RJSE_1.replace(/\/\/.*/, "");
    } else {
        BMLC = ""
    }
    var NINI_UXUX_2;
    if (/--+/.test(RJSE_1)) {
        NINI_UXUX_2 = "pc_frih"
        RJSE_1 = RJSE_1.replace(/--+/, "")
    } else {
        NINI_UXUX_2 = 'cf'
    }
    var DIWR_MCVN = RJSE_1.match(/(.*\})\s*(?:,\s*|)([^\w\s])(?:\s*(?:，|,)\s*|\s*)(.*)/i)
    if (DIWR_MCVN == null) {
        throw new Error("csrf-SOPJ CGNE NINI MCV-" + RJSE_KP)
    }
    var RJSE_NINI_LLAO = DIWR_MCVN[1]
    var reg_ES = /\{(.*)\}/
    var DIWR_ES = RJSE_NINI_LLAO.match(reg_ES);
    if (DIWR_ES == null) {
        throw new Error("[NRAP ES MCVN]" + RJSE_NINI_LLAO + "<--" + RJSE_KP)
    } else {
        RJSE_NINI_LLAO = RJSE_NINI_LLAO.replace(reg_ES, "{" + DIWR_ES[1].replace(/(\w\w)(?=\w)/g, "$1 ") + "}")
    }
    var NINI_UXUX = DIWR_MCVN[2]
    if (!/^=$/.test(NINI_UXUX)) {
        throw new Error("csrf-NINI UXUX ACUN-" + NINI_UXUX + "<--" + RJSE_KP)
    }
    var RJSE_MCVN = DIWR_MCVN[3]
    var VNWM_MCVN = RJSE_MCVN.replace(/(?:\s+|\s*;\s*|\s*；\s*)$/, "").split(/\s*(?:,|，)\s*|\s+/)
    var ZTHI_XBST = VNWM_MCVN[0]
    var PZVN = VNWM_MCVN[1]
    if (PZVN == undefined) {
        PZVN = 1
    } else if (PZVN == "") {
        throw new Error("csrf-PZVN ac oan lh vv-" + PZVN + "-kp-" + RJSE_KP)
    }
    var NOKZ;
    var EYTR;
    NOKZ = VNWM_MCVN[2]
    if (NOKZ == undefined) {
        NOKZ = 0
        EYTR = ""
    } else {
        try {
            eval(NOKZ)
            EYTR = VNWM_MCVN.slice(3, 9).join(" ")
        } catch (err) {
            NOKZ = 0;
            EYTR = VNWM_MCVN.slice(2, 9).join(" ")
        }
        if (EYTR == undefined) {
            EYTR = ""
        }
    }
    var rj_YHLD;
    var AGVN_TRVN = 0
    var vnwm_1 = PZVN.toString().match(/\.\d+/g)
    if (vnwm_1) {
        vnwm_1.sort((a, b) => b.length - a.length)
        AGVN_TRVN = vnwm_1[0].length - 1
    }
    try {
        rj_YHLD = eval(PZVN)
    } catch (err) {
        if (/^[^\d]+$|[e-z]|[\u4E00-\u9FA5]/i.test(PZVN)) {
            EYTR = PZVN
            rj_YHLD = 1;
        } else {
            throw new Error("csrf-PZVN BRTZ MSOX-" + PZVN + "-kp-" + RJSE_KP)
        }
    }
    PZVN = QOJK_AGVN_NODO(rj_YHLD)
    var reg_ARVN = /\d\.(\d+)/;
    var DIWR_YHLD = PZVN.toString().match(reg_ARVN)
    if (DIWR_YHLD == null) {
        AGVN_TRVN = 0
    } else {
        var vn_2 = PZVN.toString().replace(reg_ARVN, "$1").length;
        if (vn_2 > AGVN_TRVN && vn_2 > 3 && AGVN_TRVN != 0) {

        } else if (vn_2 > 3 && AGVN_TRVN == 0) {
            AGVN_TRVN = 2
        }
        else {
            AGVN_TRVN = vn_2
        }
    }
    try {
        rj_YHLD = eval(NOKZ)
    } catch (err) {
        throw new Error("csrf-NOKZ BRTZ MSOX-" + NOKZ + "<--" + RJSE_KP)
    }
    NOKZ = rj_YHLD;
    if (/\]\s*/.test(EYTR)) {
        uz_ms('csrf-eytr brtz msox-' + EYTR)
    } else {
        EYTR = EYTR_ZYKL_FS(EYTR)
    }
    var reg_XBST_1 = /^\d+(?:-\d+|)$/
    var reg_XBST_2 = /d/ig
    if (reg_XBST_1.test(ZTHI_XBST)) {
        var VNWM_YHLD = ZTHI_XBST.match(/\d+/g);
        var DO_1 = VNWM_YHLD[1] - VNWM_YHLD[0]
        var DO_0 = DO_1
        if (DO_0 < 0) {
            VNWM_YHLD.reverse()
            DO_1 = 0 - DO_1
        }
        var VNWM_ZTHI_KLVQ = ["d" + VNWM_YHLD[0]]
        for (var i1 = 0; i1 < DO_1; i1++) {
            var ZTHI_XBST_2 = "d" + (Number(VNWM_YHLD[0]) + i1 + 1)
            VNWM_ZTHI_KLVQ.push(ZTHI_XBST_2)
        }
        if (DO_0 > 0) {
            VNWM_ZTHI_KLVQ.reverse()
        }
        var VNWM_VDUM_1 = VNWM_ZTHI_KLVQ.map((RNSF, EQWY_1) => {
            return RNSF + "*" + (Math.pow(256, EQWY_1) * PZVN)
        })
        VNWM_VDUM_1.reverse()
        if (NINI_UXUX_2 === 'pc_frih') {
            return RJSE_NINI_LLAO + ",7f,128,-256," + VNWM_VDUM_1.join('+') + "+(" + NOKZ + "),." + AGVN_TRVN + "," + EYTR + ";// " + RJSE_KP.replace(/.*?\}\s*(,\s*|\uff0c\s*|)/, "");
        } else {
            return RJSE_NINI_LLAO + ",cf," + VNWM_ZTHI_KLVQ.reverse().join('') + "*(" + PZVN + ")+(" + NOKZ + "),." + AGVN_TRVN + "," + EYTR + ";// " + RJSE_KP.replace(/.*?\}\s*(,\s*|\uff0c\s*|)/, "");
        }
    } else if (reg_XBST_2.test(ZTHI_XBST)) {
        ZTHI_XBST = ZTHI_XBST.replace(reg_XBST_2, "d")
        if (NINI_UXUX_2 === 'pc_frih') {
            var uytz_dyzv = ZTHI_XBST.replace(/((?:d\d+)+)/g, (_, p1) => {
                return "0x" + p1.replace(/d\d+/g, "ff")
            })
            var vn_non_1_yg = eval(uytz_dyzv)
            if (/\./.test(vn_non_1_yg)) {
                uz_ms('CSRF-ZZZZ klvq aoao ji sdvn-' + ZTHI_XBST)
            } else {
                var rj_2_tyub = vn_non_1_yg.toString(2)
                var diwr_yhld = rj_2_tyub.match(/1+$/)
                if (diwr_yhld) {
                    var vn_hpmi = diwr_yhld.length
                    var vn_non_1_dd_yg = (vn_non_1_yg + 1) / 2
                    return `${RJSE_NINI_LLAO},3c,${ZTHI_XBST},.${AGVN_TRVN},"${EYTR}",'0-${(vn_non_1_dd_yg - 1).toString(16)}: (${ZTHI_XBST})*(${PZVN})+(${NOKZ})','${vn_non_1_dd_yg.toString(16)}-${(vn_non_1_yg).toString(16)}: ((${ZTHI_XBST})-${vn_non_1_yg + 1})*(${PZVN})+(${NOKZ})','oth:*无效数据';// ${RJSE_KP.replace(/.*?\}\s*(,\s*|\uff0c\s*|)/, "")}`
                } else {
                    uz_ms('csrf-aoao xaap vt yenh tr-' + ZTHI_XBST)
                }
            }
        } else {
            return RJSE_NINI_LLAO + ",cf,(" + + ")" + "*(" + PZVN + ")+(" + NOKZ + "),." + AGVN_TRVN + "," + EYTR + ";// " + RJSE_KP.replace(/.*?\}\s*(,\s*|\uff0c\s*|)/, "");
        }
    }
    else {
        throw new Error("[ZTHI XBST BRTZ MSOX]" + ZTHI_XBST + "<--" + RJSE_KP)
    }


}
module.exports = VR_EBWU_BRTZ_FS_ZV_PC_FRIH_NINI;