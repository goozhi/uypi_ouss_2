var AFOA=require('./AFOA_BX/AFOA_UJ')
function NVCM(IOWR_VYVYGGVNWM_1){
    var VNWM_4=[];
    for(FO_1 in IOWR_VYVYGGVNWM_1){
        var IOWR_VNWM_2=IOWR_VYVYGGVNWM_1[FO_1]
        var VNWM_3=IOWR_VNWM_2.map((RNSF_1, EQWY_1)=>{
            return '(0x'+RNSF_1.NVRJ_eSGGYYHA.replace(/\s/g,'')+"--"+RNSF_1.VNWY_VNWM_1.join(' ')+")--"+RNSF_1.NINIGGWU+AFOA.YP_VP(EQWY_1+1,3)+'--('+RNSF_1.NINIGGYJ.toFixed(Number(RNSF_1.NINIGGTRVN.replace(/.*\.(\d)/,'$1')))+' '+RNSF_1.NINIGGEYTR+'--'+RNSF_1.NINIGGUYPJ+')';
        })
        var VNWM_4=VNWM_4.concat(VNWM_3);
    }
    return VNWM_4;
    }
   
module.exports=NVCM;