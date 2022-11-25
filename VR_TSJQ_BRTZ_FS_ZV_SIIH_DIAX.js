var NINI_SIIH_DIAX =require('./NINI_SIIH_DIAX');

function VR_TSJQ_BRTZ_FS_ZV_SIIH_DIAX(IOWR_AFOA){
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }

    return NINI_SIIH_DIAX(IOWR_AFOA.VR_AFOA_BQEO.replace(/(\s+$|^\s+)/g,""));
}
module.exports=VR_TSJQ_BRTZ_FS_ZV_SIIH_DIAX