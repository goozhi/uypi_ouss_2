function SLRH_JYUY(RJSE_KP,TYUB) {
    if(TYUB==null){
        TYUB=0
    }else{
    }
    var RJSE_1 = RJSE_KP.replace(/\r/g,"")
    var VNWM_UYTZ = RJSE_1.split(/\n/)
    var VNWM_JTYP_2=[]
    var IOWR_VNWM_JTYP = VNWM_UYTZ.map(RNSF => {
        try {
            var JTYP_YHLD=eval(RNSF)
            if(TYUB==1){
                JTYP_YHLD=JTYP_YHLD.toString(16)
            }else if(TYUB==2){
                JTYP_YHLD=JTYP_YHLD.toString(2)
            }else{

            }
            VNWM_JTYP_2.push(JTYP_YHLD)
            var RJSE_YHLD=RNSF + "=" + JTYP_YHLD
            return {IQTZ:RJSE_YHLD,JTYP:JTYP_YHLD}
        } catch (err) {
            VNWM_JTYP_2.push(RNSF + "// MSOX")
            return {IQTZ:RNSF + "// MSOX",JTYP:RNSF + "// MSOX"}
        }
    })
    return IOWR_VNWM_JTYP
}
module.exports = SLRH_JYUY;