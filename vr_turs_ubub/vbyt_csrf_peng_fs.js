function vbyt_csrf_peng_fs(diwr_match) {
    if (typeof (diwr_match) != 'object') {
        uz_ms('csrf-mcvn uxux aoao ji object-' + diwr_match)
    } else if (diwr_match == null) {
        uz_ms('csrf-mcvn uxux aoao ji ft n u l l-' + diwr_match)
    }
    var rj_html_1 = diwr_match[0]
    return rj_html_1.replace(/<p>/, "$").replace(/若为其他<\/p>/, "Else();").replace(/而/, "Else").replace(/若/, 'If').replace(/帧数组(.*)的元素(.*)的值为(.*)<\/p>/,"(f[$1][$2]:$3);")
}
module.exports = vbyt_csrf_peng_fs