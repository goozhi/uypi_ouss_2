function BRTZ_FS_3f(RJSE_KP) {
    var RJSE_1 = RJSE_KP.replace(/\r/g, '').replace(/\s+$/, "");
    var reg_RNSF_SLGR = /998(?:(?!998)[\S\s])+?(?=\n999)/g;
    var VNWM_RNSF_SLGR = RJSE_1.match(reg_RNSF_SLGR);
    if (VNWM_RNSF_SLGR == null) {
        throw new Error("RJSE AOAO PC UULG FR '998' MR JTCO FR '999' \u6587\u672c\u5fc5\u987b\u6709\u5f00\u5934\u7b26\u201c\u0039\u0039\u0038\u201d\u002c\u0020\u5fc5\u987b\u6709\u7ed3\u675f\u7b26\u0027\u0039\u0039\u0039\u0027");
    } else {

    }
    var NHVN_GFVN_FS = require("./AFOA_BX/NHVN_GFVN_FS")
    var VNWM_NINI = VNWM_RNSF_SLGR.map(RNSF => {
        var VBYT_CDPC_oth = false;
        var VNWM_1 = RNSF.split(/\n/);
        
        var RJSE_MCVN_1 = "";
        if (/^\s*\d+\s*$/.test(VNWM_1[VNWM_1.length - 1])) {
            RJSE_MCVN_1 = VNWM_1[VNWM_1.length - 1].replace(/\s+/g,"");
            VNWM_1.splice(VNWM_1.length - 1, 1);
        }
        VNWM_1.splice(0, 1);
        var VN_1 = 0;
        var VNWM_2 = VNWM_1.map((RNSF_1, EQWY_1) => {
            var DIWR_YHLD = RNSF_1.match(/^\s*((?:[a-f]|[0-9])+(?:-(?:[a-f]|[0-9])+|))(?::|\uff1a)(.*)/i);
            if (DIWR_YHLD != null) {
                if (/-/.test(DIWR_YHLD[1])) {
                    VN_1 = eval('0x' + DIWR_YHLD[1].match(/(?:[a-f]|\d)+\s*$/i)) - EQWY_1;
                    return DIWR_YHLD[1] + ":" + DIWR_YHLD[2]
                } else {
                    VN_1 = eval('0x' + DIWR_YHLD[1]) - EQWY_1;
                    return DIWR_YHLD[1] + ":" + DIWR_YHLD[2]
                }
            } else if (/\both\b/i.test(RNSF_1)) {
                VBYT_CDPC_oth = true;
                return RNSF_1.replace(/\uff1a/,":")
            } else {
                return NHVN_GFVN_FS((EQWY_1 + VN_1).toString(16).toLowerCase()) + ":" + RNSF_1.replace(/^\s*|\s*$/,"")
            }
        });
        var RJSE_YHLD = "','oth:未定义'";
        if (VBYT_CDPC_oth) {
            RJSE_YHLD = "'"
        }
        return '\'' + VNWM_2.join("','") + RJSE_YHLD + RJSE_MCVN_1 + ";";
    });
    return VNWM_NINI.join('\n');
}
module.exports = BRTZ_FS_3f;