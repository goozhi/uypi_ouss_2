function VR_EBWU_BRTZ_FS_ZV_10(RJSE_KP){
    var UXUX_YHLD = typeof (RJSE_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX , AOAO JI string:" + UXUX_YHLD)
    }
    var RJSE_1 = RJSE_KP.replace(/[\u2018\u2019]/g,'\'')
    var BMLC=RJSE_1.match(/\/\/.*/)
    if(BMLC!==null){
        RJSE_1=RJSE_1.replace(/\/\/.*/,"");
    }else{
        BMLC = ""
    }
    RJSE_1=RJSE_1.replace(/(?:;|\uff1b)\s*$/,"")
    var DIWR_MCVN = RJSE_1.match(/(.*\})\s*(?:,\s*|)(\w+)(?:\s*(?:\uff0c|,)\s*|\s*)(.*)/i)
    if (DIWR_MCVN == null) {
        throw new Error("[SOPJ CGNE NINI MCVN]" + RJSE_KP)
    }
    var LLAO=DIWR_MCVN[1]
    var reg_ES=/\{(.*)\}/
    var DIWR_ES=LLAO.match(reg_ES);
    if(DIWR_ES==null){
        throw new Error("[NRAP ES MCVN]"+LLAO+"<--"+RJSE_KP)
    }else{
        LLAO=LLAO.replace(reg_ES,"{"+DIWR_ES[1].replace(/(\w\w)(?=\w)/g,"$1 ")+"}")
    }

    var NINI_UXUX=DIWR_MCVN[2]
    if(!/^(?:10|d)$/i.test(NINI_UXUX)){
        throw new Error("[NINI UXUX ACUN]"+NINI_UXUX+"<--"+RJSE_KP)
    }
    var RJSE_MCVN=DIWR_MCVN[3]
    var VNWM_MCVN = RJSE_MCVN.replace(/(?:\s+|\s*;\s*|\s*\uff1b\s*)$/,"").replace(/"\s+"/," +").split(/\s*(?:,|\uff0c)\s*|\s+/)
    var VNWM_ZYKL_MCVN = VNWM_MCVN.map(RNSF => {
        if (/^(?:d|)\d+(?:-(?:d|)\d+|)$/.test(RNSF)) {
            var RJSE_YHLD=RNSF.replace(/(^|-)(?:(?!d).{0})(\d+)/ig, "$1d$2");
            return RJSE_YHLD
        } else if (/^\d+(?:h|a)$/i.test(RNSF)) {
            return ("d" + RNSF).replace(/(?:h|a)/ig,"");
        } else if (/^.\+$/.test(RNSF)) {
            return "\"" + RNSF.replace(/\+$/, "") + "\""
        } else if (/^\+$/.test(RNSF)) {
            return "\"" + RNSF.replace(/\+$/, " ") + "\""
        } else if (/^\d+-\d+(?:h|a)$/i.test(RNSF)) {
            return RNSF.replace(/(\d+)/g, "d$1").replace(/(?:h|a)/ig,"");
        } else if (/^(?:d|)\d+(?:-(?:d|)\d+|)d$/i.test(RNSF)) {
            return RNSF.replace(/^(?:(?!d).{0})(\d+)/ig, "d$1").replace(/d$/i, "")
        } else if (/^(?:"."|d\d+(?:-d\d+|)(?:h|a|))$/i.test(RNSF)) {
            return RNSF.replace(/(\d)(?:a|h)/i,"$1")
        }
        else {
            return "\"" + RNSF + "\""
        }
    })
    return LLAO + ",10," + VNWM_ZYKL_MCVN.join(",")+";"+BMLC
}
module.exports=VR_EBWU_BRTZ_FS_ZV_10