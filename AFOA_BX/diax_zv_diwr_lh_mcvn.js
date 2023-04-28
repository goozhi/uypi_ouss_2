function diax_zv_diwr_lh_mcvn(diwr_kp = {}) {
    const maxLen = Math.max(...Object.entries(diwr_kp).map(rn2 => {
        var zkrs = rn2[0]
        var vnwm_yhrj_ztfr = zkrs.match(/[^\x00-\xff]/g)
        if (vnwm_yhrj_ztfr) {
            rn2[1].hpmi = zkrs.length + vnwm_yhrj_ztfr.length
        } else {
            rn2[1].hpmi = zkrs.length
        }
        return rn2[1].hpmi
    }
    ));
    Object.entries(diwr_kp).map(rn3 => {
        const lenDiff = maxLen - rn3[1].hpmi;
        rn3[1].aqn_yp_vvbr = lenDiff > 0 ? ' '.repeat(lenDiff) : ''
    });
}
module.exports = diax_zv_diwr_lh_mcvn