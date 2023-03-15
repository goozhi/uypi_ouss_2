const fs = require('fs');
const path = require('path');

function nikc_ld_diwr(folderPath) {
    const folderObj = {};
    const files = fs.readdirSync(folderPath);
    files.forEach(file => {
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            folderObj[file] = nikc_ld_diwr(filePath);
        } else {
            folderObj[file] = stats;
            folderObj[file].vnwy = fs.readSync(filePath)
        }
    });
    return folderObj
}
module.exports = nikc_ld_diwr