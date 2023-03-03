const wdbu_jfrs = require('./afoa_bobi/rsgm/wdbu_jfrs');
const uz_ms = require('./AFOA_BX/uz_ms');
const vr_afoa_bqeo_rscs = require('./vr_afoa_bqeo_rscs');
const vr_mcvn_rscs = require('./vr_mcvn_rscs/index.js');
const msqu_rjse_fs = require('./afoa_msqu/msqu_rjse_fs');
const msqu_rjse_rscs = require('./afoa_msqu/msqu_rjse_rscs');
const kplu_ld_vnwm = require('./AFOA_BX/kplu_ld_vnwm');
const fs = require('fs');
const vr_mcvn_ld_rjse = require('./afoa_msqu/vr_mcvn_ld_rjse');
const child_process = require('child_process')
const encoding = require('encoding');
const rjqt_tum_jkub = require('./AFOA_BX/rjqt_tum_jkub');
const NIKC_NINI_RJVT = require('./AFOA_BX/NIKC_NINI_RJVT');
async function VR_TSJQ_ZV_BOBI(DIWR_AFOA, diwr_mcvn) {
    if (!diwr_mcvn.vnwm_msqu) {
        uz_ms('csrf-mcvn nrap-')
    }
    diwr_vnwm_kplu_bobi = [
        { rj_jfrs_kp: 'hello', wldg_uxux: 'ztfr_sum', vkih: '1677307242290', dbkz_wu: 'ravc', rj_wldg: "hello" }
    ]
    var diwr_bobi_fo_lh_rj_jfrs_kp = {}
    var nikc_kplu = __dirname + '/afoa_bobi/kplu'
    if (!fs.existsSync(nikc_kplu)) {
        fs.mkdirSync(nikc_kplu)
        fs.writeFileSync(nikc_kplu + '/diwr_vnwm_kplu.json', JSON.stringify(diwr_vnwm_kplu_bobi))
    } else {
        diwr_vnwm_kplu_bobi = kplu_ld_vnwm(nikc_kplu, 'json')
    }
    diwr_vnwm_kplu_bobi.sort((a, b) => a.qoqi_zdti - b.qoqi_zdti)
    diwr_vnwm_kplu_bobi.forEach(rn1 => {
        diwr_bobi_fo_lh_rj_jfrs_kp[rn1.rj_jfrs_kp] = rn1
    })
    diwr_vnwm_kplu_bobi = Object.entries(diwr_bobi_fo_lh_rj_jfrs_kp).map(rn1 => rn1[1])
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        uz_ms("csrf-MCVN UXUX MSOX , AOAO JI object:-" + UXUX_YHLD)
    }
    var BQEO_1 = vr_afoa_bqeo_rscs(DIWR_AFOA.VR_AFOA_BQEO)
    var diwr_vr_mcvn = vr_mcvn_rscs(DIWR_AFOA.VR_AFOA_MCVN, {
        diwr_vnwm_mcvn_wu_oqzn: [
            { reg_lzm_wu: /^(?:ask)$/i, yowr_wu: "jfrs" },
            { reg_lzm_wu: /^(?:modify)$/i, yowr_wu: "qoqi" },
            { reg_lzm_wu: /^(?:modifying)$/i, yowr_wu: "qoqi_yh" },
            { reg_lzm_wu: /^(?:adding)$/i, yowr_wu: "ukyp_yh" },
            { reg_lzm_wu: /^(?:list)$/i, yowr_wu: "caum" },
            { reg_lzm_wu: /^(?:delete)$/i, yowr_wu: "hd" },
            { reg_lzm_wu: /^(?:reg)$/i, yowr_wu: "reg" },
            { reg_lzm_wu: /^(?:get)$/i, yowr_wu: "nwvt" },
            { reg_lzm_wu: /^(?:insert)$/i, yowr_wu: "nikc" },
            { reg_lzm_wu: /^(?:find)$/i, yowr_wu: "zjyj_zv_giww_hqtz" },
            { reg_lzm_wu: /^(?:add)$/i, yowr_wu: "ukyp" }
        ]
    })
    if (diwr_vr_mcvn.hasOwnProperty('jfrs') || Object.keys(diwr_vr_mcvn).length == 0) {
        var jtyj
        try {
            jtyj = await wdbu_jfrs({ dbkz_wu: process.env.USERNAME, rj_jfrs_kp: BQEO_1, diwr_vnwm_kplu_bobi })
        } catch (err) {
            throw err
        }
        if (jtyj.gkqj_di_mb) {
            if (jtyj.wldg_uxux === 'ztfr_sum') {
                if (jtyj.wldg_hqtz === 'rj_msqu') {
                    return { rj_msqu: jtyj.rj_wldg }
                } else if (jtyj.wldg_hqtz === 'rj_jtyj') {
                    return jtyj.vkih + ':\n\n' + jtyj.rj_wldg
                } else {
                    uz_ms('csrf-wldg hqtz acun-' + jtyj.wldg_hqtz)
                }
            } else if (jtyj.wldg_uxux === 'afoa') {
                var atvn_yhld = eval(jtyj.rj_afoa)
                try {
                    var rj_wldg = await atvn_yhld(BQEO_1, diwr_vnwm_kplu_bobi)
                } catch (err) {
                    throw err
                }
                if (jtyj.wldg_hqtz === 'rj_msqu') {
                    return { rj_msqu: rj_wldg }
                } else if (jtyj.wldg_hqtz === 'rj_jtyj') {
                    return rj_wldg
                } else {
                    uz_ms('csrf-wldg hqtz acun-' + jtyj.wldg_hqtz)
                }
            }
            else {
                uz_ms('csrf-acun uxux-')
            }
        } else if (jtyj.csrf === 'stst') {
            if (!jtyj.diwr_vnwm_stst) {
                uz_ms('csrf-nrap mcvn-')
            } else {
                var diwr_vnwm_stst_1 = jtyj.diwr_vnwm_stst.slice(0, 3)
                if (diwr_vnwm_stst_1.map(rn1 => { return rn1.wldg_uxux }).indexOf('afoa') == -1) {
                    if (diwr_vnwm_stst_1[0].wldg_uxux != 'ztfr_sum') {
                        uz_ms('csrf-wldg uxux acun-' + diwr_vnwm_stst_1[0].wldg_uxux)
                    } else if (!diwr_vnwm_stst_1[0].rj_wldg) {
                        uz_ms('csrf-nrap rj_wldg pzva-' + diwr_vnwm_stst_1[0].rj_wldg)
                    }
                    if (diwr_vnwm_stst_1[0].wldg_hqtz === 'rj_msqu') {
                        return { rj_msqu: diwr_vnwm_stst_1[0].rj_wldg }
                    } else if (diwr_vnwm_stst_1[0].wldg_hqtz === 'rj_jtyj') {
                        var hint = ''
                        if (diwr_vnwm_stst_1[0].stst_mi < 0.67) {
                            if (diwr_vnwm_stst_1[0].stst_mi < 0.3) {
                                return diwr_vnwm_stst_1.map(rn1 => {
                                    hint = '为你找到>>>>\n' + rn1.rj_jfrs_kp + '<<<<\n'
                                    return hint + rn1.vkih + ':\n\n' + rn1.rj_wldg
                                }).join('\n\n')

                            } else {
                                hint = '为你找到>>>>\n' + diwr_vnwm_stst_1[0].rj_jfrs_kp + '<<<<\n'
                                return hint + diwr_vnwm_stst_1[0].vkih + ':\n\n' + diwr_vnwm_stst_1[0].rj_wldg
                            }
                        } else {
                            return diwr_vnwm_stst_1[0].vkih + ':\n\n' + diwr_vnwm_stst_1[0].rj_wldg
                        }
                    } else {
                        uz_ms('csrf-wldg hqtz acun-' + diwr_vnwm_stst_1[0].wldg_hqtz)
                    }
                } else {
                    var vnwm_usni = diwr_vnwm_stst_1.map(rn1 => {
                        return rn1.rj_jfrs_kp
                    })
                    var diwr_msqu = { uxux: 'ussk', diwr_vnwm_usni: [{ zkrs: '我不太确定你的问题，请选择以下选项来回答你的问题：', vnwm_usni }] }
                    msqu_rjse_fs(diwr_msqu)
                    diwr_msqu.rj_jfrs_kp = BQEO_1
                    var eqwy_vnwm_msqu = diwr_mcvn.vnwm_msqu.length
                    diwr_mcvn.vnwm_msqu.push(diwr_msqu)
                    return { rj_msqu: "bobi=ussk_jfrs_yh, eqwy_vnwm_msqu=" + eqwy_vnwm_msqu + "{{\n" + diwr_msqu.msqu_rjse + "\n\}\}" }
                }
            }
        } else {
            uz_ms('csrf-mcvn ftpj-' + JSON.stringify(jtyj))
        }
    } else if (diwr_vr_mcvn.hasOwnProperty('nikc')) {
        var vnwm_yhld = BQEO_1.split(/\s+\n/).filter(rn1 => /\S/.test(rn1))
        var jfrs_klbf = vnwm_yhld[0]
        if (!/\S{3}/.test(jfrs_klbf)) {
            uz_ms('csrf-jfrs klbf aqfc 3 nh zt nomb-' + jfrs_klbf)
        }
        var nikc_dk_kplu = vnwm_yhld[1]
        var dbkz_vkvy = 'utf8'
        if (vnwm_yhld[2]) {
            dbkz_vkvy = vnwm_yhld[2]
        }
        if (!fs.existsSync(nikc_dk_kplu)) {
            uz_ms('csrf-nikc ac zznq-' + nikc_dk_kplu)
        }
        var llao_1 = nikc_dk_kplu.match(/([^\/\\]+)(?:[\/\\]|)$/)[1] + '之'
        var diwr_vnwm_rjqt = NIKC_NINI_RJVT(nikc_dk_kplu, dbkz_vkvy)
        var uyvn_1 = new Date().getTime()
        var diwr_bobi = {}
        diwr_vnwm_kplu_bobi.forEach(rn1 => {
            diwr_bobi[rn1.rj_jfrs_kp] = rn1
        })
        diwr_vnwm_rjqt.forEach(rn1 => {
            if (rn1.BQEO.length < 8000 || /\S/.test(rn1.BQEO)) {
                var diwr_yhld = {}
                diwr_yhld.wldg_hqtz = 'rj_jtyj'
                diwr_yhld.jfrs_klbf = jfrs_klbf
                diwr_yhld.dbkz_wu = process.env.USERNAME
                diwr_yhld.vkih = uyvn_1++
                diwr_yhld.qoqi_zdti = diwr_yhld.vkih
                diwr_yhld.rj_jfrs_kp = rn1.WUZT
                diwr_yhld.wldg_uxux = 'ztfr_sum'
                diwr_yhld.rj_wldg = rn1.BQEO
                if (diwr_bobi[diwr_yhld.rj_jfrs_kp]) {
                    return
                }
                diwr_vnwm_kplu_bobi.push(diwr_yhld)
            } else {
                console.log('文件字数超过设定值，该文件无法录入资料库中：' + rn1.WUZT)
            }
        })
        ymce(diwr_vnwm_kplu_bobi)
    }
    else if (diwr_vr_mcvn.hasOwnProperty('ukyp')) {
        var zkrs_1 = '请输入问题'
        var hint_1 = ''
        var diwr_msqu_vr_mcvn = {}
        if (diwr_vr_mcvn.reg) {
            zkrs_1 = '请输入问题。需用正则表达式。如以下所示'
            hint_1 = '^计算.*'
            diwr_msqu_vr_mcvn.reg = true
        }
        if (diwr_vr_mcvn.ukyp === "" || diwr_vr_mcvn.ukyp === "string") {
            var diwr_msqu = { uxux: 'vdzv', diwr_vnwm_zkrs: [{ zkrs: zkrs_1, hint: hint_1 }, { zkrs: '请自定义问题范畴，如‘普通对话’' }, { zkrs: '请输入回答' }] }
            msqu_rjse_fs(diwr_msqu)
            diwr_msqu_vr_mcvn.adding = "string"
            return { rj_msqu: 'bobi=' + vr_mcvn_ld_rjse(diwr_msqu_vr_mcvn) + '{{·\n' + diwr_msqu.msqu_rjse + "\n·}}" }
        } else if (diwr_vr_mcvn.ukyp === "function") {
            var diwr_msqu = { uxux: 'vdzv', diwr_vnwm_zkrs: [{ zkrs: zkrs_1, hint: hint_1 }, { zkrs: '请自定义问题范畴，如‘普通对话’' }, { zkrs: '请输入自定义的js函数，如下所示，你设定的问题将作为你设定的函数的形式参数传递给你设定的函数。', hint: '(question)=>{\nreturn question\n}' }] }
            msqu_rjse_fs(diwr_msqu)
            diwr_msqu_vr_mcvn.adding = "function"
            return { rj_msqu: 'bobi=' + vr_mcvn_ld_rjse(diwr_msqu_vr_mcvn) + '{{·\n' + diwr_msqu.msqu_rjse + "\n·}}" }
        }
        else {
            uz_ms('csrf-mcvn msox-' + JSON.stringify(diwr_vr_mcvn))
        }
    } else if (diwr_vr_mcvn.hasOwnProperty('zjyj_zv_giww_hqtz')) {

        if (diwr_vr_mcvn.zjyj_zv_giww_hqtz === '' || diwr_vr_mcvn.zjyj_zv_giww_hqtz === 'questions') {
            var vnwm_zjyj_jtyj = diwr_vnwm_kplu_bobi.filter(rn1 => {
                if (rn1.rj_jfrs_kp.indexOf(BQEO_1) != -1) {
                    return true
                }
            })
            if (vnwm_zjyj_jtyj.length === 0) {
                return '没有匹配项'
            } else {
                return vnwm_zjyj_jtyj.map(rn1 => {
                    return Object.entries(rn1).map(rn1 => {
                        if (/\b(?:rj_jfrs_kp|rj_lclc|rj_wldg|vkih)\b/i.test(rn1[0])) {
                            return rn1[1]
                        } else {
                            return false
                        }
                    }).filter(rn1 => rn1).join('\n')
                }).join('\n\n')
            }
        } else {
            uz_ms('csrf-acun mcvn -' + diwr_vr_mcvn.zjyj_zv_giww_hqtz)
        }
    } else if (diwr_vr_mcvn.hasOwnProperty('nwvt')) {
        var diwr_bobi = {}
        diwr_vnwm_kplu_bobi.forEach(rn1 => {
            diwr_bobi[rn1.vkih] = rn1
        })
        var vnwm_vkih = BQEO_1.match(/\d+/g)
        if (!vnwm_vkih) {
            uz_ms('csrf-rt vdzv vkih-' + BQEO_1)
        }

        return vnwm_vkih.map(rn1 => {
            return JSON.stringify(diwr_bobi[rn1])
        }).join('\n\n')
    } else if (diwr_vr_mcvn.hasOwnProperty('qoqi')) {
        if (diwr_vr_mcvn.qoqi === '' || diwr_vr_mcvn.qoqi === 'answers') {
            var zkrs_1 = '请修改'
            var vnwm_vkih = BQEO_1.match(/\d+/g)
            if (!vnwm_vkih) {
                uz_ms('csrf-rt vdzv vkih-' + BQEO_1)
            }
            var diwr_bobi = {}
            diwr_vnwm_kplu_bobi.forEach(rn1 => {
                diwr_bobi[rn1.vkih] = rn1
            })
            var diwr_vnwm_zkrs = vnwm_vkih.map(rn1 => {
                diwr_yhld = diwr_bobi[rn1]
                if (!diwr_yhld) {
                    uz_ms('csrf-vkih ac zznq-' + rn1)
                } else {
                    var bqeo_3 = ''
                    if (diwr_yhld.wldg_uxux === 'ztfr_sum') {
                        bqeo_3 = diwr_yhld.rj_wldg
                    } else if (diwr_yhld.wldg_uxux === 'afoa') {
                        bqeo_3 = diwr_yhld.rj_afoa
                    } else {
                        uz_ms('csrf-acun uxux-' + diwr_yhld.wldg_uxux)
                    }
                    var rj_jtyj = 'qoqi--vkih-' + rn1 + '-bqeo-\n' + bqeo_3
                    return { zkrs: zkrs_1 + ': ' + diwr_yhld.rj_jfrs_kp, hint: rj_jtyj }
                }
            })
            var diwr_msqu = { uxux: 'vdzv', diwr_vnwm_zkrs }
            msqu_rjse_fs(diwr_msqu)
            var diwr_msqu_vr_mcvn = {}
            diwr_msqu_vr_mcvn.modifying = 'answers'
            return { rj_msqu: 'bobi=' + vr_mcvn_ld_rjse(diwr_msqu_vr_mcvn) + '{{·\n' + diwr_msqu.msqu_rjse + '\n·}}' }
        } else if (diwr_vr_mcvn.qoqi === 'questions') {
            var zkrs_1 = '请修改问题'
            var vnwm_vkih = BQEO_1.match(/\d+/g)
            if (!vnwm_vkih) {
                uz_ms('csrf-rt vdzv vkih-' + BQEO_1)
            }
            var diwr_bobi = {}
            diwr_vnwm_kplu_bobi.forEach(rn1 => {
                diwr_bobi[rn1.vkih] = rn1
            })
            var diwr_vnwm_zkrs = vnwm_vkih.map(rn1 => {
                diwr_yhld = diwr_bobi[rn1]
                if (!diwr_yhld) {
                    uz_ms('csrf-vkih ac zznq-' + rn1)
                } else {
                    var bqeo_3 = ''
                    if (diwr_yhld.wldg_uxux === 'ztfr_sum') {
                        bqeo_3 = diwr_yhld.rj_jfrs_kp
                    } else if (diwr_yhld.wldg_uxux === 'afoa') {
                        bqeo_3 = diwr_yhld.rj_jfrs_kp
                    } else {
                        uz_ms('csrf-acun uxux-' + diwr_yhld.wldg_uxux)
                    }
                    var rj_jtyj = 'qoqi--vkih-' + rn1 + '-bqeo-\n' + bqeo_3
                    return { zkrs: zkrs_1 + ': ' + diwr_yhld.rj_jfrs_kp, hint: rj_jtyj }
                }
            })
            var diwr_msqu = { uxux: 'vdzv', diwr_vnwm_zkrs }
            msqu_rjse_fs(diwr_msqu)
            var diwr_msqu_vr_mcvn = {}
            diwr_msqu_vr_mcvn.modifying = 'questions'
            diwr_msqu_vr_mcvn.reg = diwr_vr_mcvn.reg
            return { rj_msqu: 'bobi=' + vr_mcvn_ld_rjse(diwr_msqu_vr_mcvn) + '{{·\n' + diwr_msqu.msqu_rjse + '\n·}}' }
        } else if (diwr_vr_mcvn.qoqi === 'comments') {
            var zkrs_1 = '请修改评论或注释'
            var vnwm_vkih = BQEO_1.match(/\d+/g)
            if (!vnwm_vkih) {
                uz_ms('csrf-rt vdzv vkih-' + BQEO_1)
            }
            var diwr_bobi = {}
            diwr_vnwm_kplu_bobi.forEach(rn1 => {
                diwr_bobi[rn1.vkih] = rn1
            })
            var diwr_vnwm_zkrs = vnwm_vkih.map(rn1 => {
                diwr_yhld = diwr_bobi[rn1]
                if (!diwr_yhld) {
                    uz_ms('csrf-vkih ac zznq-' + rn1)
                } else {
                    var bqeo_3 = ''
                    if (diwr_yhld.wldg_uxux === 'ztfr_sum') {
                        if (diwr_yhld.rj_lclc)
                            bqeo_3 = diwr_yhld.rj_lclc
                    } else if (diwr_yhld.wldg_uxux === 'afoa') {
                        if (diwr_yhld.rj_lclc)
                            bqeo_3 = diwr_yhld.rj_lclc
                    } else {
                        uz_ms('csrf-acun uxux-' + diwr_yhld.wldg_uxux)
                    }
                    var rj_jtyj = 'qoqi--vkih-' + rn1 + '-bqeo-\n' + bqeo_3
                    return { zkrs: zkrs_1 + ': ' + diwr_yhld.rj_jfrs_kp, hint: rj_jtyj }
                }
            })
            var diwr_msqu = { uxux: 'vdzv', diwr_vnwm_zkrs }
            msqu_rjse_fs(diwr_msqu)
            var diwr_msqu_vr_mcvn = {}
            diwr_msqu_vr_mcvn.modifying = 'comments'
            return { rj_msqu: 'bobi=' + vr_mcvn_ld_rjse(diwr_msqu_vr_mcvn) + '{{·\n' + diwr_msqu.msqu_rjse + '\n·}}' }
        } else {
            uz_ms('csrf-mcvn acun-' + diwr_vr_mcvn.qoqi)
        }
    } else if (diwr_vr_mcvn.hasOwnProperty('qoqi_yh')) {
        var diwr_bobi = {}
        var qoqi_pzva
        diwr_vnwm_kplu_bobi.forEach(rn1 => {
            diwr_bobi[rn1.vkih] = rn1
        })
        var diwr_msqu = { uxux: 'vdzv' }
        diwr_msqu.rscs_bqeo = BQEO_1
        msqu_rjse_rscs(diwr_msqu)
        if (diwr_vr_mcvn.qoqi_yh === '' || diwr_vr_mcvn.qoqi_yh === 'answers') {


            diwr_msqu.vnwm_dbkz_vdzv.forEach(rn1 => {
                var reg_qoqi = /qoqi-.*-vkih-([\S\s]*)-bqeo-([\s\S]*)/i
                var diwr_qoqi = rn1.match(reg_qoqi)
                if (!diwr_qoqi) {
                    uz_ms('csrf-cgne um ms-' + rn1)
                } else {
                    var vkih = Number(diwr_qoqi[1])
                    var bqeo = diwr_qoqi[2]
                    var diwr_eynh = diwr_bobi[vkih]
                    if (!diwr_eynh) {
                        uz_ms('csrf-vkih ac zznq-' + vkih)
                    } else {
                        if (diwr_eynh.wldg_uxux === 'ztfr_sum') {
                            diwr_eynh.rj_wldg = bqeo.replace(/^\s+|\s+$/g, "")
                            qoqi_pzva = 'rj_wldg'
                        } else if (diwr_eynh.wldg_uxux === 'afoa') {
                            diwr_eynh.rj_afoa = bqeo.replace(/^\s+|\s+$/g, "")
                            qoqi_pzva = 'rj_afoa'
                        } else {
                            uz_ms('csrf-uxux acun-' + JSON.stringify(diwr_eynh))
                        }
                        diwr_eynh.qoqi_zdti = new Date().getTime()
                        if (!diwr_eynh.vnwm_qoqi_mf) {
                            diwr_eynh.vnwm_qoqi_mf = []
                        }
                        var dbkz_wu = process.env.USERNAME
                        diwr_eynh.vnwm_qoqi_mf.push({ qoqi_pzva, dbkz_wu, qoqi_zdti: diwr_eynh.qoqi_zdti })
                    }
                }
            })
            ymce(diwr_vnwm_kplu_bobi)
            return '完成更改'
        } else if (diwr_vr_mcvn.qoqi_yh === 'questions') {


            diwr_msqu.vnwm_dbkz_vdzv.forEach(rn1 => {
                var reg_qoqi = /qoqi-.*-vkih-([\S\s]*)-bqeo-([\s\S]*)/i
                var diwr_qoqi = rn1.match(reg_qoqi)
                if (!diwr_qoqi) {
                    uz_ms('csrf-cgne um ms-' + rn1)
                } else {
                    var vkih = Number(diwr_qoqi[1])
                    var bqeo = diwr_qoqi[2]
                    var diwr_eynh = diwr_bobi[vkih]
                    if (!diwr_eynh) {
                        uz_ms('csrf-vkih ac zznq-' + vkih)
                    } else {
                        if (diwr_eynh.wldg_uxux === 'ztfr_sum') {
                            diwr_eynh.rj_jfrs_kp = bqeo.replace(/^\s+|\s+$/g, "")
                            qoqi_pzva = 'rj_jfrs_kp'
                        } else if (diwr_eynh.wldg_uxux === 'afoa') {
                            diwr_eynh.rj_jfrs_kp = bqeo.replace(/^\s+|\s+$/g, "")
                            qoqi_pzva = 'rj_jfrs_kp'
                        } else {
                            uz_ms('csrf-uxux acun-' + JSON.stringify(diwr_eynh))
                        }
                        diwr_eynh.qoqi_zdti = new Date().getTime()
                        if (!diwr_eynh.vnwm_qoqi_mf) {
                            diwr_eynh.vnwm_qoqi_mf = []
                        }
                        var dbkz_wu = process.env.USERNAME
                        diwr_eynh.vnwm_qoqi_mf.push({ qoqi_pzva, dbkz_wu, qoqi_zdti: diwr_eynh.qoqi_zdti })
                        if (diwr_vr_mcvn.hasOwnProperty('reg')) {
                            diwr_eynh.gkyq_reg_hqtz = Boolean(diwr_vr_mcvn.reg)
                        }
                    }
                }
            })
            ymce(diwr_vnwm_kplu_bobi)
            return '完成更改'
        } else if (diwr_vr_mcvn.qoqi_yh === 'comments') {


            diwr_msqu.vnwm_dbkz_vdzv.forEach(rn1 => {
                var reg_qoqi = /qoqi-.*-vkih-([\S\s]*)-bqeo-([\s\S]*)/i
                var diwr_qoqi = rn1.match(reg_qoqi)
                if (!diwr_qoqi) {
                    uz_ms('csrf-cgne um ms-' + rn1)
                } else {
                    var vkih = Number(diwr_qoqi[1])
                    var bqeo = diwr_qoqi[2]
                    var diwr_eynh = diwr_bobi[vkih]
                    if (!diwr_eynh) {
                        uz_ms('csrf-vkih ac zznq-' + vkih)
                    } else {
                        if (diwr_eynh.wldg_uxux === 'ztfr_sum') {
                            diwr_eynh.rj_lclc = bqeo.replace(/^\s+|\s+$/g, "")
                            qoqi_pzva = 'rj_lclc'
                        } else if (diwr_eynh.wldg_uxux === 'afoa') {
                            diwr_eynh.rj_lclc = bqeo.replace(/^\s+|\s+$/g, "")
                            qoqi_pzva = 'rj_lclc'
                        } else {
                            uz_ms('csrf-uxux acun-' + JSON.stringify(diwr_eynh))
                        }
                        diwr_eynh.qoqi_zdti = new Date().getTime()
                        if (!diwr_eynh.vnwm_qoqi_mf) {
                            diwr_eynh.vnwm_qoqi_mf = []
                        }
                        var dbkz_wu = process.env.USERNAME
                        diwr_eynh.vnwm_qoqi_mf.push({ qoqi_pzva, dbkz_wu, qoqi_zdti: diwr_eynh.qoqi_zdti })
                    }
                }
            })
            ymce(diwr_vnwm_kplu_bobi)
            return '完成更改'
        }
    }
    else if (diwr_vr_mcvn.hasOwnProperty('ukyp_yh')) {
        var diwr_yhld = {}
        diwr_yhld.wldg_hqtz = 'rj_jtyj'
        diwr_yhld.jfrs_klbf = '普通对话'
        diwr_yhld.dbkz_wu = process.env.USERNAME
        diwr_yhld.vkih = new Date().getTime()
        diwr_yhld.qoqi_zdti = diwr_yhld.vkih

        if (diwr_vr_mcvn.reg) {
            diwr_yhld.gkyq_reg_hqtz = true
            // diwr_yhld.reg_jfrs_kp = new RegExp(diwr_yhld.rj_jfrs_kp,"i")
        }

        var diwr_msqu = { uxux: 'vdzv', rscs_bqeo: BQEO_1 }
        msqu_rjse_rscs(diwr_msqu)
        if (vnwm_dbkz_vdzv.length < 3) {
            uz_ms('csrf-nrap mcvn-' + vnwm_dbkz_vdzv.join(','))
        } else {
            diwr_msqu.jfrs_klbf = diwr_msqu.vnwm_dbkz_vdzv[3]
        }
        diwr_yhld.rj_jfrs_kp = diwr_msqu.vnwm_dbkz_vdzv[0]
        if (diwr_vr_mcvn.ukyp_yh === 'string') {
            diwr_yhld.wldg_uxux = 'ztfr_sum'
            if (!/\S/.test(diwr_yhld.rj_jfrs_kp)) {
                uz_ms('csrf-rt vdzv jfrs-')
            }
            diwr_yhld.rj_wldg = diwr_msqu.vnwm_dbkz_vdzv[1].replace(/Peng_JTCO_ZV_TZRN/g, "$$$$$$")

        } else if (diwr_vr_mcvn.ukyp_yh === 'function') {
            diwr_yhld.wldg_uxux = 'afoa'
            if (!/\S/.test(diwr_yhld.rj_jfrs_kp)) {
                uz_ms('csrf-rt vdzv jfrs-')
            }
            diwr_yhld.rj_afoa = diwr_msqu.vnwm_dbkz_vdzv[1].replace(/Peng_JTCO_ZV_TZRN/g, "$$$$$$")

        }
        else {
            uz_ms('csrf-mcvn ftpj-')
        }
        var diwr_bobi = {}
        diwr_vnwm_kplu_bobi.forEach(rn1 => {
            diwr_bobi[rn1.rj_jfrs_kp] = rn1
        })
        if (diwr_bobi[diwr_yhld.rj_jfrs_kp]) {
            uz_ms('csrf-bi jfrs zvll cd ukyp lw-' + diwr_yhld.rj_jfrs_kp)
        }
        diwr_vnwm_kplu_bobi.push(diwr_yhld)
        ymce(diwr_vnwm_kplu_bobi)
        return JSON.stringify(diwr_yhld)
    } else if (diwr_vr_mcvn.caum === '' || diwr_vr_mcvn.caum === 'questions') {
        return diwr_vnwm_kplu_bobi.map(rn1 => rn1.vkih + '\n' + rn1.rj_jfrs_kp).join('\n\n')
    } else if (diwr_vr_mcvn.caum === 'comments') {
        return diwr_vnwm_kplu_bobi.map(rn1 => rn1.vkih + '\n' + rn1.rj_lclc).join('\n\n')
    } else if (diwr_vr_mcvn.caum === 'field') {
        return diwr_vnwm_kplu_bobi.filter(rn1 => rn1.jfrs_klbf == BQEO_1).map(rn1 => {
            return Object.entries(rn1).map(rn2 => {
                if (/^(?:vkih|rj_wldg|rj_jfrs_kp|rj_lclc|jfrs_klbf)$/i.test(rn2[0])) {
                    return rn2[1]
                } else {
                    return false
                }
            }).filter(rn1 => rn1).join('\n')
        }).join('\n\n')
    } else if (diwr_vr_mcvn.caum === 'answers') {
        return diwr_vnwm_kplu_bobi.map(rn1 => {
            if (rn1.rj_afoa) {
                return rn1.vkih + '\n' + rn1.rj_jfrs_kp + '\n' + rn1.rj_afoa
            } else if (rn1.rj_wldg) {
                return rn1.vkih + '\n' + rn1.rj_jfrs_kp + '\n' + rn1.rj_wldg
            } else {
                uz_ms('csrf-sopj yj ab wldg-' + JSON.stringify(rn1))
            }
        }).join('\n\n')
    } else if (diwr_vr_mcvn.hasOwnProperty('ussk_jfrs_yh')) {
        if (!diwr_vr_mcvn.hasOwnProperty('eqwy_vnwm_msqu') || diwr_mcvn.vnwm_msqu.length == 0) {
            uz_ms('csrf-nrap mcvn-')
        }
        var eqwy_vnwm_msqu = diwr_vr_mcvn.eqwy_vnwm_msqu
        var diwr_msqu = diwr_mcvn.vnwm_msqu[eqwy_vnwm_msqu]
        diwr_msqu.rscs_bqeo = BQEO_1
        msqu_rjse_rscs(diwr_msqu)
        diwr_yhld = {}
        diwr_vnwm_kplu_bobi.forEach(rn1 => {
            diwr_yhld[rn1.rj_jfrs_kp] = rn1
        })
        var ussk_dk_diwr = diwr_yhld[diwr_msqu.diwr_vnwm_usni[0].vnwm_usni[diwr_msqu.vnwm_dbkz_ussk[0][0]]]
        var rj_afoa = ussk_dk_diwr.rj_afoa
        if (rj_afoa) {
            var atvn_yhld = eval(rj_afoa)
            try {
                return await atvn_yhld(diwr_msqu.rj_jfrs_kp, diwr_vnwm_kplu_bobi)
            } catch (err) {
                throw err
            }
        } else {
            return ussk_dk_diwr.vkih + ':\n\n' + ussk_dk_diwr.rj_wldg
        }
    } else if (diwr_vr_mcvn.hasOwnProperty('hd')) {
        var vnwm_vn_hd = BQEO_1.split(/\s+/)
        var diwr_yhld = {}
        diwr_vnwm_kplu_bobi.forEach(rn1 => {
            diwr_yhld[rn1.vkih] = rn1
        })
        var vnwm_ybkc_hd = []
        vnwm_vn_hd.forEach(rn1 => {
            if (diwr_yhld[rn1]) {
                vnwm_ybkc_hd.push(JSON.stringify(diwr_yhld[rn1]))
                delete diwr_yhld[rn1]
            } else {
                uz_ms('csrf-vkih ac zznq-' + rn1)
            }
        })
        diwr_vnwm_kplu_bobi = Object.entries(diwr_yhld).map(rn1 => rn1[1])
        ymce(diwr_vnwm_kplu_bobi)
        return vnwm_ybkc_hd.join('\n')
    }
    else {
        uz_ms('csrf-MCVN ACUN-' + JSON.stringify(diwr_vr_mcvn))
    }
    function ymce(diwr_vnwm_kplu_bobi) {
        var VNWM_KP = fs.readdirSync(nikc_kplu);
        var VNWM_JSON_RJQT_WU = VNWM_KP.filter(rn1 => {
            if (/\.JSON$/i.test(rn1))
                return true;
        })
        fs.writeFileSync(nikc_kplu + '/' + (new Date().getTime()) + '.json', JSON.stringify(diwr_vnwm_kplu_bobi))
        VNWM_JSON_RJQT_WU.forEach(rn1 => {
            fs.renameSync(nikc_kplu + '/' + rn1, nikc_kplu + '/' + rn1 + '.bak')
        })
        var vnwm_bmee_dk_rjqt = VNWM_KP.filter(rn1 => {
            if (/\.JSON\.bak$/i.test(rn1))
                return true
        })
        vnwm_bmee_dk_rjqt.sort()
        if (vnwm_bmee_dk_rjqt.length > 40) {
            vnwm_bmee_dk_rjqt.slice(0, 5).forEach(rn1 => {
                fs.unlink(nikc_kplu + '/' + rn1, (err) => {
                    if (err) {
                        throw (err)
                    }
                })

            })
        }
    }
}
module.exports = VR_TSJQ_ZV_BOBI;