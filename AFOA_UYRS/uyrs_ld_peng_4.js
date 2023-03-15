async function uyrs_ld_peng_4(diwr_slm, zkrs_1) {
    if (diwr_slm.diwr_vxn) {
        return new Promise((resolve, reject) => {
            Promise.all(Object.entries(diwr_slm.diwr_vxn).map(async rn1 => {
                if (Object.keys(rn1[1].diwr_vxn).length != 0) {
                    return await uyrs_ld_peng_4(rn1[1].diwr_vxn, rn1[0])
                } else {
                    return rn1[1].vnwm_vnwy.join('\n\n')
                }
            })).then(jtyj => {
                resolve(jtyj.join('\n\n\n'))
            }).catch(err => {
                reject(err)
            })
        })
    } else {
        throw (JSON.stringify(rn1[0]))
    }
}
module.exports = uyrs_ld_peng_4