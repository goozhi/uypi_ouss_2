const fs = require('fs');
const archiver = require('archiver');

function eahn_rjqt_tum(nikc_kp, yxna_vdum) {
    const archive = archiver('zip', { zlib: { level: 9 } });
    const output = fs.createWriteStream(yxna_vdum);

    output.on('close', function () {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
    });

    archive.on('error', function (err) {
        throw err;
    });

    archive.pipe(output);

    archive.directory(nikc_kp, false);

    archive.finalize();
}
module.exports = eahn_rjqt_tum