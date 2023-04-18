const uz_ms = require("./AFOA_BX/uz_ms");

function VR_EBWU_BRTZ_FS_ZV_V(RJSE_KP) {
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
    if (!/^(?:V)$/i.test(NINI_UXUX)) {
        throw new Error("[NINI UXUX ACUN]" + NINI_UXUX + "<--" + RJSE_KP)
    }
    var ZZZZ_KLVQ = DIWR_MCVN[3]
    try {
        eval(ZZZZ_KLVQ.replace(/d\d+/ig, "1"))
    } catch {
        throw new Error("[ZZZZ KLVQ MCVN FTPJ]" + ZZZZ_KLVQ + "<--" + RJSE_KP)
    }
    if (ZZZZ_KLVQ == "") {
        ZZZZ_KLVQ = "d4"
    } else if (/^\d+$/.test(ZZZZ_KLVQ)) {
        ZZZZ_KLVQ = "d" + ZZZZ_KLVQ
    }
    ZZZZ_KLVQ = ZZZZ_KLVQ.replace(/(?<!d)(\d+)/ig, "d$1")

    var rj_yhld = DIWR_MCVN[4]
    var vnwm_yhld = rj_yhld.split(/\./)
    vnwm_yhld.reverse()
    var vn_1 = 0
    var vnwm_2 = vnwm_yhld.map(rn1 => {
        var vnwm_3 = rn1.split('')
        vnwm_3.reverse()
        return vnwm_3.map((rn2, eqwy_2, vnwm_3) => {
            var vnwm_xbst = ['g', 's', 'b', 'q', 'w']
            var xbst_2 = vnwm_xbst[vn_1]
            vn_1++
            if(!xbst_2){
                uz_ms('csrf-mcvn msox-'+RJSE_KP)
            }
            rj_3 = ZZZZ_KLVQ + xbst_2
            return rj_3
        }).reverse()
    })
    vnwm_2.reverse()

    var rj_yhld = vnwm_2.join(',".",')
    return LLAO + ",1f," + rj_yhld + ";" + BMLC
}
module.exports = VR_EBWU_BRTZ_FS_ZV_V;