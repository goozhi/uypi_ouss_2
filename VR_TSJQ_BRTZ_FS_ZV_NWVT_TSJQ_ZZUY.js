

const uz_ms = require('./AFOA_BX/uz_ms');
const vr_afoa_bqeo_rscs = require('./vr_afoa_bqeo_rscs');
const VR_TSJQ_ZV_CE_EBWU_LD_YHRJ = require('./VR_TSJQ_ZV_CE_EBWU_LD_YHRJ');

async function VR_TSJQ_BRTZ_FS_ZV_NWVT_TSJQ_ZZUY(DIWR_AFOA, diwr_mcvn) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        uz_ms("csrf-MCVN UXUX MSOX , AOAO JI object:-" + UXUX_YHLD)
    }
    if(!diwr_mcvn.diwr_vnwm_tsjq){
        uz_ms('csrf-nrap diwr mcvn-')
    }
    var BQEO_1 = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO)
    var diwr_vnwm_kfou_tsjq=diwr_mcvn.diwr_vnwm_tsjq.filter(rn1=>{
        if(rn1.vnwm_vr_afoa_lzm_wu.indexOf(BQEO_1.toUpperCase())!=-1){
            return true;
        }
    })
    var rj_yhld = diwr_vnwm_kfou_tsjq.map(rn1 => {
        var rj_csrf_eowl_uxux = "\nmd-\n* -md eowl uxux md-: -md Bi tsjq ac eowl rjse."
        if (rn1.eowl_uxux == "string") {
            rj_csrf_eowl_uxux = "\nmd-\n* -md eowl uxux md-: -md Bi tsjq ja eowl wdbu ud dk rjse bqeo ae nvcm."
        }
        var rj_yhld_2 = "## gg-" + rn1.zkrs + "\n" + "md-\n* -md cqpi fr md-: -md " + rn1.vnwm_vr_afoa_lzm_wu.map(rn2 => {
            return "md-" + rn2.toLowerCase() + "-md"
        }).join('md- -md ae md- -md') + " \n"
        rj_yhld_2 += "md-\n* -md csrf md-: -md " + rn1.csrf.replace(/\n\s*$/, "") + rj_csrf_eowl_uxux + "\n\nmd-* -md klch\n-gg";
        var diwr_yhld = { VR_AFOA_WU: "WRVR_LD_YHRJ", VR_AFOA_MCVN: "XBST=0", VR_AFOA_BQEO: rj_yhld_2 }
        return VR_TSJQ_ZV_CE_EBWU_LD_YHRJ(diwr_yhld) + '```js\n' + rn1.klch.replace(/\n[^\n\S]+/g, "\n").replace(/^\s+/, "") + '\n```\n'
    }).join("\n\n")
    return rj_yhld

}
module.exports=VR_TSJQ_BRTZ_FS_ZV_NWVT_TSJQ_ZZUY