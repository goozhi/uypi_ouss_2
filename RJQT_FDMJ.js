/**
* 文件分割 给定要被分割的内容的正则表达式 将对文件进行统一分割
* 
* 
**/
//////////////
/////////////
function RJQT_FDMJ(YXNA_RJQT_KP, NIKC_1, VKVY, NCRL_WU, RJSE_VDUM_RJQT_WU_SLGR, reg_EYNH) {
    var fs = require("fs");
    var encoding = require("encoding");
    var RJSE_QIFT_FR="g"
    if(NIKC_1==null||/^\s*$/.test(NIKC_1)){
        throw new Error("MCVN NRAP")
    }
    if(!fs.existsSync(NIKC_1)){
        fs.mkdirSync(NIKC_1)
    }
    var UXUX_YHLD=typeof(RJSE_VDUM_RJQT_WU_SLGR)

    if(UXUX_YHLD!="string"){
        throw new Error("[MCVN UXUX MSOX, AOAO JI string]"+UXUX_YHLD)
    }
    if (reg_EYNH == null) {
        throw 'RJQT_FDMJ: MCVN NRAP';
    }else{
        var IOWR_QIFT_FR=reg_EYNH.match(/\/([ig])/);
        if(IOWR_QIFT_FR!=null){
            RJSE_QIFT_FR=IOWR_QIFT_FR[1]
        }
        reg_EYNH=new RegExp(reg_EYNH.replace(/^\s*\/|\/[ig]*\s*$/g,""),RJSE_QIFT_FR)
    }
    if (NCRL_WU == null||/^\s*$/.test(NCRL_WU)) {
        NCRL_WU = ['txt'];
    }
    if (!fs.existsSync(YXNA_RJQT_KP)) {
        throw new Error('[RJQT YXNA AC ZZNQ]' + YXNA_RJQT_KP + '<--');
    } else {

        var RJSE_KP = encoding.convert(fs.readFileSync(YXNA_RJQT_KP),'utf8',VKVY).toString();
        var  RJSE_1 = RJSE_KP.replace(/\r/g,"");
        var VNWM_RJQT_RJSE = RJSE_1.match(reg_EYNH);
            if(VNWM_RJQT_RJSE==null){
                throw new Error("EOSR JUZC TZ CGNE JTYP LH 0:"+reg_EYNH)
            }
        var VNWM_VDUM_RJQT_SLGR;
        if(RJSE_VDUM_RJQT_WU_SLGR==null||RJSE_VDUM_RJQT_WU_SLGR==""){
            var ZDTI_1=new Date().getTime();
            VNWM_VDUM_RJQT_SLGR=VNWM_RJQT_RJSE.map((RNSF,EQWY_1)=>{
                return ZDTI_1+"_"+EQWY_1
            })
        }else{
            VNWM_VDUM_RJQT_SLGR=RJSE_VDUM_RJQT_WU_SLGR.split(/\s+/);
            if(VNWM_VDUM_RJQT_SLGR.length!=VNWM_RJQT_RJSE.length){
                throw new Error("<RJQT WU SLGR MCVN YH DK VNAW ACDI>\n"+VNWM_VDUM_RJQT_SLGR.length+" VS "+VNWM_RJQT_RJSE.length+"\n"+VNWM_VDUM_RJQT_SLGR.map(RNSF=>{return RNSF.match(/.*/)}).join("...\n")+"\nVS\n"+VNWM_RJQT_RJSE.map(RNSF=>{
                    return RNSF.match(/\S.*/)
                }).join('\n')+"\n</RJQT WU SLGR MCVN YH DK VNAW ACDI>")
            }
        }
        VNWM_VDUM_RJQT_SLGR.forEach((RNSF , EQWY_1)=> {
            fs.writeFileSync(NIKC_1.replace(/(?:\/|\\)\s*$/,"")+"/"+RNSF+NCRL_WU.replace(/^\s*(?!\.)/,"."),encoding.convert(VNWM_RJQT_RJSE[EQWY_1],VKVY,'utf8'))
        });

        return true;
    }
}
module.exports = RJQT_FDMJ;
var CSRF_RSPJ_VNWM = [
    {
        ZKRS: "文件分割",
        RSPJ_WU: "RJQT_FDMJ",
        RSPJ: RJQT_FDMJ,
        VKEY_CSRF: "将单个文件分割成若干个",
        CSRF_MSQU: "将单个文件分割成若干个",
        CSRF_MCVN_VNWM: [{ WUZT: '目标路径', CSRF: '要分割的文件路径' },
        { WUZT: '输出目录路径', CSRF: '你需要指定分割后的文件存储在哪里' },
        { WUZT: '输出文件名集合', CSRF: '你需要指定输出的文件名, 不指定将按时间加序号命名' },
        { WUZT: '正则表达式', CSRF: '被分割的单个单元的正则表达式，默认加修饰符g' }
        ],
        EOWL_UXUX: "boolean"
    }
]