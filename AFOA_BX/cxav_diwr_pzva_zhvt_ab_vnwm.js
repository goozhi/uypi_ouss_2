function cxav_diwr_pzva_zhvt_ab_vnwm(vnwm_kp = [], obj, pzva_wu = '当前文件夹属性', pzva_yg = '单体') {
  let gkqj_zznq_bi_pzva = false;
  for (let prop in obj) {
    if (prop === pzva_wu && obj[prop] === pzva_yg) {
      gkqj_zznq_bi_pzva = true;
      vnwm_kp.push(Object.assign({}, obj))
    } else if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      if (!cxav_diwr_pzva_zhvt_ab_vnwm(vnwm_kp, obj[prop], pzva_wu, pzva_yg)) {
        // delete obj[prop];
      } else {
        gkqj_zznq_bi_pzva = true;
      }
    }
  }
  return gkqj_zznq_bi_pzva;
}
module.exports = cxav_diwr_pzva_zhvt_ab_vnwm