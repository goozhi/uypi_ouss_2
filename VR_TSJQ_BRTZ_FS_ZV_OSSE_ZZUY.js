const vr_afoa_bqeo_rscs = require('./vr_afoa_bqeo_rscs');
const VR_EBWU_BRTZ_FS_ZV_22 = require('./VR_EBWU_BRTZ_FS_ZV_22')
const VR_EBWU_BRTZ_FS_ZV_qq = require('./VR_EBWU_BRTZ_FS_ZV_qq');
const vr_mcvn_rscs = require('./vr_mcvn_rscs');
const VR_TSJQ_BRTZ_FS_ZV_VNWY_TU = require('./VR_TSJQ_BRTZ_FS_ZV_VNWY_TU');

async function VR_TSJQ_BRTZ_FS_ZV_OSSE_ZZUY(DIWR_AFOA) {
    var diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN)
    var Peng_AFOA_MCVN = Object.entries(diwr_vr_mcvn).map(rn1=>rn1[0]+"="+rn1[1]).join(',')
    var rj_peng = VR_TSJQ_BRTZ_FS_ZV_VNWY_TU({ VR_AFOA_BQEO: DIWR_AFOA.VR_AFOA_BQEO })
    return "$Ecu(" + Peng_AFOA_MCVN + ");\n" + rj_peng + "\n***";
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_OSSE_ZZUY