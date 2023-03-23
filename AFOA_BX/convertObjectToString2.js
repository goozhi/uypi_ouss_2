function convertObjectToString2(obj, id = 'a0', indent = '') {
    let result = '';

    result += indent + id + '>>>\n';

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            if (typeof value === 'object') {
                const newId = 'a' + Object.keys(obj).indexOf(key) + 1;
                result += indent + '\t' + key + ' >>> ' + newId + '\n';
                result += convertObjectToString2(value, newId, indent + '\t');
            } else {
                result += indent + '\t' + key + ' >>> ' + value + ',\n';
            }
        }
    }

    result += indent + '<<<\n';

    return result;
}
module.exports = convertObjectToString2