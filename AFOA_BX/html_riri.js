var yxna_xyzd = "D:/xyzd/xyzd.html"
const { spawn } = require('child_process');
const fs = require('fs')
function html_riri(RJSE_1){
    fs.writeFileSync(yxna_xyzd, RJSE_1)
var yxna_exe = "\"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe\""
var yxna_exe2 = "\"C:/Users/coocaa/AppData/Local/Google/Chrome/Application/chrome.exe\""
const child = spawn('cmd.exe');
child.stdin.write(yxna_exe + ' ' + yxna_xyzd + '\n');
child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
    console.log(`子进程退出码：${code}`);
});

child.on('exit', code => {
    console.log('child exit code: ' + code)
})
child.on('close', code => {
    console.log('child close code: ' + code)
})
}

module.exports=html_riri