
const fs = require('fs');
const md_RJOK_html_fs = require('./AFOA_BX/md_RJOK_html_FS');

function DBC_RJOK_html_FS(){
    var rj_kp = fs.readFileSync('./public/md/dbc_rjok.md').toString()
    var rj_1 = rj_kp
    rj_1 = md_RJOK_html_fs(rj_1.replace(/&#36;/g,"\$"))
    return rj_1
}
module.exports=DBC_RJOK_html_FS