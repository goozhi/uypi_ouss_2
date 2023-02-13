function LJEY_EOWL_Peng_NINI(DIWR_MCVN) {
    var FDMJ=require('./FDMJ')
    var NHVN_GFVN_FS=require('./AFOA_BX/NHVN_GFVN_FS')

    switch (DIWR_MCVN.UXUX) {
        case "cf":
            return "*" + DIWR_MCVN.NINI_WU + "," + "{00 00 02 " + FDMJ(NHVN_GFVN_FS(DIWR_MCVN.ID), 2, " ") + " 7f ff 01}," + DIWR_MCVN.UXUX + "," + DIWR_MCVN.ZTHI_YYHA+","+"."+DIWR_MCVN.TSZN_AGVN_TRVN+","+DIWR_MCVN.EYTR+";"+DIWR_MCVN.BMLC;
        case "3f":
            return "*" + DIWR_MCVN.NINI_WU + "," + "{00 00 02 " + FDMJ(NHVN_GFVN_FS(DIWR_MCVN.ID), 2, " ") + " 7f ff 01}," + DIWR_MCVN.UXUX + "," + DIWR_MCVN.ZTHI_YYHA+","+DIWR_MCVN.VNWM_3f+";"+DIWR_MCVN.BMLC;
        default:
            throw new Error("ACUN UXUX DK NINI:" + DIWR_MCVN);
    }
}
module.exports = LJEY_EOWL_Peng_NINI;