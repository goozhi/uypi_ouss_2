const marked = require('marked')
const cheerio = require('cheerio')
const VR_TSJQ_BRTZ_FS_ZV_VNWY_TU = require('./VR_TSJQ_BRTZ_FS_ZV_VNWY_TU')
const uz_ms = require('./AFOA_BX/uz_ms')
const turs_ubub_vbyt = require('./turs_ubub_vbyt')
// const VR_TSJQ_BRTZ_FS_ZV_VNWY_TU =
function KUOE_AFOA(rjse_kp) {
    var rj_1 = rjse_kp.replace(/^\s*···/gm, '```').replace(/^》/gm, '> ')
    rj_html = marked.marked(rj_1)
    rj_1 = rj_1.replace(/^\s*```/gm, '')
    var $ = cheerio.load(rj_html)
    $('code').each(function () {
        var rj_vnwy_tu_kp_slgr = $(this).text();
        var rj_vnwy_tu_slgr = VR_TSJQ_BRTZ_FS_ZV_VNWY_TU({ VR_AFOA_MCVN: '', VR_AFOA_BQEO: rj_vnwy_tu_kp_slgr }).replace(/\$Str.*/i, "").replace(/^\*"/gm, "&\"").replace(/\*\*+/, "&&&")
        rj_1 = rj_1.replace(rj_vnwy_tu_kp_slgr, rj_vnwy_tu_slgr)
        console.log(rj_vnwy_tu_slgr)
    })
    $('em').each(function () {
        var lab_kp_slgr = $(this).text();
        var lab_slgr = "$Lab(L_" + lab_kp_slgr + ")"
        rj_1 = rj_1.replace('*' + lab_kp_slgr + '*', lab_slgr)
    })
    $('strong').each(function () {
        var rj_afoa_kp = $(this).text()
        var rj_afoa_1;
        switch (true) {
            case /^打印/m.test(rj_afoa_kp):
                rj_afoa_1 = rj_afoa_kp.replace(/打印(.*)/, "$Display(){\"$1\"};")
                break;
            case /^发送/m.test(rj_afoa_kp):
                rj_afoa_1 = rj_afoa_kp.replace(/发送(.*)/, "$Send(){$1};")
                break;
            case /^帧数组复位/m.test(rj_afoa_kp):
                rj_afoa_1 = rj_afoa_kp.replace(/帧数组复位(.*)到(.*)为(.*)/, "$F($1,$2,$3);")
                break;
            case /^过密码/m.test(rj_afoa_kp):
                rj_afoa_1 = rj_afoa_kp.replace(/过密码(.*)/, "$PSW27($1);")
                break;
            case /^注意/m.test(rj_afoa_kp):
                rj_afoa_1 = rj_afoa_kp.replace(/注意(.*)/, "$Display(enter){\"$1\"};")
                break;
            case /^跳转到/m.test(rj_afoa_kp):
                rj_afoa_1 = rj_afoa_kp.replace(/跳转到(.*)/, '$GotoLab(L_$1);')
                break;
            default:
                uz_ms('csrf-afoa ftpj-' + rj_afoa_kp)
        }
        rj_1 = rj_1.replace('**' + rj_afoa_kp + '**', "\n" + rj_afoa_1 + "")
    })
    $('li').each(function () {
        var rj_afoa_kp = $(this).text()
        var rj_afoa_1;
        switch (true) {
            case /^打印/m.test(rj_afoa_kp):
                rj_afoa_1 = rj_afoa_kp.replace(/打印(.*)/, "$Display(){\"$1\"};")
                break;
            case /^发送/m.test(rj_afoa_kp):
                if (/回应帧/.test(rj_afoa_kp)) {
                    rj_afoa_1 = rj_afoa_kp.replace(/发送\s*(.*?)\s*回应帧传入帧数组(.*)/i, "$Send(f[$2]){$1};")

                } else {
                    rj_afoa_1 = rj_afoa_kp.replace(/发送(.*)/, "$Send(){$1};")
                }
                break;
            case /^帧数组复位/m.test(rj_afoa_kp):
                rj_afoa_1 = rj_afoa_kp.replace(/帧数组复位(.*)到(.*)为(.*)/, "$F($1,$2,$3);")
                break;
            case /^过密码/m.test(rj_afoa_kp):
                rj_afoa_1 = rj_afoa_kp.replace(/过密码(.*)/, "$PSW27($1);")
                break;
            case /^注意/m.test(rj_afoa_kp):
                rj_afoa_1 = rj_afoa_kp.replace(/注意(.*)/, "$Display(enter){\"$1\"};")
                break;
            case /^等待/m.test(rj_afoa_kp):
                rj_afoa_1 = rj_afoa_kp.replace(/等待(.*)/, "$Delayms($1);")
                break;
            case /^若为其他/m.test(rj_afoa_kp):
                rj_1 = rj_1.replace(/\* +若为其他/, "$Else();")
                break;
            case /^若为/m.test(rj_afoa_kp):
                rj_1 = rj_1.replace(/\* +若为/, "$Elseif($2);")
                break;
            case /^若/m.test(rj_afoa_kp):
                rj_1 = rj_1.replace(/\* +若/, "$If($1);")
            case /^结束若/m.test(rj_afoa_kp):
                rj_1 = rj_1.replace(/\* +结束若/, "$EndIf();")
                break;
            case /^跳转到/m.test(rj_afoa_kp):
                rj_afoa_1 = rj_afoa_kp.replace(/跳转到(.*)/, '$GotoLab(L_$1);')
                break;
            default:
                uz_ms('csrf-afoa ftpj-' + rj_afoa_kp)
        }
        rj_1 = rj_1.replace('* ' + rj_afoa_kp, rj_afoa_1)
    })
    var reg_vbyt_uj = /\$if(?:(?!\$EndIf)[\s\S]+\$EndIf)/ig
    var vnwm_vbyt_uj = rj_1.match(reg_vbyt_uj)
    if (vnwm_vbyt_uj != null) {
        vnwm_vbyt_uj.forEach(rn1 => {
            rj_1 = rj_1.replace(rn1, turs_ubub_vbyt(rn1))
        })
    }
    $('blockquote').each(function () {
        var rj_zstv_kp_slgr = $(this).text()
        var rj_zstv_slgr = rj_zstv_kp_slgr
        var vnwm_rj_zstv_vo_es_slgr = rj_zstv_slgr.match(/.*?\w+ \w+(?: \w+)+(?=\s*$)/gm)
        var vnwm_rj_zstv_dgld_slgr = rj_zstv_slgr.match(/.*\w+(?=\s*$)/gm)
        if (vnwm_rj_zstv_vo_es_slgr != null) {
            vnwm_rj_zstv_vo_es_slgr.forEach(rn1 => {
                if (!new RegExp("> " + rn1).test(rj_1)) {
                    uz_ms('csrf-mcvn ftpj-' + rn1 + '-kp-' + rj_1)
                }
                rj_1 = rj_1.replace("> " + rn1, rn1.replace(/(.*?)(\w+ \w+(?: \w+)+(?=\s*$))/gm, "\"$1\"{$2};"))
            })

        } else {
            vnwm_rj_zstv_dgld_slgr.forEach(rn1 => {
                if (!new RegExp("> " + rn1).test(rj_1)) {
                    uz_ms('csrf-mcvn ftpj-' + rn1 + '-kp-' + rj_1)
                }
                rj_1 = rj_1.replace("> " + rn1, rn1.replace(/(.*?)\s*(\w+)\s*$/gm, "\"$1\"L_$2;"))
            })

        }
    })

    $('h2').each(function () {
        var rj_dihk_zul_kp = $(this).text()
        var rj_dihk_zul_1 = rj_dihk_zul_1
        switch (true) {
            case /^选择框/m.test(rj_dihk_zul_kp):
                rj_dihk_zul_1 = rj_dihk_zul_kp.replace(/选择框(.*)/, "$Button();")
                break;
            case /^控制框/m.test(rj_dihk_zul_kp):
                rj_dihk_zul_1 = rj_dihk_zul_kp.replace(/控制框(.*)/, "$Button();")
                break;
            case /^输入框/m.test(rj_dihk_zul_kp):
                rj_dihk_zul_1 = rj_dihk_zul_kp.replace(/输入框(.*)/, "$InputBox()")
                break;
            default:
                uz_ms('csrf-afoa ftpj-' + rj_dihk_zul_kp)
        }
        rj_1 = rj_1.replace('## ' + rj_dihk_zul_kp, rj_dihk_zul_1)
    })
    $('p').each(function () {
        var rj_mcvn_kp = $(this).text()
        var rj_non = String($(this))
        if (/<p></.test(rj_non) || /<p>.*\n.*<\/p>/.test(rj_non)) {
            return
        } else if (/<p>(若|结束)/.test(rj_non)) {
            return
        }
        var vnwm_mcvn_kp = rj_mcvn_kp.split(/ +/)
        var vnwm_mcvn_1 = []
        var vnwm_vdzv_zul_mcvn = vnwm_mcvn_kp.map(rn1 => {
            // var rj_klvq = rn1.replace(/.*为(.*)到(.*)/,"$1-$2")
            // var rj_yg = rn1.replace(/.*为(.*)/,"$1")
            switch (true) {
                case /^类型为/m.test(rn1):
                    var rj_yg = rn1.replace(/.*为(.*)/, "$1")
                    vnwm_mcvn_1[0] = rj_yg
                    return { rj_yg, rj_mcvn_wu: '', xbst: 'uxux' }
                case /^长度为/m.test(rn1):
                    var rj_yg = rn1.replace(/.*为(.*)/, "$1")
                    vnwm_mcvn_1[1] = 'len=' + rj_yg
                    return { rj_yg, rj_mcvn_wu: 'len', xbst: 'hpmi' }
                case /^传入帧数组/m.test(rn1):
                    var rj_yg = rn1.replace(/.*传入帧数组(.*)/, "f[$1]")
                    vnwm_mcvn_1[2] = rj_yg
                    return { rj_yg, rj_mcvn_wu: '', xbst: 'przv' }
                default:
                    uz_ms('csrf-mcvn ftpj-' + rn1 + '-kp-' + rj_mcvn_kp)
            }
        })
        var rj_mcvn_1 = vnwm_mcvn_1.join(',').replace(/,,+/g, ",")
        rj_1 = rj_1.replace("\n" + rj_mcvn_kp, rj_mcvn_1)
    })
    return rj_1.replace(/(inputBox)\(\)(.*)/ig, '$1($2)')
}
module.exports = KUOE_AFOA