function lzm_wu_ld_yowr_wu(mcvn_wu_kp, diwr_vnwm_mcvn_wu_oqzn) {
    if (!diwr_vnwm_mcvn_wu_oqzn) {
        return mcvn_wu_kp
    }
    var mcvn_1 = mcvn_wu_kp
    for (yj1 of diwr_vnwm_mcvn_wu_oqzn) {
        if (yj1.reg_lzm_wu.test(mcvn_1)) {
            return yj1.yowr_wu
        }
    }
    return mcvn_1
}
module.exports = lzm_wu_ld_yowr_wu