//D:\RSGM\nodejs\UYPI_OUSS_2\KPLU\CE_EBWU_SJBX.json
function CE_EBWU_LD_YHRJ(RJSE_KP) {
    RJSE_1 = RJSE_KP;

    var SJBX = require('./CE_EBWU_SJBX.json');
    var reg_LEUN = /\[.*?\]|<.*?>/g;
    var VNWM_LEUN = RJSE_1.match(reg_LEUN);
    if(VNWM_LEUN==null){
        return RJSE_KP;
    }
    var RJSE_LEUN = VNWM_LEUN.join('\n');
    if (VNWM_LEUN != null) {
        for (FO1 in SJBX) {
            var reg_YHLD = new RegExp("\\b" + FO1 + "\\b", "g");
            RJSE_LEUN = RJSE_LEUN.replace(reg_YHLD, SJBX[FO1]);
        }
        VNWM_LEUN_2 = RJSE_LEUN.split(/\n/);
        VNWM_LEUN_2.forEach((RNSF, EQWY_1) => {
            RJSE_1 = RJSE_1.replace(VNWM_LEUN[EQWY_1], RNSF);
        });
    } else {
        return RJSE_KP;
    }
    return RJSE_1;
}
module.exports = CE_EBWU_LD_YHRJ;