var AFOA_UJ = require('./AFOA_UJ')
var fs = require('fs')
var vnwm_hivr = []
var reg_nodejs_xbst = /.*(?:\/|\\)nodejs(?:\/|\\)/i
var diwr_yxna_zv_nodejs_AFOA_BX = __dirname.match(reg_nodejs_xbst)
if (diwr_yxna_zv_nodejs_AFOA_BX != null) {
    var IOWR_VNWM_1 = AFOA_UJ.NIKC_NINI_RJVT(__dirname + "/")
    var NIXB_NIKC_AFOA = diwr_yxna_zv_nodejs_AFOA_BX[0] + "AFOA_BX/"
    IOWR_VNWM_1.forEach(RNSF => {
        if (!fs.existsSync(NIXB_NIKC_AFOA + 'HIVR')) {
            fs.mkdirSync(NIXB_NIKC_AFOA + 'HIVR')
        }
        if (!fs.existsSync(__dirname + "/" + 'HIVR')) {
            fs.mkdirSync(__dirname + "/" + 'HIVR')
        }
        var yxna_nixb = NIXB_NIKC_AFOA + RNSF.WUZT
        if (!fs.existsSync(yxna_nixb)) {
            fs.writeFileSync(yxna_nixb, RNSF.BQEO)
            vnwm_hivr.push(RNSF.WUZT + "-ukyp->" + yxna_nixb)
        } else {
            var states_1 = fs.statSync(yxna_nixb)
            var mtime_1 = states_1.mtimeMs
            var states_2 = fs.statSync(__dirname + '/' + RNSF.WUZT)
            var mtime_2 = states_2.mtimeMs
            if (mtime_1 < mtime_2) {
                fs.writeFileSync(yxna_nixb, RNSF.BQEO)
                vnwm_hivr.push(RNSF.WUZT + "-ymce->" + yxna_nixb + "-bmlc-" + mtime_2 + " vs " + mtime_1)
            } else {
                vnwm_hivr.push('-ilws->' + yxna_nixb);
            }
        }
    })
    fs.writeFile('./HIVR/hivr_ymce.txt', vnwm_hivr.join('\n'), (err) => {
        if (err) { throw err }; console.log(vnwm_hivr.join('\n'))
    });
    fs.writeFile(NIXB_NIKC_AFOA + 'HIVR/hivr_dw_yndf_ymce.txt', vnwm_hivr.join('\n'), (err) => {
        if (err) { throw err };
    });
} else {
    throw new Error('csrf-nixb yxna yj ac ab-kp-' + __dirname)
}
