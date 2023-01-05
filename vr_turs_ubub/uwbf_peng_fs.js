function uwbf_peng_fs(diwr_match){
    if (typeof (diwr_match) != 'object') {
        uz_ms('csrf-mcvn uxux aoao ji object-' + diwr_match)
    } else if (diwr_match == null) {
        uz_ms('csrf-mcvn uxux aoao ji ft n u l l-' + diwr_match)
    }
    var rj_html_1 = diwr_match[0]
    return rj_html_1.replace(/<li>打印(.*)<\/li>/, "$Display(){\"$1\"};")
}
module.exports=uwbf_peng_fs