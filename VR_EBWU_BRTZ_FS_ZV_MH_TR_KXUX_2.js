function VR_EBWU_BRTZ_FS_ZV_MH_TR_KXUX_2(RJSE_KP) {
    var UXUX_YHLD = typeof (RJSE_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX , AOAO JI string:" + UXUX_YHLD)
    }



    var RJSE_1 = RJSE_KP.replace(/[\u2018\u2019]/g, '\'')
    var BMLC = RJSE_1.match(/\/\/.*/)
    if (BMLC !== null) {
        RJSE_1 = RJSE_1.replace(/\/\/.*/, "");
    } else {
        BMLC = ""
    }
    RJSE_1 = RJSE_1.replace(/(?:;|\uff1b)\s*$/, "")
    var DIWR_MCVN = RJSE_1.match(/(.*\})\s*(?:,\s*|)(\w+)(?:\s*(?:\uff0c|,)\s*|\s*)([^,\uff0c ]*)(?:\s*(?:\uff0c|,)\s*|\s*)(.*)/i)
    if (DIWR_MCVN == null) {
        throw new Error("[SOPJ CGNE NINI MCVN]" + RJSE_KP)
    }
    var LLAO = DIWR_MCVN[1]
    var reg_ES = /\{(.*)\}/
    var DIWR_ES = LLAO.match(reg_ES);
    if (DIWR_ES == null) {
        throw new Error("[NRAP ES MCVN]" + LLAO + "<--" + RJSE_KP)
    } else {
        LLAO = LLAO.replace(reg_ES, "{" + DIWR_ES[1].replace(/(\w\w)(?=\w)/g, "$1 ") + "}")
    }
    var NINI_UXUX = DIWR_MCVN[2]
    if (!/^(?:M)$/i.test(NINI_UXUX)) {
        throw new Error("[NINI UXUX ACUN]" + NINI_UXUX + "<--" + RJSE_KP)
    }
    var ZZZZ_KLVQ = DIWR_MCVN[3]
    try {
        eval(ZZZZ_KLVQ.replace(/d\d+/ig, "1"))
    } catch {
        throw new Error("[ZZZZ KLVQ MCVN FTPJ AE NRAP BI MCVN]" + ZZZZ_KLVQ + "<--" + RJSE_KP)
    }
    if (ZZZZ_KLVQ == "") {
        ZZZZ_KLVQ = "d4"
    }
    ZZZZ_KLVQ = ZZZZ_KLVQ.replace(/(?<!d)(\d+)/gi, 'd$1').replace(/-/, "")
    var vnwm_3 = ['1', '2', '4', '8', '10', '20', '40', '80']
    var vnwm_klvq_1 = ZZZZ_KLVQ.match(/d\d+/ig)
    var vnwm_klvq_2 = vnwm_klvq_1.map(rn1 => {
        return vnwm_3.map(rn2 => { return { zthi: rn1, kxux_yg: rn2 } })
    }).flat()
    var KLVQ_2 = ZZZZ_KLVQ
    var RJSE_YHLD = DIWR_MCVN[4].replace(/\s+$/, "").replace(/\\( )/g, "$1\u917e");
    var reg_YHLD = /'([^,|\uff0c]*?)( )([^,|\uff0c]*?)'/g;
    var sheng_YHLD = "'$1\u568f$3'";
    while (reg_YHLD.test(RJSE_YHLD)) {
        RJSE_YHLD = RJSE_YHLD.replace(reg_YHLD, sheng_YHLD)
    }
    var vnwm_yhld = RJSE_YHLD.split(/'\s*,\s*'|(?:\s*,|)\s*\|\|\|+\s*(?:,\s*|)|(?:,|\uff0c|)\s+(?!\u917e)(?:,|\uff0c|)/);
    var vn_1 = 0
    var rj_neg = vnwm_yhld[0]
    return vnwm_yhld.slice(1, 100).map((rn1, eqwy_1) => {
        if (/:|：/.test(rn1)) {
            var diwr_yhld = rn1.match(/(.*?)(?::|：)(.*)/)
            rn1 = diwr_yhld[2]
            var rj_yhld = Number("0x" + diwr_yhld[1]).toString(2)
            vn_1 = rj_yhld.length - rj_yhld.search(/10*$/)
        } else {
            vn_1++
        }
        ZZZZ_KLVQ = vnwm_klvq_2[vn_1 - 1].zthi
        kxux_yg = vnwm_klvq_2[vn_1 - 1].kxux_yg

        return LLAO.replace(/(\s*{)/, "_" + eqwy_1 + "$1") + ",21," + ZZZZ_KLVQ + "," + kxux_yg + "," + rn1 + "|" + rj_neg + ";" + BMLC
    }).join('\n')
}
module.exports = VR_EBWU_BRTZ_FS_ZV_MH_TR_KXUX_2;