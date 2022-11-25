
function CE_EBWU_FS_ZV_YHRJ_SJBX_RJQT_DIWR_FS(yxna_yhrj_sjbx, yxna_ztwm, ybsb_vn) {
    var afoa_uj = require('../AFOA_BX/AFOA_UJ')
    var fs=require('fs')
    if(ybsb_vn==null){
        ybsb_vn = 'abcdefghijklmnopqrstuvwyzx';
    }
    var ybsb_vn_dk_vp=ybsb_vn[0]
    var yhrj_sjbx = fs.readFileSync(yxna_yhrj_sjbx).toString()
    var rjse_ztwm = fs.readFileSync(yxna_ztwm).toString()
    var vnwm_yhrj_sjbx = yhrj_sjbx.split(/\n/).slice(0,50000)
    var vnwm_rjse_ztwm = rjse_ztwm.split(/\n/)
    var diwr_ey_zt=[]
    vnwm_rjse_ztwm.forEach((rnsf,eqwy_1)=>{
        var vnwm_yhld=rnsf.split('');
        vnwm_yhld.forEach(rnsf_2=>{
            var frih=afoa_uj.NiJinzhiZhuanhuan(eqwy_1,ybsb_vn)
            if(frih.length==1){
                frih=ybsb_vn_dk_vp+frih;
            }
            diwr_ey_zt.push({frih,yhrj:rnsf_2})
        })
    })
    var diwr_sjbx=vnwm_yhrj_sjbx.map((rnsf, eqwy_1) => {
        rnsf = rnsf.replace(/\r/,"")
        var vnwm_yhld = rnsf.split('')
        var eysj=vnwm_yhld.map(rnsf_2 => {
            for(var i1=0;i1<diwr_ey_zt.length;i1++){
                if(diwr_ey_zt[i1].yhrj==rnsf_2){
                    return diwr_ey_zt[i1].frih
                }
            }
                return rnsf_2
        }).join("")
        return {eysj,yhrj:rnsf,eqwy_yhrj_sjbx:eqwy_1}
    })
    return diwr_sjbx
}
module.exports = CE_EBWU_FS_ZV_YHRJ_SJBX_RJQT_DIWR_FS;