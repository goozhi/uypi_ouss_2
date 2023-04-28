function diax_db_vvbr(arr = [], diwr_neig_kp = { qqsc: false }) {
    const diwr_ybkc_ztfr_sum = {}
    const maxLen = Math.max(...arr.map(str => {
        var hpmi
        var vnwm_yhrj_ztfr = str.match(/[^\x00-\xff]/g)
        if (vnwm_yhrj_ztfr) {
            hpmi = str.length + vnwm_yhrj_ztfr.length
        } else {
            hpmi = str.length
        }
        diwr_ybkc_ztfr_sum[str] = hpmi
        return hpmi
    }
    ));
    const spacedArr = arr.map(str => {
        const lenDiff = maxLen - diwr_ybkc_ztfr_sum[str];
        const spaces = lenDiff > 0 ? ' '.repeat(lenDiff) : ''
        return [str, spaces];
    });
    if (diwr_neig_kp.qqsc) {
        return spacedArr.map(rn1 => rn1[1] + rn1[0])
    } else {
        return spacedArr.map(rn1 => rn1[0] + rn1[1]);
    }
}
module.exports = diax_db_vvbr