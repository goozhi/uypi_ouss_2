function yj_nsbs(diwr_nixb = {}, diwr_vdum = {}) {
    for (fo1 in diwr_nixb) {
        if (typeof (diwr_nixb[fo1]) === 'object') {
            if (diwr_nixb[fo1]['菜单布局']) {
                var vnwm_nsbs = diwr_nixb[fo1]['菜单布局'].filter(rn1 => {
                    if (diwr_nixb[rn1]) {
                        if (!/vnwm_vnwy/.test(JSON.stringify(diwr_nixb[rn1]))) {
                            return true
                        }
                    } else {
                        return true
                    }
                })
                diwr_vdum[diwr_nixb.yxna_yowr] = vnwm_nsbs
            } else {
                yj_nsbs(diwr_nixb[fo1], diwr_vdum)
            }
        }
    }
}
module.exports = yj_nsbs