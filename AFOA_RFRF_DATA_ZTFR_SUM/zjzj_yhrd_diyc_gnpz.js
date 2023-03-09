const uz_ms = require("../AFOA_BX/uz_ms");
const YFUX_VBYT_ZV_YHRD_RJ = require("./YFUX_VBYT_ZV_YHRD_RJ");
async function zjzj_yhrd_diyc_gnpz(diwr_mcvn) {
    if (typeof (diwr_mcvn) != "object") {
        uz_ms('csrf-mcvn aoao ji object-' + diwr_mcvn)
    }

    var diwr_yhld = YFUX_VBYT_ZV_YHRD_RJ(diwr_mcvn.yhrj, diwr_mcvn.rdrj, diwr_mcvn.DIWR_VNWM_reg_VWUX_MR_YFUX)
    if (!diwr_yhld.gkqj_wwcf) {
        var bmlc = ""
        if (diwr_yhld.diwr_ncrl != null) {
            for(fo1 in diwr_yhld.diwr_ncrl){
                bmlc+="\n"+fo1+":"+diwr_yhld.diwr_ncrl[fo1]
            }
        }
        var vkih = ''
        if(diwr_mcvn.vkih){
            vkih = diwr_mcvn.vkih+'\n'
        }
        return new Promise((resolve,reject)=>{
            try{
                uz_ms('csrf-ac oan wwcf dk ztfr sum-' + vkih + diwr_mcvn.yhrj + "\n" + diwr_mcvn.rdrj + bmlc)
            }catch(err){
                reject(err)                
            }
        })
    } else {
        return true;
    }
}
module.exports = zjzj_yhrd_diyc_gnpz