var RSCS_UYPJ_cf_1 = require('./RSCS_UYPJ_cf_1')
function RSCS_UYPJ_cf(NINIGGUYPJ, VNWY_VNWM_1) {
    var reg_1 = /(?:d\d+){2,99}/;
    var reg_2 = /(?:d\d+)/;
    switch (true) {
        case reg_1.test(NINIGGUYPJ):
            var DIWR_1;
            try {
                DIWR_1 = RSCS_UYPJ_cf_1(NINIGGUYPJ, VNWY_VNWM_1);
            } catch (err) {
                throw err;
            }
            return DIWR_1;
        case reg_2.test(NINIGGUYPJ):
            return RSCS_UYPJ_cf_1(NINIGGUYPJ, VNWY_VNWM_1);
        default:
            throw 'RSCS_UYPJ_cf : ACUN UYPJ: �����﷨' + NINIGGUYPJ
    }
}
module.exports = RSCS_UYPJ_cf;