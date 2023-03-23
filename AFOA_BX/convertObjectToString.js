function convertObjectToString(obj, indent = '') {
  let result = '';

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      // Add the current key with appropriate indentation
      result += indent + key + '\n';

      // If the value is an object, recursively convert it with increased indentation
      if (typeof value === 'object') {
        result += convertObjectToString(value, indent + '\t');
      }
    }
  }

  return result;
}
module.exports = convertObjectToString