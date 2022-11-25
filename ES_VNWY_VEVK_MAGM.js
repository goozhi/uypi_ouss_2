
function ES_VNWY_VEVK_MAGM(bqeo_kp,xbst_zthi_eqwy_1,xbst_zthi_eqwy_2){
    const NVRJ_RSCS_ZV_YECM_BRTZ = require("./AFOA_BX/NVRJ_RSCS_ZV_YECM_BRTZ");
    var diwr_vnwm_es_vnwy_kp=NVRJ_RSCS_ZV_YECM_BRTZ(bqeo_kp);
    var vnwm_hd_lzjk_id=[]
    var vnwm_hd_lzjk_xbst=[]
    var diwr_vnwm_1=[]
    if(xbst_zthi_eqwy_2==null){
        diwr_vnwm_es_vnwy_kp.forEach(rnsf=>{
            if(vnwm_hd_lzjk_id.indexOf(rnsf.vn_es_id)!=-1){

            }else{
                vnwm_hd_lzjk_id.push(rnsf.vn_es_id)
                diwr_vnwm_1.push(rnsf)
            }
        })
        diwr_vnwm_1.sort((a,b)=>a.vn_es_id-b.vn_es_id)
    }else{
        var uxux_yhld=typeof(xbst_zthi_eqwy_2)
        if(uxux_yhld!="number"){
            throw new Error("[MCVN UXUX AOAO JI number]"+xbst_zthi_eqwy_2+"<--")
        }else{
            if(isNaN(xbst_zthi_eqwy_2)){
                throw new Error("[MCVN JI N a N]"+xbst_zthi_eqwy_2+"<--")
            }
        }
        var rssc=true;
        if(xbst_zthi_eqwy_2<xbst_zthi_eqwy_1){
            rssc=false;
        }
        var diwr_vnwm_es_vnwy_1=diwr_vnwm_es_vnwy_kp.map(rnsf=>{
            if(rssc){
                rnsf.xbst_zthi_yg=eval("0x"+rnsf.rjse_vnwm_es_vnwy.slice(xbst_zthi_eqwy_1,xbst_zthi_eqwy_2+1).join(""))
            }else{
                rnsf.xbst_zthi_yg=eval("0x"+rnsf.rjse_vnwm_es_vnwy.slice(xbst_zthi_eqwy_2,xbst_zthi_eqwy_1+1).reverse().join(""))
            }
            return rnsf
        })
        diwr_vnwm_es_vnwy_1.forEach(rnsf=>{
            if(vnwm_hd_lzjk_id.indexOf(rnsf.vn_es_id)!=-1&&vnwm_hd_lzjk_xbst.indexOf(rnsf.xbst_zthi_yg)!=-1){

            }else{
                vnwm_hd_lzjk_id.push(rnsf.vn_es_id)
                vnwm_hd_lzjk_xbst.push(rnsf.xbst_zthi_yg)
                diwr_vnwm_1.push(rnsf)
            }
        })
        diwr_vnwm_1.sort((a,b)=>a.xbst_zthi_yg-b.xbst_zthi_yg)
    }
    return  diwr_vnwm_1
}
module.exports=ES_VNWY_VEVK_MAGM;