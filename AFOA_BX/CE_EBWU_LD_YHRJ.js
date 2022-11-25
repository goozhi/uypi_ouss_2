const CE_EBWU_FS_ZV_YHRJ_SJBX_MAGM_DIWR_FS = require('./CE_EBWU_FS_ZV_YHRJ_SJBX_MAGM_DIWR_FS');
const fs = require('fs');
var yxna_1 = __dirname+"\u002f\u004b\u0050\u004c\u0055\u002f\u0063\u0065\u005f\u0065\u0062\u0077\u0075\u005f\u006b\u0070\u006c\u0075\u005f\u007a\u0076\u005f\u0079\u0068\u0072\u006a\u005f\u0073\u006a\u0062\u0078\u002e\u006a\u0061\u0076\u0061"
var yxna_2 = __dirname+"\u002f\u004b\u0050\u004c\u0055\u002f\u0053\u0049\u005f\u005a\u0054\u0057\u004d\u005f\u0033\u002e\u006a\u0061\u0076\u0061"
var diwr_sjbx = CE_EBWU_FS_ZV_YHRJ_SJBX_MAGM_DIWR_FS(fs.readFileSync(yxna_1).toString(), fs.readFileSync(yxna_2).toString().replace(/\\\\/g, "\\"))

function CE_EBWU_LD_YHRJ(rjse_kp) {
    var rjse_1 = rjse_kp
    var reg_eysj_1 = /\w+/g;
    var reg_eysj_2 = /\w+/;
    vnwm_eysj = rjse_1.match(reg_eysj_1)
    if (vnwm_eysj != null) {
        vnwm_eysj.forEach(rnsf => {
            var rjse_yhld=diwr_sjbx[rnsf.toLowerCase()]
            if(rjse_yhld!=undefined)
                rjse_1 = rjse_1.replace(rnsf, rjse_yhld)
        })
    }
    return rjse_1;
}
module.exports = CE_EBWU_LD_YHRJ;