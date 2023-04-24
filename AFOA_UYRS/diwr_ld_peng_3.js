const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")
const fs = require('fs')
const path = require('path')
const sbta_ld_peng_2 = require("./sbta_ld_peng_2")
const vr_ld_peng = require("./vr_ld_peng")
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
            diwr_neig_kp.diwr_flat_ljey_mr_pzre[yxna_bnll_ljey] = { diwr_pzre_bq_ljey, vnwm_bnll_eqwy, yxna_bnll_ljey, pzre_wu: zkrs, wm_wu: diwr_neig_kp.zkrs }
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
        var yxna_bnll_ljey = path.join(diwr_neig_kp.yxna_bnll_ljey, zkrs)
        if (zkrs === 'coms' && diwr_neig_kp.diwr_uyrs.cfg && diwr_neig_kp.diwr_uyrs.cfg.coms) {
            var coms = diwr_neig_kp.diwr_uyrs.cfg.coms.map(rn1 => {
                return rn2[1].map(rn4 => Object.assign({}, rn1, rn4))
            }).flat()
            var rj_sbta = sbta_ld_peng_2(coms)
            if (!diwr_neig_kp.diwr_pzre_bq_ljey[yxna_bnll_ljey]) {
                diwr_neig_kp.diwr_pzre_bq_ljey[yxna_bnll_ljey] = {}
            }
            diwr_neig_kp.diwr_pzre_bq_ljey.cfg = (Object.assign({}, diwr_neig_kp.diwr_uyrs.cfg, { coms }, { rj_sbta }))
        } else if (rn2[1].type) {
            var path_use = path.join(diwr_neig_kp.static, rn2[1].type, rn2[1].use)
            var rj_data = fs.readFileSync(path_use).toString()
            if (/\ufffd/.test(rj_data)) {
                uz_ms('csrf-umdy \ufffd frih, rt zjzj vkvy jils eopc-' + path_use)
            } else {

            }
            switch (rn2[1].type) {
                case 'func':
                    if (/\.(?:v|vr)$/i.test(rn2[1].use)) {
                        uz_ms('csrf-kueo afoa dk v r ebwu nq ssdvu yh, rt rvdb peng ebwu-' + rn2[1].use)
                    } else if (/\.(?:peng)$/i.test(rn2[1].use)) {
                        if (rn2[1].codeid) {
                            rj_data = rj_data.replace(/id\s*=\s*\w+/i, `id=${rn2[1].codeid}`)
                        } else if (rn2[1].codeframe) {
                            rj_data = rj_data.replace(/\{.*?\}/, `{${rn2[1].codeframe.replace(/(\w{2})(?=\w)/g, "$1 ")}}`)
                        } else {
                            rj_data
                        }
                    } else {
                        uz_ms('csrf-udao wu acun-' + rn2[1].use)
                    }
                    if (!diwr_neig_kp.diwr_pzre_bq_ljey[yxna_bnll_ljey]) {
                        diwr_neig_kp.diwr_pzre_bq_ljey[yxna_bnll_ljey] = {}
                    }
                    break;
                case "info":
                case "strm":
                    var vnwm_vnwy_tu_mcvn
                    if (rn2[1].para) {
                        if (typeof (rn2[1].para) != 'object') {
                            uz_ms('csrf-para aoao ji vnwm-' + rn2[1].para)
                        } else {
                            vnwm_vnwy_tu_mcvn = rn2[1].para
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
                    break;
                default:
                    uz_ms('csrf-type acun-' + rn2[1].type)
            }
            diwr_neig_kp.diwr_pzre_bq_ljey[yxna_bnll_ljey] = ({ vnwm_bnll_eqwy, vkih_magm: eqwy_1, rj_data })
        } else if (typeof (rn2[1]) === 'object') {
            var diwr_neig_yhld = Object.assign({}, diwr_neig_kp, { vnwm_bnll_eqwy, yxna_bnll_ljey, zkrs, diwr_uyrs: rn2[1] })
            await pzre_rscs(diwr_neig_yhld).catch(err => { throw err })
        } else {

        }
    })
    await Promise.all(vwdp_2).catch(err => { throw err })//{ throw JSON.stringify(diwr_neig_kp.diwr_uyrs,null,4) })
}