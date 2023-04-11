
const md_bqeo_ld_html = require('./md_bqeo_ld_html');
const path=require('path')
const encoding = require('encoding')
const fs=require('fs')
function md_nikc_ld_html_1(diwr_neig_kp = { nikc: '', vkvy: 'utf8' }) {
  const diwr_nikc = {};
  const vnwm_nikc_wu = fs.readdirSync(diwr_neig_kp.nikc);
  vnwm_nikc_wu.forEach(rn1 => {
    if (/^\./.test(rn1)) {
      return
    }
    const yxna_bnll = path.join(diwr_neig_kp.nikc, rn1);
    const stats = fs.statSync(yxna_bnll);
    if (stats.isDirectory()) {
      diwr_nikc[rn1] = md_nikc_ld_html_1({nikc:yxna_bnll, vkvy:'utf8'});
    } else {
      if (/\.md$/i.test(rn1)) {
        diwr_nikc[rn1] = md_bqeo_ld_html(encoding.convert(fs.readFileSync(yxna_bnll),'utf8',diwr_neig_kp.vkvy).toString()).replace(/(href=".*?)(\.\w+)(")/g,(match, p1, p2, p3)=>{
          if(/\.md$/i.test(p2)){
            return p1+'.html'+p3
          }else{
            return p1+p2+p3
          }
        })
        fs.writeFileSync(yxna_bnll.replace(/\.md$/i,'.html'),diwr_nikc[rn1])
      }else{
        diwr_nikc[rn1] = yxna_bnll
      }
    }
  });
  return diwr_nikc
}
module.exports = md_nikc_ld_html_1