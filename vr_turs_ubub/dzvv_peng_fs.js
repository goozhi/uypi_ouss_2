function dzvv_peng_fs(diwr_match) {
    if (typeof (diwr_match) != 'object') {
        uz_ms('csrf-mcvn uxux aoao ji object-' + diwr_match)
    } else if (diwr_match == null) {
        uz_ms('csrf-mcvn uxux aoao ji ft n u l l-' + diwr_match)
    }
    var rj_html_1 = diwr_match[0]
    var rj_dzvv_vo_es = rj_html_1.match(/.*?\w+ \w+(?: \w+)+(?=\s*(?:$|<\/li>))/m)
    var rj_dzvv_dgld = rj_html_1.match(/.*\w+(?=\s*(?:$|<\/li>))/m)
    if (rj_dzvv_vo_es != null) {
            rj_html_1 = rj_html_1.replace(rj_html_1, rj_html_1.replace(/<li>点击([^\n<>]*?)(\w+ \w+(?: \w+)+)<\/li>/m, "\"$1\"{$2};"))
    
    } else {
            rj_html_1 = rj_html_1.replace(rj_html_1, rj_html_1.replace(/<li>点击([^\n<>]*?)\s*(\w+)<\/li>/m, "\"$1\"L_$2;"))
    }
    return rj_html_1
}
module.exports = dzvv_peng_fs