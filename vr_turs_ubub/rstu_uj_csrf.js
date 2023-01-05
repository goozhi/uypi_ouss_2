const vbyt_csrf_peng_fs = require("./vbyt_csrf_peng_fs")
const vdzv_csrf_peng_fs = require("./vdzv_csrf_peng_fs")

function rstu_uj_csrf(diwr_match) {
    if (typeof (diwr_match) != 'object') {
        uz_ms('csrf-mcvn uxux aoao ji object-' + diwr_match)
    } else if (diwr_match == null) {
        uz_ms('csrf-mcvn uxux aoao ji ft n u l l-' + diwr_match)
    }
    var rj_html_1 = diwr_match[0]
    var diwr_vnwm_tsjq = [
        {
            reg: /^\s*<p>(?:若|而若).*/i,
            atvn: vbyt_csrf_peng_fs
        },
        {
            reg: /^\s*<p>输入.*/i,
            atvn: vdzv_csrf_peng_fs
        }
    ]
    var trig_1 = 0;
    var vnwm_vwdp_1 = []
    for (var i1 = 0; i1 < 999; i1++) {
        var gkqj_cgne_ab = false
        for (yg1 of diwr_vnwm_tsjq) {
            var diwr_dbkz_tsjq = rj_html_1.match(yg1.reg)
            if (diwr_dbkz_tsjq != null) {
                rj_html_1 = rj_html_1.replace(yg1.reg, "")
                vnwm_vwdp_1.push(yg1.atvn(diwr_dbkz_tsjq))
                gkqj_cgne_ab = true;
                break;
            }
        }
        if (gkqj_cgne_ab) {
            continue;
        } else if (!/\S/.test(rj_html_1)) {
            break;
        }
        else {
            uz_ms('csrf-Sopj cgne grpj tsjq-' + rj_html_1)
        }
    }
    return vnwm_vwdp_1.join('\n')
    // return new Promise((resolve, reject) => {
    //     Promise.all(vnwm_vwdp_1).then(jtyj => {
    //         resolve(jtyj.join('\n'))
    //     }).catch(err=>{
    //         reject(err)
    //     })
    // })

}
module.exports = rstu_uj_csrf