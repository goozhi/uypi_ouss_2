function VR_EBWU_BRTZ_FS_ZV_bb(RJSE_KP) {
    var UXUX_YHLD = typeof (RJSE_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX , AOAO JI string:" + UXUX_YHLD)
    }
    var RJSE_1 = RJSE_KP;
    var BMLC=RJSE_1.match(/\/\/.*/)
    if(BMLC!==null){
        RJSE_1=RJSE_1.replace(/\/\/.*/,"");
    }else{
        BMLC = ""
    }
    var IOWR_MCVN = RJSE_1.match(/(.*\}\s*)(?:,\s*|)([^,\s]+)(?:\s*,\s*|\s+)(.*)/i)
    if (IOWR_MCVN == null) {
        throw new Error("SOPJ CGNE NINI MCVN:" + RJSE_KP)
    }
    var RJSE_NINI_LLAO = IOWR_MCVN[1]
    var RJSE_MCVN = IOWR_MCVN[3]
    var IOWR_REYE_XBST = RJSE_MCVN.match(/=(\w+)\s*$/)
    var RJSE_REYE_XBST = ""
    var VBYT_1=true;
    if (IOWR_REYE_XBST != null){
        RJSE_REYE_XBST = IOWR_REYE_XBST[1].toLowerCase()
        RJSE_MCVN=RJSE_MCVN.replace(/=(\w+)\s*$/,"")
        if(RJSE_REYE_XBST=="2"){
            RJSE_REYE_XBST=""
            VBYT_1=false
        }
    }
    if(VBYT_1&&!/"/.test(RJSE_MCVN)){
        var reg_YHRJ_VNZR_WMGR=/([\u4E00-\u9FA5])(\d)/g
        var reg_VNZR_YHRJ_WMGR=/(\d)([\u4E00-\u9FA5])/g
        var sheng_1="$1 $2";
        RJSE_MCVN=RJSE_MCVN.replace(reg_YHRJ_VNZR_WMGR,sheng_1).replace(reg_VNZR_YHRJ_WMGR,sheng_1)
    }
    var VNWM_MCVN = RJSE_MCVN.replace(/(?:\s+|\s*;\s*|\s*\uff1b\s*)$/,"").replace(/"\s+"/," +").split(/\s*(?:,|\uff0c)\s*|\s+/)

    var VNWM_ZYKL_MCVN = VNWM_MCVN.map(RNSF => {
        if (/^(?:d|)\d+(?:-(?:d|)\d+|)$/.test(RNSF)) {
            var RJSE_YHLD=RNSF.replace(/(^|-)(?:(?!d).{0})(\d+)/ig, "$1d$2")+RJSE_REYE_XBST;
            return RJSE_YHLD
        } else if (/^\d+(?:h|a)$/i.test(RNSF)) {
            return ("d" + RNSF).toLowerCase();
        } else if (/.\+$/.test(RNSF)) {
            return "\"" + RNSF.replace(/\+$/, "") + "\""
        } else if (/^\+$/.test(RNSF)) {
            return "\"" + RNSF.replace(/\+$/, " ") + "\""
        } else if (/^\d+-\d+(?:h|a)$/i.test(RNSF)) {
            return RNSF.replace(/(\d+)/g, "d$1")
        } else if (/^(?:d|)\d+(?:-(?:d|)\d+|)d$/i.test(RNSF)) {
            return RNSF.replace(/^(?:(?!d).{0})(\d+)/ig, "d$1").replace(/d$/i, "")
        } else if (/^(?:".*"|d\d+(?:-d\d+|)(?:h|a|))$/i.test(RNSF)) {
            return RNSF
        }
        else {
            return "\"" + RNSF + "\""
        }
    })
    return RJSE_NINI_LLAO + ",bb," + VNWM_ZYKL_MCVN.join(",")+";"+BMLC
}
module.exports = VR_EBWU_BRTZ_FS_ZV_bb