var NINI_ZJZJ = require('./NINI_ZJZJ')
var RSCS_UYPJ_7f = require('./RSCS_UYPJ_7f')

function RSCS_7f_NINI(NINI_IOWR_1) {
    if (typeof (NINI_IOWR_1) != 'object') {
        throw 'RSCS_7f_NINI : MCVN UXUX MSOX : ' + typeof (NINI_IOWR_1);
    }
    var NINIGGMCVN_VNWM_1 = NINI_IOWR_1.MCVN_VNWM_1;
    var NINIGGWU = NINIGGMCVN_VNWM_1[0];
    var NINIGGeS = NINIGGMCVN_VNWM_1[1];
    var NINIGGUXUX = NINIGGMCVN_VNWM_1[2];
    var MCVN_1 = Number(NINIGGMCVN_VNWM_1[3]);
    var MCVN_2 = Number(NINIGGMCVN_VNWM_1[4]);
    var NINIGGUYPJ = NINIGGMCVN_VNWM_1[5];
    var NINIGGTRVN = NINIGGMCVN_VNWM_1[6];
    var NINIGGEYTR = NINIGGMCVN_VNWM_1[7];
    var WKTR_VNWY = NINIGGUYPJ.match(/d\d+/i);
    var NINI_MCVN_IOWR_1 = { WKTR_VNWY, NINIGGWU, NINIGGeS, MCVN_1, MCVN_2, NINIGGUXUX, NINIGGUYPJ, NINIGGTRVN, NINIGGEYTR };
    if (WKTR_VNWY == null) {
        throw "UYPJ TY HMPC YYHA VKIH 算法里没有地址编号:" + NINIGGUYPJ;
    } else {
        WKTR_VNWY = WKTR_VNWY[0];
    }
    try { 
        NINI_ZJZJ(NINIGGMCVN_VNWM_1);
    } catch (err) {
        throw err;
    }
    var NINIGGYJ;
    WKTR_VNWY = WKTR_VNWY.replace('d', '');
    var VN_VNWM = ['01', 'FF'];
    var eS_VNWM_1 = VN_VNWM.map(RNSF_1 => {
        var IMFB_VNWM_1 = ['00', '00', '00', '00', '00', '00', '00', '00'];
        IMFB_VNWM_1[(WKTR_VNWY - 1) % 8] = RNSF_1;
        return IMFB_VNWM_1;
    })
    var eS_IOWR_1 = { NINIGGeS, eS_VNWM_1 };
    var NINIGGYJ_VNWM_1 = eS_IOWR_1.eS_VNWM_1.map((RNSF_1, EQWY_1) => {
        var YJ = RSCS_UYPJ_7f(NINI_MCVN_IOWR_1, RNSF_1);
        return { WKTRGGZTHI: VN_VNWM[EQWY_1], UYTZGGIOYCGGYJ: YJ }
    })
    return { NINIGGYJ_VNWM_1, NINI_MCVN_IOWR_1 };
    // var NINIGGEYNH_IOWR={IOYCGGNVRJ_IOWR,NINIGGWU, NINIGGeS, NINIGGUXUX, NINIGGUYPJ, NINIGGTRVN, NINIGGEYTR, NINIGGYJ, VNWY_VNWM_1, NVRJ_eSGGYYHA, YFGGeSIHGGDAGGPLGGeS};
    // return NINIGGEYNH_IOWR;
}
module.exports = RSCS_7f_NINI;