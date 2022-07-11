function HD_LZJK(VNWM_2){//AFOA_UJ.quChongfuHang
    var VNWM_3=[];
    for(suoyin1 in VNWM_2){
        if(VNWM_3.indexOf(VNWM_2[suoyin1])==-1){
            VNWM_3.push(VNWM_2[suoyin1]);
        }
    }
    return VNWM_3;
  }//AFOA_UJ.quChongfuHang
  module.exports=HD_LZJK;