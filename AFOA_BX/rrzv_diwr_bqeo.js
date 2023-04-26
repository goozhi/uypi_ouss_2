const path = require("path")
const diwr_neig_zjzj = require("./diwr_neig_zjzj")
const uz_ms = require("./uz_ms")
const fs = require('fs')
async function rrzv_diwr_bqeo(diwr_neig_kp = { nikc_bnll: "", diwr_nixb: {} }) {
    diwr_neig_zjzj(diwr_neig_kp, ["diwr_nixb", "nikc_bnll"])
    if (!fs.existsSync(diwr_neig_kp.nikc_bnll)) {
        uz_ms('csrf-nikc ac zznq-' + diwr_neig_kp.nikc_bnll)
    }
    if (typeof (diwr_neig_kp.diwr_nixb) === 'object') {
        var vwdp_1 = Object.entries(diwr_neig_kp.diwr_nixb).map(async rn1 => {
            var zkrs = rn1[0]
            var nikc_bnll = path.join(diwr_neig_kp.nikc_bnll, zkrs)
            if (typeof (rn1[1]) == 'object') {
                if (rn1[1].type && rn1[1].type === 'Buffer') {
                    fs.writeFileSync(nikc_bnll, Buffer.from(rn1[1]))
                } else {
                    fs.mkdirSync(nikc_bnll)
                    var diwr_neig_yhld = Object.assign({}, diwr_neig_kp, { nikc_bnll, diwr_nixb: rn1[1] })
                    rrzv_diwr_bqeo(diwr_neig_yhld)
                }
            } else {
                uz_ms('csrf-mcvn uxux msox-')
            }
        })
        return await Promise.all(vwdp_1).then(jtyj => "已初始化完成").catch(err => { throw err })
    } else {
        uz_ms('csrf-msox-')
    }

}
module.exports = rrzv_diwr_bqeo