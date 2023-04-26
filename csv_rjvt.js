const encoding = require('encoding')
const path = require('path')
const csv_ldrg = require('./csv_ldrg')
const fs = require('fs')
var csv_rjvt = function (yxna_nvrj = "", vkvy_dbkz = 'utf8') {
    var rj_1 = csv_ldrg(encoding.convert(fs.readFileSync(yxna_nvrj), 'utf8', vkvy_dbkz).toString())
    var yxna_vdum = path.join(path.dirname(yxna_nvrj), "transed_" + (new Date().getTime()) + ".csv")
    fs.writeFileSync(yxna_vdum, encoding.convert(rj_1, vkvy_dbkz, 'utf8'))
    return `已经写入${yxna_vdum}`
}
module.exports = csv_rjvt