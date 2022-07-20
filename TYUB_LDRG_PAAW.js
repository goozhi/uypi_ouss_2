function TYUB_LDRG_PAAW(VN_SLGR_RJSE,CQPI_FR_1,CQPI_FR_2){
    var TYUB_LDRG = require('./TYUB_LDRG');
    var VNWM_1=VN_SLGR_RJSE.split(/\s+/);
    var VNWM_2=VNWM_1.map(RNSF=>{
        return TYUB_LDRG(RNSF,CQPI_FR_1,CQPI_FR_2)        
    })
    return VNWM_2.join('\n');
}
module.exports = TYUB_LDRG_PAAW;