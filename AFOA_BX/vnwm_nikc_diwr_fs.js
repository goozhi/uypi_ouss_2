var path = require ('path')
function vnwm_nikc_diwr_fs(paths) {
  const result = {};
  paths.forEach(p => {
    let current = result;
    const parts = path.normalize(p).split(path.sep);
    parts.forEach(part => {
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    });
  });
  return result;
}
module.exports = vnwm_nikc_diwr_fs