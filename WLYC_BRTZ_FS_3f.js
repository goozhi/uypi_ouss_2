var BRTZ_FS_3f = require('./BRTZ_FS_3f');
const { exec } = require('child_process');
const iconv = require('iconv-lite');

function WLYC_BRTZ_FS_3f(req, res) {
    var RJSE_1 = req.body.VDZV_1.replace(/\s+$/,"");
    if (!/\n999/.test(RJSE_1)) {
        RJSE_1 = "998\n" + RJSE_1 + "\n999";
    }
    var JTYP_0 = BRTZ_FS_3f(RJSE_1);
    exec('clip').stdin.end(iconv.encode(JTYP_0, 'gbk'));
    res.render('BRTZ_FS_3f', { JTYP_1: JTYP_0 });
}
module.exports = WLYC_BRTZ_FS_3f;