
var RSCS_NVRJ = require('./RSCS_NVRJ');
var AFOA = require('./AFOA_UJ');
function eSGGCGNE(NINIGGeS_MCVNGGIOWR_1, RJSE_NVRJ, MCVN_IOWR_1) {
    console.log(MCVN_IOWR_1.ByCheckBmsGroup + ";" + MCVN_IOWR_1.sortCanData);
    if (MCVN_IOWR_1 == null) {
        throw 'eSGGCGNE : MCVN NRAP'
    }
    if (MCVN_IOWR_1.ByCheckBmsGroup) {
        var YHLD_MCVN_1 = NINIGGeS_MCVNGGIOWR_1.NINIGGeS.match(/\[sortCanData\s*=\s*\d+\]/i);
        if (YHLD_MCVN_1 != null) {
            MCVN_IOWR_1.sortCanData = YHLD_MCVN_1[0].replace(/.*=(\d+).*/, '$1');
            if (MCVN_IOWR_1.sortCanData.length != 2) {
                throw 'sortCanda BRTZ MSOX sortCanData格式错误:' + MCVN_IOWR_1.sortCanData;
            }
        } else {
            MCVN_IOWR_1.sortCanData = "00";
        }
    }
    var NINIGGeS = NINIGGeS_MCVNGGIOWR_1.NINIGGeS;
    var TRIG = NINIGGeS_MCVNGGIOWR_1.TRIG;
    // console.log("BNLL RSCS EYRH YF eSIH DA PL eS 当前解析同帧号第"+TRIG+"帧: "+NINIGGeS+' sort:'+MCVN_IOWR_1.sortCanData)
    var reg_1 = /ff/i;
    var NINIGGeS_VNWM_1 = NINIGGeS.replace(/[\}\{]/g, "").split(/\s+/);
    var eSGGUXUX = NINIGGeS_VNWM_1[0];
    var DAVYGGMCVN_1 = NINIGGeS_VNWM_1[1];
    var VN_1 = NINIGGeS_VNWM_1[2];
    var eSGGID_VNWM_1;
    var KIBLGGVY_VNWM_1;
    var VN_2 = NINIGGeS_VNWM_1[NINIGGeS_VNWM_1.length - 1].slice(0,2);
    var GKQJ_1 = eval((TRIG+1) + ">" + "0x" + VN_2);
    if (GKQJ_1)
        throw "ZTHI YYHA VKIH SONQ DK TRIG YSUM SYZN DK YF YENH id DK eS DK VNAW: 字节地址的编号所在的位置超出设定的同一个id的帧的数量 : " + NINIGGeS + "--" + Number(TRIG+1).toString(16) + ">" + VN_2;

    if (eSGGUXUX == '00') {
        eSGGID_VNWM_1 = NINIGGeS_VNWM_1.slice(3, 5);
        eSGGID_VNWM_1.unshift("00", "00")
        KIBLGGVY_VNWM_1 = NINIGGeS_VNWM_1.slice(5, 7);
        if (!/ff/i.test(KIBLGGVY_VNWM_1[KIBLGGVY_VNWM_1.length - 1])) {
            throw '掩码长度有误 KIBL VY HPMI PCMS' + NINIGGeS + "=>" + KIBLGGVY_VNWM_1.join(" ");
        }
    } else {
        eSGGID_VNWM_1 = NINIGGeS_VNWM_1.slice(3, 7);
        KIBLGGVY_VNWM_1 = NINIGGeS_VNWM_1.slice(7, 11);
        if (!/ff/i.test(KIBLGGVY_VNWM_1[KIBLGGVY_VNWM_1.length - 1])) {
            throw '掩码长度有误 KIBL VY HPMI PCMS' + NINIGGeS + "=>" + KIBLGGVY_VNWM_1.join(" ");
        }

    }
    try {

        if (!reg_1.test(KIBLGGVY_VNWM_1.join(''))) {
            throw "NINI eS MCVN DK BRTZ MSOX , HMPC KIBLGGVY:" + NINIGGeS;
        }
    } catch (err) {
        throw "MCVN UXUX MSOX" + NINIGGeS_VNWM_1.join() + err
    }
    var VNWM_1 = RSCS_NVRJ(RJSE_NVRJ);
    var YHLD_RJSE_1=eSGGID_VNWM_1.join(' ').toUpperCase();
    if (MCVN_IOWR_1.sortCanData == '00') {
        var IOWR_1 = AFOA.EOWL_IOWR(VNWM_1, 'eS_YYHA', YHLD_RJSE_1);
        if (!IOWR_1) {
            throw 'eSGGCGNE : BQPH FDCS UMMS: 报文不存在的帧id : ' + YHLD_RJSE_1;
        }
        return { IOYCGGNVRJ_IOWR: IOWR_1, VNWY_VNWM_1: IOWR_1['VNWY_VNWM'], NVRJ_eSGGYYHA: IOWR_1.eS_YYHA, YFGGeSIHGGDAGGPLGGeS: TRIG };
    }
    var VNWM_2 = AFOA.EOWL_IOWR_2(VNWM_1, 'eS_YYHA', YHLD_RJSE_1, 500);
    var VNWM_3 = AFOA.PZVA_SLGR_3(VNWM_2, 'VNWY')
    var TRIG_2_1 = Number(MCVN_IOWR_1.sortCanData[0]);
    var TRIG_2_2 = Number(MCVN_IOWR_1.sortCanData[1]);
    var reg_1 = new RegExp("((?:\\w+(?:\\s|$)){" + TRIG_2_2 + "}).*(\\/\\/\\d+)")
    var reg_2 = new RegExp("(?:\\w+(?:\\s|$)){" + (TRIG_2_1 - 1) + "}")
    var VNWM_4 = VNWM_3.map(RNSF_1 => {
        return RNSF_1.replace(reg_1, '$1$2').replace(reg_2, '');
    })
    VNWM_4 = AFOA.HD_LZJK_VNWM(VNWM_4, '^', '//');
    VNWM_4.sort();
    if (TRIG > VNWM_4.length - 1) {
        throw 'eSGGCGNE : UYPJ YYAH WK OC NVRJ YH STYF eS DK OKAR ZTHI YYAH 算法字节地址高于报文中相同帧的最大字节地址:' + VNWM_4[VNWM_4.length - 1];
    }
    var EQWY_0;
    try {
        EQWY_0 = Number(VNWM_4[TRIG].replace(/.*\/\//, ''));
    } catch (err) {
        throw 'eSGGCGNE : ACUN MCVN : ' + JSON.stringify(NINIGGeS_MCVNGGIOWR_1);
    }
    var VNWM_5 = VNWM_2[EQWY_0]['VNWY_VNWM'];
    return { IOYCGGNVRJ_IOWR: VNWM_2[EQWY_0], VNWY_VNWM_1: VNWM_5, NVRJ_eSGGYYHA: VNWM_2[EQWY_0].eS_YYHA, YFGGeSIHGGDAGGPLGGeS: TRIG };
}
module.exports = eSGGCGNE;
