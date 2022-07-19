function EOWL_data_VKIH_VNWM(){
var data_VNWM=[];
var VNWM_YHLD=[];
var VN_1=0;
for(var i1=0;i1<8;i1++){
    VNWM_YHLD.splice(0,VNWM_YHLD.length);
    for(var i2=VN_1;i2<VN_1+8;i2++){
        VNWM_YHLD.push(i2);
    }
    VN_1=i2;
    var RJSE_1=VNWM_YHLD.reverse().join(",")
    data_VNWM.push(RJSE_1.split(','));
}
return data_VNWM;

}
module.exports=EOWL_data_VKIH_VNWM;