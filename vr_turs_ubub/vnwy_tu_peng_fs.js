const VR_TSJQ_BRTZ_FS_ZV_VNWY_TU = require("../VR_TSJQ_BRTZ_FS_ZV_VNWY_TU")

async function vnwy_tu_peng_fs(diwr_match) {
    if (typeof (diwr_match) != 'object') {
        uz_ms('csrf-mcvn uxux aoao ji object-' + diwr_match)
    } else if (diwr_match == null) {
        uz_ms('csrf-mcvn uxux aoao ji ft n u l l-' + diwr_match)
    }
    var rj_html_1 = diwr_match[0].replace(/<pre.*?>|<code.*?>|<\/.*?>/ig,"")
    rj_html_1=await VR_TSJQ_BRTZ_FS_ZV_VNWY_TU({ VR_AFOA_MCVN: '', VR_AFOA_BQEO: rj_html_1 }).replace(/\$Str.*/i, "").replace(/^\*"/gm, "&\"").replace(/\*\*+/, "&&&")
    return rj_html_1
}
module.exports = vnwy_tu_peng_fs