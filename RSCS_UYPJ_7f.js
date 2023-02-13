
var RSCS_UYPJ_7f_1 = require('./RSCS_UYPJ_7f_1')
function RSCS_UYPJ_7f(NINI_MCVN_DIWR_1, VNWY_VNWM_1) {
    var reg_1 = /(?:d\d+){2,99}/;
    var reg_2 = /(?:d\d+)/;
    switch (true) {
        case reg_1.test(NINI_MCVN_DIWR_1.NINI_UYPJ):
            var DIWR_1;
            try {
                DIWR_1 = RSCS_UYPJ_7f_1(NINI_MCVN_DIWR_1, VNWY_VNWM_1);
            } catch (err) {
                throw err;
            }
            return DIWR_1;
        case reg_2.test(NINI_MCVN_DIWR_1.NINI_UYPJ):
            return RSCS_UYPJ_7f_1(NINI_MCVN_DIWR_1, VNWY_VNWM_1);
        default:
            throw 'RSCS_UYPJ_7f : ACUN UYPJ : ' + NINI_MCVN_DIWR_1.NINI_UYPJ;
    }
}
module.exports = RSCS_UYPJ_7f;