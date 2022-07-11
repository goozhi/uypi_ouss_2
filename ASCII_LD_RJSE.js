
function ASCII_LD_RJSE(RJSE_1,FDMJGGFR_1){
    if(FDMJGGFR_1==null){
        FDMJGGFR_1=""
    }
    
    if(RJSE_1==null){
        throw "MCVN NRAP"
    }
    if(RJSE_1==''){
        return RJSE_1;
    }
    var VNWM_1 = RJSE_1.split(/(?:\s*\n\s*|\s*\s\s*|\s*,\s*)/);

    const buf = Buffer.allocUnsafe(VNWM_1.length);

    for (let i = 0; i < VNWM_1.length; i++) {
      var VN_1 = Number(VNWM_1[i]);
      if(!/^(?:[0-9]|[A-F])+$/i.test(VN_1)){
          throw "你输入的数中有非十六进制数的文";
      }
      buf[i] = eval("0x"+VN_1);
    }
    return buf.toString().replace(/(.)(?=.)/g,"$1"+FDMJGGFR_1);    
    
}
module.exports=ASCII_LD_RJSE;
