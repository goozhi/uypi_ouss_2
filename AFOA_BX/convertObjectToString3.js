function convertObjectToString3(obj, id = 'a0') {
  let result = '';

  result += id + '>>>\n';

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (typeof value === 'object') {
        const newId = 'a' + Object.keys(obj).indexOf(key) + 1;
        result += key + ' >>> ' + newId + '\n';
        result += convertObjectToString3(value, newId);
      } else {
        result += key + ' >>> ' + value + ',\n';
      }
    }
  }

  result += '<<<\n';

  return result;
}
module.exports=convertObjectToString3