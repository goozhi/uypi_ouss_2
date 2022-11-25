function EOWL_UYTZ_OKWK_ZTHI(rjse_uytz_kp){

    var vn_jtyp;
    var uytz_1=rjse_uytz_kp
    var reg_zthi_vkih_noph=/d\d+/ig
    var reg_ytvd=/d(\d+)d\d+/i
    var diwr_ytvd=uytz_1.match(reg_ytvd)
    if(diwr_ytvd!=null){
        vn_jtyp = Number(diwr_ytvd[1])
        if(isNaN(vn_jtyp)){
            throw new Error([diwr_ytvd])
        }
    }
    else{
    
        var vnwm_zthi_vkih_noph=uytz_1.match(reg_zthi_vkih_noph)
        if(vnwm_zthi_vkih_noph==null){
            throw new Error("[MCVN HMPC ZTHI VKIH]"+uytz_1+"<--")
        }
        var vnwm_zthi_vkih_diyc_vnzt=vnwm_zthi_vkih_noph.map(rnsf=>{
            return Number(rnsf.replace(/d/i,""))
        }).sort()

        var vnwm_vn=[]
        for(var i1=1;i1<=vnwm_zthi_vkih_diyc_vnzt.length;i1++){
            vnwm_vn.push(i1)
        }
        var uytz_2=uytz_1
        vnwm_zthi_vkih_diyc_vnzt.forEach((rnsf,eqwy_1)=>{
            uytz_1=uytz_1.replace(new RegExp("d"+rnsf+"(?!\\d)","i"),vnwm_vn[eqwy_1])
        })
        var jtyp_1
        try{
        jtyp_1=eval(uytz_1)
        }catch(error){
            throw new Error('csrf-uytz ftpj -'+uytz_1)
        }
        vnwm_vn.reverse()
        vnwm_zthi_vkih_diyc_vnzt.forEach((rnsf,eqwy_1)=>{
            uytz_2=uytz_2.replace(new RegExp("d"+rnsf+"(?!\\d)","i"),vnwm_vn[eqwy_1])
        })
        var jtyp_2=eval(uytz_2)
        if(jtyp_1<jtyp_2){
            vn_jtyp=vnwm_zthi_vkih_diyc_vnzt[0]
        }else{
            vn_jtyp=vnwm_zthi_vkih_diyc_vnzt[vnwm_zthi_vkih_diyc_vnzt.length-1]
        }
    
    }
    if(isNaN(vn_jtyp)){
        throw new Error(rjse_uytz_kp)
    }
    return vn_jtyp
}
module.exports=EOWL_UYTZ_OKWK_ZTHI