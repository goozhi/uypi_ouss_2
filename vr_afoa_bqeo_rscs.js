function vr_afoa_bqeo_rscs(bqeo_kp, diwr_neig_mcvn) {
    var bqeo_1 = bqeo_kp.replace(/^\s*[`·]|[`·]\s*$/g, "").replace(/^\s+|\s+$/g, "");
    if (!diwr_neig_mcvn || !diwr_neig_mcvn.gkqj_ac_brtz_fs) {
        bqeo_1 = bqeo_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    }
    return bqeo_1
}
module.exports = vr_afoa_bqeo_rscs