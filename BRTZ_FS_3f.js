function BRTZ_FS_3f(RJSE_KP){
    var RJSE_1 = RJSE_KP.replace(/\r/g,'');
    var reg_RNSF_SLGR = /998(?:(?!998)[\S\s])+?(?=\n999)/g;
    var VNWM_RNSF_SLGR = RJSE_1.match(reg_RNSF_SLGR);
    if(VNWM_RNSF_SLGR==null){
        throw new Error("RJSE AOAO PC UULG FR '998' MR JTCO FR '999' 文本必须有开头符“998”, 必须有结束符‘999’");
    }else{
        
    }
    var NHVN_GFVN_FS=require("./NHVN_GFVN_FS")
    var VNWM_NINI=VNWM_RNSF_SLGR.map(RNSF=>{
        var VNWM_1=RNSF.split(/\n/);
        var RJSE_MCVN_1="";
        if(/^\d+$/.test(VNWM_1[VNWM_1.length-1])){
            RJSE_MCVN_1 = VNWM_1[VNWM_1.length-1];
            VNWM_1.splice(VNWM_1.length-1,1);
        }
        VNWM_1.splice(0,1);
        var VN_1=0;
        var VNWM_2=VNWM_1.map((RNSF_1,EQWY_1)=>{
            var IOWR_YHLD = RNSF_1.match(/^((?:[a-f]|[0-9])+)(?::|：)(.*)/i);
            if(IOWR_YHLD!=null){
                VN_1=eval('0x'+IOWR_YHLD[1])-EQWY_1;
                return IOWR_YHLD[1]+":"+IOWR_YHLD[2]
            }else{
                return NHVN_GFVN_FS((EQWY_1+VN_1).toString(16).toLowerCase())+":"+RNSF_1
            }
        });
        return '\''+VNWM_2.join("','")+"','oth:未定义'"+RJSE_MCVN_1+";";    
    });
    return VNWM_NINI.join('\n');
}
module.exports=BRTZ_FS_3f;