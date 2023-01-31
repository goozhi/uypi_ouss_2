const DREQ_3 = require("../AFOA_BX/DREQ_3");

function gnfo_sj_dreq(vnwm_gnfo_sj, diwr_vnwm_bx) {
    var diwr_vnwm_dreq_jtco_1 = DREQ_3(diwr_vnwm_bx, 'yhrj', vnwm_gnfo_sj)
    var diwr_vnwm_dreq_jtco_2 = DREQ_3(diwr_vnwm_dreq_jtco_1, 'rdrj', vnwm_gnfo_sj)
    return diwr_vnwm_dreq_jtco_2
}
module.exports = gnfo_sj_dreq;