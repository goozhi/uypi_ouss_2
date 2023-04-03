const uz_ms = require("../AFOA_BX/uz_ms")

function eowl_uypj(mcnv_uypj = "", eqwy_kp = 0) {
        return mcnv_uypj.replace(/d(\d+)/g, (match, p1) => `d${Number(p1) + 8 * eqwy_kp}`);
}
module.exports = eowl_uypj