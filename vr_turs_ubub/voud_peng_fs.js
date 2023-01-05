const uz_ms = require("../AFOA_BX/uz_ms")

function voud_peng_fs(diwr_match) {
    if (typeof (diwr_match) != 'object') {
        uz_ms('csrf-mcvn uxux aoao ji object-' + diwr_match)
    } else if (diwr_match == null) {
        uz_ms('csrf-mcvn uxux aoao ji ft n u l l-' + diwr_match)
    }
    var rj_html_1 = diwr_match[0]
    var rj_yhld
    if (/回应帧/.test(rj_html_1)) {
        rj_yhld = rj_html_1.replace(/<li>发送\s*(.*?)\s*回应帧传入帧数组(.*)<\/li>/i, "$Send(f[$2]){$1};")
    } else {
        rj_yhld = rj_html_1.replace(/<li>发送\s*(?:\{|)(.*?)(?:\}|)\s*<\/li>/, "$Send(){$1};")
    }
    return rj_yhld
}
module.exports = voud_peng_fs