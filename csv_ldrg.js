function csv_ldrg(rj_csv_kp = '') {
    return rj_csv_kp.replace(/=DEC2HEX\((\d+)\)/ig, (match, p1) => {
        var rj_2 = Number(p1).toString(16)
        if (Math.floor(rj_2.length / 2) * 2 != rj_2.length) {
            return "0" + rj_2
        } else {
            return rj_2
        }
    })
}
module.exports = csv_ldrg
