function VR_EBWU_BRTZ_FS_ZV_bb(RJSE_KP) {
    var xbst_bb_ae_1f = 'bb'
    var UXUX_YHLD = typeof (RJSE_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("csrf-MCVN UXUX MSOX , AOAO JI string-" + UXUX_YHLD)
    }
    var RJSE_1 = RJSE_KP;
    var BMLC = RJSE_1.match(/\/\/.*/)
    if (BMLC !== null) {
        RJSE_1 = RJSE_1.replace(/\/\/.*/, "");
    } else {
        BMLC = ""
    }
    var DIWR_MCVN = RJSE_1.match(/(.*\}\s*)(?:,\s*|)([^,\s]+)(?:\s*,\s*|\s+)(.*)/i)
    if (DIWR_MCVN == null) {
        throw new Error("csrf-SOPJ CGNE NINI MCVN-" + RJSE_KP)
    }
    var LLAO = DIWR_MCVN[1]
    var reg_ES = /\{(.*)\}/
    var DIWR_ES = LLAO.match(reg_ES);
    if (DIWR_ES == null) {
        throw new Error("[NRAP ES MCVN]" + LLAO + "<--" + RJSE_KP)
    } else {
        LLAO = LLAO.replace(reg_ES, "{" + DIWR_ES[1].replace(/(\w\w)(?=\w)/g, "$1 ") + "}")
    }

    var RJSE_MCVN = DIWR_MCVN[3]
    var DIWR_REYE_XBST = RJSE_MCVN.match(/=(\w+)\s*$/)
    var RJSE_REYE_XBST = ""
    var VBYT_1 = true;
    if (DIWR_REYE_XBST != null) {
        RJSE_REYE_XBST = DIWR_REYE_XBST[1].toLowerCase()
        RJSE_MCVN = RJSE_MCVN.replace(/=(\w+)\s*$/, "")
        if (RJSE_REYE_XBST == "2") {
            RJSE_REYE_XBST = ""
            VBYT_1 = false
        }
    }
    if (VBYT_1 && !/"/.test(RJSE_MCVN)) {
        var reg_YHRJ_VNZR_WMGR = /([\u4E00-\u9FA5])(\d)/g
        var reg_VNZR_YHRJ_WMGR = /(\d)([\u4E00-\u9FA5])/g
        var sheng_1 = "$1 $2";
        RJSE_MCVN = RJSE_MCVN.replace(reg_YHRJ_VNZR_WMGR, sheng_1).replace(reg_VNZR_YHRJ_WMGR, sheng_1)
    }
    var VNWM_MCVN = RJSE_MCVN.replace(/(?:\s+|\s*;\s*|\s*\uff1b\s*)$/, "").replace(/"\s+"/, " +").split(/\s*(?:,|\uff0c)\s*|\s+/)

    var VNWM_ZYKL_MCVN = VNWM_MCVN.map(RNSF => {
        if (/^(?:d|)\d+(?:-(?:d|)\d+|)$/.test(RNSF)) {
            var RJSE_YHLD = RNSF.replace(/(^|-)(?:(?!d).{0})(\d+)/ig, "$1d$2") + RJSE_REYE_XBST;
            return RJSE_YHLD
        } else if (/^\d+[hawqbgs]$/i.test(RNSF)) {
            if (/^\d+[wqbgs]$/i.test(RNSF)) {
                xbst_bb_ae_1f = '1f'
            }
            return ("d" + RNSF).toLowerCase();
        } else if (/.\+$/.test(RNSF)) {
            return "\"" + RNSF.replace(/\+$/, "") + "\""
        } else if (/^\+$/.test(RNSF)) {
            return "\"" + RNSF.replace(/\+$/, " ") + "\""
        } else if (/^\d+-\d+[hawqbgs]$/i.test(RNSF)) {
            if (/\d+[wqbgs]/i.test(RNSF)) {
                xbst_bb_ae_1f = '1f'
            }
            return RNSF.replace(/(\d+)/g, "d$1").toLowerCase()
        } else if (/^(?:d|)\d+(?:-(?:d|)\d+|)d$/i.test(RNSF)) {
            return RNSF.replace(/^(?:(?!d).{0})(\d+)/ig, "d$1").replace(/d$/i, "")
        } else if (/^(?:".*"|d\d+(?:-d\d+|)(?:h|a|))$/i.test(RNSF)) {
            return RNSF
        }
        else {
            return "\"" + RNSF + "\""
        }
    })
    return LLAO + "," + xbst_bb_ae_1f + "," + VNWM_ZYKL_MCVN.join(",") + ";" + BMLC
}
module.exports = VR_EBWU_BRTZ_FS_ZV_bb