
function NVCM_NINI_HQTB(IOWR_2) {
    var IOWR_1 = IOWR_2.NINI_MCVN_IOWR_1;
    var WKTR_VNWY = IOWR_1.WKTR_VNWY;
    var IOWR_VNWM_1 = IOWR_2.NINIGGYJ_VNWM_1;
    var VNWM_1 = IOWR_VNWM_1.map(RNSF_1 => {
        var VN_YHLD = IOWR_1.NINIGGTRVN.replace(/.*\.(\d+).*/,"$1");
        return WKTR_VNWY + "=" + RNSF_1.WKTRGGZTHI + "(" + RNSF_1.UYTZGGIOYCGGYJ.toFixed(VN_YHLD) + ")";
    })
    var RJSE_1 = VNWM_1.join(" , ") + "; (" + IOWR_1.NINIGGUYPJ + ")" + IOWR_1.NINIGGEYTR+" "+IOWR_1.NINIGGTRVN;
    var ZKRS_1 = RJSE_1;//IOWR_1.NINIGGWU+":"+RJSE_1;
    return ZKRS_1;
}
module.exports=NVCM_NINI_HQTB;