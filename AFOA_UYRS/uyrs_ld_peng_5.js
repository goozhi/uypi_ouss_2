async function uyrs_ld_peng_5(diwr_slm, zkrs_1) {
    var vnwm_fo_1 = Object.entries(diwr_slm).map(rn1 => {
        return rn1[0]
    })
    var vnwm_ljey = vnwm_fo_1.filter(rn1 => !/neig|vnwm_vnwy/.test(rn1))
    if(vnwm_ljey.length!=0){
        var vwdp_vnwm = vnwm_ljey.map(async rn1 => {
            return new Promise((resolve, reject) => {
                Promise.all([uyrs_ld_peng_5(diwr_slm[rn1])]).then(jtyj=>{
                    resolve(jtyj[0])
                }).catch(err=>{
                    reject(err)
                })
            })
        })
        return new Promise((resolve, reject) => {
            Promise.all(vwdp_vnwm).then(jtyj => {
                resolve(jtyj.join('\n\n'))
            }).catch(err => {
                reject(err)
            })
        })        
    }else{
        if(diwr_slm.vnwm_vnwy){
            return 999
        }else{
            return JSON.stringify(diwr_slm)
        }
    }
}
module.exports = uyrs_ld_peng_5