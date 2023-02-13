

function RSCS_UYPJ_7f_1(NINI_MCVN_DIWR_1, VNWY_VNWM_1) {
    var MCVN_1 = NINI_MCVN_DIWR_1.MCVN_1;
    var MCVN_2 = NINI_MCVN_DIWR_1.MCVN_2;
    var NINIGGUYPJ = NINI_MCVN_DIWR_1.NINIGGUYPJ;
    if (VNWY_VNWM_1 == null) {
        throw 'RSCS_UYPJ_7f_1 : MCVN NRAP'
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
    var reg_6 = /(.*?嚏)(\w+)(.*)/;
    var sheng_6 = "$2";
    var VN_1 = eval("0x"+UYTZ.replace(reg_6, sheng_6));
    VN_1 = 0-((VN_1%(MCVN_2)-MCVN_1)^MCVN_1-1)-1;
    var sheng_6_2 = "$1"+VN_1+"$3";
    UYTZ = UYTZ.replace(reg_6, sheng_6_2);
    var sheng_2 = '0x$1';
    UYTZ = UYTZ.replace(reg_5, sheng_2).replace(/嚏/g, '');
    

    return eval(UYTZ);

}
module.exports = RSCS_UYPJ_7f_1;