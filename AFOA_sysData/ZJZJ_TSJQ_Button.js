const ZJZJ_TSJQ_Str = require("./ZJZJ_TSJQ_Str");

async function ZJZJ_TSJQ_Button(RJSE_KP) {
    var RJSE_MSOX = "";
    var ZJZJ_ES = require("./ZJZJ_ES");
    var RJSE_1 = RJSE_KP;
    var reg_Button_LD_MCVN = /\$Button\((.*)\)(?:;|)/i;
    var DIWR_Button_LG_MCVN = RJSE_1.match(reg_Button_LD_MCVN);
    if (DIWR_Button_LG_MCVN == null) {
        RJSE_MSOX += "\n<Button LGPH MSOX>\n" + RJSE_KP + "\n</Button LGPH MSOX>"
    } else {
        RJSE_1 = RJSE_1.replace(reg_Button_LD_MCVN, "");
    };
    if (!/^\s*$/.test(DIWR_Button_LG_MCVN[1])) {
        var reg_MCVN = /^\s*(?:[a-f]|\d)+\+-\s*$/i;
        if (!reg_MCVN.test(DIWR_Button_LG_MCVN[1])) {
            RJSE_MSOX += "[Button MCVN FTPJ] " + DIWR_Button_LG_MCVN[1] + "<--";
        } else {
            var reg_DPHP_MCVN = /(?:\+|-)(?:[a-f]|\d+)+(?=\{)/ig;
            var VNWM_DPHP_MCVN = RJSE_1.match(reg_DPHP_MCVN);
            if (VNWM_DPHP_MCVN == null) {
                RJSE_MSOX += "\n<NRAP DPHP MCVN>\n" + RJSE_KP + "\n</NRAP DPHP MCVN>"
            } else {
                RJSE_1 = RJSE_1.replace(reg_DPHP_MCVN)
            }
        }
    } else {
    }
    var reg_NINI =/(?:\n|^)&"(?:(?!&&&)[\S\s])*&&.*/;
    var DIWR_YHLD=RJSE_1.match(reg_NINI);
    if(DIWR_YHLD!=null){
        RJSE_1=RJSE_1.replace(reg_NINI,"");
        var RJSE_YHLD="$Str();\n"+DIWR_YHLD[0].replace(/&&&/,"***").replace(/&&/,"***").replace(/((?:\n|^))&/g,"$1*")
        RJSE_MSOX += await ZJZJ_TSJQ_Str(RJSE_YHLD);
    }
    var reg_Button_MCVN = /".*".*/ig;
    var VNWM_Button_MCVN = RJSE_1.match(reg_Button_MCVN);
    var reg_ES = /(?:\n|^)\s*"[^"\n]+"\s*(\{.*\})/;
    var ES;
    if (VNWM_Button_MCVN != null) {
        RJSE_1 = RJSE_1.replace(reg_Button_MCVN, "");
        VNWM_Button_MCVN.forEach(RNSF => {
            if (/^\s*"[^"\n]+"[A-Z]\w*/i.test(RNSF)) {
            } else if ((ES = RNSF.match(reg_ES)) !== null) {
                if (!/\{[^\}\n]*\}\s*;/.test(RNSF)) {
                    RJSE_MSOX += "\n[Button ES UDCC NRAP FDIH] " + RNSF + "<--"
                }
                var VNWM_YHLD=ES[1].split(/\//);
                VNWM_YHLD.forEach(RNSF=>{
                    RJSE_MSOX += ZJZJ_ES(RNSF);
                })
            } else {
                RJSE_MSOX += "\n[Button ACUN EBPJ] " + RNSF + " <--";
            }
        })
    } else {
        // RJSE_MSOX+="[Button NRAP MCVN]"
    }
    var RJSE_YHLD=RJSE_1.replace(/(?:;+|)\/\/.*/g,"")
    if (RJSE_YHLD != "") {
        // RJSE_1 = ZJZJ_ACUN(RJSE_1);
        RJSE_YHLD=RJSE_YHLD.replace(/^\s+$/,"")
        if (RJSE_YHLD != "")
            RJSE_MSOX += "\n<ZJZJ Button ZD VODY ACUN TSJQ>\n" + RJSE_1 + "\n</ZJZJ Button ZD VODY ACUN TSJQ>";
    }
    if (RJSE_MSOX != "") {
        RJSE_MSOX = "\n" + RJSE_MSOX;
    }
    return RJSE_MSOX;
}
module.exports = ZJZJ_TSJQ_Button;