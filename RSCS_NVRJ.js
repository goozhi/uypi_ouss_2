var AG_LD_AR=require('./AFOA_BX/AG_LD_AR')
function RSCS_NVRJ(RJSE_KP){
    if(typeof(RJSE_KP)!='string'){
        throw 'RSCS_NVRJ : MCVN UXUX MSOX';
    }
    var VNWM_1=RJSE_KP.split(/\n/);
    var reg_ZTHI_1 = /\w{2}(?= |\})/g;
    var VNWM_2=VNWM_1.map((RNSF_1)=>{
        if(!reg_ZTHI_1.test(RNSF_1)){
            throw "含有不是发码的行"
        }
        var eS_ZTHI_VNWM=RNSF_1.match(reg_ZTHI_1);
        if(eS_ZTHI_VNWM.length!=13){
            throw "RSCS_NVRJ : 发码文本字节长度错误 VOVY RJSE ZTHI HPMI MSOX:"+RNSF_1;
        }
        var eS_YYHA_VNWM=eS_ZTHI_VNWM.slice(1,5);
        var eSGGLLAO;
        var TRIG;
        if(eS_YYHA_VNWM[0]=='00'){
            eSGGLLAO='00 00 02'
            eSGGUDAO='7F FF'
            TRIG=2;
        }else{
            eSGGLLAO='01 00 02'
            eSGGUDAO='1F FF FF FF'
            TRIG=0;
        }
        var VNWY_VNWM=eS_ZTHI_VNWM.slice(5);
        var eS_MCVN=eSGGLLAO+' '+eS_YYHA_VNWM.slice(TRIG).join(' ')+' '+eSGGUDAO;
        var eS_YYHA=AG_LD_AR(eS_YYHA_VNWM.join(' '));
        var VNWY=AG_LD_AR(VNWY_VNWM.join(' '));
        return {eS_MCVN, eS_YYHA_VNWM, VNWY_VNWM, VNWY,eS_YYHA, eS_ZTHI_VNWM};
    })
    return VNWM_2;
}
module.exports=RSCS_NVRJ;