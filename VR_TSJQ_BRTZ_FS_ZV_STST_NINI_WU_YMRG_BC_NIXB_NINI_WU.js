
function VR_TSJQ_BRTZ_FS_ZV_STST_NINI_WU_YMRG_BC_NIXB_NINI_WU(IOWR_AFOA){
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var RJSE_KP=(IOWR_AFOA.VR_AFOA_BQEO.replace(/(\s+$|^\s+)/g,""))
    var RJSE_1=RJSE_KP
    var VNWM_RJSE_1=RJSE_1.split(/\n/);
    var VNWM_RJSE_2=VNWM_RJSE_1.map(RNSF=>{
        var IOWR_YHLD=RNSF.match(/(.*) \u76f8\u4f3c\u5ea6.*?(\*".*)/)
        if(IOWR_YHLD==null){
            return RNSF;
        }else{
            return IOWR_YHLD[2].replace(/\*"(.*?)"/,"\*\""+IOWR_YHLD[1].replace(/^\s+|\s+$/,"")+"\"")
        }
    })
    return VNWM_RJSE_2.join("\n");
}
module.exports=VR_TSJQ_BRTZ_FS_ZV_STST_NINI_WU_YMRG_BC_NIXB_NINI_WU