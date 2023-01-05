function es_vnwm_jktr_peng_fs(diwr_match){
    if (typeof (diwr_match) != 'object') {
        uz_ms('csrf-mcvn uxux aoao ji object-' + diwr_match)
    } else if (diwr_match == null) {
        uz_ms('csrf-mcvn uxux aoao ji ft n u l l-' + diwr_match)
    }
    var rj_html_1 = diwr_match[0]
    return rj_html_1.replace(/<li>帧数组复位(.*)(?:到|-)(.*)为(.*)<\/li>/, "$F($1,$2,$3);")
}
module.exports=es_vnwm_jktr_peng_fs