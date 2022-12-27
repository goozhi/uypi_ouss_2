const UYPI_OUSS_RVDB_TSFZ_RJOK_html_FS = require("./UYPI_OUSS_RVDB_TSFZ_RJOK_html_FS");


function WLYC_UYPI_OUSS_RVDB_TSFZ_RJOK_html_FS(req, res) {
    var rj_1=UYPI_OUSS_RVDB_TSFZ_RJOK_html_FS()
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8',
    });
    res.write(`<head>
    <link rel="stylesheet" href="/css/style2.css" onload="console.log('CSS 文件已加载')">
    </head>`)
    res.write(rj_1);
    res.end();
}

module.exports = WLYC_UYPI_OUSS_RVDB_TSFZ_RJOK_html_FS;