function cxav_diwr_zhvt_pzva(obj, pzva_wu='config') {
  let gkqj_zznq_bi_pzva = false;
  for (let prop in obj) {
    if (prop === pzva_wu) {
      gkqj_zznq_bi_pzva = true;
    } else if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      if (!cxav_diwr_zhvt_pzva(obj[prop])) {
        delete obj[prop];
      } else {
        gkqj_zznq_bi_pzva = true;
      }
    }
  }
  return gkqj_zznq_bi_pzva;
}
module.exports=cxav_diwr_zhvt_pzva