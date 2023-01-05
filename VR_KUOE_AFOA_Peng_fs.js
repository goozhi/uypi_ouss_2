const marked = require('marked')
const VR_TSJQ_BRTZ_FS_ZV_VNWY_TU = require('./VR_TSJQ_BRTZ_FS_ZV_VNWY_TU')
const uz_ms = require('./AFOA_BX/uz_ms')
const turs_ubub_vbyt = require('./turs_ubub_vbyt')
// const VR_TSJQ_BRTZ_FS_ZV_VNWY_TU =
function VR_KUOE_AFOA_Peng_fs(rjse_kp) {
    var rj_1 = rjse_kp.replace(/^\s*···/gm, '```').replace(/^》/gm, '> ')
    rj_html_kp = marked.marked(rj_1)
    rj_html_1 = rj_html_kp
    var reg_vnwy_tu_dyvy = /<code[\s\S]*?<\/code>/ig
    var vnwm_vnwy_tu_dyvy = rj_html_1.match(reg_vnwy_tu_dyvy)
    if (vnwm_vnwy_tu_dyvy != null) {
        vnwm_vnwy_tu_dyvy.forEach(rn1 => {
            var rj_vnwy_tu_kp_slgr = rn1.replace(/<(?:\/|)code.*?>/ig, "")
            var rj_vnwy_tu_slgr = VR_TSJQ_BRTZ_FS_ZV_VNWY_TU({ VR_AFOA_MCVN: '', VR_AFOA_BQEO: rj_vnwy_tu_kp_slgr }).replace(/\$Str.*/i, "").replace(/^\*"/gm, "&\"").replace(/\*\*+/, "&&&")
            rj_html_1 = rj_html_1.replace(rj_vnwy_tu_kp_slgr, rj_vnwy_tu_slgr)
        });
    }
    var reg_dgld_xbiw = /<em>.*<\/em>/ig;
    var vnwm_dgld_xbiw = rj_html_1.match(reg_dgld_xbiw)
    if (vnwm_dgld_xbiw != null) {
        vnwm_dgld_xbiw.forEach(rn1 => {
            var rj_dgld_xbiw_kp_slgr = rn1.replace(/<(?:\/|)em.*?>/ig, "")
            var rj_dgld_xbiw_slgr = "$Lab(L_" + rj_dgld_xbiw_kp_slgr + ")"
            rj_yhld = rn1.replace(rj_dgld_xbiw_kp_slgr, rj_dgld_xbiw_slgr)
            rj_html_1 = rj_html_1.replace(rn1, rj_yhld)
        });
    }

    var reg_zhqh_afoa = /<strong>.*?<\/strong>/ig;
    var vnwm_zhqh_afoa = rj_html_1.match(reg_zhqh_afoa)
    if (vnwm_zhqh_afoa != null) {
        vnwm_zhqh_afoa.forEach(rn1 => {
            var rj_zhqh_afoa_kp_slgr = rn1.replace(/<(?:\/|)strong.*?>/ig, "")
            var rj_zhqh_afoa_slgr;
            switch (true) {
                case /^打印/m.test(rj_zhqh_afoa_kp_slgr):
                    rj_zhqh_afoa_slgr = rj_zhqh_afoa_kp_slgr.replace(/打印(.*)/, "$Display(){\"$1\"};")
                    break;
                case /^发送/m.test(rj_zhqh_afoa_kp_slgr):
                    rj_zhqh_afoa_slgr = rj_zhqh_afoa_kp_slgr.replace(/发送(.*)/, "$Send(){$1};")
                    break;
                case /^帧数组复位/m.test(rj_zhqh_afoa_kp_slgr):
                    rj_zhqh_afoa_slgr = rj_zhqh_afoa_kp_slgr.replace(/帧数组复位(.*)到(.*)为(.*)/, "$F($1,$2,$3);")
                    break;
                case /^过密码/m.test(rj_zhqh_afoa_kp_slgr):
                    rj_zhqh_afoa_slgr = rj_zhqh_afoa_kp_slgr.replace(/过密码(.*)/, "$PSW27($1);")
                    break;
                case /^注意/m.test(rj_zhqh_afoa_kp_slgr):
                    rj_zhqh_afoa_slgr = rj_zhqh_afoa_kp_slgr.replace(/注意(.*)/, "$Display(enter){\"$1\"};")
                    break;
                case /^跳转到/m.test(rj_zhqh_afoa_kp_slgr):
                    rj_zhqh_afoa_slgr = rj_zhqh_afoa_kp_slgr.replace(/跳转到(.*)/, '$GotoLab(L_$1);')
                    break;
                default:
                    uz_ms('csrf-afoa ftpj-' + rj_zhqh_afoa_kp_slgr)
            }
            rj_html_1 = rj_html_1.replace(rj_zhqh_afoa_kp_slgr, rj_zhqh_afoa_slgr)
        });
    }

    rj_html_1 = rj_html_1.replace(/<strong>(.*?)<\/strong>/ig, "\n$1")
    var reg_drdb_afoa = /<li>[\s\S]*?<\/li>/ig;
    var vnwm_drdb_afoa = rj_html_1.match(reg_drdb_afoa)
    if (vnwm_drdb_afoa != null) {
        vnwm_drdb_afoa.forEach(rn1 => {
            var rj_drdb_afoa_kp_slgr = rn1.replace(/<(?:\/|)li.*?>/ig, "")
            var rj_drdb_afoa_slgr;
            switch (true) {
                case /^打印/m.test(rj_drdb_afoa_kp_slgr):
                    rj_drdb_afoa_slgr = rj_drdb_afoa_kp_slgr.replace(/打印(.*)/, "$Display(){\"$1\"};")
                    break;
                case /^发送/m.test(rj_drdb_afoa_kp_slgr):
                    if (/回应帧/.test(rj_drdb_afoa_kp_slgr)) {
                        rj_drdb_afoa_slgr = rj_drdb_afoa_kp_slgr.replace(/发送\s*(.*?)\s*回应帧传入帧数组(.*)/i, "$Send(f[$2]){$1};")

                    } else {
                        rj_drdb_afoa_slgr = rj_drdb_afoa_kp_slgr.replace(/发送(.*)/, "$Send(){$1};")
                    }
                    break;
                case /^帧数组复位/m.test(rj_drdb_afoa_kp_slgr):
                    rj_drdb_afoa_slgr = rj_drdb_afoa_kp_slgr.replace(/帧数组复位(.*)到(.*)为(.*)/, "$F($1,$2,$3);")
                    break;
                case /^过密码/m.test(rj_drdb_afoa_kp_slgr):
                    rj_drdb_afoa_slgr = rj_drdb_afoa_kp_slgr.replace(/过密码(.*)/, "$PSW27($1);")
                    break;
                case /^注意/m.test(rj_drdb_afoa_kp_slgr):
                    rj_drdb_afoa_slgr = rj_drdb_afoa_kp_slgr.replace(/注意(.*)/, "$Display(enter){\"$1\"};")
                    break;
                case /^等待/m.test(rj_drdb_afoa_kp_slgr):
                    rj_drdb_afoa_slgr = rj_drdb_afoa_kp_slgr.replace(/等待(.*)/, "$Delayms($1);")
                    break;
                case /^若为其他/m.test(rj_drdb_afoa_kp_slgr):
                    rj_html_1 = rj_html_1.replace(/若为其他/, "$Else();")
                    break;
                case /^若为/m.test(rj_drdb_afoa_kp_slgr):
                    rj_html_1 = rj_html_1.replace(/若为/, "$Elseif($2);")
                    break;
                case /^若/m.test(rj_drdb_afoa_kp_slgr):
                    rj_html_1 = rj_html_1.replace(/若/, "$If($1);")
                case /^结束若/m.test(rj_drdb_afoa_kp_slgr):
                    rj_html_1 = rj_html_1.replace(/结束若/, "$EndIf();")
                    break;
                case /^跳转到/m.test(rj_drdb_afoa_kp_slgr):
                    rj_drdb_afoa_slgr = rj_drdb_afoa_kp_slgr.replace(/跳转到(.*)/, '$GotoLab(L_$1);')
                    break;
                default:
                    uz_ms('csrf-afoa ftpj-' + rj_drdb_afoa_kp_slgr)
            }
            rj_html_1 = rj_html_1.replace(rj_drdb_afoa_kp_slgr, rj_drdb_afoa_slgr)
        });
    }

    var reg_vbyt_uj = /<li>\$if(?:(?!\$EndIf)[\s\S]+<li>\$EndIf)/ig
    var vnwm_vbyt_uj = rj_html_1.match(reg_vbyt_uj)
    if (vnwm_vbyt_uj != null) {
        vnwm_vbyt_uj.forEach(rn1 => {
            var rj_yhld = rn1.replace(/<[^<]*?>/ig, "")
            rj_html_1 = rj_html_1.replace(rn1, turs_ubub_vbyt(rj_yhld))
        })
    }

    var reg_zstv = /<blockquote>[\s\S]*?<\/blockquote>/ig;
    var vnwm_zstv = rj_html_1.match(reg_zstv)
    if (vnwm_zstv != null) {
        vnwm_zstv.forEach(rn1 => {
            var rj_zstv_kp_slgr = rn1.replace(/<(?:\/|)blockquote.*?>/ig, "")
            var rj_zstv_slgr = rj_zstv_kp_slgr
            var vnwm_rj_zstv_vo_es_slgr = rj_zstv_slgr.match(/.*?\w+ \w+(?: \w+)+(?=\s*(?:$|<\/p>))/gm)
            var vnwm_rj_zstv_dgld_slgr = rj_zstv_slgr.match(/.*\w+(?=\s*(?:$|<\/p>))/gm)
            if (vnwm_rj_zstv_vo_es_slgr != null) {
                vnwm_rj_zstv_vo_es_slgr.forEach(rn1 => {
                    rj_html_1 = rj_html_1.replace(rn1, rn1.replace(/([^\n<>]*?)(\w+ \w+(?: \w+)+(?=\s*$))/gm, "\"$1\"{$2};"))
                })

            } else {
                vnwm_rj_zstv_dgld_slgr.forEach(rn1 => {
                    rj_html_1 = rj_html_1.replace(rn1, rn1.replace(/([^\n<>]*?)\s*(\w+)\s*$/gm, "\"$1\"L_$2;"))
                })

            }
        });
    }

    var reg_dihk_zul = /<h2.*?>[\s\S]*?<\/h2>/ig;
    var vnwm_dihk_zul = rj_html_1.match(reg_dihk_zul)
    if (vnwm_dihk_zul != null) {
        vnwm_dihk_zul.forEach(rn1 => {
            var rj_dihk_zul_kp = rn1.replace(/<(?:\/|)h2.*?>/ig, "")
            var rj_dihk_zul;
            switch (true) {
                case /^选择框/m.test(rj_dihk_zul_kp):
                    rj_dihk_zul = rn1.replace(/>选择框/, ">$Button();")
                    break;
                case /^控制框/m.test(rj_dihk_zul_kp):
                    rj_dihk_zul = rn1.replace(/>控制框/, ">$Button();")
                    break;
                case /^输入框/m.test(rj_dihk_zul_kp):
                    rj_dihk_zul = rn1.replace(/>输入框/, ">$InputBox();")
                    break;
                default:
                    uz_ms('csrf-afoa ftpj-' + rj_dihk_zul_kp)
            }
            rj_html_1 = rj_html_1.replace(rn1, rj_dihk_zul)
        });
    }
    var reg_vdzv_zul_mcvn = /<p>[^<"]*?<\/p>/ig;
    var vnwm_vdzv_zul_mcvn = rj_html_1.match(reg_vdzv_zul_mcvn)
    if (vnwm_vdzv_zul_mcvn != null) {
        vnwm_vdzv_zul_mcvn.forEach(rn2 => {
            if(/L_/.test(rn2)){
                return 
            }
            var rj_vdzv_zul_mcvn_kp = rn2.replace(/<(?:\/|)p.*?>/ig, "")
            var vnwm_mcvn_kp = rj_vdzv_zul_mcvn_kp.split(/ +/)
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
                        uz_ms('csrf-input mcvn ftpj-' + rn1 + '-kp-' + rj_vdzv_zul_mcvn_kp)
                }
            })
            var rj_mcvn_1 = vnwm_mcvn_1.join(',').replace(/,,+/g, ",")
            rj_html_1 = rj_html_1.replace(rj_vdzv_zul_mcvn_kp, rj_mcvn_1)
        });
    }

    return rj_html_1.replace(/<h1.*?>(.*)<.*/ig,"# $1").replace(/<(?:\/|)\w+[^<>]*?>/ig, "").replace(/(inputBox)\(\);\n(.*)\n/ig, '$1($2);')

}
module.exports = VR_KUOE_AFOA_Peng_fs