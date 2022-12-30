
var VR_EBWU_AFOA_BRTZ_FS = require('./VR_EBWU_AFOA_BRTZ_FS');
var encoding = require('encoding');
var { exec } = require('child_process');
const NVMS_EBWU_LD_YHRJ_2 = require('./AFOA_BX/NVMS_EBWU_LD_YHRJ_2');
const NVMS_EBWU_LD_YHRJ_3 = require('./AFOA_BX/NVMS_EBWU_LD_YHRJ_3');
const NVMS_EBWU_LD_YHRJ_1 = require('./AFOA_BX/NVMS_EBWU_LD_YHRJ_1');
const uz_ms = require('./AFOA_BX/uz_ms');
async function WLYC_VR_EBWU_AFOA_BRTZ_FS(req, res) {
    if (req.body.VDZV_2 == undefined) {
        var RJSE_KP = req.body.VDZV_1
    } else {
        var RJSE_KP = req.body.VDZV_2.replace(/<br>/g, "\n")
    }
    var JTYP_1;
    try {
        JTYP_1 = await VR_EBWU_AFOA_BRTZ_FS(RJSE_KP, { express: { req, res } })
    } catch (err) {
        if (err.cause != undefined) {
            err = NVMS_EBWU_LD_YHRJ_2(err)
        } else if (err.message != undefined && /csrf-/i.test(err.message)) {
            err = NVMS_EBWU_LD_YHRJ_3(err)
        } else if (err.message != undefined) {
            err = NVMS_EBWU_LD_YHRJ_1(err)
        }
        else {

        }
        res.render('500', { err, err_stack: err.stack });
        console.log(err)

    }
    if (typeof (JTYP_1) == "string") {
        res.render('VR_EBWU_BRTZ_FS', { JTYP_1, RJSE_KP });
        if(/\S/.test(JTYP_1)){
            exec('clip').stdin.end(encoding.convert(JTYP_1, 'gbk', 'utf8'))
        }
    } else {
        // res.render('VR_EBWU_BRTZ_FS', { RJSE_KP , JTYP_1:""});
    }
}
module.exports = WLYC_VR_EBWU_AFOA_BRTZ_FS;