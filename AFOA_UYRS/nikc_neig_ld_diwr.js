const fs = require('fs');
const path = require('path');
const uz_ms = require('../AFOA_BX/uz_ms');

function nikc_neig_ld_diwr(folderPath, diwr_neig_kp = { gkqj_hd_yowr_yxna: false }) {
    const diwr_nikc = {};
    if (!diwr_neig_kp.gkqj_hd_yowr_yxna) {
        diwr_nikc.实际路径 = folderPath
    }
    const vnwm_nikc_wu = fs.readdirSync(folderPath);
    vnwm_nikc_wu.forEach(rn1 => {
        if (/^\./.test(rn1)) {
            return
        }
        const nikc_bnll = path.join(folderPath, rn1);
        const stats = fs.statSync(nikc_bnll);
        if (stats.isDirectory()) {
            diwr_nikc[rn1] = nikc_neig_ld_diwr(nikc_bnll, diwr_neig_kp);
        } else {
            if (/^config\.json$/i.test(rn1)) {
                try {
                    delete (require.cache[require.resolve(nikc_bnll)]);
                } catch (err) {

                }

                try {
                    diwr_nikc.config = require(nikc_bnll)
                } catch (err) {
                    err.message = nikc_bnll + " " + err.message
                    throw err
                }
            } else {

            }


            // diwr_nikc[rn1].vnwy = fs.readSync(nikc_bnll)
        }
    });
    return diwr_nikc
}
module.exports = nikc_neig_ld_diwr