function vr_afoa_bqeo_rscs(bqeo_kp){
    var bqeo_1 = bqeo_kp.replace(/^\s+|\s+$/g, "");
    bqeo_1 = bqeo_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    return bqeo_1
}
module.exports=vr_afoa_bqeo_rscs