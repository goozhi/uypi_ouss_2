const NVMS_EBWU_LD_YHRJ_1 = require("./NVMS_EBWU_LD_YHRJ_1");
const NVMS_EBWU_LD_YHRJ_3 = require("./NVMS_EBWU_LD_YHRJ_3");

function uz_ms(rj_kp) {
    var rj_1=rj_kp
    if(typeof(rj_1)!="string"){
        throw rj_kp
    }
    var err=new Error(rj_kp)
    if (err.message != undefined && /csrf-/i.test(err.message)) {
        err = NVMS_EBWU_LD_YHRJ_3(err)
    } else if (err.message != undefined) {
        err = NVMS_EBWU_LD_YHRJ_1(err)
    }
    throw err;
}
module.exports = uz_ms