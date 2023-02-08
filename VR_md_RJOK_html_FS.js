const fs = require('fs');
const md_RJOK_html_fs = require('./AFOA_BX/md_RJOK_html_FS');

function VR_md_RJOK_html_FS(yxna_md_rjok){
    var rj_kp = fs.readFileSync(yxna_md_rjok).toString()
    var rj_1 = rj_kp
    rj_1 = md_RJOK_html_fs(rj_1.replace(/&#36;/g,"\$"))
    return rj_1
}
module.exports=VR_md_RJOK_html_FS