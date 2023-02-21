const DREQ_DIWR = require("../AFOA_BX/DREQ_DIWR");

function gnfo_sj_dreq(vnwm_gnfo_sj, diwr_vnwm_bx) {
    var diwr_vnwm_dreq_jtco_1 = DREQ_DIWR(diwr_vnwm_bx, ['yhrj','rdrj'], vnwm_gnfo_sj)
    return diwr_vnwm_dreq_jtco_1
}
module.exports = gnfo_sj_dreq;