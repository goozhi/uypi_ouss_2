const fs = require('fs');
const path = require('path');
const uz_ms = require('../AFOA_BX/uz_ms');

function nikc_ld_diwr_vkey_os(folderPath) {
    const diwr_nikc = {};
    diwr_nikc.yxna_yowr = folderPath
    const vnwm_nikc_wu = fs.readdirSync(folderPath);
    vnwm_nikc_wu.forEach(rn1 => {
        if (/^\./.test(rn1)) {
            return
        }
        const nikc_bnll = path.join(folderPath, rn1);
        const stats = fs.statSync(nikc_bnll);
        if (stats.isDirectory()) {
            diwr_nikc[rn1] = nikc_ld_diwr_vkey_os(nikc_bnll);
        } else {
            if (/^config\.json$/i.test(rn1)) {
                try {
                    delete (require.cache[require.resolve(nikc_bnll)]);
                } catch (err) {

                }

                try {
                    diwr_nikc.neig = require(nikc_bnll)
                    if(/\ufffd/.test(JSON.stringify(diwr_nikc.neig))){
                        uz_ms('csrf-aoao ji utf8 vkvy-'+nikc_bnll)
                    }
                } catch (err) {
                    err.message = nikc_bnll + " " + err.message
                    throw err
                }
            } else if (/\.(?:vr|peng|md$)/i.test(rn1)) {
                if (!diwr_nikc.vnwm_vnwy) {
                    diwr_nikc.vnwm_vnwy = []
                }
                diwr_nikc.vnwm_vnwy.push({ bqeo: fs.readFileSync(nikc_bnll).toString().replace(/\r/g,""), zkrs: rn1, stats })
            } else {

            }


            // diwr_nikc[rn1].vnwy = fs.readSync(nikc_bnll)
        }
    });
    return diwr_nikc
}
module.exports = nikc_ld_diwr_vkey_os