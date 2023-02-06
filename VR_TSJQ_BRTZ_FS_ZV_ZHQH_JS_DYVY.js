
const fs = require('fs')
function VR_TSJQ_BRTZ_FS_ZV_ZHQH_JS_DYVY(IOWR_AFOA) {
    var gkqj_mdcf_xbst = false
    var reg_mdcf = /md-(?:(?!md-|-md)[\s\S])*(?:-md|\bmd(?!\w|-))/ig;
    var reg_mdcf_eynh = /md-((?:(?!md-|-md)[\s\S])*)(?:-md|\bmd(?!\w|-))/i;
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.VR_AFOA_BQEO.replace(/^\s+|\s+$/g, "")
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = IOWR_AFOA.VR_AFOA_MCVN.match(/\w+(?:=\w+|)/g);
    var nixb
    var DS
    var RJSE_bqeo = BQEO_1
    if (VNWM_MCVN_1 == null) {

    } else {
        VNWM_MCVN_1.forEach(RNSF => {
            switch (true) {
                case /\bXBST\b/i.test(RNSF):
                    var reg_xbst_mcvn = /=(\w+)/;
                    var diwr_xbst_mcvn = RNSF.match(reg_xbst_mcvn)
                    if (diwr_xbst_mcvn != null) {
                        var gkqj_ws_vv = Boolean(Number(diwr_xbst_mcvn[1]))
                    }
                    var reg_xbst = /gg-(?:(?!gg-|-gg)[\s\S])*(?:-gg|\bgg(?!\w|-))/ig;
                    var reg_xbst_eynh = /gg-((?:(?!gg-|-gg)[\s\S])*)(?:-gg|\bgg(?!\w|-))/i;
                    var diwr_rj = RJSE_bqeo.match(reg_xbst)
                    if (diwr_rj != null) {
                        diwr_rj.map(rn1 => {
                            var diwr_yhld = rn1.match(reg_xbst_eynh)
                            if (diwr_yhld == null) {
                                throw new Error("csrf-xbst sopj yj ab-" + rn1)
                            }
                            var rj_rfrf_nixb_bqeo = diwr_yhld[1]
                            if (gkqj_ws_vv) {
                                // RJSE_bqeo = RJSE_bqeo.replace(rn1, CE_EBWU_LD_YHRJ(rj_rfrf_nixb_bqeo))
                            } else {
                                // RJSE_bqeo = RJSE_bqeo.replace(rn1, CE_EBWU_LD_YHRJ(rj_rfrf_nixb_bqeo).replace(/ gg /ig, "\u917e").replace(/ /g, "").replace(/\u917e/g, " "))
                            }
                        })
                    }
                    break;
                case /DS\b/.test(RNSF):
                    IOWR_DS_XBST = RNSF.match(/(.*)\s*=\s*(.*)/)
                    if (IOWR_DS_XBST == null) {
                        throw new Error("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.VR_AFOA_MCVN)
                    } else {
                        DS = IOWR_DS_XBST[2]
                    }
                    break;
                default:
                    throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + IOWR_AFOA.VR_AFOA_MCVN)
            }
        });
    }
    var RJSE_jtyj = eval('function main(){' + RJSE_bqeo + '};main()')
    return String(RJSE_jtyj)
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_ZHQH_JS_DYVY;
