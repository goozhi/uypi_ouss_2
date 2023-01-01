const DBC_RJOK = require("./DBC_RJOK_html_FS");


function WLYC_DBC_RJOK(req, res) {
    var rj_1=DBC_RJOK()
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8',
    });
    res.write(`<head>
    <link rel="stylesheet" href="/css/style2.css" onload="console.log('CSS 文件已加载')">
    </head>`)
    res.write(rj_1);
    res.end();
}

module.exports = WLYC_DBC_RJOK;