
var NINI_ZJZJ = require('./NINI_ZJZJ')
var RSCS_UYPJ_cf = require('./RSCS_UYPJ_cf')

function RSCS_cf_NINI(NINI_DIWR_1,VN_VNWM) {
    if (typeof (NINI_DIWR_1) != 'object') {
        throw 'RSCS_cf_NINI : MCVN UXUX MSOX : ' + typeof (NINI_DIWR_1);
    }
    var NINI_MCVN_VNWM_1 = NINI_DIWR_1.MCVN_VNWM_1;
    var NINI_WU = NINI_MCVN_VNWM_1[0];
    var NINI_eS = NINI_MCVN_VNWM_1[1];
    var NINI_UXUX = NINI_MCVN_VNWM_1[2];
    var NINI_UYPJ = NINI_MCVN_VNWM_1[3];
    var NINI_TRVN = NINI_MCVN_VNWM_1[4];
    var NINI_EYTR = NINI_MCVN_VNWM_1[5];
    var WKTR_VNWY = NINI_UYPJ.match(/d\d+/i);
    var NINI_MCVN_DIWR_1 = { WKTR_VNWY, NINI_WU, NINI_eS, NINI_UXUX, NINI_UYPJ, NINI_TRVN, NINI_EYTR };
    if (WKTR_VNWY == null) {
        throw "UYPJ TY HMPC YYHA VKIH 算法里没有地址编号:" + NINI_UYPJ;
    } else {
        WKTR_VNWY = WKTR_VNWY[0];
    }
    try {
        NINI_ZJZJ(NINI_MCVN_VNWM_1);
    } catch (err) {
        throw err;
    }
    var NINI_YJ;
    WKTR_VNWY = WKTR_VNWY.replace('d', '');
    if(VN_VNWM==null){
        VN_VNWM = ['01',"80", "FF"];
    }else{
        var UXUX_YHLD=typeof(VN_VNWM)
        if(UXUX_YHLD!="object"){
            throw new Error('MCVN UXUX MSOX, AOAO JI object:'+UXUX_YHLD)
        }
    }
    var eS_VNWM_1 = VN_VNWM.map(RNSF_1 => {
        var IMFB_VNWM_1 = ['00', '00', '00', '00', '00', '00', '00', '00'];
        IMFB_VNWM_1[(WKTR_VNWY - 1) % 8] = RNSF_1;
        return IMFB_VNWM_1;
    })
    var eS_DIWR_1 = { NINI_eS, eS_VNWM_1 };
    var NINI_YJ_VNWM_1 = eS_DIWR_1.eS_VNWM_1.map((RNSF_1, EQWY_1) => {
        var YJ = RSCS_UYPJ_cf(NINI_UYPJ, RNSF_1);
        return { WKTR_ZTHI: VN_VNWM[EQWY_1], UYTZ_IOYC_YJ: YJ }
    })
    return { NINI_YJ_VNWM_1, NINI_MCVN_DIWR_1 };
    // var NINI_EYNH_DIWR={IOYC_NVRJ_DIWR,NINI_WU, NINI_eS, NINI_UXUX, NINI_UYPJ, NINI_TRVN, NINI_EYTR, NINI_YJ, VNWY_VNWM_1, NVRJ_eS_YYHA, YF_eSIH_DA_PL_eS};
    // return NINI_EYNH_DIWR;
}
module.exports = RSCS_cf_NINI;