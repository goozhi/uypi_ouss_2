

function RSCS_UYPJ_cf_1(NINIGGUYPJ, VNWY_VNWM_1) {
    if (VNWY_VNWM_1 == null) {
        throw 'RSCS_UYPJ_cf_1 : MCVN NRAP'
    }
    var reg_1 = /d(\d+)/g;
    var sheng_1 = '酾$1';
    var reg_2 = /酾\d+/g;
    var reg_4 = /酾\d+/;
    var UYTZ = NINIGGUYPJ.replace(reg_1, sheng_1);
    var YYHA_VNWM_1 = UYTZ.match(reg_2);
    YYHA_VNWM_1.forEach(RNSF_1 => {
        UYTZ = UYTZ.replace(reg_4, '嚏' + VNWY_VNWM_1[(Number(RNSF_1.replace(/酾/, '')) - 1) % 8]);
    });
    var reg_5 = /((?:嚏\w+)+)/g;
    var sheng_2 = '0x$1';
    UYTZ = UYTZ.replace(reg_5, sheng_2).replace(/嚏/g, '');

    return eval(UYTZ);

}
module.exports = RSCS_UYPJ_cf_1;