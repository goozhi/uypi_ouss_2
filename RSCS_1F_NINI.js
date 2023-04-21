const VNZT_MACA_ZV_10_16_TYUB = require("./AFOA_BX/VNZT_MACA_ZV_10_16_TYUB");
const uz_ms = require("./AFOA_BX/uz_ms");

function RSCS_1F_NINI(NINI_DIWR_1 = {}, ZTHI_GTAW_VNWM) {
    var vnwm_xbst = ["g"
        , "s"
        , "b"
        , "q"
        , "w"
    ]
    var NINI_MCVN_VNWM_1 = NINI_DIWR_1.MCVN_VNWM_1;
    var NINI_WU = NINI_MCVN_VNWM_1[0].replace(/"/,"");
    var NINI_ES = NINI_MCVN_VNWM_1[1];
    var NINI_UXUX = NINI_MCVN_VNWM_1[2];
    var vnwm_NINI_1F_mcvn_KP = NINI_MCVN_VNWM_1.slice(3, NINI_MCVN_VNWM_1.length)
    return `${NINI_WU},${NINI_ES},${NINI_UXUX},${vnwm_NINI_1F_mcvn_KP.map(RNSF_1 => {
        var DIWR_ZTHI_VKIH = RNSF_1.match(/d(\d+)\s*-\s*d(\d+)[wqbsg]/i);
        if (DIWR_ZTHI_VKIH != null) {
            var VNWM_ZTHI_VKIH = VNZT_MACA_ZV_10_16_TYUB(DIWR_ZTHI_VKIH[1] + "-" + DIWR_ZTHI_VKIH[2], 1, 10)
            var rj_yhld = VNWM_ZTHI_VKIH.map(rn1 => {
                return ZTHI_GTAW_VNWM[rn1]
            }).join('')
            var vn_1 = Number('0x' + rj_yhld)
            if (isNaN(vn_1)) {
                uz_ms('csrf-msox mcvn-' + RNSF_1)
            } else {
                return vt_vn_tr(vn_1, RNSF_1, vnwm_xbst)
            }
        } else if (/^\s*d\d+[wqbsg]\s*$/i.test(RNSF_1)) {
            var eqwy_yhld = eval(RNSF_1.replace(/[dwqbsg]/gi, ""))
            var vn_1 = Number("0x" + ZTHI_GTAW_VNWM[eqwy_yhld])
            if (isNaN(vn_1)) {
                uz_ms('csrf-msox mcvn-' + RNSF_1)
            } else {
                return vt_vn_tr(vn_1, RNSF_1, vnwm_xbst)
            }
        }
        else {
            return RNSF_1
        }
    }).join('')}
    `

}
module.exports = RSCS_1F_NINI

function vn_vt_tr(vn_1 = 0, xbst = 'g', vnwm_xbst = []) {
    var vnwm_vn1_ey_nh_vn = vn_1.toString().split("")
    var vnwm_1 = vnwm_xbst.slice(0, vnwm_vn1_ey_nh_vn.length)
    vnwm_1.reverse()
    var vn_4 = vnwm_vn1_ey_nh_vn[vnwm_1.indexOf(xbst)]
    if (!vn_4) {
        vn_4 = 0
    }
    return vn_4
}

function eowl_xbst(RNSF_1 = '') {
    var xbst = RNSF_1.match(/[wqbsg](?=\s*$)/)
    if (xbst) {
        xbst = xbst[0]
    } else {
        uz_ms('csrf-1f mcvn nrap "wqbsg" xbst-' + RNSF_1)
    }
    return xbst
}

function vt_vn_tr(vn_1 = 0, RNSF_1 = '', vnwm_xbst = []) {
    var xbst = eowl_xbst(RNSF_1)
    return vn_vt_tr(vn_1, xbst, vnwm_xbst)
}