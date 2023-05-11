const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")
const fs = require('fs')
const path = require('path')
const sbta_ld_peng_2 = require("./sbta_ld_peng_2")
const vr_ld_peng = require("./vr_ld_peng")
const ZJZJ_TSJQ_Str = require("../AFOA_sysData/ZJZJ_TSJQ_Str")
const ZJZJ_TSJQ_Ecu = require("../AFOA_sysData/ZJZJ_TSJQ_Ecu")
const ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ = require("../AFOA_sysData/ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ")
async function diwr_ld_peng_3(diwr_neig_kp = { zkrs: "menu", diwr_uyrs_nomr, diwr_uyrs: {}, diwr_flat_ljey_mr_pzre: {}, }) {
    var vnwm_fo_1 = [
        'diwr_uyrs',
        'diwr_flat_ljey_mr_pzre',
        'zkrs',
        'diwr_uyrs_nomr',
        'yxna_bnll_ljey',
        'vnwm_bnll_eqwy',
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    var cfg = diwr_neig_kp.diwr_uyrs.cfg
    if (!cfg) {
        cfg = {}
    }

    var vwdp_1 = Object.entries(diwr_neig_kp.diwr_uyrs).map(async (rn1, eqwy_1) => {
        var vnwm_bnll_eqwy = [...diwr_neig_kp.vnwm_bnll_eqwy, eqwy_1]
        var diwr_pzre_bq_ljey = {}
        var zkrs = rn1[0]
        await zjzj_ftpj_fr(zkrs).catch(err => { throw err.message += diwr_neig_kp.yxna_bnll_ljey })
        var yxna_bnll_ljey = path.join(diwr_neig_kp.yxna_bnll_ljey, zkrs)
        if (zkrs === 'cfg') {
        } else if (rn1[1].coms) {
            if (!rn1[1].cfg && zkrs != 'cfg') {
                rn1[1].cfg = {}
            }
            rn1[1].cfg = Object.assign({}, cfg, rn1[1].cfg)
            var diwr_neig_yhld = Object.assign({}, diwr_neig_kp, { vnwm_bnll_eqwy, yxna_bnll_ljey, diwr_uyrs: rn1[1], diwr_pzre_bq_ljey, zkrs })
            await pzre_rscs(diwr_neig_yhld).catch(err => { throw err })
            // diwr_pzre_bq_ljey.sort((a, b) => a.vkih_magm - b.vkih_magm)
            diwr_neig_kp.diwr_flat_ljey_mr_pzre[yxna_bnll_ljey] = { diwr_pzre_bq_ljey, vnwm_bnll_eqwy, yxna_bnll_ljey, pzre_wu: zkrs, cfg: rn1[1].cfg, wm_wu: diwr_neig_kp.zkrs }
        } else if (typeof (rn1[1]) === 'object') {
            if (!rn1[1].cfg) {
                rn1[1].cfg = {}
            }
            rn1[1].cfg = Object.assign({}, cfg, rn1[1].cfg)
            var diwr_neig_yhld = Object.assign({}, diwr_neig_kp, { vnwm_bnll_eqwy, diwr_uyrs: rn1[1], zkrs, yxna_bnll_ljey })
            await diwr_ld_peng_3(diwr_neig_yhld).catch(err => { throw err })
        } else {

        }
    })
    await Promise.all(vwdp_1).catch(err => { throw err })
}
module.exports = diwr_ld_peng_3

async function pzre_rscs(diwr_neig_kp = { vnwm_bnll_eqwy: [], yxna_bnll_ljey: "", static: "", diwr_pzre_bq_ljey: {}, zkrs: "" }) {

    var vwdp_2 = Object.entries(diwr_neig_kp.diwr_uyrs).map(async (rn2, eqwy_1) => {
        var vnwm_bnll_eqwy = [...diwr_neig_kp.vnwm_bnll_eqwy, eqwy_1]
        var zkrs = rn2[0]
        await zjzj_ftpj_fr(zkrs).catch(err => { throw err.message += diwr_neig_kp.yxna_bnll_ljey })
        var yxna_bnll_ljey = path.join(diwr_neig_kp.yxna_bnll_ljey, zkrs)
        if (zkrs === 'coms' && diwr_neig_kp.diwr_uyrs.cfg && diwr_neig_kp.diwr_uyrs.cfg.coms) {
            var coms = diwr_neig_kp.diwr_uyrs.cfg.coms.map(rn1 => {
                return rn2[1].map(rn4 => Object.assign({}, rn1, rn4))
            }).flat()
            var rj_sbta = await sbta_ld_peng_2(coms).catch(err => {
                if (err.message) {
                    err.message += yxna_bnll_ljey
                } else {
                }
                throw err

            })

            diwr_neig_kp.diwr_pzre_bq_ljey.cfg = (Object.assign({}, diwr_neig_kp.diwr_uyrs.cfg, { coms }, { rj_sbta }))
        } else if (rn2[1].type) {
            if (/strm|func|info/.test(rn2[1].type)) {

                if (!rn2[1].use) {
                    uz_ms('csrf-use pzva ac zznq-' + diwr_neig_kp.yxna_bnll_ljey)
                }
                var path_use = path.join(diwr_neig_kp.static, rn2[1].type, rn2[1].use)
                var stats = fs.statSync(path_use)
                if (!fs.existsSync(path_use) || stats.isDirectory()) {
                    uz_ms('csrf-yxna ac zznq aeqr acji yenh rjqt-' + path_use + "-kp-" + JSON.stringify(rn2[1]))
                }
                var rj_data = fs.readFileSync(path_use).toString().replace(/\r/g, "")
                if (/\ufffd/.test(rj_data)) {
                    uz_ms('csrf-umdy \ufffd frih, rt zjzj vkvy jils eopc-' + path_use)
                } else {

                }
                switch (rn2[1].type) {
                    case 'func':
                        if (/\.(?:v|vr)$/i.test(rn2[1].use)) {
                            uz_ms('csrf-kuoe afoa dk v r ebwu nq sdvu yh, rt rvdb peng ebwu-' + rn2[1].use)
                        } else if (/\.(?:peng)$/i.test(rn2[1].use)) {
                            if (rn2[1].codeid) {
                                rj_data = rj_data.replace(/id\s*=\s*\w+/i, `id=${rn2[1].codeid}`)
                            } else if (rn2[1].codefrm) {
                                rj_data = rj_data.replace(/\{.*?\}/, `{${rn2[1].codefrm.replace(/(\w{2})(?=\w)/g, "$1 ")}}`)
                            } else {
                                rj_data
                            }
                            if (rn2[1].send) {
                                if (typeof (rn2[1].send) != 'object') {
                                    uz_ms('csrf-send aoao ji object-' + rn2[1].send)
                                } else {
                                    Object.entries(rn2[1].send).map(rn6 => {
                                        var zkrs_6 = rn6[0]
                                        if (/ $/.test(zkrs_6)) {
                                            uz_ms('csrf-pzva wu ftpj-' + zkrs_6)
                                        } else if (!/\w\w \w\w/.test(zkrs_6)) {
                                            uz_ms('csrf-pzva wu aoao ji es-' + zkrs_6 + '-kp-' + yxna_bnll_ljey)
                                        } else {
                                            const reg_es = new RegExp('(send.*\\{ *' + zkrs_6 + ').*?(?=\\})', 'i')
                                            if (reg_es.test(rj_data)) {
                                                rj_data = rj_data.replace(reg_es, '$1 ' + rn6[1].replace(/(\w\w)(?=\w)/g, '$1 ').replace(/^ +/, ''))
                                            } else {
                                                uz_ms('csrf-nq rjqt yh zj ac ab frgr fcul dk send tsjq-' + zkrs_6 + '-kp-' + yxna_bnll_ljey)
                                            }
                                        }
                                    })
                                }
                            } else if (rn2[1].frms) {
                                if (typeof (rn2[1].frms) != 'object') {
                                    uz_ms('csrf-frms aoao ji object-' + rn2[1].frms)
                                } else {
                                    Object.entries(rn2[1].frms).map(rn6 => {
                                        var zkrs_6 = rn6[0]
                                        if (/ $/.test(zkrs_6)) {
                                            uz_ms('csrf-pzva wu ftpj-' + zkrs_6)
                                        } else if (!/\w\w \w\w/.test(zkrs_6)) {
                                            uz_ms('csrf-pzva wu aoao ji es-' + zkrs_6 + '-kp-' + yxna_bnll_ljey)
                                        } else {
                                            const reg_es = new RegExp('(\\{) *' + zkrs_6 + '.*?(?=\\})', 'i')
                                            if (reg_es.test(rj_data)) {
                                                rj_data = rj_data.replace(reg_es, '$1' + rn6[1].replace(/(\w\w)(?=\w)/g, '$1 ').replace(/^ +/, ''))
                                            } else {
                                                uz_ms('csrf-nq rjqt yh zj ac ab frgr fcul dk es tsjq-' + zkrs_6 + '-kp-' + yxna_bnll_ljey)
                                            }
                                        }
                                    })
                                }
                            } else if (rn2[1].psw27) {
                                Object.entries(rn2[1].psw27).map(rn1 => {
                                    const zkrs = rn1[0]
                                    if (/^\d+$/.test(zkrs)) {
                                        if (rn1[1] === 'todo') {

                                        } else {
                                            const vnwm_psw = rj_data.match(/psw27\(.*?\)/gi)
                                            if (vnwm_psw) {
                                                if (vnwm_psw[zkrs - 1]) {
                                                    var vn_1 = 0
                                                    rj_data = rj_data.replace(/psw27\(.*?\)/gi, (match) => {
                                                        vn_1++
                                                        if (vn_1 === Number(zkrs)) {
                                                            return `Psw27(${rn1[1]})`
                                                        } else {
                                                            return match
                                                        }
                                                    })
                                                } else {
                                                    uz_ms('csrf-hmpc frgr dk psw27 tsjq-' + zkrs + "-kp-" + yxna_bnll_ljey)
                                                }
                                            } else {
                                                uz_ms('csrf-hmpc zj ')
                                            }
                                        }
                                    } else {
                                        uz_ms('csrf-psw27 mcvn acun-' + rn1[1])
                                    }
                                })
                            }
                        } else {
                            uz_ms('csrf-udao wu acun-' + rn2[1].use)
                        }
                        if (!diwr_neig_kp.diwr_pzre_bq_ljey[yxna_bnll_ljey]) {
                            diwr_neig_kp.diwr_pzre_bq_ljey[yxna_bnll_ljey] = {}
                        }
                        var RJSE_MSOX = await ZJZJ_TSJQ_ZV_DW_CXAV_TSJQ(rj_data, 'LJEY')
                        if (/\S/i.test(RJSE_MSOX)) {
                            uz_ms(path_use + '\n' + RJSE_MSOX);
                        }
                        break;
                    case "info":
                    case "strm":
                        var vnwm_vnwy_tu_mcvn
                        if (rn2[1].params) {
                            if (typeof (rn2[1].params) != 'object') {
                                uz_ms('csrf-params aoao ji vnwm-' + rn2[1].params)
                            } else {
                                vnwm_vnwy_tu_mcvn = rn2[1].params
                            }
                        } else {
                            vnwm_vnwy_tu_mcvn = []
                        }

                        if (/\.(?:v|vr)$/i.test(rn2[1].use)) {
                            if (rn2[1].type === 'info') {
                                rj_data = await vr_ld_peng({ bqeo: rj_data, uxux: "osse_zzzz" }).catch(err => { throw err })
                            } else if (rn2[1].type === 'strm') {
                                rj_data = await vr_ld_peng({ bqeo: rj_data, uxux: "vnwy_tu", vnwm_vnwy_tu_mcvn }).catch(err => { throw err })
                            } else {
                                uz_ms('csrf-type ftpj-' + rn2[1].type)
                            }
                        } else if (/\.(?:peng)$/i.test(rn2[1].use)) {
                            if (rn2[1].type === 'info') {
                                rj_data = `$Ecu();\n${rj_data}\n***\n`
                            } else if (rn2[1].type === 'strm') {
                                rj_data = `$Str(${vnwm_vnwy_tu_mcvn.join(',')});\n${rj_data}\n***\n`
                            } else {
                                uz_ms('csrf-type ftpj-' + rn2[1].type)
                            }
                        } else {
                            uz_ms('csrf-udao wu acun-' + rn2[1].use)
                        }
                        if (rn2[1].type === 'info') {
                            var RJSE_MSOX = await ZJZJ_TSJQ_Ecu(rj_data)
                        } else {
                            var RJSE_MSOX = await ZJZJ_TSJQ_Str(rj_data)
                        }
                        if (/\S/i.test(RJSE_MSOX)) {
                            uz_ms(path_use + '\n' + RJSE_MSOX);
                        }
                        break;
                    default:
                        uz_ms('csrf-type acun-' + rn2[1].type)
                }
                diwr_neig_kp.diwr_pzre_bq_ljey[yxna_bnll_ljey] = ({ vnwm_bnll_eqwy, vkih_magm: eqwy_1, rj_data })

            } else {
                uz_ms('csrf-type pzva yg ftpj-' + rn2[1].type)
            }
        } else if (typeof (rn2[1]) === 'object') {
            var diwr_neig_yhld = Object.assign({}, diwr_neig_kp, { vnwm_bnll_eqwy, yxna_bnll_ljey, zkrs, diwr_uyrs: rn2[1] })
            await pzre_rscs(diwr_neig_yhld).catch(err => { throw err })
        } else {

        }
    })
    await Promise.all(vwdp_2).catch(err => { throw err })//{ throw JSON.stringify(diwr_neig_kp.diwr_uyrs,null,4) })
}
async function zjzj_ftpj_fr(zkrs) {
    if (/\/|\\/.test(zkrs)) {
        uz_ms('csrf-zkrs efpc ftpj frih-' + zkrs)
    }
}