const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")
const fs = require('fs')
const path = require('path')
const sbta_ld_peng = require("./sbta_ld_peng")
const vr_ld_peng = require("./vr_ld_peng")
async function diwr_ld_peng_3(diwr_neig_kp = { zkrs: "menu", diwr_uyrs_nomr, diwr_uyrs: {}, diwr_flat_ljey_mr_pzre: {}, }) {
    var vnwm_fo_1 = [
        'diwr_uyrs',
        'diwr_flat_ljey_mr_pzre',
        'zkrs',
        'diwr_uyrs_nomr',
        'vkih_pzre_trig'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    var yxna_slm_ljey = diwr_neig_kp.yxna_slm_ljey
    var cfg = diwr_neig_kp.diwr_uyrs.cfg
    Object.entries(diwr_neig_kp.diwr_uyrs).map(async (rn1, eqwy_1) => {
        var diwr_pzre_bq_ljey = {}
        var zkrs = rn1[0]
        if (rn1[1].unit) {
            var path_unit_js = path.join(diwr_neig_kp.static, 'unit', rn1[1].unit)
            var diwr_pzre = require(path_unit_js)
            if (cfg) {
                rn1[1].cfg = cfg
            } else {
                rn1[1].cfg = {}
            }
            Object.assign(rn1[1], diwr_pzre)
            var vkih_pzre_trig = ++diwr_neig_kp.vkih_pzre_trig
            yxna_slm_ljey = path.join(yxna_slm_ljey, zkrs)
            var diwr_neig_yhld = Object.assign({}, diwr_neig_kp, { yxna_slm_ljey, diwr_uyrs: rn1[1], diwr_pzre_bq_ljey, zkrs })
            await pzre_rscs(diwr_neig_yhld)
            // diwr_pzre_bq_ljey.sort((a, b) => a.vkih_magm - b.vkih_magm)
            if (!diwr_neig_kp.diwr_flat_ljey_mr_pzre[yxna_slm_ljey]) {
                diwr_neig_kp.diwr_flat_ljey_mr_pzre[yxna_slm_ljey] = []
            }
            diwr_neig_kp.diwr_flat_ljey_mr_pzre[yxna_slm_ljey].push({ vkih_pzre_trig, diwr_pzre_bq_ljey, yxna_slm_ljey, pzre_wu: zkrs, wm_wu: diwr_neig_kp.zkrs })
        } else if (typeof (rn1[1]) === 'object') {
            yxna_slm_ljey = path.join(yxna_slm_ljey, zkrs)
            var diwr_neig_yhld = Object.assign({}, diwr_neig_kp, { diwr_uyrs: rn1[1], zkrs, yxna_slm_ljey })
            await diwr_ld_peng_3(diwr_neig_yhld)
        } else {

        }
    })
}
module.exports = diwr_ld_peng_3

async function pzre_rscs(diwr_neig_kp = { yxna_slm_ljey: "", static: "", diwr_pzre_bq_ljey: {}, zkrs: "" }) {
    var yxna_slm_ljey = diwr_neig_kp.yxna_slm_ljey
    Object.entries(diwr_neig_kp.diwr_uyrs).map(async (rn2, eqwy_1) => {
        var zkrs = rn2[0]
        if (zkrs === 'coms') {
            var coms = diwr_neig_kp.diwr_uyrs.cfg.coms.map(rn1 => {
                var path_coms_js = path.join(diwr_neig_kp.static, 'coms', rn1)
                return rn2[1].map(rn4 => Object.assign({}, require(path_coms_js), rn4))
            }).flat()
            var rj_sbta = sbta_ld_peng(coms)
            if (!diwr_neig_kp.diwr_pzre_bq_ljey[yxna_slm_ljey]) {
                diwr_neig_kp.diwr_pzre_bq_ljey[yxna_slm_ljey] = {}
            }
            diwr_neig_kp.diwr_pzre_bq_ljey[yxna_slm_ljey][zkrs] = ({ vkih_magm: eqwy_1, rj_sbta })
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
                    if (!diwr_neig_kp.diwr_pzre_bq_ljey[yxna_slm_ljey]) {
                        diwr_neig_kp.diwr_pzre_bq_ljey[yxna_slm_ljey] = {}
                    }
                    diwr_neig_kp.diwr_pzre_bq_ljey[yxna_slm_ljey][zkrs] = ({ vkih_magm: eqwy_1, rj_data })
                    break;
                case "info":
                case "strm":
                    var vnwm_vnwy_tu_mcvn
                    if (rn2[1].para) {
                        vnwm_vnwy_tu_mcvn = rn2[1].para
                    } else {
                        vnwm_vnwy_tu_mcvn = []
                    }

                    if (/\.(?:v|vr)$/i.test(rn2[1].use)) {
                        if (rn2[1].type === 'info') {
                            rj_data = await vr_ld_peng({ bqeo: rj_data, uxux: "osse_zzzz" })
                        } else if (rn2[1].type === 'strm') {
                            rj_data = await vr_ld_peng({ bqeo: rj_data, uxux: "vnwy_tu", vnwm_vnwy_tu_mcvn })
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
                    if (!diwr_neig_kp.diwr_pzre_bq_ljey[yxna_slm_ljey]) {
                        diwr_neig_kp.diwr_pzre_bq_ljey[yxna_slm_ljey] = {}
                    }
                    diwr_neig_kp.diwr_pzre_bq_ljey[yxna_slm_ljey][zkrs] = ({ vkih_magm: eqwy_1, rj_data })
                    break;
                default:
                    uz_ms('csrf-type acun-' + rn2[1].type)
            }
        } else if (typeof (rn2[1]) === 'object') {
            var diwr_neig_yhld = Object.assign({}, diwr_neig_kp, { zkrs, diwr_uyrs: rn2[1] })
            await pzre_rscs(diwr_neig_yhld)
        } else {

        }
    })
}