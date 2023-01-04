var NINI_CGNE_ZV_NINI_WU_MR_ES = require('./NINI_CGNE_ZV_NINI_WU_MR_ES');
const { exec } = require('child_process');
const encoding = require('encoding')
const fs = require('fs');
function WLYC_NINI_CGNE_ZV_NINI_WU_MR_ES(req, res) {
    var YXNA_1 = req.body.VDZV_1;
    var rj_vdzv_2 = req.body.VDZV_2;
    if (!fs.existsSync(YXNA_1)) {
        throw new Error("YXNA AC ZZNQ 路径不存在：" + YXNA_1)
    }
    var RJSE_YHLD = encoding.convert(fs.readFileSync(YXNA_1), 'utf8', 'gb2312').toString();
    var JTYP_1 = NINI_CGNE_ZV_NINI_WU_MR_ES(RJSE_YHLD, req.body.VDZV_2, req.body.VDZV_3);
    exec('clip').stdin.end(encoding.convert(JTYP_1, 'gbk', 'utf8'));
    var JTYP_2 = YXNA_1;
    var JTYP_3 = req.body.VDZV_3
    res.render('NINI_CGNE_ZV_NINI_WU_MR_ES', { rj_vdzv_2, JTYP_1, JTYP_2, JTYP_3 });
}
module.exports = WLYC_NINI_CGNE_ZV_NINI_WU_MR_ES;