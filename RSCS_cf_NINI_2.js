
const EOWL_UYTZ_OKWK_ZTHI = require('./EOWL_UYTZ_OKWK_ZTHI');
var NINI_ZJZJ = require('./NINI_ZJZJ')
var RSCS_UYPJ_cf = require('./RSCS_UYPJ_cf')

function RSCS_cf_NINI_2(NINI_DIWR_1,diwr_vyvy_vnwm_zthi,VNWM_OKWK_ZTHI_SYZN_YG_SLGR) {
    if (typeof (NINI_DIWR_1) != 'object') {
        throw 'RSCS_cf_NINI_2 : MCVN UXUX MSOX : ' + typeof (NINI_DIWR_1);
    }
    var NINI_MCVN_VNWM_1 = NINI_DIWR_1.MCVN_VNWM_1;
    var NINI_WU = NINI_MCVN_VNWM_1[0];
    var NINI_eS = NINI_MCVN_VNWM_1[1];
    var NINI_UXUX = NINI_MCVN_VNWM_1[2];
    var NINI_UYPJ = NINI_MCVN_VNWM_1[3];
    var NINI_TRVN = NINI_MCVN_VNWM_1[4];
    var NINI_EYTR = NINI_MCVN_VNWM_1[5];
    var WKTR_VNWY = EOWL_UYTZ_OKWK_ZTHI(NINI_UYPJ)
    if(isNaN(WKTR_VNWY)){
        throw new Error("[EOWL YG LH NaN]"+NINI_UYPJ+"<--")
    }
    var NINI_MCVN_DIWR_1 = { WKTR_VNWY, NINI_WU, NINI_eS, NINI_UXUX, NINI_UYPJ, NINI_TRVN, NINI_EYTR };
    if (WKTR_VNWY == null) {
        throw "UYPJ TY HMPC YYHA VKIH 算法里没有地址编号:" + NINI_UYPJ;
    }
    try {
        NINI_ZJZJ(NINI_MCVN_VNWM_1);
    } catch (err) {
        throw err;
    }
    if(diwr_vyvy_vnwm_zthi==null&&VNWM_OKWK_ZTHI_SYZN_YG_SLGR==null){
        diwr_vyvy_vnwm_zthi = [[{zthi_vkih:Number(WKTR_VNWY), diyc_yg:0X1}],[{zthi_vkih:Number(WKTR_VNWY), diyc_yg:0X10}],[{zthi_vkih:Number(WKTR_VNWY), diyc_yg:0XFF}]];
    }else if(VNWM_OKWK_ZTHI_SYZN_YG_SLGR!=null){
        diwr_vyvy_vnwm_zthi=VNWM_OKWK_ZTHI_SYZN_YG_SLGR.map(RNSF=>{
            return [{zthi_vkih:Number(WKTR_VNWY), diyc_yg:RNSF}]
        })
    }
    else{
        var UXUX_YHLD=typeof(diwr_vyvy_vnwm_zthi)
        if(UXUX_YHLD!="object"){
            throw new Error('MCVN UXUX MSOX, AOAO JI object:'+UXUX_YHLD)
        }
    }
    var iowr_vnwm_es = diwr_vyvy_vnwm_zthi.map(RNSF_1 => {
        var IMFB_VNWM_1 = ['00', '00', '00', '00', '00', '00', '00', '00'];
        RNSF_1.forEach(rnsf_2 => {
            if(new RegExp("d"+rnsf_2.zthi_vkih+"(?!\\d)","i").test(NINI_UYPJ)){
                IMFB_VNWM_1[(rnsf_2.zthi_vkih - 1) % 8] = rnsf_2.diyc_yg.toString(16).replace(/^(.)$/,"0$1");            
            }
        });
        return {vnwm_ey_es_vnwy:IMFB_VNWM_1,zthi_wmgr:RNSF_1};
    })
    var NINI_yg_VNWM_1 = iowr_vnwm_es.map((RNSF_1, EQWY_1) => {
        var yg = RSCS_UYPJ_cf(NINI_UYPJ, RNSF_1.vnwm_ey_es_vnwy);
        return { vnwm_ey_es_vnwy:RNSF_1.vnwm_ey_es_vnwy,zthi_wmgr: RNSF_1.zthi_wmgr, uytz_diyc_yg: yg }
    })
    return { NINI_yg_VNWM_1, NINI_MCVN_DIWR_1 };
    // var NINI_EYNH_DIWR={IOYC_NVRJ_DIWR,NINI_WU, NINI_eS, NINI_UXUX, NINI_UYPJ, NINI_TRVN, NINI_EYTR, NINI_YJ, VNWY_VNWM_1, NVRJ_eS_YYHA, YF_eSIH_DA_PL_eS};
    // return NINI_EYNH_DIWR;
}
module.exports = RSCS_cf_NINI_2;