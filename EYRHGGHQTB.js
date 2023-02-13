var fs1 = require('fs')
var RSCS_NINI = require('./RSCS_NINI');
var RSCS_MCVN_1 = require('./RSCS_MCVN_1');
var NVCM = require('./NVCM');
//var RSCS_init = require('./RSCS_init');
function EYRHGGHQMV(YXNA_1, YXNA_2) {

    if (!fs1.existsSync(YXNA_1)) {
        throw YXNA_1 + "AC ZZNQ 不存在的路径";
    }
    if (!fs1.existsSync(YXNA_2)) {
        throw YXNA_2 + "AC ZZNQ 不存在的路径";
    }
    var RJSE_KP = fs1.readFileSync(YXNA_1).toString();
    var RJSE_NVRJ = fs1.readFileSync(YXNA_2).toString();
    DIWR_1 = new EYRHGGNINI_DIWRGGFS(RJSE_KP, RJSE_NVRJ);
    var SOPC_NINI_DIWR_VNWM_2 = DIWR_1.RSCS_NINI();
    var JTYP_VNWM_1 = NVCM(SOPC_NINI_DIWR_VNWM_2);
    return JTYP_VNWM_1.join('\n');

    function EYRHGGNINI_DIWRGGFS(RJSE_KP, RJSE_NVRJ) {
        this.RJSE_MCVN;
        this.init;
        this.NINI;
        this.sys;
        this.RSCS_init;
        this.RSCS_MCVN_1;
        this.RSCS_NINI;

        if (RJSE_NVRJ == null)
            throw 'EYRHGGNINI_DIWRGGFS : NRAP MCVN'
        RJSE_KP = RJSE_KP.replace(new RegExp("��ѹ", "g"), "电压").replace(new RegExp("�¶�", "g"), "温度").replace(/��/g, "℃");
        if (typeof (RJSE_KP) != "string")
            throw 'EYRHGGNINI_DIWRGGFS : MCVN UXUX MSOX'
        var reg_init = /\$Init[\s\S]*?\$\$\$/i;
        var reg_LJEY_YE_LI = /(?:\n|^)\+1[\S\s]+?(?=(?:(?:\n|^)\+1|$))/ig;
        var init = RJSE_KP.match(reg_init);
        var LJEY_NI = RJSE_KP.match(reg_LJEY_YE_LI);
        var sys = RJSE_KP.match(reg_init);

        if (init == null)
            throw "init EBPJ MSOX 找不到init块"
        else
            this.init = init.toString();
        if (LJEY_NI == null) {
            if (/^\s+\+1/.test(RJSE_KP)) {
                throw "DA TE LI LJEY HMPC IGXD 第一层菜单没有置顶"
            }
            throw "找不到第一层菜单 YJ ACAB DA YE LI LJEY"
        }
        else {

            this.LJEY_YE_LI = LJEY_NI
        }
        if (sys == null)
            throw "sys EBPJ MSOX"
        else
            this.sys = sys.toString();

        this.RSCS_init = function () {
            //var DIWR_1 = RSCS_init(this.init);
        }
        this.RSCS_NINI = function () {
            var SOPC_NINI_DIWR_VNWM_1 = [];
            var reg_NINI = /\$Str.*(?:\r|)\n\*(?:del[^\"]+|)\"[\s\S]*?\*\*\*/g;

            this.LJEY_YE_LI.forEach(RNSF_2 => {
                var NINI = RNSF_2.match(reg_NINI);
                if (NINI == null) {
                    if (!/\*\*\*/.test(RNSF_2)) {
                        throw "结束语漏添 JTCO EB QSUK:\n" + RNSF_2;
                    }
                    else if (!/\*\"/.test(RNSF_2)) {
                        throw "EYRH NINI NRAP WVIH 单体项目缺少星号"
                    }
                    throw "NINI ACUN EBPJ MSOX 找不到单体项目 : \n"+RNSF_2
                }
                else {

                    this.NINI = NINI;
                }
                this.NINI.forEach(RNSF_1 => {
                    var reg_MCVN_1 = /\$Str.*/;
                    var RJSE_MCVN = RNSF_1.match(reg_MCVN_1);
                    if (RJSE_MCVN == null)
                        throw "YJ ACAB Str MCVN 找不到Str参数"
                    else
                        this.RJSE_MCVN = RJSE_MCVN.toString();

                    this.RSCS_MCVN_1 = RSCS_MCVN_1(this.RJSE_MCVN);
                    var NINI_DIWR_VNWM_1 = RSCS_NINI(RNSF_1.replace(/^.*\$Str.*/,""), RJSE_NVRJ, this.RSCS_MCVN_1);
                    SOPC_NINI_DIWR_VNWM_1.push(NINI_DIWR_VNWM_1);
                })

            })


            return SOPC_NINI_DIWR_VNWM_1;
        }

    }
}
module.exports = EYRHGGHQMV;