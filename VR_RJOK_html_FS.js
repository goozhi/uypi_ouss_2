const fs = require('fs');
const md_RJOK_html_fs = require('./AFOA_BX/md_RJOK_html_FS');
const VR_AFOA_RJOK = require('./VR_AFOA_RJOK');
const VR_EBWU_AFOA_BRTZ_FS = require('./VR_EBWU_AFOA_BRTZ_FS');

function VR_RJOK_html_FS(){
    var rj_kp = fs.readFileSync('./views/VR_VKJP.md').toString()
    var rj_vkjp = rj_kp.replace(/([\S\s]*?\n\s*======+)[\s\S]*$/, "$1")
    var rj_1 = rj_vkjp + "\n" + VR_AFOA_RJOK(null, "sopc", 'yhrj')
    var rj_rjok_kp = rj_1
    var reg_dyvy = /```\w+(\s*\n(?:(?!```)[\s\S])+?\n\s*)```/ig
    var reg_dyvy_eynh = /```\w+(\s*\n(?:(?!```)[\s\S])+?\n\s*)```/i
    var vnwm_rj_klch_dyvy = rj_1.match(reg_dyvy)
    if (vnwm_rj_klch_dyvy != null) {
        var diwr_vnwm_klch_dyvy = vnwm_rj_klch_dyvy.map(rn1 => {
            var dyvy_1 = rn1.replace(reg_dyvy_eynh,"$1")
            var diwr_yhld={rj_kp: dyvy_1}
            try{
                diwr_yhld.dyvy_zhqh_jtyj=VR_EBWU_AFOA_BRTZ_FS( dyvy_1)
                diwr_yhld.gkqj_zhqh_bcaf=true;
            }catch(err){
                diwr_yhld.err=err
                diwr_yhld.gkqj_zhqh_bcaf=false
            }
            return diwr_yhld
        });
    }
    diwr_vnwm_klch_dyvy.forEach(rn1=>{
        if(rn1.gkqj_zhqh_bcaf){
            rj_1=rj_1.replace(rn1.rj_kp, rn1.rj_kp+'\n```\n* result\n```js\n'+rn1.dyvy_zhqh_jtyj.replace(/\$/g,'&#36;')+'\n')
        }
    })
    rj_1 = md_RJOK_html_fs(rj_1.replace(/&#36;/g,"\$"))
    return rj_1
}
module.exports=VR_RJOK_html_FS