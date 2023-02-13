const TR_JYUY_ZFM_AA = require("./AFOA_BX/TR_JYUY_ZFM_AA");

function RSCS_3f_NINI(NINI_DIWR_1) {
    if (typeof (NINI_DIWR_1) != 'object') {
        throw 'RSCS_3f_NINI : MCVN UXUX MSOX : ' + typeof (NINI_DIWR_1);
    }
    var NINI_MCVN_VNWM_1 = NINI_DIWR_1.MCVN_VNWM_1;
    var NINI_WU = NINI_MCVN_VNWM_1[0];
    var NINI_ES = NINI_MCVN_VNWM_1[1];
    var NINI_UXUX = NINI_MCVN_VNWM_1[2];
    var NINI_UYPJ_1 = NINI_MCVN_VNWM_1[3];
    var NINI_3f_VNWM_KP = NINI_MCVN_VNWM_1.slice(4, NINI_MCVN_VNWM_1.length)
    var NINI_3f_VNWM_MCVN = NINI_3f_VNWM_KP.map(RNSF => {
        var DIWR_YHLD = RNSF.match(/([^']+?):([^']+)/)
        if (DIWR_YHLD == null) {
            throw new Error("[3f VNWM RNSF FTPJ]" + RNSF + "<--" + NINI_WU)
        } else {
            var jtyj_yg
            try {
                jtyj_yg = eval("0x" + DIWR_YHLD[1])
            } catch (err) {
                if(!/oth/i.test(DIWR_YHLD[1])){
                    throw new Error('csrf-jtyj yg ft pj-' + DIWR_YHLD[1])
                }else{
                    jtyj_yg=DIWR_YHLD[1]
                }
            }
            var vnwm_DIYC_KLVQ = TR_JYUY_ZFM_AA(NINI_UYPJ_1, jtyj_yg, "d\\d+", 16)
            var DIYC_KLVQ_ZV_YENH
            if(vnwm_DIYC_KLVQ==null){

            }
            else if(vnwm_DIYC_KLVQ.length>1){
                DIYC_KLVQ_ZV_YENH=vnwm_DIYC_KLVQ[0]+" ..."
            }else{
                DIYC_KLVQ_ZV_YENH=vnwm_DIYC_KLVQ[0]

            }
            return { KLVQ_MCVN: DIWR_YHLD[1], BQEO: DIWR_YHLD[2], DIYC_KLVQ_ZV_YENH }
        }
    })
    var NINI_MCVN_DIWR_1 = { NINI_WU, NINI_ES, NINI_UXUX, NINI_UYPJ_1, NINI_3f_VNWM_KP };
    return { NINI_3f_VNWM_MCVN, NINI_MCVN_DIWR_1 };

}
module.exports = RSCS_3f_NINI