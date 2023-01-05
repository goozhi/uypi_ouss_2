function dgld_xbiw_peng_fs(diwr_match){
    var rj_html_1=diwr_match[0]
    return rj_html_1.replace(/.*>(\w+)<.*/,"$Lab(L_$1);").replace(/.*h2.*/,"")
}
module.exports=dgld_xbiw_peng_fs