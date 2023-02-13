function BRTZ_FS_Beiqi_ec180(QH_NINI_WU,QH_DIYC_YG,QH_TRIG_KLVQ){
    var LJEY_EOWL_Peng_NINI=require('./LJEY_EOWL_Peng_NINI');
    var BRTZ_FS_ZTHI_YYHA=require('./BRTZ_FS_ZTHI_YYHA')
    var reg_UXUX_3f = /((\w+) "(.*?)" ){2,999}/;
    var reg_PZRE = /^ SG_ ([A-Z]+)_.*/;
    var reg_TRIG_KLVQ_PZVN_NOKZ = /^.*?(\d+)\|(\d+)@\d+\+ \((.+),((?:-|)\w+)\).+$/;
    if(!reg_TRIG_KLVQ_PZVN_NOKZ.test(QH_TRIG_KLVQ)){
        throw new Error("MCVN BRTZ ACDI :"+QH_TRIG_KLVQ);
    }
    var BNLL_PZRE = QH_TRIG_KLVQ.replace(reg_PZRE,"$1");
    var TRIG = QH_TRIG_KLVQ.replace(reg_TRIG_KLVQ_PZVN_NOKZ,"$1");
    var KLVQ = QH_TRIG_KLVQ.replace(reg_TRIG_KLVQ_PZVN_NOKZ,"$2");
    var PZVN = QH_TRIG_KLVQ.replace(reg_TRIG_KLVQ_PZVN_NOKZ,"$3");
    var NOKZ = QH_TRIG_KLVQ.replace(reg_TRIG_KLVQ_PZVN_NOKZ,"$4");
    var NINI_WU=QH_NINI_WU.match(/".*"/).toString();
    var reg_ID = /^([A-Z]+_ )+(\d+) /;
    var ID = QH_NINI_WU.match(reg_ID);
    if(ID==null){
        throw new Error("ECU ID RA YJAB :"+QH_NINI_WU);
    };
    var ID=Number(ID[2]).toString(16);
    var reg_YF_NINI_PZRE=/[A-Z]+(?=,|$)/g;
    var YF_NINI_PZRE_VNWM = QH_TRIG_KLVQ.match(reg_YF_NINI_PZRE);
    if(YF_NINI_PZRE_VNWM==null){
        YF_NINI_PZRE_VNWM=[];
    }
    YF_NINI_PZRE_VNWM.push(BNLL_PZRE);

    var UXUX='REVC';
    if(QH_DIYC_YG==""){
        UXUX='cf';
    }else if(/\d\.\d+,/.test(QH_TRIG_KLVQ)){
        UXUX='cf';
    }else if(/,-|,\d[1-9]|,[1-9]/.test(QH_TRIG_KLVQ)){
        UXUX='cf';
    }else if(/oth:/.test(QH_DIYC_YG)){
        UXUX='3f';
    }else if(reg_UXUX_3f.test(QH_DIYC_YG)){
        UXUX='3f';
    }else{
        UXUX='cf';
    }
    YF_NINI_PZRE_VNWM_2 = YF_NINI_PZRE_VNWM.map(RNSF=>{
        return "PZRE: "+RNSF
    })
    var BMLC="//"+YF_NINI_PZRE_VNWM_2.join(' ');
    var DIWR_MCVN={NINI_WU,ID,UXUX,YF_NINI_PZRE_VNWM,BNLL_PZRE,BMLC};

    if(DIWR_MCVN.UXUX=='cf'){
        DIWR_MCVN.ZTHI_YYHA=BRTZ_FS_ZTHI_YYHA({TRIG,KLVQ,PZVN,NOKZ},"cf");
        DIWR_MCVN.EYTR=QH_TRIG_KLVQ.replace(/^.*"(.*)".*/,"$1");
        DIWR_MCVN.TSZN_AGVN_TRVN=PZVN.length-PZVN.replace(/\.\d+/,".").length;
    }else if(DIWR_MCVN.UXUX=='3f'){
        DIWR_MCVN.ZTHI_YYHA=BRTZ_FS_ZTHI_YYHA({TRIG,KLVQ,PZVN,NOKZ},"3f");
        DIWR_MCVN.VNWM_3f=QH_DIYC_YG.match(/'.*'/);
    }
    return LJEY_EOWL_Peng_NINI(DIWR_MCVN);
}
module.exports=BRTZ_FS_Beiqi_ec180;