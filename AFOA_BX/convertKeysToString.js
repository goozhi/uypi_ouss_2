function convertKeysToString(obj, prefix = 8) {
    let result = '';
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
  
        // Generate the new key with the prefix
        const newKey = prefix + key;
  
        // If the value is an object, recursively convert its keys
        if (typeof value === 'object') {
          result += convertKeysToString(value, newKey);
        } else {
          result += newKey + '\n';
        }
      }
    }
  
    return result;
  }
  module.exports = convertKeysToString