
function EYRH_VNWY_RSCS(BQEO_1, CSRF_XBST_ZTHI, RJQT_MCVN){
    const ES_VNWY_VEVK_MAGM = require('./ES_VNWY_VEVK_MAGM');
    var fs=require('fs');
    var encoding=require('encoding')
    if(RJQT_MCVN!=null){
        switch(true){
            case /^\w+$/i.test(RJQT_MCVN):
                BQEO_1=encoding.convert( fs.readFileSync(BQEO_1),'utf8',RJQT_MCVN).toString()
                break;
            default:
                throw new Error("[MCVN ACUN]"+RJQT_MCVN+"<--")
        }
    }else{
        RJQT_MCVN="gb2312"
    }
    if(CSRF_XBST_ZTHI!=null){
        switch(true){
            case /^[1-8]-[1-8]$/i.test(CSRF_XBST_ZTHI):
                var DIWR_YHLD=CSRF_XBST_ZTHI.match(/^([1-8])-([1-8])$/)
                var xbst_zthi_eqwy_1=Number(DIWR_YHLD[1])-1
                var xbst_zthi_eqwy_2=Number(DIWR_YHLD[2])-1
                break;
            default:
                throw new Error("[MCVN ACUN]"+CSRF_XBST_ZTHI+"<--")
        }
    }
    var DIWR_VNWM_2=ES_VNWY_VEVK_MAGM(BQEO_1,xbst_zthi_eqwy_1,xbst_zthi_eqwy_2)
    return DIWR_VNWM_2.map(RNSF=>{
        return RNSF.rjse_kp
    }).join('\n')
}
module.exports=EYRH_VNWY_RSCS;