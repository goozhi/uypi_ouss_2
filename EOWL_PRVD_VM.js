function EOWL_PRVD_VM(BRTZ) {//
    var EOWL_PRVD_VM_ZV_Motorola=require('./EOWL_PRVD_VM_ZV_Motorola');
    if (BRTZ == null) {
        throw new Error("MCVN NRAP");
    }
    switch (true) {
        case /^MOTOROLA$/i.test(BRTZ):
            return EOWL_PRVD_VM_ZV_Motorola();
        default:
            throw new Error("ACUN MCVN");
    }
}//
module.exports = EOWL_PRVD_VM;