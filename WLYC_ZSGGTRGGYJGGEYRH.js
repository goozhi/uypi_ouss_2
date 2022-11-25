var encoding = require('encoding');
var fs = require('fs')
var ZSGGTRGGYJGGEYRH = require('./ZSGGTRGGYJGGEYRH');
function WLYC_ZSGGTRGGYJGGEYRH(req, res) {
    var YXNA_1 = req.body.VDZV_1.replace(/\"/g, "")
    if(!fs.existsSync(YXNA_1)){
        throw new Error('csrf-yxna ac zznq-'+YXNA_1)
    }
    var rj_kp=encoding.convert(fs.readFileSync(YXNA_1),'utf8','gb2312').toString()
    var rjse_yhld=ZSGGTRGGYJGGEYRH(rj_kp)
    var NVCM_2 = encoding.convert(YXNA_1+rjse_yhld, "gb2312", "utf8");
    fs.writeFileSync(YXNA_1.replace(/\.[^\.]+(?=$)/, "_分析报告.java"), NVCM_2);
    res.render('ZSGGTRGGYJGGEYRH', { JTYP_1: rjse_yhld });
}
module.exports = WLYC_ZSGGTRGGYJGGEYRH;