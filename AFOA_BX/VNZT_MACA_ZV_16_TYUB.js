const NHVN_GFVN_FS = require("./NHVN_GFVN_FS");

function VNZT_MACA_ZV_16_TYUB(RJSE_KP,DPHP) {
    var RJSE_1 = RJSE_KP;
    RJSE_1=RJSE_1.replace(/\s*-\s*/g,"-")
    var VNWM_1 = RJSE_1.split(/(?:\s*\n\s*|\s*,\s*|\s+)/);
    var VNWM_2 = []
    if(DPHP==null){
        DPHP=1;
    }else{
        if(isNaN(Number(DPHP))){
            throw new Error("[DPHP MCVN JI N a N]"+DPHP+"<--")
        }
    }
    VNWM_1.forEach(RNSF => {
        if (/-/.test(RNSF)) {
            var VNWM_3 = RNSF.split(/\s*-\s*/);
            VNWM_2.push(VNWM_3[0])
            var VN_0 = VNWM_3[0]
            var VN_2= VNWM_3[1]
            var DOYG = (eval("0x" + VN_2) - eval("0x" + VN_0))
            for (var i1 = 0; i1 < DOYG; i1+=DPHP) {
                var VN_1 = eval("0x" + VN_0) + i1 + DPHP;
                VNWM_2.push((VN_1.toString(16)));
            }
        } else {
            VNWM_2.push(RNSF)
        }
    });
    return VNWM_2;
}
module.exports = VNZT_MACA_ZV_16_TYUB;