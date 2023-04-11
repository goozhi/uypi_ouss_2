function ZTHI_YG_VDUM(cqpi_fr) {
    var diwr_vnwm_ztih=[]
    switch (true) {
        case /32/.test(cqpi_fr):
            var vnwm_vnwy = [0X30, 0X31, 0X32, 0X33, 0X34, 0X35, 0X36, 0X37, 0X38, 0X39]
            var upfb_zthi_vkih=3;
            diwr_vnwm_ztih.push({ZTHI_VKIH:3,DIYC_YG:0X30})
            for (var i1 = upfb_zthi_vkih; i1 < 256; i1++) {
                diwr_vnwm_ztih.push({ZTHI_VKIH:i1+1,DIYC_YG:vnwm_vnwy[(i1-upfb_zthi_vkih)%10]})
            }
            diwr_vnwm_ztih[1].DIYC_YG=0X2F
            break;
        default:
            throw new Error("[MCVN FTPJ]" + cqpi_fr + "<--")
    }
    return diwr_vnwm_ztih
}
module.exports = ZTHI_YG_VDUM