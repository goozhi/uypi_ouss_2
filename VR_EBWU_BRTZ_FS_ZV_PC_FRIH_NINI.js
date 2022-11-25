const EYTR_ZYKL_FS = require("./AFOA_BX/EYTR_ZYKL_FS");
const QOJK_AGVN_NODO = require("./AFOA_BX/QOJK_AGVN_NODO");

function VR_EBWU_BRTZ_FS_ZV_PC_FRIH_NINI(RJSE_KP) {
    var UXUX_YHLD = typeof (RJSE_KP);
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX , AOAO JI string:" + UXUX_YHLD)
    }
    var RJSE_1 = RJSE_KP
    var BMLC=RJSE_1.match(/\/\/.*/)
    if(BMLC!==null){
        RJSE_1=RJSE_1.replace(/\/\/.*/,"");
    }else{
        BMLC = ""
    }
    var NINI_UXUX_2;
    if(/--+/.test(RJSE_1)){
        NINI_UXUX_2="7f"
        RJSE_1=RJSE_1.replace(/--+/,"")
    }else{
        NINI_UXUX_2='cf'
    }
    var IOWR_MCVN = RJSE_1.match(/(.*\})\s*(?:,\s*|)([^\w\s])(?:\s*(?:，|,)\s*|\s*)(.*)/i)
    if (IOWR_MCVN == null) {
        throw new Error("SOPJ CGNE NINI MCVN:" + RJSE_KP)
    }
    var RJSE_NINI_LLAO = IOWR_MCVN[1]
    var reg_ES=/\{(.*)\}/
    var IOWR_ES=RJSE_NINI_LLAO.match(reg_ES);
    if(IOWR_ES==null){
        throw new Error("[NRAP ES MCVN]"+RJSE_NINI_LLAO+"<--"+RJSE_KP)
    }else{
        RJSE_NINI_LLAO=RJSE_NINI_LLAO.replace(reg_ES,"{"+IOWR_ES[1].replace(/(\w\w)(?=\w)/g,"$1 ")+"}")
    }

    var NINI_UXUX=IOWR_MCVN[2]    
    if(!/^=$/.test(NINI_UXUX)){
        throw new Error("NINI UXUX ACUN : "+NINI_UXUX+"<--"+RJSE_KP)
    }
    var RJSE_MCVN = IOWR_MCVN[3]
    var VNWM_MCVN = RJSE_MCVN.replace(/(?:\s+|\s*;\s*|\s*；\s*)$/, "").split(/\s*(?:,|，)\s*|\s+/)
    var ZTHI_XBST = VNWM_MCVN[0]
    var PZVN = VNWM_MCVN[1]
    if(PZVN==undefined){
        PZVN=1
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
            EYTR = VNWM_MCVN.slice(3,9).join(" ")
        } catch (err) {
            NOKZ = 0;
            EYTR = VNWM_MCVN.slice(2,9).join(" ")
        }
        if (EYTR == undefined) {
            EYTR = ""
        }
    }
    var VN_YHLD;
    try {
        VN_YHLD = eval(PZVN)
    } catch (err) {
        if(/^[^\d]+$|[e-z]|[\u4E00-\u9FA5]/i.test(PZVN)){
            EYTR=PZVN
            VN_YHLD=1;
        }else{
            throw new Error("PZVN BRTZ MSOX : " + PZVN+"<--"+RJSE_KP)
        }
    }
    PZVN = QOJK_AGVN_NODO(VN_YHLD)
    var reg_ARVN = /\d\.(\d+)/;
    var IOWR_YHLD = PZVN.toString().match(reg_ARVN)
    var AGVN_TRVN
    if (IOWR_YHLD == null) {
        AGVN_TRVN = 0
    } else {
        AGVN_TRVN = PZVN.toString().replace(reg_ARVN, "$1").length;
        if(AGVN_TRVN>3){
            AGVN_TRVN=2
        }
    }
    try {
        VN_YHLD = eval(NOKZ)
    } catch (err) {
        throw new Error("NOKZ BRTZ MSOX : " + NOKZ + "<--" + RJSE_KP)
    }
    NOKZ = VN_YHLD;
    var reg_XBST_1=/^\d+(?:-\d+|)$/
    var reg_XBST_2=/[\\、d]/ig
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
                var ZTHI_XBST_2="d" + (Number(VNWM_YHLD[0]) + i1 + 1)
                VNWM_ZTHI_KLVQ.push(ZTHI_XBST_2)
            }
            if (DO_0 > 0) {
                VNWM_ZTHI_KLVQ.reverse()
            }            
            var VNWM_VDUM_1 = VNWM_ZTHI_KLVQ.map((RNSF, EQWY_1) => {
                return RNSF + "*" + (Math.pow(256, EQWY_1) * PZVN)
            })
            VNWM_VDUM_1.reverse()

            if(/7f/i.test(NINI_UXUX_2)){
                return RJSE_NINI_LLAO + ",7f,128,-256," + VNWM_VDUM_1.join('+') + "+(" + NOKZ + "),." + AGVN_TRVN + "," + EYTR_ZYKL_FS(EYTR)+";// "+RJSE_KP.replace(/.*?\}\s*(,\s*|\uff0c\s*|)/,"");
            }else{
                return RJSE_NINI_LLAO + ",cf,"+ VNWM_ZTHI_KLVQ.reverse().join('')+ "*("+PZVN + ")+(" + NOKZ + "),." + AGVN_TRVN + "," + EYTR_ZYKL_FS(EYTR)+";// "+RJSE_KP.replace(/.*?\}\s*(,\s*|\uff0c\s*|)/,"");
            }
    } else if(reg_XBST_2.test(ZTHI_XBST)){
        return RJSE_NINI_LLAO + ",cf,("+ ZTHI_XBST.replace(reg_XBST_2,"d")+")"+ "*("+PZVN + ")+(" + NOKZ + "),." + AGVN_TRVN + "," + EYTR_ZYKL_FS(EYTR)+";// "+RJSE_KP.replace(/.*?\}\s*(,\s*|\uff0c\s*|)/,"");
    }
    else {
        throw new Error("[ZTHI XBST BRTZ MSOX]" + ZTHI_XBST + "<--" + RJSE_KP)
    }


}
module.exports = VR_EBWU_BRTZ_FS_ZV_PC_FRIH_NINI;