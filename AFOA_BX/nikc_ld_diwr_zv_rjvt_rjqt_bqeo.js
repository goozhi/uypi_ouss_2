const fs = require('fs');
const path = require('path');

function nikc_ld_diwr_zv_rjvt_rjqt_bqeo(folderPath) {
    const folderObj = {};
    const files = fs.readdirSync(folderPath);
    files.forEach(file => {
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            if(/^\./.test(file)){
                return
            }
            folderObj[file] = nikc_ld_diwr_zv_rjvt_rjqt_bqeo(filePath);
        } else {
            if(/\.zip$/i.test(file)){
                return
            }
            folderObj[file] = fs.readFileSync(filePath);
        }
    });
    return folderObj
}
module.exports = nikc_ld_diwr_zv_rjvt_rjqt_bqeo