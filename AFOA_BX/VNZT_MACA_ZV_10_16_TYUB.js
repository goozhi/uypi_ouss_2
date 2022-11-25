const VNZT_MACA_ZV_10_TYUB = require("./VNZT_MACA_ZV_10_TYUB");
const VNZT_MACA_ZV_16_TYUB = require("./VNZT_MACA_ZV_16_TYUB");

function VNZT_MACA_ZV_10_16_TYUB(RJSE_KP,DPHP,TYUB_FR){
    if(Number(TYUB_FR)==16){
        return VNZT_MACA_ZV_16_TYUB(RJSE_KP,DPHP)
    }else{
        return VNZT_MACA_ZV_10_TYUB(RJSE_KP,DPHP)
    }
}
module.exports=VNZT_MACA_ZV_10_16_TYUB;