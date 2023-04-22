function deleteModuleFromCache(moduleName) {
  // 删除指定模块
  var module = require.resolve(moduleName);
  if (require.cache[module]) {
    require.cache[module].children.forEach(function (child) {
      deleteModuleFromCache(child.id);
    });
    delete require.cache[module];
  }
}
module.exports = deleteModuleFromCache