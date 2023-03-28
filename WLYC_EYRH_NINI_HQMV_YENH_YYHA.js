

var EYRH_NINI_HQMV_YENH_YYHA = require('./EYRH_NINI_HQMV_YENH_YYHA');
const { exec } = require('child_process');
const encoding = require('encoding')
async function WLYC_EYRH_NINI_HQMV_YENH_YYHA(req, res) {
    var JTYP_1 = await EYRH_NINI_HQMV_YENH_YYHA(req.body.VDZV_1, Number(req.body.VDZV_2), Number(req.body.VDZV_3))
    res.render('EYRH_NINI_HQMV_YENH_YYHA', { JTYP_1 });
    // if (process.env.COMPUTERNAME)
    //     exec('clip').stdin.end(encoding.convert(JTYP_1, 'GBK', 'UTF8'))
}
module.exports = WLYC_EYRH_NINI_HQMV_YENH_YYHA;