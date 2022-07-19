function BRTZ_FS_3f_Beiqi_ec180_MHQH(RJSE_KP) {
    var BRTZ_FS_3f_Beiqi_ec180 = require('./BRTZ_FS_3f_Beiqi_ec180');
    var reg_1 = /RA YJAB FRGR BRTZ DK BQEO/;
    var VNWM_1=RJSE_KP.split(/\n/)
    var VNWM_2 = [];
    for (var EQWY_1 = 0; EQWY_1 < VNWM_1.length; EQWY_1++) {
        try {
            var RJSE_YHLD = BRTZ_FS_3f_Beiqi_ec180(VNWM_1[EQWY_1]);
            VNWM_2.push(RJSE_YHLD);
        } catch (err) {
            console.log(err)
            if (reg_1.test(err)) {
                continue;
            } else {
                throw err;
            }
        }

    }
    return VNWM_2.join('\n')
}
module.exports = BRTZ_FS_3f_Beiqi_ec180_MHQH;