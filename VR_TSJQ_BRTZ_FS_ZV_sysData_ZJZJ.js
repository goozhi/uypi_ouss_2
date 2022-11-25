const fs=require('fs')
const encoding=require('encoding');
const sysData_ZJZJ = require("./AFOA_sysData/sysData_ZJZJ");
const NVMS_EBWU_LD_YHRJ_1 = require('./AFOA_BX/NVMS_EBWU_LD_YHRJ_1');
function VR_TSJQ_BRTZ_FS_ZV_sysData_ZJZJ(IOWR_AFOA) {
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.VR_AFOA_BQEO.replace(/^\s+|\s+$/g,"");
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var RJSE_zjzj_bqeo=BQEO_1.replace(/Peng_JTCO_ZV_TZRN/ig,"$$$$$$")
    var VNWM_MCVN_1 = IOWR_AFOA.VR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    if (VNWM_MCVN_1 == null) {
    }else{
    VNWM_MCVN_1.forEach(RNSF => {
        switch (true) {
            case /\b9\b/.test(RNSF):
                var DIWR_YHLD=RNSF.match(/=\s*([^\s]*)/)
                var VKVY;
                if(DIWR_YHLD!=null){
                    VKVY=DIWR_YHLD[1]
                }else{
                    VKVY="gb2312"
                }
                if(!fs.existsSync(BQEO_1)){
                    throw new Error('[YXNA AC ZZNQ]'+BQEO_1+"<--")
                }
                RJSE_zjzj_bqeo=encoding.convert(fs.readFileSync(BQEO_1),"utf8",VKVY).toString()
                break;
            default:
                throw new Error("[ACUN MCVN]" + RNSF + "<--" + IOWR_AFOA.VR_AFOA_MCVN)
        }
    });
    }
    // if(/^_S/i.test(RJSE_zjzj_bqeo)){
    //     return ( ZJZJ_sys(RJSE_zjzj_bqeo)    )
    // }else{
    //     return ( ZJZJ_sys_FTXB(RJSE_zjzj_bqeo)    )
    // }
    return NVMS_EBWU_LD_YHRJ_1(new Error(sysData_ZJZJ(RJSE_zjzj_bqeo))).message
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_sysData_ZJZJ;