const fs = require('fs');
const path = require('path');

function hd_rjqt_tum(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file, index) => {
            const curPath = path.join(folderPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                // 递归删除子文件夹
                hd_rjqt_tum(curPath);
            } else {
                // 删除文件
                fs.unlinkSync(curPath);
            }
        });
        // 删除文件夹
        fs.rmdirSync(folderPath);
    }
}
module.exports = hd_rjqt_tum