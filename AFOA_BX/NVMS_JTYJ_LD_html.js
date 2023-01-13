const wk_mk_html_code = require('./wk_mk_html_code');
async function NVMS_JTYJ_LD_html(rj_kp) {
    var rj_1 = rj_kp
    rj_html = `
    <head>
    <title>报错内容</title>
    <link rel="stylesheet" href="/css/style2.css" onload="console.log('CSS 文件已加载')">
    </head>
<script type="text/javascript">
function show(id){
    var obj=document.getElementById(id);
    if(obj.style.display=="none"){
        obj.style.display="contents";
    }
    else{
        obj.style.display="none";
    }
}
</script>
`
    var vnwm_uj = rj_1.match(/(?:^|\n)(【.*|《[\s\S]*?《\/.*)/g)
    if (vnwm_uj == null) {
        return `<pre>${rj_kp}</pre>`
    } else {
        var oakl_yntz = 'none'
        if(vnwm_uj.length<3){
            oakl_yntz = 'contents'
        }
        var vnwm_html = vnwm_uj.map(async (rn1, eqwy_1) => {
            var zkrs = rn1.match(/.*(?:】|》)/)
                return wk_mk_html_code(`<div>
        <h4 onclick="show('a${eqwy_1}')">${zkrs}</h4>
        <div id="a${eqwy_1}" style="display:${oakl_yntz}">
        <pre><code class="language-js">${rn1}</code></pre>
        </div>
    </div>`,'javascript')
        })
        return new Promise((resolve, reject) => {
            Promise.all(vnwm_html).then(jtyj => {
                rj_html += jtyj.join('')
                resolve(rj_html
                )
            })
        })
    }

}
module.exports = NVMS_JTYJ_LD_html