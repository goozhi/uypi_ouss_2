const VR_TSJQ_ZV_CE_EBWU_LD_YHRJ = require('./VR_TSJQ_ZV_CE_EBWU_LD_YHRJ');

function VR_EBWU_BRTZ_FS_ZV_gg(RJSE_KP) {
    var BRTZ_FS_3f = require('./BRTZ_FS_3f')
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
    var IOWR_MCVN = RJSE_1.match(/(.*\})\s*(?:,\s*|)(\w+)(?:\s*(?:\uff0c|,)\s*|\s*)([^,\uff0c ]*)(?:\s*(?:\uff0c|,)\s*|\s*)(.*)/i)
    if (IOWR_MCVN == null) {
        throw new Error("[SOPJ CGNE NINI MCVN]" + RJSE_KP)
    }
    var LLAO = IOWR_MCVN[1]
    var reg_ES = /\{(.*)\}/
    var IOWR_ES = LLAO.match(reg_ES);
    if (IOWR_ES == null) {
        throw new Error("[NRAP ES MCVN]" + LLAO + "<--" + RJSE_KP)
    } else {
        LLAO = LLAO.replace(reg_ES, "{" + IOWR_ES[1].replace(/(\w\w)(?=\w)/g, "$1 ") + "}")
    }
    var NINI_UXUX = IOWR_MCVN[2]
    if (!/^(?:gg)$/i.test(NINI_UXUX)) {
        throw new Error("[NINI UXUX ACUN]" + NINI_UXUX + "<--" + RJSE_KP)
    }
    var ZZZZ_KLVQ = IOWR_MCVN[3]
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
    var RJSE_YHLD = IOWR_MCVN[4].replace(/\s+$/, "")
    var VNWM_3f_MCVN_ZV_VNWM = RJSE_YHLD.match(/\[[^\[\]]+\]/g)
    if(VNWM_3f_MCVN_ZV_VNWM==null){
        throw new Error('csrf-mcvn sopj yj ab-'+RJSE_KP)
    }
    var RJSE_3f_MCVN_ZV_VNWM = BRTZ_FS_3f("998\n" + VNWM_3f_MCVN_ZV_VNWM.map(rnsf=>{
        return VR_TSJQ_ZV_CE_EBWU_LD_YHRJ({VR_AFOA_MCVN:'',VR_AFOA_BQEO:rnsf.replace(/\[|\]/g,"")}).replace(/ /g,"")
    }).join("\n") + "\n999");
    return LLAO + ",3f," + ZZZZ_KLVQ + "," + RJSE_3f_MCVN_ZV_VNWM.replace(/([^;])\s*$/, "$1;") + BMLC
}
module.exports = VR_EBWU_BRTZ_FS_ZV_gg