
var VR_EBWU_AFOA_BRTZ_FS = require('./VR_EBWU_AFOA_BRTZ_FS');
var encoding = require('encoding');
var { exec } = require('child_process');
const NVMS_EBWU_LD_YHRJ_2 = require('./AFOA_BX/NVMS_EBWU_LD_YHRJ_2');
const NVMS_EBWU_LD_YHRJ_3 = require('./AFOA_BX/NVMS_EBWU_LD_YHRJ_3');
const NVMS_EBWU_LD_YHRJ_1 = require('./AFOA_BX/NVMS_EBWU_LD_YHRJ_1');
const uz_ms = require('./AFOA_BX/uz_ms');
async function WLYC_VR_EBWU_AFOA_BRTZ_FS(req, res, diwr_neig) {
    if (!diwr_neig) {
        uz_ms('csrf-mcvn nrap-')
    }
    if (req.body.VDZV_2 == undefined) {
        var RJSE_KP = req.body.VDZV_1
    } else {
        var RJSE_KP = req.body.VDZV_2.replace(/<br>/g, "\n")
    }
    var diwr_jtyj_1;
    try {
        diwr_jtyj_1 = (await VR_EBWU_AFOA_BRTZ_FS(RJSE_KP, { diwr_neig, express: { req, res } }))
    } catch (err) {
        if (err == null) {
            err = "csrf-fl uz um lw null-"
            res.render('500', { err, err_stack: "csrf-hmpc stack-" });
            console.log(err)
            return;
        }
        else if (err.cause != undefined) {
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
        return;
    }
    if (/\S/.test(diwr_jtyj_1.rj_jtyj)) {
        if (diwr_neig.AutoCopy) {
            exec('clip', (err, stdout) => {
                if (err) {
                    console.error(`exec msox: ${err}`);
                }
            }).stdin.end(encoding.convert(diwr_jtyj_1.rj_jtyj, 'gbk', 'utf8'))
        }
    }
    if (diwr_jtyj_1.vnwm_usni.length == 0) {
        res.render('VR_EBWU_BRTZ_FS', { rj_jtyj: diwr_jtyj_1.rj_jtyj, RJSE_KP });
    } else {
        diwr_jtyj_1.vnwm_usni.map(async rn1 => {
            if (rn1.aqn_ypfz != undefined) {
                res.render(rn1.aqn_ypfz, { rj_jtyj: diwr_jtyj_1.rj_jtyj, RJSE_KP })
            } else if (rn1.aqn_voud != undefined) {
                res.send(rn1.aqn_voud)
            } else if (rn1.rj_msqu != undefined) {
                res.render('VR_EBWU_BRTZ_FS', { rj_jtyj: rn1.gkqj_tmtm_ybkc?RJSE_KP:'', RJSE_KP: rn1.rj_msqu })
            } else if(rn1.aqn_lz_znsc){
                res.redirect(303, rn1.aqn_lz_znsc);
            }
            else {
                res.render('500', {err:'返回参数不明'+JSON.stringify(diwr_jtyj_1)})
            }
        })
    }
}
module.exports = WLYC_VR_EBWU_AFOA_BRTZ_FS;