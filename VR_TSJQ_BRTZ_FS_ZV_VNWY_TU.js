const VR_EBWU_BRTZ_FS_ZV_22 = require('./VR_EBWU_BRTZ_FS_ZV_22')
const VR_EBWU_BRTZ_FS_ZV_MH_TR_KXUX_2 = require('./VR_EBWU_BRTZ_FS_ZV_MH_TR_KXUX_2')
const VR_EBWU_BRTZ_FS_ZV_qq = require('./VR_EBWU_BRTZ_FS_ZV_qq')

async function VR_TSJQ_BRTZ_FS_ZV_VNWY_TU(DIWR_AFOA) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var NINI_SIIH_DIAX = require('./NINI_SIIH_DIAX')
    var VR_EBWU_BRTZ_FS_ZV_bb = require('./VR_EBWU_BRTZ_FS_ZV_bb')
    var VR_EBWU_BRTZ_FS_ZV_33 = require('./VR_EBWU_BRTZ_FS_ZV_33')
    var VR_EBWU_BRTZ_FS_ZV_V = require('./VR_EBWU_BRTZ_FS_ZV_V')
    var VR_EBWU_BRTZ_FS_ZV_gg = require('./VR_EBWU_BRTZ_FS_ZV_gg')
    var VR_EBWU_BRTZ_FS_ZV_10 = require('./VR_EBWU_BRTZ_FS_ZV_10')
    var VR_EBWU_BRTZ_FS_ZV_09 = require('./VR_EBWU_BRTZ_FS_ZV_09')
    var VR_EBWU_BRTZ_FS_ZV_16 = require('./VR_EBWU_BRTZ_FS_ZV_16')
    var VR_EBWU_BRTZ_FS_ZV_PC_FRIH_NINI = require('./VR_EBWU_BRTZ_FS_ZV_PC_FRIH_NINI')
    var VR_EBWU_BRTZ_FS_ZV_JCBZ_UL_PZVN_UYUY_UX_NINI = require('./VR_EBWU_BRTZ_FS_ZV_JCBZ_UL_PZVN_UYUY_UX_NINI')
    var RJSE_1 = DIWR_AFOA.VR_AFOA_BQEO.replace(/\r/g, "").replace(/^\s*\/\/.*/gm, '').replace(/((?:\n|^))\s+/g, "$1").replace(/\n(?=\n|$)/g, "");
    DIWR_AFOA.Peng_AFOA_MCVN = "";
    if (String(DIWR_AFOA.VR_AFOA_MCVN) == "0") {
        RJSE_1 = RJSE_1.replace(/\{\}/g, "{999999}");
    } else {
        DIWR_AFOA.Peng_AFOA_MCVN = DIWR_AFOA.VR_AFOA_MCVN
    }
    //WDGD WDBU
    //DYIH LDRG
    RJSE_1 = RJSE_1.replace(/）/g, ")").replace(/（/g, "(").replace(/‘|’/g, "'").replace(/，/g, ",").replace(/：/g, ":").replace(/(?:”|“)/g, "\"").replace(/；/g, ";")//.replace(/》/g, ">").replace(/《/g, "<").replace(/(?:、|\\)(\d+)/g, "d$1").replace(/。(\d+)/g, ".$1")
    //NINI WDBU
    RJSE_1 = RJSE_1.replace(/(.*\}(?:,|)(?:cf|77|7f|44).*,)\d+(\.\d,)/g, "$1$2")
    var VNWM_NINI_KP = RJSE_1.split(/\n/)
    if (VNWM_NINI_KP.length == 1) {
        VNWM_NINI_KP[0] = VNWM_NINI_KP[0].replace(/\{\}/, "{999999}")
    }
    var VWDP_VNWM_1 = VNWM_NINI_KP.map(async RNSF => {
        var DIWR_UXUX = RNSF.match(/\}\s*(?:,\s*|)((?:\w+|[^\s\w]))/);
        if (DIWR_UXUX != null) {
            var NINI_UXUX = DIWR_UXUX[1];
            switch (true) {
                case /^(?:33|s)$/i.test(NINI_UXUX):
                    return VR_EBWU_BRTZ_FS_ZV_33(RNSF)
                case /^(?:gg)$/i.test(NINI_UXUX):
                    return VR_EBWU_BRTZ_FS_ZV_gg(RNSF)
                case /^(?:16|H)$/i.test(NINI_UXUX):
                    return VR_EBWU_BRTZ_FS_ZV_16(RNSF)
                case /^(?:09|0a|A)$/i.test(NINI_UXUX):
                    return VR_EBWU_BRTZ_FS_ZV_09(RNSF)
                case /^(?:10|D)$/i.test(NINI_UXUX):
                    return VR_EBWU_BRTZ_FS_ZV_10(RNSF)
                case /^(?:22\d+)$/i.test(NINI_UXUX):
                    return VR_EBWU_BRTZ_FS_ZV_22(RNSF)
                case /^(?:qq\d+)$/i.test(NINI_UXUX):
                    return VR_EBWU_BRTZ_FS_ZV_qq(RNSF)
                case /^(?:88|bb)$/i.test(NINI_UXUX):
                    return VR_EBWU_BRTZ_FS_ZV_bb(RNSF)
                case /^(?:V)$/i.test(NINI_UXUX):
                    return VR_EBWU_BRTZ_FS_ZV_V(RNSF)
                case /^(?:M)$/i.test(NINI_UXUX):
                    return VR_EBWU_BRTZ_FS_ZV_MH_TR_KXUX_2(RNSF)
                case /^(?:=)$/i.test(NINI_UXUX):
                    return VR_EBWU_BRTZ_FS_ZV_PC_FRIH_NINI(RNSF)
                case /^(?:\[|【)$/i.test(NINI_UXUX):
                    return VR_EBWU_BRTZ_FS_ZV_JCBZ_UL_PZVN_UYUY_UX_NINI(RNSF)
                case /^(?:(?!21|22|22\d+|33|16|10|09|88)\d)+$/i.test(NINI_UXUX):
                    return VR_EBWU_BRTZ_FS_ZV_33(RNSF.replace(/(\}\s*(?:,\s*|))((?:\w+|[^\s\w]))/,"$133 $2"))
            }
        }

        return RNSF;
    })
    return new Promise((resolve, reject) => {
        Promise.all(VWDP_VNWM_1).then(jtyj => {
            RJSE_1 = jtyj.join('\n')
            var reg_LLAO = /((?:\n|^))((?:(?!\/\/|").)+?)(\s*\{)/g;
            var sheng_1 = "$1*\"$2\",$3"
            RJSE_1 = RJSE_1.replace(reg_LLAO, sheng_1);
            RJSE_1 = NINI_SIIH_DIAX(RJSE_1);

            if (DIWR_AFOA.VR_AFOA_MCVN == null) {
                resolve(RJSE_1)
            }
            resolve("$Str(" + DIWR_AFOA.Peng_AFOA_MCVN + ");\n" + RJSE_1 + "\n***")

        }).catch(err => {
            reject(err)
        })
    })
    //YHRJ FRIH LDRG
    // RJSE_1 = RJSE_1.replace(/【|】/g, "|").replace(/千帕/g, "kPa").replace(/牛顿米/g, "Nm").replace(/千欧姆|千欧/g, "kΩ").replace(/欧姆/g, "Ω").replace(/摄氏度/g, "℃").replace(/千米每小时/g, "km/h").replace(/转每分/g, "rpm").replace(/米每平方秒/g, "m/s2").replace(/(?:，|,)度/g, ",°").replace(/(?:，|,)千米/g, ",km");
    //FT YHRJ FRIH LDRG
    // RJSE_1 = RJSE_1.replace(/KM\/H|kmh/ig, "km/h").replace(/KPA/ig, "kPa").replace(/RPM/ig, "rpm").replace(/MIN(?=\s*(\/\/.*|)(\n|;|$))/ig, "min").replace(/AH(?=\s*(\/\/.*|)(\n|;|$))/ig, "Ah").replace(/KWH/ig, "kwh").replace(/BAR/ig, "bar").replace(/D(\d+)/g, "d$1").replace(/\\(\d+)/g, "d$1").replace(/\}(?:,|)(d\d+d\d+)/g, "},cf,$1").replace(/((?:\}|,))22((?:,|d))/g, "$121$2").replace(/((?:\}|,))33((?:,|d))/g, "$13f$2").replace(/((?:\}|,))44((?:,|d))/g, "$1cf$2").replace(/((?:\}|,))77((?:,|d))/g, "$17f$2").replace(/((?:\}|,))88((?:,|d))/g, "$1bb$2").replace(/((?:\}|,))09((?:,|d))/g, "$10a$2");
    //JBMJ VKVD LD ZYKL FS
    //AGVN TRVN
    // var reg_cf_MCVN_ZV_AGVN_TRVN = /(.*\}(?:,|)(?:7f|cf)(?:(?!\/\/).)+?)((?:,|)(?:==|=)(?:,|))(.*)/ig;
    // var VNWM_YHLD = RJSE_1.match(reg_cf_MCVN_ZV_AGVN_TRVN)
    // var reg_ARVN = /\d\.(\d+)/g;
    // if (VNWM_YHLD != null) {
    //     VNWM_YHLD.forEach(RNSF => {
    //         var VNWM_AGVN = RNSF.match(reg_ARVN);
    //         if (VNWM_AGVN == null) {
    //             var reg_UYTZ = /(?:\b\d+|\(.*\))\/(?:0x\w+|\d+)/g;
    //             var VNWM_YHLD_2 = RNSF.match(reg_UYTZ)
    //             if (VNWM_YHLD_2 == null) {
    //                 RJSE_1 = RJSE_1.replace(RNSF, RNSF.replace(reg_cf_MCVN_ZV_AGVN_TRVN, "$1" + ",." + "0" + "," + "$3"))
    //             } else {
    //                 var VNWM_1 = []
    //                 VNWM_YHLD_2.forEach(RNSF => {
    //                     var VN_YHLD = eval(RNSF).toString()
    //                     if (reg_ARVN.test(VN_YHLD)) {
    //                         VNWM_1.push(VN_YHLD.replace(reg_ARVN, "$1").length)
    //                     } else {
    //                         VNWM_1.push(0)
    //                     }
    //                 })
    //                 VNWM_1.sort((a, b) => b - a);
    //                 var OKAR = VNWM_1[0]
    //                 if (OKAR > 2) {
    //                     OKAR = 2;
    //                 }
    //                 RJSE_1 = RJSE_1.replace(RNSF, RNSF.replace(reg_cf_MCVN_ZV_AGVN_TRVN, "$1" + ",." + OKAR + "," + "$3"))
    //             }
    //             return
    //         }
    //         var VNWM_1 = []
    //         VNWM_AGVN.forEach(RNSF => {
    //             VNWM_1.push(RNSF.replace(reg_ARVN, "$1").length)
    //         })
    //         VNWM_1.sort((a, b) => b - a);
    //         var OKAR = VNWM_1[0]

    //         RJSE_1 = RJSE_1.replace(RNSF, RNSF.replace(reg_cf_MCVN_ZV_AGVN_TRVN, "$1" + ",." + OKAR + "," + "$3"))
    //     });
    // }

    //VEKY NINI ZTHI VKIH ZYKL FS
    // RJSE_1 = RJSE_1.replace(/\{\s*(\w{2})\s*(\w{2})\s*(\w{2})\s*\}/g, "{$1 $2 $3}").replace(/\{\s*(\w{2})(\w{2})\s*\}/g, "{$1 $2}").replace(/\}((?:22|77|7f|bb|16|0a|09|10|21|cf|44|3f|33))/g, "},$1").replace(/(,(?:22|77|7f|bb|16|0a|09|10|21|cf|44|3f|33)),,/g, "$1,d4,").replace(/((?:0a|16|09),)(\d+)-(\d+)/g, "$1d$2-d$3").replace(/(,(?:22|77|7f|bb|16|0a|09|10|21|cf|44|3f|33))(d\d+)/g, "$1,$2").replace(/([a-f]|\d)(\.\d,)(?=[^\n,]*(?:;|)(?:\n|$))/ig, "$1,$2").replace(/((?:\n|^)\S[^;]*?[^;])(?=\n|$)/g, "$1;").replace(/(\d),,(\d(?:,|))(?=[^\n,]*(?:;|)(?:\n|$))/g, "$1,.$2").replace(/(\}((?!\/\/).)+\.\d)(?:;|)(?=\n|$)/g, "$1,;");
    //SDRH BRTZ FS
}
module.exports = VR_TSJQ_BRTZ_FS_ZV_VNWY_TU