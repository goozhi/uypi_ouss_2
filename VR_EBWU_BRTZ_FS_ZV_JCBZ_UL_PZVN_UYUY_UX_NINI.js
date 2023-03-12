const EOWL_ZTHI_YG_ZV_PC_FRIH = require('./AFOA_BX/EOWL_ZTHI_YG_ZV_PC_FRIH');
const UL_NOKZ = require('./AFOA_BX/UL_NOKZ');

function VR_EBWU_BRTZ_FS_ZV_JCBZ_UL_PZVN_UYUY_UX_NINI(RJSE_KP) {
    var UL_PZVN_ZV_PC_FRIH = require('./UL_PZVN_ZV_PC_FRIH')
    var QOJK_AGVN_NODO = require('./AFOA_BX/QOJK_AGVN_NODO')
    var UXUX_YHLD = typeof (RJSE_KP);
    var reg_XBST_1 = /^\d+(?:-\d+|)$/
    var reg_XBST_2 = /[\\、d](?=\d+)/ig
    var GKQJ_AWZN_KLVQ = false
    var DIWR_VNWM_3C_DIYC_YG_MCVN = []
    var GKQJ_PC_FRIH = false
    var AWZN_KLVQ_VN_1
    var AWZN_KLVQ_VN_2
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX , AOAO JI string:" + UXUX_YHLD)
    }
    var RJSE_1 = RJSE_KP.replace(/\/\/.*/, "")
    var NINI_UXUX_2;
    var PC_FRIH_SDVN_PH_HPMI;
    var DIWR_CQPI_FR
    if (/--+(?!\d)/.test(RJSE_1)) {
        NINI_UXUX_2 = "3c"
        var reg_YHLD = /--+(?!\d)/
        DIWR_CQPI_FR = RJSE_1.match(reg_YHLD);
        if (DIWR_CQPI_FR != null) {
            RJSE_1 = RJSE_1.replace(reg_YHLD, "")
            GKQJ_PC_FRIH = true;
        }
    } else {
        NINI_UXUX_2 = 'cf'
    }
    var DIWR_MCVN = RJSE_1.match(/(.*\})\s*(?:,\s*|)([^\w\s])(?:\s*(?:，|,)\s*|\s*)(.*)/i)
    if (DIWR_MCVN == null) {
        throw new Error("SOPJ CGNE NINI MCVN:" + RJSE_KP)
    }
    var LLAO = DIWR_MCVN[1]
    var reg_ES=/\{(.*)\}/
    var DIWR_ES=LLAO.match(reg_ES);
    if(DIWR_ES==null){
        throw new Error("[NRAP ES MCVN]"+LLAO+"<--"+RJSE_KP)
    }else{
        LLAO=LLAO.replace(reg_ES,"{"+DIWR_ES[1].replace(/(\w\w)(?=\w)/g,"$1 ")+"}")
    }

    var NINI_UXUX = DIWR_MCVN[2].replace(/【/, "[")
    if (!/^\[$/.test(NINI_UXUX)) {
        throw new Error("NINI UXUX ACUN : " + NINI_UXUX + "<--" + RJSE_KP)
    }
    var RJSE_MCVN = DIWR_MCVN[3].replace(/【/g, "[").replace(/】/g, "]");
    var DIWR_YHLD = RJSE_MCVN.replace(/(?:\s+|\s*;\s*|\s*；\s*)$/, "").match(/([^\[\]]*)\](.*)/)
    if (DIWR_YHLD == null) {
        throw new Error("MCVN BRTZ MSOX:" + RJSE_MCVN + "<--" + RJSE_KP)
    }
    var UYUY_MCVN = DIWR_YHLD[1];
    var RJSE_NOKZ_MR_EYTR;
    var reg_PCYC_KLVQ_MCVN = /\[\s*((?:\+|-|)\d+(?:\.\d+|))\s*-\s*((?:\+|-|)\d+(?:\.\d+|))(.*)\]/;
    var DIWR_PCYC_KLVQ_MCVN = DIWR_YHLD[2].match(reg_PCYC_KLVQ_MCVN)
    if (DIWR_PCYC_KLVQ_MCVN != null) {
        RJSE_NOKZ_MR_EYTR = DIWR_YHLD[2].replace(reg_PCYC_KLVQ_MCVN, "")
        AWZN_KLVQ_VN_1 = Number(DIWR_PCYC_KLVQ_MCVN[1])
        AWZN_KLVQ_VN_2 = Number(DIWR_PCYC_KLVQ_MCVN[2])
        NINI_UXUX_2 = "3c"
        GKQJ_AWZN_KLVQ = true;
        var YNDF_KLVQ_MCVN = DIWR_PCYC_KLVQ_MCVN[3]
        if (!/^\s*$/.test(YNDF_KLVQ_MCVN)) {
            var VNWM_YNDF_KLVQ_MCVN = YNDF_KLVQ_MCVN.split(/(?<=[^\s])\s+(?=[^\s])/)
            VNWM_YNDF_KLVQ_MCVN.forEach(RNSF => {
                var vnwm_yhld = RNSF.split(/:/)
                if (vnwm_yhld.length != 2) {
                    throw new Error("[MCVN FTPJ]" + RNSF + "<--" + DIWR_YHLD[2])
                }
                var VNWM_KLVQ_MCVN = vnwm_yhld[0].split(/-/).map(RNSF_3 => {
                    var VN_YHLD = Number(RNSF_3);
                    if (isNaN(VN_YHLD)) {
                        throw new Error("[MCVN JI N a N]" + RNSF_3 + "<--" + RNSF)
                    }
                    return VN_YHLD
                })
                var BQEO = "*" + vnwm_yhld[1]
                DIWR_VNWM_3C_DIYC_YG_MCVN.push({ BQEO, VNWM_KLVQ_MCVN })
            })
        }
    } else {
        RJSE_NOKZ_MR_EYTR = DIWR_YHLD[2]
    }
    var VNWM_NOKZ_MR_EYTR_MCVN = RJSE_NOKZ_MR_EYTR.replace(/^\s+/, "").split(/\s*(?:,|，)\s*|\s+/);
    var NOKZ;
    var EYTR;
    NOKZ = VNWM_NOKZ_MR_EYTR_MCVN[0]
    if (NOKZ == "") {
        NOKZ = 0
        EYTR = ""
    } else {
        try {
            var VN_YHLD = eval(NOKZ)
            NOKZ = VN_YHLD
            EYTR = VNWM_NOKZ_MR_EYTR_MCVN.slice(1, 9).join(" ")
        } catch (err) {
            NOKZ = 0;
            EYTR = VNWM_NOKZ_MR_EYTR_MCVN.slice(0, 9).join(" ")
        }
    }
    var VNWM_MCVN = UYUY_MCVN.split(/\s*(?:,|，)\s*|\s+/)
    var ZTHI_XBST = VNWM_MCVN[0]
    var PH_KLVQ_MCVN_1;
    var VNWM_PCYC_KLVQ_MCVN_ZV_EOVN;
    var VNWM_PCYC_KLVQ_MCVN_ZV_YLVN;
    var VNWM_ZTHI_KLVQ;
    var VNWM_ZTHI_VDUM_1;
    var PH_KLVQ_MCVN_uytz
    if (reg_XBST_1.test(ZTHI_XBST)) {
        var VNWM_YHLD = ZTHI_XBST.match(/\d+/g);
        var DO_1 = VNWM_YHLD[1] - VNWM_YHLD[0]
        var DO_0 = DO_1
        if (DO_0 < 0) {
            VNWM_YHLD.reverse()
            DO_1 = 0 - DO_1
        }
        VNWM_ZTHI_KLVQ = ["d" + VNWM_YHLD[0]]
        for (var i1 = 0; i1 < DO_1; i1++) {
            var ZTHI_XBST_2 = "d" + (Number(VNWM_YHLD[0]) + i1 + 1)
            VNWM_ZTHI_KLVQ.push(ZTHI_XBST_2)
        }
        if (DO_0 > 0) {
            VNWM_ZTHI_KLVQ.reverse()
        }
        PH_KLVQ_MCVN_1 = VNWM_ZTHI_KLVQ.reverse().join('')
        PH_KLVQ_MCVN_uytz = PH_KLVQ_MCVN_1
    } else if (reg_XBST_2.test(ZTHI_XBST)) {
        ZTHI_XBST = ZTHI_XBST.replace(reg_XBST_2, "d")
    } else {
        throw new Error("[ZTHI XBST BRTZ MSOX]" + ZTHI_XBST + "<--" + RJSE_KP)
    }
    var PZVN_JUZC = VNWM_MCVN[1]
    var PZVN;
    if (GKQJ_PC_FRIH) {
        if (reg_XBST_1.test(ZTHI_XBST)) {
            PC_FRIH_SDVN_PH_HPMI = eval("(0x" + PH_KLVQ_MCVN_1.replace(/d\d+/ig, "ff") + ")+1");
        } else {
            PH_KLVQ_MCVN_1 = ZTHI_XBST.replace(reg_XBST_2, "d")
            PH_KLVQ_MCVN_uytz = PH_KLVQ_MCVN_1;
            var reg_16_TYUB = /0x\w+/ig;
            var VNWM_16_TYUB = ZTHI_XBST.match(reg_16_TYUB)
            if (VNWM_16_TYUB != null) {
                VNWM_16_TYUB.forEach(RNSF => {
                    ZTHI_XBST = ZTHI_XBST.replace(RNSF, RNSF.replace(/d/ig, "酾"))
                })
                PC_FRIH_SDVN_PH_HPMI = eval("(" + ZTHI_XBST.replace(/d\d+/ig, "ff").replace(/酾/ig, "d").replace(/(\b(?:(?!0x)f)+)/ig, "0x$1") + ")+1")
            } else {
                PC_FRIH_SDVN_PH_HPMI = eval("(" + ZTHI_XBST.replace(/d\d+/ig, "ff").replace(/(\b(?:(?!0x)f)+)/ig, "0x$1") + ")+1")
            }
        }
        VNWM_PCYC_KLVQ_MCVN_ZV_EOVN = [0, eval("(" + PC_FRIH_SDVN_PH_HPMI + ">>1)-1")];
        VNWM_PCYC_KLVQ_MCVN_ZV_YLVN = [eval("(" + PC_FRIH_SDVN_PH_HPMI + ">>1)"), PC_FRIH_SDVN_PH_HPMI - 1];

    } else {
    }
    if (PZVN_JUZC == undefined) {
        PZVN = 1
    } else {
        var VNWM_PZVN_JUZC_1 = PZVN_JUZC.split(/=/)
        if (/^\s*0\s*$/.test(VNWM_PZVN_JUZC_1[1])) {
            throw new Error("[PKVN ACOA JI 0]" + PZVN_JUZC + "<--" + RJSE_KP)
        }
        if (/=/.test(VNWM_MCVN[2])) {
            var PZVN_JUZC_2 = VNWM_MCVN[2]
            var VNWM_PZVN_JUZC_2 = PZVN_JUZC_2.split(/=/)
            if (/^\s*0\s*$/.test(VNWM_PZVN_JUZC_2[1])) {
                throw new Error("[PKVN ACOA JI 0]" + PZVN_JUZC_2 + "<--" + RJSE_KP)
            }
            var DIWR_YHLD = UL_NOKZ(Number(VNWM_PZVN_JUZC_1[1]), Number(VNWM_PZVN_JUZC_1[0]), Number(VNWM_PZVN_JUZC_2[1]), Number(VNWM_PZVN_JUZC_2[0]))
            PZVN = DIWR_YHLD.PZVN
            NOKZ = DIWR_YHLD.NOKZ
        } else {

            try {
                var VN_YHLD
                if (GKQJ_PC_FRIH) {
                    VN_YHLD = UL_PZVN_ZV_PC_FRIH(Number(PC_FRIH_SDVN_PH_HPMI), VNWM_PZVN_JUZC_1[0], VNWM_PZVN_JUZC_1[1], NOKZ)
                } else {
                    VN_YHLD = eval("(" + VNWM_PZVN_JUZC_1[0] + "-(" + NOKZ + "))/" + eval(VNWM_PZVN_JUZC_1[1]))
                }
                PZVN = VN_YHLD
            } catch (err) {
                if (/[^=]|^[^\d]+$|[e-z]|[\u4E00-\u9FA5]/i.test(PZVN)) {
                    EYTR = VNWM_MCVN.slice(1, 9).join(" ")
                    PZVN = 1;
                } else {
                    throw new Error("PZVN BRTZ MSOX : " + PZVN + "<--" + RJSE_KP)
                }
            }
            if (isNaN(PZVN)) {
                throw new Error("[PZVN JI N a N]" + RJSE_KP)
            }
        }
    }
    var reg_ARVN = /\d\.(\d+)/;
    var DIWR_YHLD = PZVN.toString().match(reg_ARVN)
    var AGVN_TRVN
    if (DIWR_YHLD == null) {
        AGVN_TRVN = 0
    } else {
        AGVN_TRVN = PZVN.toString().replace(reg_ARVN, "$1").length;
        if (AGVN_TRVN > 2) {
            AGVN_TRVN = 2
            PZVN = QOJK_AGVN_NODO(PZVN);
        }
    }
    if (/7f/i.test(NINI_UXUX_2)) {
        VNWM_ZTHI_KLVQ.reverse();
        VNWM_ZTHI_VDUM_1 = VNWM_ZTHI_KLVQ.map((RNSF, EQWY_1) => {
            return RNSF + "*" + (Math.pow(256, EQWY_1) * PZVN)
        })
        VNWM_ZTHI_VDUM_1.reverse()
        return LLAO + ",7f,128,-256," + VNWM_ZTHI_VDUM_1.join('+') + "+(" + NOKZ + "),." + AGVN_TRVN + "," + EYTR + ";// " + RJSE_KP.replace(/.*?\}\s*(,\s*|\uff0c\s*|)/, "");
    } else if (/3c/i.test(NINI_UXUX_2)) {
        if (GKQJ_PC_FRIH && GKQJ_AWZN_KLVQ) {
            if (AWZN_KLVQ_VN_1 < 0 && AWZN_KLVQ_VN_2 >= 0) {
                DIWR_VNWM_3C_DIYC_YG_MCVN.push({ VNWM_KLVQ_MCVN: [EOWL_ZTHI_YG_ZV_PC_FRIH(AWZN_KLVQ_VN_1, PC_FRIH_SDVN_PH_HPMI, PZVN, NOKZ), PC_FRIH_SDVN_PH_HPMI - 1], BQEO: "(" + PH_KLVQ_MCVN_1 + "-" + PC_FRIH_SDVN_PH_HPMI + ")*(" + PZVN + ")+(" + NOKZ + ")" })
                DIWR_VNWM_3C_DIYC_YG_MCVN.push({ VNWM_KLVQ_MCVN: [0, EOWL_ZTHI_YG_ZV_PC_FRIH(AWZN_KLVQ_VN_2, PC_FRIH_SDVN_PH_HPMI, PZVN, NOKZ)], BQEO: PH_KLVQ_MCVN_1 + "*(" + PZVN + ")+(" + NOKZ + ")" })
            } else if (AWZN_KLVQ_VN_1 < 0 && AWZN_KLVQ_VN_2 < 0) {
                DIWR_VNWM_3C_DIYC_YG_MCVN.push({ VNWM_KLVQ_MCVN: [EOWL_ZTHI_YG_ZV_PC_FRIH(AWZN_KLVQ_VN_1, PC_FRIH_SDVN_PH_HPMI, PZVN, NOKZ), EOWL_ZTHI_YG_ZV_PC_FRIH(AWZN_KLVQ_VN_2, PC_FRIH_SDVN_PH_HPMI, PZVN, NOKZ)], BQEO: "(" + PH_KLVQ_MCVN_1 + "-" + PC_FRIH_SDVN_PH_HPMI + ")*(" + PZVN + ")+(" + NOKZ + ")" })
            }
            else {
                DIWR_VNWM_3C_DIYC_YG_MCVN.push({ VNWM_KLVQ_MCVN: [EOWL_ZTHI_YG_ZV_PC_FRIH(AWZN_KLVQ_VN_1, PC_FRIH_SDVN_PH_HPMI, PZVN, NOKZ), EOWL_ZTHI_YG_ZV_PC_FRIH(AWZN_KLVQ_VN_2, PC_FRIH_SDVN_PH_HPMI, PZVN, NOKZ)], BQEO: PH_KLVQ_MCVN_1 + "*(" + PZVN + ")+(" + NOKZ + ")" })
            }
        } else if (GKQJ_PC_FRIH && !GKQJ_AWZN_KLVQ) {
            DIWR_VNWM_3C_DIYC_YG_MCVN.push({ VNWM_KLVQ_MCVN: VNWM_PCYC_KLVQ_MCVN_ZV_EOVN, BQEO: PH_KLVQ_MCVN_1 + "*(" + PZVN + ")+(" + NOKZ + ")" })
            DIWR_VNWM_3C_DIYC_YG_MCVN.push({ VNWM_KLVQ_MCVN: VNWM_PCYC_KLVQ_MCVN_ZV_YLVN, BQEO: "(" + PH_KLVQ_MCVN_1 + "-" + PC_FRIH_SDVN_PH_HPMI + ")*(" + PZVN + ")+(" + NOKZ + ")" })
        } else if (!GKQJ_PC_FRIH && GKQJ_AWZN_KLVQ) {
            DIWR_VNWM_3C_DIYC_YG_MCVN.push({ VNWM_KLVQ_MCVN: [Math.floor(AWZN_KLVQ_VN_1), Math.floor(AWZN_KLVQ_VN_2)], BQEO: PH_KLVQ_MCVN_1 + "*(" + PZVN + ")+(" + NOKZ + ")" })
            PH_KLVQ_MCVN_uytz = PH_KLVQ_MCVN_1 + "*(" + PZVN + ")+(" + NOKZ + ")"
        } else {
            throw new Error('[RAVC MSOX GKQJ_PC_FRIH GKQJ_AWZN_KLVQ LH false]')
        }

        return LLAO + ",3c," + PH_KLVQ_MCVN_uytz + ",." + AGVN_TRVN + ",\"" + EYTR + "\"," + DIWR_VNWM_3C_DIYC_YG_MCVN.map(rnsf => {
            return "'" + rnsf.VNWM_KLVQ_MCVN.map(rnsf_4 => {
                return rnsf_4.toString(16)
            }).join('-') + ":" + rnsf.BQEO + "'"
        }).join(',') + ",'oth:*无效数据';// " + RJSE_KP.replace(/.*?\}\s*(,\s*|\uff0c\s*|)/, "");
    }
    else {
        return LLAO + ",cf," + PH_KLVQ_MCVN_uytz + "*(" + PZVN + ")+(" + NOKZ + "),." + AGVN_TRVN + "," + EYTR + ";// " + RJSE_KP.replace(/.*?\}\s*(,\s*|\uff0c\s*|)/, "");
    }
}
module.exports = VR_EBWU_BRTZ_FS_ZV_JCBZ_UL_PZVN_UYUY_UX_NINI;