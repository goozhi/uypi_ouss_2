const CE_EBWU_LD_YHRJ = require('./KPLU/CE_EBWU_LD_YHRJ');

function VR_EBWU_BRTZ_FS(RJSE_KP){
    var NINI_SIIH_DIAX = require('./NINI_SIIH_DIAX')
    var ZJZJ_sys=require("./AFOA_sysData/sysData_ZJZJ");
    var RJSE_1=RJSE_KP.replace(/\r/g,"").replace(/\n(?=\n|$)/g,"");
    //YHRJ FRIH LDRG
    RJSE_1=RJSE_1.replace(/【|】/g,"|").replace(/）/g,")").replace(/（/g,"(").replace(/‘|’/g,"'").replace(/，/g,",").replace(/：/g,":").replace(/(?:”|“)/g,"\"").replace(/；/g,";").replace(/》/g,">>").replace(/《/g,"<<").replace(/(?:、)(\d+)/g,"d$1").replace(/。(\d+)/g,".$1").replace(/千帕/g,"kPa").replace(/牛顿米/g,"Nm").replace(/千欧|千欧姆/g,"kΩ").replace(/欧姆/g,"Ω").replace(/摄氏度/g,"℃").replace(/千米每小时/g,"km/h").replace(/转每分/g,"rpm").replace(/米每平方秒/g,"m/s2").replace(/(?:，|,)度/g,",°").replace(/(?:，|,)千米/g,",km");
    //FT YHRJ FRIH LDRG
    RJSE_1=RJSE_1.replace(/KM\/H/ig,"km/h").replace(/RPM/ig,"rpm").replace(/BAR/ig,"bar").replace(/D(\d+)/g,"d$1").replace(/\\(\d+)/g,"d$1").replace(/((?:\}|,))22((?:,|d))/g,"$121$2").replace(/((?:\}|,))33((?:,|d))/g,"$13f$2").replace(/((?:\}|,))44((?:,|d))/g,"$1cf$2").replace(/((?:\}|,))77((?:,|d))/g,"$17f$2").replace(/((?:\}|,))09((?:,|d))/g,"$10a$2");
    //JBMJ VKVD LD ZYKL
    RJSE_1=RJSE_1.replace(/\{(\w{2})(\w{2})(\w{2})\}/g,"{$1 $2 $3}").replace(/\{(\w{2})(\w{2})\}/g,"{$1 $2}").replace(/\}((?:22|77|7f|bb|16|0a|09|10|21|cf|44|3f|33))/g,"},$1").replace(/(,(?:22|77|7f|bb|16|0a|09|10|21|cf|44|3f|33)),,/g,"$1,d4,").replace(/((?:0a|16|09),)(\d+)-(\d+)/g,"$1d$2-d$3").replace(/((?:22|bb|16|0a|09|10|21|cf|44|3f|33),)(\d+(?:,|.\d,))/g,"$1d$2").replace(/(,(?:22|77|7f|bb|16|0a|09|10|21|cf|44|3f|33))(d\d+)/g,"$1,$2").replace(/([a-f]|\d)(.\d,)(?=[^\n,]*(?:;|)(?:\n|$))/ig,"$1,$2").replace(/(\d),,(\d,)(?=[^\n,]*(?:;|)(?:\n|$))/g,"$1,.$2").replace(/(,\.\d)(?=;|\n|$)/g,"$1,;").replace(/([^;])(?=\n|$)/g,"$1;");
    //SDRH BRTZ FS
    var reg_LLAO = /((?:\n|^))((?:(?!\/\/|").)+?)(\s*\{)/g;
    var sheng_1 = "$1*\"$2\",$3"
    RJSE_1=RJSE_1.replace(reg_LLAO, sheng_1);
    RJSE_1=NINI_SIIH_DIAX(RJSE_1);
    var RJSE_MSOX=ZJZJ_sys("$STR();\n"+RJSE_1+"\n***");
    if(!/HMPC MSOX/.test(RJSE_MSOX)){
        RJSE_1+="\n"+CE_EBWU_LD_YHRJ(RJSE_MSOX);
    }
    return RJSE_1;
}
module.exports=VR_EBWU_BRTZ_FS;