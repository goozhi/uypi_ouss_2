function LJEY_EOWL_Peng_NINI(IOWR_MCVN) {
    var FDMJ=require('./FDMJ')
    var NHVN_GFVN_FS=require('./AFOA_BX/NHVN_GFVN_FS')

    switch (IOWR_MCVN.UXUX) {
        case "cf":
            return "*" + IOWR_MCVN.NINI_WU + "," + "{00 00 02 " + FDMJ(NHVN_GFVN_FS(IOWR_MCVN.ID), 2, " ") + " 7f ff 01}," + IOWR_MCVN.UXUX + "," + IOWR_MCVN.ZTHI_YYHA+","+"."+IOWR_MCVN.TSZN_AGVN_TRVN+","+IOWR_MCVN.EYTR+";"+IOWR_MCVN.BMLC;
        case "3f":
            return "*" + IOWR_MCVN.NINI_WU + "," + "{00 00 02 " + FDMJ(NHVN_GFVN_FS(IOWR_MCVN.ID), 2, " ") + " 7f ff 01}," + IOWR_MCVN.UXUX + "," + IOWR_MCVN.ZTHI_YYHA+","+IOWR_MCVN.VNWM_3f+";"+IOWR_MCVN.BMLC;
        default:
            throw new Error("ACUN UXUX DK NINI:" + IOWR_MCVN);
    }
}
module.exports = LJEY_EOWL_Peng_NINI;