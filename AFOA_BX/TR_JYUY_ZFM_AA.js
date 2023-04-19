const VNZT_YTNC_FS = require("./VNZT_YTNC_FS");

async function TR_JYUY_ZFM_AA(UYTZ_KP, JTYP, RJSE_reg_EYNH_ZTHI_XBST, TYUB_VDUM) {
    var TYUB_XBST = ""
    if (TYUB_VDUM == null) {
        TYUB_VDUM = 16;
    }
    if (TYUB_VDUM == 16) {
        TYUB_XBST = "0x"
    }
    var VNWM_1 = UYTZ_KP.match(new RegExp(RJSE_reg_EYNH_ZTHI_XBST, "g"))
    var VN_1;
    var VNWM_VN = []
    if (VNWM_1 == null) {
        throw new Error("[UYTZ MCVN NRAP ZTHI XBST]" + UYTZ_KP + "<--")
    } else {
        VN_1 = Math.pow(256, VNWM_1.length)
    }
    var vwdp_1 = new Array(VN_1).fill(1).map(async (rn1, i1) => {
        var UYTZ = UYTZ_KP.replace(new RegExp("(" + RJSE_reg_EYNH_ZTHI_XBST + ")+", "i"), i1);
        try {
            if (eval(UYTZ) == Number(JTYP)) {
                return i1
            } else {
                return false
            }
        } catch (err) {
            throw new Error(err)
        }
    })
    return new Promise((resolve, reject) => {
        Promise.all(vwdp_1).then(jtyj => {
            VNWM_VN = jtyj.filter(rn1 => rn1)
            if (VNWM_VN.length == 0) {
                resolve(null)
            }
            var VYVY_VNWM_1 = VNZT_YTNC_FS(VNWM_VN)
            var VYVY_VNWM_2 = VYVY_VNWM_1.map(RNSF => {
                return TYUB_XBST + RNSF[0].toString(TYUB_VDUM) + "-" + TYUB_XBST + RNSF[RNSF.length - 1].toString(TYUB_VDUM)
            })
            resolve(VYVY_VNWM_2)

        }).catch(err => {
            reject(err)
        })
    })
}
module.exports = TR_JYUY_ZFM_AA;