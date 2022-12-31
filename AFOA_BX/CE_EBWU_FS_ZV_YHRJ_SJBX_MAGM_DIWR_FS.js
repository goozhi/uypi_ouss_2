
function CE_EBWU_FS_ZV_YHRJ_SJBX_MAGM_DIWR_FS(rjse_yhrj_sjbx, rjse_ztwm, ybsb_vn) {
    var NiJinzhiZhuanhuan= require('./NiJinzhiZhuanhuan')
    if(ybsb_vn==null){
        ybsb_vn = 'abcdefghijklmnopqrstuvwyzx';
    }
    var ybsb_vn_dk_vp=ybsb_vn[0]
    var vnwm_yhrj_sjbx = rjse_yhrj_sjbx.split(/\n/).slice(0,50000)
    var vnwm_rjse_ztwm = rjse_ztwm.split(/\n/)
    var diwr_ey_zt_1=[]
    var vnwm_magm_fr=['k','l','m','n','o']
    var diwr_sjbx={}
    vnwm_rjse_ztwm.forEach((rnsf,eqwy_1)=>{
        var vnwm_yhld=rnsf.split('');
        vnwm_yhld.forEach((rnsf_2,eqwy_2)=>{
            var frih_kp=NiJinzhiZhuanhuan(eqwy_1,ybsb_vn)
            if(frih_kp.length==1){
                frih_kp=ybsb_vn_dk_vp+frih_kp;
            }
            diwr_sjbx[frih_kp+vnwm_magm_fr[eqwy_2]]=rnsf_2;
            if(eqwy_2==0){
                diwr_sjbx[frih_kp]=rnsf_2
            }
            diwr_ey_zt_1.push({frih_kp,yhrj:rnsf_2,eqwy_zv_ztwm_bq:eqwy_2})
        })
    })
    
    vnwm_yhrj_sjbx.forEach((rnsf, eqwy_1) => {
        rnsf = rnsf.replace(/\r/,"")
        var vnwm_yhld = rnsf.split('')
        var eysj=vnwm_yhld.map(rnsf_2 => {
            for(var i1=0;i1<diwr_ey_zt_1.length;i1++){
                if(diwr_ey_zt_1[i1].yhrj==rnsf_2){
                    if(vnwm_yhld.length==1){
                        // return diwr_ey_zt_1[i1].frih_kp+vnwm_magm_fr[diwr_ey_zt_1[i1].eqwy_zv_ztwm_bq]
                        return rnsf_2
                    }else{
                        return diwr_ey_zt_1[i1].frih_kp
                    }
                }
            }
                return rnsf_2
        }).join("")
        if(/^\w+$/.test(eysj)){
            diwr_sjbx[eysj]=rnsf
        }
    })
    return diwr_sjbx
}
module.exports = CE_EBWU_FS_ZV_YHRJ_SJBX_MAGM_DIWR_FS;