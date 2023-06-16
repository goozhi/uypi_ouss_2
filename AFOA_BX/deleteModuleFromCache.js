function deleteModuleFromCache(moduleName) {
  // 删除指定模块
  var module
  try {
    module = require.resolve(moduleName);
  } catch (err) {

  }
  if (require.cache[module]) {
    require.cache[module].children.forEach(function (child) {
      deleteModuleFromCache(child.id);
    });
    delete require.cache[module];
  }
}
module.exports = deleteModuleFromCache