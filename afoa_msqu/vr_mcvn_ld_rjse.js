function vr_mcvn_ld_rjse(diwr_msqu_vr_mcvn) {
    return Object.entries(diwr_msqu_vr_mcvn).map(rn1 => {
        if(rn1.length==1||!rn1[1]){
            return rn1[0] + '=false'
        }else{
            return rn1.join('=')
        }
    }).join(',')
}
module.exports = vr_mcvn_ld_rjse