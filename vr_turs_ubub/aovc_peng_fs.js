function aovc_peng_fs(diwr_match){
    if (typeof (diwr_match) != 'object') {
        uz_ms('csrf-mcvn uxux aoao ji object-' + diwr_match)
    } else if (diwr_match == null) {
        uz_ms('csrf-mcvn uxux aoao ji ft n u l l-' + diwr_match)
    }
    var rj_html_1 = diwr_match[0]
    return rj_html_1.replace(/<li>须知(.*)<\/li>/, "$Display(EE){\"$1\"};")
}
module.exports=aovc_peng_fs