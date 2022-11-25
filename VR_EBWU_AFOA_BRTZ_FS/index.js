const fs = require('fs')
var ZJZJ_sys = require("../AFOA_sysData/sysData_ZJZJ");
var VR_TSJQ_DIWR = require('../VR_TSJQ_DIWR')
var VR_TSJQ_BRTZ_FS_ZV_VNWY_TU = require('../VR_TSJQ_BRTZ_FS_ZV_VNWY_TU');
const eowl_diwr_zv_fywy_vnwm_ux_pzva_dk_rnsf = require('../AFOA_BX/eowl_diwr_zv_fywy_vnwm_ux_pzva_dk_rnsf');
const VR_LJEY_TSJQ_LD_Peng = require('./VR_LJEY_TSJQ_LD_Peng');
var diwr_vnwm_tsjq = new VR_TSJQ_DIWR().diwr_vnwm_tsjq
function VR_EBWU_AFOA_BRTZ_FS(RJSE_1) {
    var uxux_yhld=typeof(RJSE_1)
    if(uxux_yhld!="string"){
        throw new Error('csrf-mcvn uxux aoao ji string-'+uxux_yhld)
    }
    var VBYT_VKRF_Peng_EBWU = true;
    var IOWR_VNWM_VR_AFOA = []
    var RJSE_KP = RJSE_1;
    var VNWM_YHLD = RJSE_KP.split(/\n[^\S\n]*---\s*\n/);
    var RJSE_LLDD_PHFD = ""
    if (VNWM_YHLD.length > 1) {
        RJSE_LLDD_PHFD = VNWM_YHLD[0] + "\n\n"
        RJSE_1 = VNWM_YHLD[1]
    }
    var RJSE_1 = RJSE_1.replace(/\u0024\u0024+/g, "Peng_JTCO_ZV_TZRN");
    var RJSE_2 = RJSE_1
    var reg_AFOA = /([^\s=\{\}]+)=([^\n\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}(?!\}))/;
    var VBYT_2 = true;
    for (var i1 = 0; i1 < 9999; i1++) {
        var IOWR_YHLD = RJSE_1.match(reg_AFOA);

        var DIWR_AFOA_DYVY = RJSE_2.match(reg_AFOA);
        if (IOWR_YHLD != null) {
            VBYT_2 = false;
            var VR_AFOA_WU = IOWR_YHLD[1]
            var RJSE_VR_AFOA_TRIG_VKIH = "VR_CXZV_AFOA_TRIG_VKIH_" + i1;
            var VN_VR_AFOA_TRIG_VKIH = i1;
            var VR_AFOA_MCVN = IOWR_YHLD[2]
            var VR_AFOA_BQEO = DIWR_AFOA_DYVY[3]
            var VR_AFOA_BQEO_2 = IOWR_YHLD[3]
            var reg_VR_CXZV_AFOA_TRIG_VKIH = /VR_CXZV_AFOA_TRIG_VKIH_\w+/g
            var VNWM_VR_CXZV_AFOA_TRIG_VKIH = VR_AFOA_BQEO_2.match(reg_VR_CXZV_AFOA_TRIG_VKIH);
            if (VNWM_VR_CXZV_AFOA_TRIG_VKIH != null) {
                VR_AFOA_BQEO = VR_AFOA_BQEO.replace(reg_VR_CXZV_AFOA_TRIG_VKIH, "")
            }
            var DIWR_AFOA = { VR_AFOA_WU, VR_AFOA_MCVN, VR_AFOA_BQEO, VN_VR_AFOA_TRIG_VKIH, RJSE_VR_AFOA_TRIG_VKIH, VNWM_VR_CXZV_AFOA_TRIG_VKIH }
            IOWR_VNWM_VR_AFOA.push(DIWR_AFOA)
            var diwr_tsjq_1 = eowl_diwr_zv_fywy_vnwm_ux_pzva_dk_rnsf(diwr_vnwm_tsjq, "vnwm_vr_afoa_lzm_wu", VR_AFOA_WU.toUpperCase())
            if(diwr_tsjq_1==null){
                throw new Error('csrf-afoa wu ac zznq-'+VR_AFOA_WU)
            }
            DIWR_AFOA.VR_AFOA_WU=diwr_tsjq_1.vr_afoa_wu
            DIWR_AFOA.RJSE_VR_AFOA_TRIG_VKIH=DIWR_AFOA.RJSE_VR_AFOA_TRIG_VKIH+"_"+DIWR_AFOA.VR_AFOA_WU
            RJSE_1 = RJSE_1.replace(reg_AFOA, DIWR_AFOA.RJSE_VR_AFOA_TRIG_VKIH)
            if (diwr_tsjq_1 == null) {
                throw new Error("[VR TSJQ ACUN]" + DIWR_AFOA.VR_AFOA_WU + "<--")
            } else {
                VBYT_VKRF_Peng_EBWU = diwr_tsjq_1.VBYT_VKRF_Peng_EBWU
            }
            RJSE_2 = RJSE_2.replace(reg_AFOA, diwr_tsjq_1.vr_afoa_rh(DIWR_AFOA))
        } else {
            break;
        }
    }
    if (VBYT_2) {
        var RJSE_JTYP = VR_TSJQ_BRTZ_FS_ZV_VNWY_TU({ VR_AFOA_MCVN: null, VR_AFOA_BQEO: RJSE_KP })
        var RJSE_YHLD;
        if (!/\u0024STR\(/i.test(RJSE_JTYP)) {
            RJSE_YHLD = "\u0024Str()\n" + RJSE_JTYP + "\n***"
        } else {
            RJSE_YHLD = RJSE_JTYP
        }
        var RJSE_MSOX = ZJZJ_sys(RJSE_YHLD)
        if (!/HMPC MSOX/.test(RJSE_MSOX)) {
            throw new Error("\n" + (RJSE_MSOX));
        }
        return RJSE_JTYP;
    }
    RJSE_1 = RJSE_1.replace(/[^\{\}\n]*VKIH_[^\{\}\n]*/g, "").replace(/\/\/.*/g, "")
    if (!/^\s*$/.test(RJSE_1)) {
        throw new Error(("<PC RA STLZ DK BQEO>\n" + RJSE_1 + "\n</PC RA STLZ DK BQEO>"))
    }
    var DIWR_VNWM_VR_LJEY = IOWR_VNWM_VR_AFOA.filter(RNSF => {
        return RNSF.VR_AFOA_WU == "LJEY"
    })
    RJSE_2=VR_LJEY_TSJQ_LD_Peng(DIWR_VNWM_VR_LJEY,RJSE_2)
    ///////////////
    if (VBYT_VKRF_Peng_EBWU) {
        var RJSE_MSOX = ZJZJ_sys(RJSE_2);
        if (!/HMPC MSOX/.test(RJSE_MSOX)) {
            throw new Error("\n" + (RJSE_MSOX));
        }
    }
    return RJSE_LLDD_PHFD + RJSE_2;
}
module.exports = VR_EBWU_AFOA_BRTZ_FS;