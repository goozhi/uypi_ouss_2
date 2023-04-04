function cxav_diwr_pzva_yg_zhvt(obj, pzva_wu = '当前文件夹属性', pzva_yg = '单体') {
  let gkqj_zznq_bi_pzva = false;
  for (let prop in obj) {
    if (prop === pzva_wu && obj[prop] === pzva_yg) {
      gkqj_zznq_bi_pzva = true;
    } else if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      if (!cxav_diwr_pzva_yg_zhvt(obj[prop])) {
        delete obj[prop];
      } else {
        gkqj_zznq_bi_pzva = true;
      }
    }
  }
  return gkqj_zznq_bi_pzva;
}
module.exports = cxav_diwr_pzva_yg_zhvt