var RSCS_cf_NINI = require('./RSCS_cf_NINI');
var RSCS_7f_NINI = require('./RSCS_7f_NINI');
var NVCM_NINI_HQTB = require('./NVCM_NINI_HQTB');
var NINI_ZJZJ = require('./NINI_ZJZJ')
function NINI_HQTB(RJSE_KP) {
    if (typeof (RJSE_KP) != "string")
        throw "NINI_HQTB : MCVN UXUX MSOX"
    RJSE_KP = RJSE_KP.replace(/(?:\n(?=\s*?\n)|^\s*?\n|\s*?\n$)/, "");
    var VNWM_1 = RJSE_KP.split(/(?:\r\n|\n)/);
    var VNWM_4 = VNWM_1.filter((RNSF_1) => {
        return !/^\s+$/.test(RNSF_1);
    })
    if (/\*\*\*/.test(VNWM_4[VNWM_4.length - 1])) {
        VNWM_4.splice(VNWM_4.length - 1, 1)
    }
    var NINI_JTYP_VNWM_1;
    NINI_JTYP_VNWM_1 = VNWM_4.map((RNSF_1, EQWY_1) => {
        var reg_NINI_WU = /((?:\*del\(.+\)|\*)(?="))(.+?)("\s*,)/;
        var RJSE_YHLD_1 = RNSF_1.match(reg_NINI_WU, "$2");
        if(RJSE_YHLD_1==null){
            throw new Error("NINI WU AC ZZNQ : "+RNSF_1);
        }
        var RJSE_YHLD_2=RNSF_1.replace(reg_NINI_WU,"");
        var VNWM_2 = RJSE_YHLD_2.replace(/\/\/.*/g, '').split(/\s*,\s*/);
        VNWM_2.unshift(RJSE_YHLD_1);
        var NINI_IOWR_1 = { TRIG: EQWY_1, MCVN_VNWM_1: VNWM_2 }
        switch (VNWM_2[2]) {
            case 'cf':
                var IOWR_2 = RSCS_cf_NINI(NINI_IOWR_1);
                return RNSF_1.replace(/(cf),.*/i, "$1," + NVCM_NINI_HQTB(IOWR_2));
            case '7f':
                var IOWR_2 = RSCS_7f_NINI(NINI_IOWR_1);
                // throw JSON.stringify(IOWR_2)
                return RNSF_1.replace(/(7f),.*/i, "$1," + NVCM_NINI_HQTB(IOWR_2));
            case '16':
                return RNSF_1;
            case '21':
                return RNSF_1;
            // var IOWR_2 = RSCS_16_NINI(NINI_IOWR_1);
            // return IOWR_2;
            case '0a':
                return RNSF_1;
            case 'bb':
                return RNSF_1;
            case '10':
                return RNSF_1;
            // var IOWR_2 = RSCS_16_NINI(NINI_IOWR_1);
            // return IOWR_2;
            case '3c':
                var NINI_3C_cf_VNWM_1 = VNWM_2.slice(5, VNWM_2.length).filter(RNSF_1 => {
                    if (/:\s*d\d+/i.test(RNSF_1)) {
                        return RNSF_1;
                    }
                });
                var NINI_3C_cf_VNWM_2 = NINI_3C_cf_VNWM_1.map(RNSF_1 => {
                    var reg_1 = /.*:(.+)'/
                    var sheng_1 = '$1';
                    NINI_IOWR_1.MCVN_VNWM_1 = VNWM_2.slice(0,2).concat(["cf",RNSF_1.replace(reg_1,sheng_1).replace(/\s/g,""),VNWM_2[4],VNWM_2[5]]);
                });
                var IOWR_2 = RSCS_cf_NINI(NINI_IOWR_1);
                return RNSF_1.replace(/(3c).*/i, "$1," + NVCM_NINI_HQTB(IOWR_2));
            // var IOWR_2 = RSCS_16_NINI(NINI_IOWR_1);
            // return IOWR_2;
            case '3f':
                return RNSF_1;
            // var IOWR_2 = RSCS_16_NINI(NINI_IOWR_1);
            // return IOWR_2;
            default:
                try {
                    NINI_ZJZJ(VNWM_2);
                } catch (err) {
                    throw err;
                }
                throw 'NINI_HQTB : NINI UXUX ACUN:项目类型不明 : ' + EQWY_1 + ":" + RNSF_1;
        }
    });
    return NINI_JTYP_VNWM_1;
}
module.exports = NINI_HQTB;