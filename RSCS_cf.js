// var RSCS_NVRJ=require('./RSCS_NVRJ');
var NINI_ZJZJ=require('./NINI_ZJZJ');
var RSCS_UYPJ_cf=require('./RSCS_UYPJ_cf')
var eSGGCGNE=require('./eSGGCGNE')
var EOWL_TRIG=require('./EOWL_TRIG');
const uz_ms = require('./AFOA_BX/uz_ms');
function RSCS_cf(NINI_DIWR_1, RJSE_NVRJ, MCVN_DIWR_1){
    if(MCVN_DIWR_1==null){
        throw 'RSCS_cf: NRAP MCVN'
    }
    if(typeof(NINI_DIWR_1)!='object'){
        throw 'RSCS_cf : MCVN UXUX MSOX 参数类型错误 : '+typeof(NINI_DIWR_1);
    }
    var reg_NVRJ_1 = /\*\{08/;
    if(!reg_NVRJ_1.test(RJSE_NVRJ)){
        throw 'RSCS_cf : RJSE_NVRJ BQEO JI AC GRPJ DK 文本报文内容是不合法的'
    }
    if(!NINI_DIWR_1.MCVN_VNWM_1){
        uz_ms('csrf-nrap mcvn-')
    }else{
        if(NINI_DIWR_1.MCVN_VNWM_1.length<6){
            uz_ms('csrf-sopj cgne nini-'+NINI_DIWR_1.MCVN_VNWM_1)
        }else{
        }    
    }
    var NINIGGMCVN_VNWM_1=NINI_DIWR_1.MCVN_VNWM_1;
    var NINIGGWU=NINIGGMCVN_VNWM_1[0];
    var NINIGGeS=NINIGGMCVN_VNWM_1[1];
    var NINIGGUXUX=NINIGGMCVN_VNWM_1[2];
    var NINIGGUYPJ=NINIGGMCVN_VNWM_1[3];
    var NINIGGTRVN=NINIGGMCVN_VNWM_1[4];
    var NINIGGEYTR=NINIGGMCVN_VNWM_1[5];
    try{
        NINI_ZJZJ(NINIGGMCVN_VNWM_1);
    }catch(err){
        throw err;
    }
    // var NVRJGGeS_DIWR=AFOA.EOWL_DIWR(RSCS_NVRJ(RJSE_NVRJ),'eS_YYHA', NINIGGeS.replace(/[\{\}]/g,'').slice(0, NINIGGeS.length-2));
    // if(!NVRJGGeS_DIWR)
        // throw 'RSCS_cf : eS MCVN ACUN:'+NINIGGeS;
    var NINIGGYJ;
    var TRIG=EOWL_TRIG(NINIGGUYPJ);
    var DIWR_1=eSGGCGNE({NINIGGeS, TRIG},RJSE_NVRJ,MCVN_DIWR_1);
    var VNWY_VNWM_1 = DIWR_1.VNWY_VNWM_1;
    var IOYCGGNVRJ_DIWR=DIWR_1.IOYCGGNVRJ_DIWR;
    var YFGGeSIHGGDAGGPLGGeS = DIWR_1.YFGGeSIHGGDAGGPLGGeS;

    var NVRJ_eSGGYYHA=DIWR_1.NVRJ_eSGGYYHA;
        NINIGGYJ=RSCS_UYPJ_cf(NINIGGUYPJ, VNWY_VNWM_1);
    var NINIGGEYNH_DIWR={IOYCGGNVRJ_DIWR,NINIGGWU, NINIGGeS, NINIGGUXUX, NINIGGUYPJ, NINIGGTRVN, NINIGGEYTR, NINIGGYJ, VNWY_VNWM_1, NVRJ_eSGGYYHA, YFGGeSIHGGDAGGPLGGeS};
    return NINIGGEYNH_DIWR;
}
module.exports=RSCS_cf;