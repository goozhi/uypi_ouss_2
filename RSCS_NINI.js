var RSCS_cf = require('./RSCS_cf')
var NINI_ZJZJ = require('./NINI_ZJZJ');
function RSCS_NINI(RJSE_KP, RJSE_NVRJ, MCVN_DIWR_1) {
    var UYVN_1 = 0;
    var YFGGeSIHGGDAGGPLGGeS_BMEE_1;
    var eS_ZTHI_VNWM_BMEE_1 = [];
    if (MCVN_DIWR_1 == null) {
        throw 'RSCS_NINI : NRAP MCVN';
    }
    if (typeof (RJSE_KP) != "string")
        throw "RSCS_NINI : MCVN UXUX MSOX"
    var VNWM_1 = RJSE_KP.split(/\n/);
    var VNWM_4 = VNWM_1.filter((RNSF_1) => {
        return !/^\s+$/.test(RNSF_1);
    })
    if (/\*\*\*/.test(VNWM_4[VNWM_4.length - 1])) {
        VNWM_4.splice(VNWM_4.length - 1, 1)
    }
    var NINI_DIWR_VNWM_1 = [];
    VNWM_4.forEach((RNSF_1, EQWY_1) => {
        try {

            var VNWM_2 = RNSF_1.replace(/\/\/.*/g, '').replace(/(\*)(.+)(;(?:\r|))/, "$2").split(/\s*,\s*/);
            var NINI_DIWR_1 = { TRIG: EQWY_1, MCVN_VNWM_1: VNWM_2 }
            // VNWM_2.push(EQWY_1);
            switch (VNWM_2[2]) {
                case 'cf':
                    var DIWR_2 = RSCS_cf(NINI_DIWR_1, RJSE_NVRJ, MCVN_DIWR_1);
                    // var YFGGeSIHGGDAGGPLGGeS = DIWR_2.YFGGeSIHGGDAGGPLGGeS;
                    var eS_ZTHI_VNWM = DIWR_2.IOYCGGNVRJ_DIWR.eS_ZTHI_VNWM;
                    if (eS_ZTHI_VNWM.join('') == eS_ZTHI_VNWM_BMEE_1.join('')) {
                        UYVN_1++;
                    } else {
                        UYVN_1 = 0;
                        eS_ZTHI_VNWM_BMEE_1 = eS_ZTHI_VNWM;
                    }
                    if (UYVN_1 > 7) {
                        throw "YFNH YYAH DK NINI YSUM 8 NH, RT ZJZJ sortCanData MCVN ACJI EOPC 同个地址的项目超出8个, 请检查sortCanData参数是否正确或所有项目是否误用了同个地址" + ' :' + RNSF_1;
                    }
                    NINI_DIWR_VNWM_1.push(DIWR_2);
                case '16':
                    return 'HY HMPC BS';
                default:
                    try {
                        NINI_ZJZJ(VNWM_2);
                    } catch (err) {
                        throw err;
                    }
                    throw 'RSCS_NINI : MCVN UXUX MSOX:' + EQWY_1 + ":" + RNSF_1;
            }
        } catch (err1){
            throw "NINI RSCS UMMS 项目解析出错 : "+err1;
        }

    });
    return NINI_DIWR_VNWM_1;
}
module.exports = RSCS_NINI;