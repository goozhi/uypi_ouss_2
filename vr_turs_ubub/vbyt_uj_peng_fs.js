const uz_ms = require("../AFOA_BX/uz_ms")
const qh_dyvy_peng_fs = require("./qh_dyvy_peng_fs")
const rstu_uj_csrf = require("./rstu_uj_csrf")



function vbyt_uj_peng_fs(diwr_match) {
    if (typeof (diwr_match) != 'object') {
        uz_ms('csrf-mcvn uxux aoao ji object-' + diwr_match)
    } else if (diwr_match == null) {
        uz_ms('csrf-mcvn uxux aoao ji ft n u l l-' + diwr_match)
    }
    var rj_html_1 = diwr_match[0].replace(/.*h2.*/, "")
    diwr_if_mcvn = rj_html_1.match(/(帧数组.*?)为\w+/)
    if (diwr_if_mcvn == null) {
        uz_ms('csrf-nrap mcvn-' + rj_html_1)
    }
    var es_vnwm_mcnh_rnsf = diwr_if_mcvn[1]
    var vnwm_elseif_mcvn = rj_html_1.match(/若为(\w+)/)
    if (vnwm_elseif_mcvn != null) {
        rj_html_1=rj_html_1.replace(/若为(\w+)/ig,"而若"+es_vnwm_mcnh_rnsf+"为$1")
    }
    var diwr_vnwm_tsjq = [{
        reg: /^\s*<li>.*/i,
        atvn: qh_dyvy_peng_fs,
    }, {
        reg: /^\s*<p>.*<\/p>/i,
        atvn: rstu_uj_csrf
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
    return vnwm_vwdp_1.join('\n')+'\n$EndIf();'
    // return new Promise((resolve, reject) => {
    //     Promise.all(vnwm_vwdp_1).then(jtyj => {
    //         resolve(jtyj.join('\n'))
    //     }).catch(err=>{
    //         reject(err)
    //     })
    // })

}
module.exports = vbyt_uj_peng_fs