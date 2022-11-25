var VR_TSJQ_BRTZ_FS_ZV_LJEY = require('./VR_TSJQ_BRTZ_FS_ZV_LJEY')
var VR_TSJQ_BRTZ_FS_ZV_VNWY_TU = require('./VR_TSJQ_BRTZ_FS_ZV_VNWY_TU')
var VR_TSJQ_BRTZ_FS_ZV_33_VNWM_MCVN = require('./VR_TSJQ_BRTZ_FS_ZV_33_VNWM_MCVN')
var VR_TSJQ_BRTZ_FS_ZV_SIIH_DIAX = require('./VR_TSJQ_BRTZ_FS_ZV_SIIH_DIAX')
const VR_TSJQ_BRTZ_FS_ZV_OSSE_ZZUY = require('./VR_TSJQ_BRTZ_FS_ZV_OSSE_ZZUY')
const VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS = require('./VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS')
var VR_TSJQ_BRTZ_FS_ZV_UYPI_RFRF_BRTZ_FS=require('./VR_TSJQ_BRTZ_FS_ZV_UYPI_RFRF_BRTZ_FS')
const VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS_2 = require('./VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS_2')
const VR_TSJQ_BRTZ_FS_ZV_sysData_ZJZJ = require('./VR_TSJQ_BRTZ_FS_ZV_sysData_ZJZJ')
var VR_TSJQ_BRTZ_FS_ZV_EYRH_VNWY_RSCS = require('./VR_TSJQ_BRTZ_FS_ZV_EYRH_VNWY_RSCS')
const VR_TSJQ_BRTZ_FS_ZV_ESIH_BRTZ_FS = require('./VR_TSJQ_BRTZ_FS_ZV_ESIH_BRTZ_FS')
const VR_TSJQ_BRTZ_FS_ZV_STST_NINI_WU_YMRG_BC_XBST_NINI_WU = require('./VR_TSJQ_BRTZ_FS_ZV_STST_NINI_WU_YMRG_BC_XBST_NINI_WU')
var VR_TSJQ_BRTZ_FS_ZV_KLVQ_SHZN = require('./VR_TSJQ_BRTZ_FS_ZV_KLVQ_SHZN')
var VR_TSJQ_BRTZ_FS_ZV_rj_bwcr_vy = require('./VR_TSJQ_BRTZ_FS_ZV_rj_bwcr_vy')
var VR_TSJQ_BRTZ_FS_ZV_TSZN_BQEO_BRTZ_FS = require('./VR_TSJQ_BRTZ_FS_ZV_TSZN_BQEO_BRTZ_FS')
function VR_TSJQ_RSCS(IOWR_AFOA) {
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    switch (IOWR_AFOA.VR_AFOA_WU) {
        case "LJEY":
            return VR_TSJQ_BRTZ_FS_ZV_LJEY(IOWR_AFOA)
        case "RJ_BWCR_VY":
            return VR_TSJQ_BRTZ_FS_ZV_rj_bwcr_vy(IOWR_AFOA)
        case "OSSE_ZZUY":
            return VR_TSJQ_BRTZ_FS_ZV_OSSE_ZZUY(IOWR_AFOA)
        case "VNWY_TU":
            return VR_TSJQ_BRTZ_FS_ZV_VNWY_TU(IOWR_AFOA)
        case "VR_33_VNWM_MCVN":
            return VR_TSJQ_BRTZ_FS_ZV_33_VNWM_MCVN(IOWR_AFOA)
        case "VR_TSZN_BQEO_BRTZ_FS":
            return VR_TSJQ_BRTZ_FS_ZV_TSZN_BQEO_BRTZ_FS(IOWR_AFOA)
        case "VR_SIIH_DIAX":
            return VR_TSJQ_BRTZ_FS_ZV_SIIH_DIAX(IOWR_AFOA)
        case "VR_KLVQ_SHZN":
            return VR_TSJQ_BRTZ_FS_ZV_KLVQ_SHZN(IOWR_AFOA)
        case "DIZC_OUSS":
            return VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS(IOWR_AFOA)
        case "DIZC_OUSS_2":
            return VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS_2(IOWR_AFOA)
        case "sysData_ZJZJ":
            return VR_TSJQ_BRTZ_FS_ZV_sysData_ZJZJ(IOWR_AFOA)
        case "VR_STST_NINI_WU_YMRG_BC_XBST_NINI_WU":
            return VR_TSJQ_BRTZ_FS_ZV_STST_NINI_WU_YMRG_BC_XBST_NINI_WU(IOWR_AFOA)
        case "VR_UYPI_RFRF_BRTZ_FS":
            return VR_TSJQ_BRTZ_FS_ZV_UYPI_RFRF_BRTZ_FS(IOWR_AFOA)
        case "ESIH_BRTZ_FS":
            return VR_TSJQ_BRTZ_FS_ZV_ESIH_BRTZ_FS(IOWR_AFOA)
        case "EYRH_VNWY_RSCS":
            return VR_TSJQ_BRTZ_FS_ZV_EYRH_VNWY_RSCS(IOWR_AFOA)
        default:
            throw new Error("[VR TSJQ ACUN]" + IOWR_AFOA.VR_AFOA_WU + "<--")
    }
}
module.exports = VR_TSJQ_RSCS