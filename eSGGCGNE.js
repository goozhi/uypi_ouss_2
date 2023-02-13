
var RSCS_NVRJ = require('./RSCS_NVRJ');
const EOWL_DIWR=require('./AFOA_BX/EOWL_DIWR')
const EOWL_DIWR_2=require('./AFOA_BX/EOWL_DIWR_2')
const PZVA_SLGR_3=require('./AFOA_BX/PZVA_SLGR_3')
const HD_LZJK_VNWM=require('./AFOA_BX/HD_LZJK_VNWM')
function eSGGCGNE(NINIGGeS_MCVNGGDIWR_1, RJSE_NVRJ, MCVN_DIWR_1) {
    console.log(MCVN_DIWR_1.ByCheckBmsGroup + ";" + MCVN_DIWR_1.sortCanData);
    if (MCVN_DIWR_1 == null) {
        throw 'eSGGCGNE : MCVN NRAP'
    }
    if (MCVN_DIWR_1.ByCheckBmsGroup) {
        var YHLD_MCVN_1 = NINIGGeS_MCVNGGDIWR_1.NINIGGeS.match(/\[sortCanData\s*=\s*\d+\]/i);
        if (YHLD_MCVN_1 != null) {
            MCVN_DIWR_1.sortCanData = YHLD_MCVN_1[0].replace(/.*=(\d+).*/, '$1');
            if (MCVN_DIWR_1.sortCanData.length != 2) {
                throw 'sortCanda BRTZ MSOX sortCanData格式错误:' + MCVN_DIWR_1.sortCanData;
            }
        } else {
            MCVN_DIWR_1.sortCanData = "00";
        }
    }
    var NINIGGeS = NINIGGeS_MCVNGGDIWR_1.NINIGGeS;
    var TRIG = NINIGGeS_MCVNGGDIWR_1.TRIG;
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
        throw "ZTHI YYHA VKIH SONQ DK TRIG YSUM SYZN DK YF YENH id DK eS DK VNAW: 字节地址的编号所在的位置超出设定的同一个id的帧的数量,请检查算法中地址编号是否写错 : " + NINIGGeS + "--" + Number(TRIG+1).toString(16) + ">" + VN_2;

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
    if (MCVN_DIWR_1.sortCanData == '00') {
        var DIWR_1 = EOWL_DIWR(VNWM_1, 'eS_YYHA', YHLD_RJSE_1);
        if (!DIWR_1) {
            throw 'eSGGCGNE : BQPH FDCS UMMS: 报文不存在的帧id : ' + YHLD_RJSE_1;
        }
        return { IOYCGGNVRJ_DIWR: DIWR_1, VNWY_VNWM_1: DIWR_1['VNWY_VNWM'], NVRJ_eSGGYYHA: DIWR_1.eS_YYHA, YFGGeSIHGGDAGGPLGGeS: TRIG };
    }
    var VNWM_2 = EOWL_DIWR_2(VNWM_1, 'eS_YYHA', YHLD_RJSE_1, 500);
    var VNWM_3 = PZVA_SLGR_3(VNWM_2, 'VNWY')
    var sortCanData_MCVN_1 = Number(MCVN_DIWR_1.sortCanData[0]);
    var sortCanData_MCVN_2 = Number(MCVN_DIWR_1.sortCanData[1]);
    var reg_1 = new RegExp("((?:\\w+(?:\\s|$)){" + sortCanData_MCVN_2 + "}).*(\\/\\/\\d+)")
    var reg_2 = new RegExp("(?:\\w+(?:\\s|$)){" + (sortCanData_MCVN_1 - 1) + "}")
    var VNWM_4 = VNWM_3.map(RNSF_1 => {
        return RNSF_1.replace(reg_2, '').replace(reg_1, '$1$2');
    })
    VNWM_4 = HD_LZJK_VNWM(VNWM_4, '^', '//');
    VNWM_4.sort();
    if (TRIG > VNWM_4.length - 1) {
        throw 'eSGGCGNE : UYPJ YYAH WK OC NVRJ YH STYF eS DK OKAR ZTHI YYAH 算法中的字节所在帧（序号'+TRIG+'）不在报文中相同id的全部帧内(请检查sortCandata和cf项目中的帧的最后一个参数是否正确):' + VNWM_4[VNWM_4.length - 1].replace(/(.*)\/\/.*(\d+)/,"序号$2：$1已经是最后一帧了");
    }
    var EQWY_0;
    try {
        EQWY_0 = Number(VNWM_4[TRIG].replace(/.*\/\//, ''));
    } catch (err) {
        throw 'eSGGCGNE : ACUN MCVN : ' + JSON.stringify(NINIGGeS_MCVNGGDIWR_1);
    }
    var VNWM_5 = VNWM_2[EQWY_0]['VNWY_VNWM'];
    return { IOYCGGNVRJ_DIWR: VNWM_2[EQWY_0], VNWY_VNWM_1: VNWM_5, NVRJ_eSGGYYHA: VNWM_2[EQWY_0].eS_YYHA, YFGGeSIHGGDAGGPLGGeS: TRIG };
}
module.exports = eSGGCGNE;
