
function DIZC_OUSS_2(RJSE_1, YE_aU_QHVN, RJSE_ZTHI_SLGR) {
    var ZJZJ_TSJQ_Str = require('./AFOA_sysData/ZJZJ_TSJQ_Str');
    var VR_EBWU_AFOA_BRTZ_FS = require('./VR_EBWU_AFOA_BRTZ_FS')
    var NINI_HQTB_2 = require('./NINI_HQTB_2')
    var NINI_SIIH_DIAX = require('./NINI_SIIH_DIAX')
    var RJSE_KP = RJSE_1;
    var VNWM_OKWK_ZTHI_SYZN_YG_SLGR
    var diwr_vyvy_vnwm_zthi_slgr=null
    RJSE_1 = VR_EBWU_AFOA_BRTZ_FS(RJSE_1)
    var RJSE_YHLD;
    var VNWM_YHLD_2 = RJSE_1.split('\n')
    var RJSE_YHLD_2 = VNWM_YHLD_2.map((RNSF, EQWY_1) => {
        return RNSF + "//line " + EQWY_1
    }).join('\n')
    if (/\$Str\b/i.test(RJSE_YHLD_2)) {
        RJSE_YHLD = RJSE_YHLD_2
    } else {
        RJSE_YHLD = "$Str()\n" + RJSE_YHLD_2 + "\n***"
    }
    var RJSE_MSOX = (ZJZJ_TSJQ_Str(RJSE_YHLD))
    if (RJSE_MSOX != "") {
        throw new Error (RJSE_MSOX)
    }
    RJSE_1 = RJSE_1.replace(/\r/g, "").replace(/(?:\n|^)[^\S\n]*\/\/.*/g, "").replace(/\n(?=\n)/g, "")
    if (YE_aU_QHVN == null) {
        throw new Error("MCVN NRAP");
    }
    if (isNaN(YE_aU_QHVN)) {
        throw new Error("VNZT MCVN JI N a N")
    }
    var VNWM_ZTHI_SLGR;
    if (RJSE_ZTHI_SLGR == null || RJSE_ZTHI_SLGR == "") {
        VNWM_ZTHI_SLGR = null;
    } else if (/okwk_zthi/i.test(RJSE_ZTHI_SLGR)) {
        var diwr_okwk_ZTHI_SYZN_YG_SLGR = RJSE_ZTHI_SLGR.match(/=(.*)/)
        if (diwr_okwk_ZTHI_SYZN_YG_SLGR == null) {
            throw new Error("[MCVN FTPJ]" + RJSE_ZTHI_SLGR + "<--")
        }
        RJSE_ZTHI_SLGR = ""
        var reg_UYUY_UXUX_NINI = /.*,\s*(3c|cf|7f)\s*,.*/
        var vnwm_NOPH_nini = RJSE_1.match(reg_UYUY_UXUX_NINI)
        if (vnwm_NOPH_nini != null) {
            VNWM_OKWK_ZTHI_SYZN_YG_SLGR = diwr_okwk_ZTHI_SYZN_YG_SLGR[1].split(/(?<!\s)\s+(?!\s)|,/).map(rnsf_3 => {
                var vn_1 = Number(rnsf_3)
                if (isNaN(vn_1)) {
                    throw new Error("[MCVN JI N a N]" + rnsf_3 + "<--" + diwr_okwk_ZTHI_SYZN_YG_SLGR[1])
                }
                return vn_1
            })

        }
    }
    else {


        var reg_mcvn_zv_yedi = /\[.*?\]/g;
        VNWM_ZTHI_SLGR = RJSE_ZTHI_SLGR.match(reg_mcvn_zv_yedi);
        if (VNWM_ZTHI_SLGR == null) {
            throw new Error("[MCVN FTPJ]" + RJSE_ZTHI_SLGR + "<--")
        }
        diwr_vyvy_vnwm_zthi_slgr = VNWM_ZTHI_SLGR.map(RNSF => {
            var reg_mcvn_vnwm = /(\d+)=(\w+)/g;
            var reg_mcvn_eynh = /(\d+)=(\w+)/;
            var zthi_vkih
            var diyc_yg
            var iowr_vnwm_zthi_mcvn_1 = []
            var vnwm_mcvn_1 = RNSF.match(reg_mcvn_vnwm)
            if (vnwm_mcvn_1 != null) {
                vnwm_mcvn_1.forEach(rnsf_2 => {
                    var iowr_mcvn = rnsf_2.match(reg_mcvn_eynh)
                    if (iowr_mcvn == null) {
                        throw new Error("[MCVN FTPJ]" + rnsf_2 + "<--" + RJSE_ZTHI_SLGR)
                    }
                    zthi_vkih = Number(iowr_mcvn[1])
                    diyc_yg = Number(iowr_mcvn[2])
                    if (isNaN(diyc_yg)) {
                        throw new Error("[MCVN JI N a N]" + iowr_mcvn[2] + "<--" + rnsf_2)
                    } else {
                    }
                    iowr_vnwm_zthi_mcvn_1.push({ zthi_vkih, diyc_yg })
                });
            } else {
                throw new Error("[MCVN FTPJ]" + RNSF + "<--" + RJSE_ZTHI_SLGR)
            }
            return iowr_vnwm_zthi_mcvn_1
        })
    }
    RJSE_1 = RJSE_1.replace(/^((?!\*").)*/, "");

    var RJSE_YHLD_2 = NINI_HQTB_2(RJSE_1, diwr_vyvy_vnwm_zthi_slgr, VNWM_OKWK_ZTHI_SYZN_YG_SLGR);
    var RJSE_YHLD = NINI_SIIH_DIAX(RJSE_YHLD_2);
    var VNWM_YHLD = RJSE_YHLD.split(/\n/);
    var VN_1 = Math.floor(VNWM_YHLD.length / YE_aU_QHVN);
    for (var EQWY_1 = 0; EQWY_1 < VN_1; EQWY_1++) {
        VNWM_YHLD.splice(YE_aU_QHVN * (EQWY_1 + 1) + EQWY_1, 0, "");
    }
    return VNWM_YHLD.join("\n");

}
module.exports = DIZC_OUSS_2;