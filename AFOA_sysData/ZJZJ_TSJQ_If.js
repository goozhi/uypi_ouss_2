
function ZJZJ_TSJQ_If(VNWM_IF_TSJQ_KP) {
    var RJSE_MSOX="";
    var ZJZJ_TSJQ_If_EYNH = require('./ZJZJ_TSJQ_IF_EYNH')
    VNWM_IF_TSJQ_KP.forEach((RNSF)=>{
        RJSE_MSOX+=ZJZJ_TSJQ_If_EYNH(RNSF);
    })
    return RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_If;