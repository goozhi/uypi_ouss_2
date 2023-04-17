const child_process = require('child_process')
function VR_TSJQ_ZV_UWUU_OUSS_NIKC() {
    return new Promise((resolve, reject) => {
        child_process.exec(`start ${__dirname.replace(/(ouss\w*).*/i, "$1")}`, (err) => {
            if (err) {
                reject(err)
            }
        })
        resolve("已为你打开该目录")
    })
}
module.exports = VR_TSJQ_ZV_UWUU_OUSS_NIKC