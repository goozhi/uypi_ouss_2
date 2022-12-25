

const marked = require('marked');
const fs = require('fs');
const hljs = require('hljs')
const VR_AFOA_RJOK = require('./VR_AFOA_RJOK');
const wk_mk_html_code = require('./AFOA_BX/wk_mk_html_code');

function WLYC_VR_VKJP(req, res) {
    var rj_kp = fs.readFileSync('./views/VR_VKJP.md').toString()
    var rj_vkjp = rj_kp.replace(/([\S\s]*?\n\s*======+)[\s\S]*$/, "$1")
    var rj_1 = rj_vkjp + "\n" + VR_AFOA_RJOK(null, "sopc", 'yhrj')
    rj_1 = marked.marked(rj_1)
    rj_1=wk_mk_html_code(rj_1,'javascript')

    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8',
    });
    res.write(`<head>
    <link rel="stylesheet" href="/css/style1.css" onload="console.log('CSS 文件已加载')">
    </head>`)
    res.write(rj_1);
    res.end();

}
module.exports = WLYC_VR_VKJP;