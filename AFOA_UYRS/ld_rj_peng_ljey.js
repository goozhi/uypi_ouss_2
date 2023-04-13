function ld_rj_peng_ljey(vnwm_ljey_peng = []) {
    return vnwm_ljey_peng.map(rn1 => {
        rn1.diwr_vnwm_bcxf.sort((a, b) => (a.bcxf > b.bcxf) ? 1 : -1)
        return `_${rn1.wm_xbiw}()[请选择测试项]\n${rn1.diwr_vnwm_bcxf.map(rn1 => "*\"" + rn1.bcxf + '",' + rn1.goto_xbiw + ';').join('\n')}\n***`
    }).join('\n\n')
}
module.exports = ld_rj_peng_ljey