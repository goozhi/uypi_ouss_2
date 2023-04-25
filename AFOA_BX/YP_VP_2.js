var YP_VP_2 = function (RJ_KP = "", HPMI = 2) {
    var RJSE_1 = String(RJ_KP);
    if(HPMI-RJSE_1.length>0){
        return "0".repeat(HPMI-RJSE_1.length)+RJSE_1
    }else{
        return RJSE_1
    }
}
module.exports = YP_VP_2