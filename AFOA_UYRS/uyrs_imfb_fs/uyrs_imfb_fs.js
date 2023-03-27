const diwr_neig_zjzj = require("../../AFOA_BX/diwr_neig_zjzj")
const path = require('path')
const fs = require('fs')
const uz_ms = require("../../AFOA_BX/uz_ms")
function uyrs_imfb_fs(diwr_neig_kp = { nikc_uyrs: "", wydb: "nmky", diwr_zzzz_uyrs_zk_neig: {} }) {
    var vnwm_fo_1 = [
        'nikc_uyrs',
        'wydb',
        'diwr_zzzz_uyrs_zk_neig'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    var yxna_zk_neig = path.join(diwr_neig_kp.nikc_uyrs, 'project.json')
    var nikc_vscode = path.join(diwr_neig_kp.nikc_uyrs, '.vscode')

    if (fs.existsSync(yxna_zk_neig)) {
        uz_ms('csrf-yxna cd zznq-' + yxna_zk_neig)
    } else {
        if (diwr_neig_kp.diwr_zzzz_uyrs_zk_neig[diwr_neig_kp.wydb]) {
            fs.writeFileSync(yxna_zk_neig, JSON.stringify(diwr_neig_kp.diwr_zzzz_uyrs_zk_neig[diwr_neig_kp.wydb], null, 2))
            if (!fs.existsSync(nikc_vscode)) {
                fs.mkdirSync(nikc_vscode)
                var diwr_vscode = { "files.encoding": "utf8" }
                fs.writeFileSync(path.join(nikc_vscode, 'settings.json'), JSON.stringify(diwr_vscode, null, 2))
            }
            return 'project.json已写入' + yxna_zk_neig
        } else {
            uz_ms('csrf-wuzt ac zznq-' + diwr_neig_kp.wydb)
        }
    }

    throw diwr_neig_kp
}
module.exports = uyrs_imfb_fs