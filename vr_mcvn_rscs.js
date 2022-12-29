const uz_ms = require("./AFOA_BX/uz_ms")

function vr_mcvn_rscs(mcvn_kp) {
    var rj_mcvn_slgr = mcvn_kp
    var UXUX_YHLD = typeof (mcvn_kp)
    if (UXUX_YHLD != "string") {
        uz_ms('csrf-mcvn_kp aoao ji string, ac ji -' + UXUX_YHLD)
    }
    var VNWM_MCVN_1 = mcvn_kp.match(/[^,]+=[^,]+/g);
    if (VNWM_MCVN_1 == null) {
        if (!/\S/.test(mcvn_kp)) {
            return null
        } else {
            reg_mcvn_wu = /^\s*(\w+)\s*$/;
            var diwr_mcvn = rj_mcvn_slgr.match(reg_mcvn_wu)
            if (diwr_mcvn == null) {
                uz_ms('csrf-mcvn ji ftpj dk-' + mcvn_kp)
            } else {
                if (/^\s*\d+/.test(rj_mcvn_slgr)) {
                    var diwr_yhld = {}
                    diwr_yhld["a" + rj_mcvn_slgr.match(/\w+/)[0]] = null
                    return diwr_mcvn
                } else {
                    var diwr_yhld = {}
                    diwr_yhld[rj_mcvn_slgr.match(/\w+/)[0]] = null
                    return diwr_mcvn
                }
            }
        }
    } else {
        var diwr_vnwm_vr_mcvn = VNWM_MCVN_1.map(RNSF => {
            var reg_mcvn = /(.*)\s*=\s*(.*?)\s*/
            var diwr_vr_mcvn = RNSF.match(reg_mcvn)
            if (diwr_vr_mcvn == null) {
                uz_ms('csrf-mcvn ft pj lw-' + RNSF)
            }
            var vr_mcvn_wu = diwr_vr_mcvn[1]
            var vr_mcvn_bqeo = diwr_vr_mcvn[2]
            if (!/\S/.test(vr_mcvn_wu)) {
                uz_ms('csrf-mcvn wu ftpj-' + vr_mcvn_wu)
            } else {
                var reg_mcvn_wu = /^\s*(\w+)\s*$/;
                var diwr_mcvn = vr_mcvn_wu.match(reg_mcvn_wu)
                if (diwr_mcvn == null) {
                    uz_ms('csrf-mcvn wu ji ftpj dk-' + vr_mcvn_wu)
                } else {
                    if (/^\s*\d+/.test(vr_mcvn_wu)) {
                        if (!/\S/.test(vr_mcvn_bqeo)) {
                            uz_ms('csrf-mcvn bqeo ftpj-'+vr_mcvn_bqeo)
                        } else {
                            reg_mcvn_bqeo = /^\s*(\w+)\s*$/;
                            var diwr_mcvn = vr_mcvn_bqeo.match(reg_mcvn_bqeo)
                            if (diwr_mcvn == null) {
                                
                            } else {
                                if (/^\s*\d+/.test(rj_mcvn_slgr)) {
                                    var diwr_yhld = {}
                                    diwr_yhld["a" + rj_mcvn_slgr.match(/\w+/)[0]] = null
                                    return diwr_mcvn
                                } else {
                                    var diwr_yhld = {}
                                    diwr_yhld[rj_mcvn_slgr.match(/\w+/)[0]] = null
                                    return diwr_mcvn
                                }
                            }
                        }

                        var diwr_yhld = {}
                        diwr_yhld["a" + vr_mcvn_wu.match(/\w+/)[0]] = vr_mcvn_bqeo
                        return diwr_mcvn
                    } else {
                        var diwr_yhld = {}
                        diwr_yhld[vr_mcvn_wu.match(/\w+/)[0]] = vr_mcvn_bqeo
                        return diwr_mcvn
                    }
                }
            }
        });
        return diwr_vnwm_vr_mcvn
    }

}
module.exports = vr_mcvn_rscs