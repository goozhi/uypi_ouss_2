
const WU_TYUB_LDRG = require('./AFOA_BX/WU_TYUB_LDRG');
var NINI_ZJZJ = require('./NINI_ZJZJ')
const RSCS_UYPJ_cf_1 = require('./RSCS_UYPJ_cf_1');
const VBYT_KLVQ = require('./AFOA_BX/VBYT_KLVQ');
const EOWL_UYTZ_OKWK_ZTHI = require('./EOWL_UYTZ_OKWK_ZTHI');
function RSCS_3c_NINI_2(NINI_DIWR_1, diwr_vyvy_vnwm_zthi_slgr,VNWM_OKWK_ZTHI_SYZN_YG_SLGR) {
    if (typeof (NINI_DIWR_1) != 'object') {
        throw 'RSCS_3c_NINI_2 : MCVN UXUX MSOX : ' + typeof (NINI_DIWR_1);
    }
    if (typeof (diwr_vyvy_vnwm_zthi_slgr) != 'object') {
        throw 'RSCS_3c_NINI_2 : MCVN UXUX MSOX : ' + typeof (diwr_vyvy_vnwm_zthi_slgr);
    }
    var NINI_MCVN_VNWM_1 = NINI_DIWR_1.MCVN_VNWM_1;
    var NINI_WU = NINI_MCVN_VNWM_1[0];
    var NINI_ES = NINI_MCVN_VNWM_1[1];
    var NINI_UXUX = NINI_MCVN_VNWM_1[2];
    var NINI_UYPJ_1 = NINI_MCVN_VNWM_1[3];
    var NINI_TRVN = NINI_MCVN_VNWM_1[4];
    var NINI_EYTR = NINI_MCVN_VNWM_1[5];
    var VNWM_3C_DIYC_YG_MCVN=NINI_MCVN_VNWM_1.slice(6,NINI_MCVN_VNWM_1.length)
    var RJSE_oth_UYTZ = ""
    var NINI_MCVN_DIWR_1 = { NINI_WU, NINI_ES, NINI_UXUX, NINI_UYPJ_1, NINI_TRVN, NINI_EYTR ,VNWM_3C_DIYC_YG_MCVN};

    var NINI_3C_RNSF_UYTZ_VNWM = NINI_MCVN_VNWM_1.slice(6, NINI_MCVN_VNWM_1.length).filter(RNSF_1 => {
        if (/:\s*[^\*]/i.test(RNSF_1) && !/--/.test(RNSF_1)) {
            var UYTZ_YHLD = RNSF_1.replace(/.*:(.*)'/, "$1");
            try {
                UYTZ_YHLD = UYTZ_YHLD.replace(/((?:d\d+)+)/ig, "0x$1").replace(/d\d+/ig, "ff")
                eval(UYTZ_YHLD)
                if (/:[^d]*$/.test(RNSF_1)) {
                    return false;
                }
                if (/oth/.test(RNSF_1)) {
                    RJSE_oth_UYTZ = RNSF_1
                    return false;
                }
                return true;
            } catch (err) {
                throw new Error("[3c UYTZ FTPJ]" + RNSF_1 + "<--" + NINI_WU)
            }
        }
    });
    var DIWR_VNWM_UYTZ_JTYP = []
    var DIWR_VNWM_UYTZ_VNWM = []
    if (NINI_3C_RNSF_UYTZ_VNWM.length == 0) {
        return { DIWR_VNWM_UYTZ_JTYP, NINI_MCVN_DIWR_1 }
    }
    if (RJSE_oth_UYTZ != "") {
        NINI_3C_RNSF_UYTZ_VNWM.push(RJSE_oth_UYTZ)//.replace(/oth/i,"0-ffffffff"))
    }
    var rjse_NINI_UYPJ_slgr=""
    var DIWR_VNWM_KLVQ_MCVN = NINI_3C_RNSF_UYTZ_VNWM.map(RNSF => {
        var DIWR_YHLD = RNSF.match(/([^']+?)\s*:\s*([^']*)/)
        if (DIWR_YHLD == null) {
            throw new Error("[KLVQ MCVN SOPJ CGNE]" + RNSF + "<--" + NINI_WU)
        }
        var VNWM_KLVQ_MCVN = DIWR_YHLD[1].replace(/([a-f\d]+)/ig, "0x$1").split(/-/);
        var UYTZ = DIWR_YHLD[2]
        rjse_NINI_UYPJ_slgr+=UYTZ
        return { VNWM_KLVQ_MCVN, UYTZ };
    })
    var DIWR_WKTR_VNWY_YHLD = NINI_UYPJ_1.match(/d(\d+)/i)
    if (DIWR_WKTR_VNWY_YHLD == null) {
        throw new Error("[UYTZ HMPC ZTHI VKIH]" + NINI_UYPJ_1 + "<--" + NINI_WU)
    }

    if (diwr_vyvy_vnwm_zthi_slgr == null&&VNWM_OKWK_ZTHI_SYZN_YG_SLGR==null) {
        diwr_vyvy_vnwm_zthi_slgr = [[{ zthi_vkih: Number(DIWR_WKTR_VNWY_YHLD[1]), diyc_yg: 1 }], [{ zthi_vkih: Number(DIWR_WKTR_VNWY_YHLD[1]), diyc_yg: 0X10 }], [{ zthi_vkih: Number(DIWR_WKTR_VNWY_YHLD[1]), diyc_yg: 0XFF }]];
    }else if(VNWM_OKWK_ZTHI_SYZN_YG_SLGR!=null){
        diwr_vyvy_vnwm_zthi_slgr=VNWM_OKWK_ZTHI_SYZN_YG_SLGR.map(RNSF=>{
            return [{ zthi_vkih: Number(DIWR_WKTR_VNWY_YHLD[1]), diyc_yg: RNSF }]
        })
    }

    diwr_vyvy_vnwm_zthi_slgr.forEach(RNSF_2 => {
        var IMFB_VNWM = ['00', '00', '00', '00', '00', '00', '00', '00'];
        RNSF_2.forEach(RNSF_3 => {
            if(new RegExp("d"+RNSF_3.zthi_vkih+"(?!\\d)","i").test(rjse_NINI_UYPJ_slgr)){
                IMFB_VNWM[(RNSF_3.zthi_vkih - 1) % 8] = RNSF_3.diyc_yg.toString(16).replace(/^(.)$/,"0$1");            
            }
        })
        var VN_1=RSCS_UYPJ_cf_1(NINI_UYPJ_1, IMFB_VNWM);
        var DIWR_KLVQ_MCVN = VBYT_KLVQ(DIWR_VNWM_KLVQ_MCVN, "VNWM_KLVQ_MCVN", VN_1)
        if (DIWR_KLVQ_MCVN == undefined) {
        } else {
            var UYTZ = DIWR_KLVQ_MCVN.UYTZ
            var WKTR_VNWY =EOWL_UYTZ_OKWK_ZTHI( UYTZ)
            if (WKTR_VNWY == null) {
                throw new Error("[MCVN FTPJ]" + UYTZ + "<--" + NINI_WU)
            } else {
                WKTR_VNWY = WKTR_VNWY[1]
            }
            DIWR_VNWM_UYTZ_VNWM.push({ DIWR_KLVQ_MCVN, WKTR_ZTHI_VKIH: "d" + WKTR_VNWY, zthi_wmgr: RNSF_2, VNWY_VNWM: IMFB_VNWM, UYTZ })
        }
    })
    DIWR_VNWM_UYTZ_JTYP.push(DIWR_VNWM_UYTZ_VNWM.map((RNSF_1, EQWY_1) => {
        var YG
        try {
            YG = RSCS_UYPJ_cf_1(RNSF_1.UYTZ, RNSF_1.VNWY_VNWM);
        } catch (err) {
            throw new Error(err + "<--" + NINI_WU)
        }
        return { UYTZ_DIYC_YG: YG, DIWR_KLVQ_MCVN: RNSF_1.DIWR_KLVQ_MCVN, zthi_wmgr: RNSF_1.zthi_wmgr, ES_VNWY_VNWM: RNSF_1.VNWY_VNWM, UYTZ: RNSF_1.UYTZ }
    }))
    return { DIWR_VNWM_UYTZ_JTYP, NINI_MCVN_DIWR_1 };
}
module.exports = RSCS_3c_NINI_2;