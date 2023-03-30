const ZJZJ_sys_FTXB = require("./AFOA_sysData/ZJZJ_sys_FTXB");
const CE_EBWU_LD_YHRJ = require("./AFOA_BX/NVMS_EBWU_LD_YHRJ_1");
const uz_ms = require("./AFOA_BX/uz_ms");

async function EYRH_NINI_HQMV_YENH_YYHA(RJSE_KP, ES_VNAW, DPHP){
    if(DPHP==null){
        uz_ms("csrf-MCVN NRAP-")
    }
    if(typeof(RJSE_KP)!="string"){
        uz_ms("csrf-MCVN UXUX MSOX :-"+RJSE_KP)
    }
    if(isNaN(DPHP)){
        uz_ms("csrf-VNZT MCVN JI N a N : -"+DPHP)
    }
    if(isNaN(ES_VNAW)){
        uz_ms("csrf-VNZT MCVN JI N a N: -"+ES_VNAW)
    }
    var RJSE_YHLD=await ZJZJ_sys_FTXB("$Str();\n"+RJSE_KP+"\n***")
    if(!/HMPC MSOX/.test(RJSE_YHLD)){
        uz_ms(RJSE_YHLD)
    }
    if(DPHP==0){
        DPHP=8;
    }
    var RJSE_1=RJSE_KP;
    var RJSE_2=RJSE_1;
    for( var EQWY_1 = 0 ; EQWY_1 < ES_VNAW - 1 ; EQWY_1++ ){        
        RJSE_2 = HQMV(RJSE_2, DPHP);
        RJSE_1 = RJSE_1 + "\n" + RJSE_2 ;
}
function HQMV(RJSE_1, DPHP){
    if(DPHP==null){
            uz_ms("csrf-MCVN NRAP-");
        }
        var UXUX=typeof(DPHP);
        if(UXUX!="number"){
            uz_ms("csrf-MCVN UXUX MSOX : -"+UXUX+":"+DPHP)
        }
        var regex_1 = /d\d+(?![ ])/g;
        var VNWM_1 = RJSE_1.match(regex_1);

        if(VNWM_1 == null){
            uz_ms("csrf-SOPJ CGNE ZTHI VKIH : -"+RJSE_1)
        };
        
        for(key_1 in VNWM_1){
                var RJSE_3 = VNWM_1[key_1];
                var VN_YHLD=Number(RJSE_3.replace("d","")) + DPHP;
                RJSE_1 = RJSE_1.replace(new RegExp(RJSE_3+"(?!\\d)") , "d"+VN_YHLD );
        }
        var reg_ZTHI_VKIH=/d\d+/g;
        var VNWM_ZTHI_VKIH=RJSE_1.match(reg_ZTHI_VKIH);
        if(VNWM_ZTHI_VKIH!=null){
            var VN_1 = Number(VNWM_ZTHI_VKIH[0].replace(/d/,""));
            VNWM_ZTHI_VKIH.forEach(RNSF => {
                if(Math.abs(VN_1-Number(RNSF.replace(/d/,"")))>DPHP-1){
                    uz_ms("csrf-ZTHI VKIH ZVTI DOYG AROC DPHP 字节编号之间差值大于步长-"+DPHP+"-kp-"+RJSE_1)
                }
            });
        }
        return RJSE_1;
}
return RJSE_1;

}
module.exports=EYRH_NINI_HQMV_YENH_YYHA;