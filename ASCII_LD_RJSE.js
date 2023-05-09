
function ASCII_LD_RJSE(rj_tyub_16 = "31 32 33", FDMJ_FR_1 = "") {
    if (rj_tyub_16 == null) {
        throw "MCVN NRAP"
    }
    if (rj_tyub_16 == '') {
        return rj_tyub_16;
    }
    var VNWM_1 = rj_tyub_16.split(/(?:\s*\n\s*|\s*\s\s*|\s*,\s*)/);

    const buf = Buffer.allocUnsafe(VNWM_1.length);

    for (let i = 0; i < VNWM_1.length; i++) {
        if (!/^(?:[0-9]|[A-F])+$/i.test(VNWM_1[i])) {
            throw new Error("<MCVN FTPJ>\n" + VNWM_1[i] + "\n^^^\n" + rj_tyub_16 + "\n</MCVN FTPJ>");
        }
        buf[i] = eval("0x" + VNWM_1[i]);
    }
    return buf.toString().replace(/(.)(?=.)/g, "$1" + FDMJ_FR_1);

}
module.exports = ASCII_LD_RJSE;
