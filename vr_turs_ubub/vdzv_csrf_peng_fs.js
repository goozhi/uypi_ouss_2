const uz_ms = require("../AFOA_BX/uz_ms")

function vdzv_csrf_peng_fs(diwr_match){
    var rj_html_1 = diwr_match[0]
    var rj_vdzv_zul_mcvn_kp = rj_html_1.replace(/<(?:\/|)p.*?>/ig, "")
    var vnwm_mcvn_kp = rj_vdzv_zul_mcvn_kp.split(/ +/)
    var vnwm_mcvn_1 = []

    var vnwm_vdzv_zul_mcvn = vnwm_mcvn_kp.map(rn1 => {
        switch (true) {
            case /^\s*(?:输入|)类型为/m.test(rn1):
                var rj_yg = rn1.replace(/.*为(.*)/, "$1")
                vnwm_mcvn_1[0] = rj_yg
                return { rj_yg, rj_mcvn_wu: '', xbst: 'uxux' }
            case /^\s*(?:输入|)长度为/m.test(rn1):
                var rj_yg = rn1.replace(/.*为(.*)/, "$1")
                vnwm_mcvn_1[1] = 'len=' + rj_yg
                return { rj_yg, rj_mcvn_wu: 'len', xbst: 'hpmi' }
            case /^\s*(?:输入|)范围为.*/m.test(rn1):
                var rj_yg = rn1.replace(/.*为(.*)(?:到|-)(.*)/, "$1-$2")
                vnwm_mcvn_1[2] = 'range=' + rj_yg
                return { rj_yg, rj_mcvn_wu: 'len', xbst: 'hpmi' }
            case /^\s*(?:输入|)传入帧数组/m.test(rn1):
                var rj_yg = rn1.replace(/.*传入帧数组(.*)/, "f[$1]")
                vnwm_mcvn_1[3] = rj_yg
                return { rj_yg, rj_mcvn_wu: '', xbst: 'przv' }
            default:
                uz_ms('csrf-inputBox mcvn ftpj-' + rn1 + '-kp-' + rj_vdzv_zul_mcvn_kp)
        }
    })
    var rj_jtyj = "$Inputbox("+vnwm_mcvn_1.join(',').replace(/\n/g,"").replace(/,,+/g, ",")+");"
    return rj_jtyj
}
module.exports=vdzv_csrf_peng_fs