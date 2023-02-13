
function NVCM_NINI_HQTB(DIWR_2) {
    var DIWR_1 = DIWR_2.NINI_MCVN_DIWR_1;
    var NINI_UXUX=DIWR_1.NINI_UXUX;
    if(NINI_UXUX.toLowerCase()=="3c"){
    var VN_AGVN_TRVN = DIWR_1.NINI_TRVN.replace(/.*\.(\d+).*/,"$1");

        var DIWR_VNWM_UYTZ_JTYP=DIWR_2.DIWR_VNWM_UYTZ_JTYP;
        var VNWM_YHLD=DIWR_VNWM_UYTZ_JTYP.map(RNSF=>{
            var VNWM_YHLD_2=RNSF.map(RNSF_2=>{
                return RNSF_2.UYTZ_STGN_MCVN.WKTR_ZTHI_VKIH + "=" + RNSF_2.UYTZ_STGN_MCVN.WKTR_ZTHI + "(" + RNSF_2.UYTZ_DIYC_YJ.toFixed(VN_AGVN_TRVN) + ")"+"["+RNSF_2.UYTZ_STGN_MCVN.DIWR_KLVQ_MCVN.VNWM_KLVQ_MCVN+"]"//+RNSF_2.UYTZ_STGN_MCVN.UYTZ;
            })
            return VNWM_YHLD_2.join(" , ")
        })
        return VNWM_YHLD.join(" , ")+ DIWR_1.NINI_EYTR+" "+DIWR_1.NINI_TRVN
    }else if(NINI_UXUX.toLowerCase()=='3f'){
        var NINI_3f_VNWM_MCVN=DIWR_2.NINI_3f_VNWM_MCVN;
        var VNWM_MCVN_1=NINI_3f_VNWM_MCVN.map(RNSF=>{
            return "'"+"("+RNSF.DIYC_KLVQ_ZV_YENH+")"+""+RNSF.BQEO+"'"
        })
        return VNWM_MCVN_1.join(',')
    }else if(NINI_UXUX.toLowerCase()=='16'){
        return DIWR_2.NINI_16_MCVN.map(rnsf=>{
            return rnsf.ZTHI_DIYC_YG
        }).join('')+";// "+DIWR_1.vnwm_NINI_16_mcvn_KP.join(',')+"--"+DIWR_2.NINI_16_MCVN.map(rnsf=>{
            return "d"+rnsf.ZTHI_VKIH+":"+rnsf.ZTHI_YG
        }).join(',')
    }else if(NINI_UXUX.toLowerCase()=='0a'){
        return DIWR_2.NINI_0a_MCVN.map(rnsf=>{
            return rnsf.ZTHI_DIYC_YG
        }).join('')+";// "+DIWR_1.vnwm_NINI_0a_mcvn_KP.join(',')+"--"+DIWR_2.NINI_0a_MCVN.map(rnsf=>{
            return "d"+rnsf.ZTHI_VKIH+":"+rnsf.ZTHI_YG
        }).join(',')
    }else if(NINI_UXUX.toLowerCase()=='10'){
        return DIWR_2.NINI_10_MCVN.map(rnsf=>{
            return rnsf.ZTHI_DIYC_YG
        }).join('')+";// "+DIWR_1.vnwm_NINI_10_mcvn_KP.join(',')+"--"+DIWR_2.NINI_10_MCVN.map(rnsf=>{
            return "d"+rnsf.ZTHI_VKIH+":"+rnsf.ZTHI_YG
        }).join(',')
    }
    var VN_AGVN_TRVN = DIWR_1.NINI_TRVN.replace(/.*\.(\d+).*/,"$1");
    var WKTR_VNWY = DIWR_1.WKTR_VNWY;
    var DIWR_VNWM_1 = DIWR_2.NINI_YJ_VNWM_1;
    var VNWM_1 = DIWR_VNWM_1.map(RNSF_1 => {
        return WKTR_VNWY + "=" + RNSF_1.WKTR_ZTHI + "(" + RNSF_1.UYTZ_IOYC_YJ.toFixed(VN_AGVN_TRVN) + ")";
    })
    var RJSE_1 = VNWM_1.join(" , ") + "; (" + DIWR_1.NINI_UYPJ + ")" + DIWR_1.NINI_EYTR+" "+DIWR_1.NINI_TRVN;
    var ZKRS_1 = RJSE_1;//DIWR_1.NINI_WU+":"+RJSE_1;
    return ZKRS_1;
}
module.exports=NVCM_NINI_HQTB;