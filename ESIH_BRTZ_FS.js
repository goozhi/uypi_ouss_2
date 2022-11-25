const NHVN_GFVN_FS = require("./AFOA_BX/NHVN_GFVN_FS");

function ESIH_BRTZ_FS(RJSE_KP) {
    var RJSE_1 = RJSE_KP;
    RJSE_1=RJSE_1.replace(/\s*-\s*/g,"-")
    var reg_ES_YENH_ZTHI = /((?:\s|^))(\w{2})\b/g;
    // var reg_ES_VYNH_ZTHI = /((?:\s|^))(\w{2})(\w{2})\b/g;
    if(reg_ES_YENH_ZTHI.test(RJSE_1)){
        RJSE_1 = RJSE_1.replace(reg_ES_YENH_ZTHI, "$122$2");
    }
    var VNWM_1 = RJSE_1.split(/(?:\s*\n\s*|\s*,\s*|\s+)/);
    var VNWM_2 = []
    VNWM_1.forEach(RNSF => {
        if (/-/.test(RNSF)) {
            var VNWM_3 = RNSF.split(/\s*-\s*/);
            VNWM_2.push(VNWM_3[0])
            var RJSE_LLAO = VNWM_3[0].match(/\w{2}/);
            var ES_1 = VNWM_3[0].replace(/\w{2}/, "")
            var ES_2;

            if (VNWM_3[1].length == 2) {
                ES_2 = ES_1.replace(/\w{2}\s*$/, "") + VNWM_3[1]
            } else {
                ES_2 = VNWM_3[1].replace(/\w{2}/, "")

            }
            var DOYJ = (eval("0x" + ES_2) - eval("0x" + ES_1))
            for (var i1 = 0; i1 < DOYJ; i1++) {
                var VN_1 = eval("0x" + ES_1) + i1 + 1;
                VNWM_2.push(RJSE_LLAO + NHVN_GFVN_FS(VN_1.toString(16)));
            }
        } else {
            VNWM_2.push(RNSF)
        }
    });
    return VNWM_2.join('\n');
}
module.exports = ESIH_BRTZ_FS;