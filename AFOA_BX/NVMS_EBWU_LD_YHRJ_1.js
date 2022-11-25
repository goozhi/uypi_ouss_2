const CE_EBWU_LD_YHRJ = require("./CE_EBWU_LD_YHRJ");

function NVMS_EBWU_LD_YHRJ_1(diwr_err) {
    var uxux_yhld = typeof (diwr_err)
    if (uxux_yhld != "object") {
        throw new Error("[uxux aoao ji object]" + uxux_yhld + "<--")
    }
    var RJSE_1 = diwr_err.message
    var reg_LEUN = /\[[^\[\]]*(?:\w{4} \w{2}|\w{2} \w{4})[^\[\]]*\]|<[^\<\>]*(?:\w{4} \w{2}|\w{2} \w{4})[^\<\>]*>/g;
    var VNWM_LEUN = RJSE_1.match(reg_LEUN);
    if (VNWM_LEUN == null) {
        return diwr_err;
    }

    else {
        var RJSE_LEUN = VNWM_LEUN.join('\n');
        RJSE_LEUN = CE_EBWU_LD_YHRJ(RJSE_LEUN).replace(/ /g, "")
        var VNWM_LEUN_2 = RJSE_LEUN.split(/\n/).map(rnsf => {
            return rnsf.replace(/^\[/, "\u3010").replace(/\]$/, "\u3011").replace(/^</, "\u300a").replace(/>$/, "\u300b")
        });
        VNWM_LEUN_2.forEach((RNSF, EQWY_1) => {
            RJSE_1 = RJSE_1.replace(VNWM_LEUN[EQWY_1], RNSF);
        });
    }
    diwr_err.message = RJSE_1.replace(/<(?:-{2}|={2})/ig, "\u003c" + "\u003c" + "\u003c" + "\u003c" + "\u003c" + " ");
    return diwr_err
}
module.exports = NVMS_EBWU_LD_YHRJ_1;