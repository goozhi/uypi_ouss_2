const fs = require('fs');
const md_RJOK_html_fs = require('./AFOA_BX/md_RJOK_html_FS');

function UYPI_OUSS_RVDB_TSFZ_RJOK_html_FS(){
    var rj_kp = fs.readFileSync('./public/md/uypi_ouss_rvdb_tsfz.md').toString()
    var rj_1 = rj_kp
    rj_1 = md_RJOK_html_fs(rj_1.replace(/&#36;/g,"\$"))
    return rj_1
}
module.exports=UYPI_OUSS_RVDB_TSFZ_RJOK_html_FS