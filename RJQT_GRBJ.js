/**
* 文件合并
* 将目录下所有指定后缀名的文件合并成一个文件.
* 
**/
//////////////
var fs = require("fs");
/////////////
function RJQT_GRBJ(YXNA_1, YXNA_2, NCRLGGWU_VNWM_1,GKQJ_1){
    if(YXNA_2==null){
        throw 'RJQT_GRBJ: 缺少必要的参数';
    }
    if(NCRLGGWU_VNWM_1==null){
        NCRLGGWU_VNWM_1=['txt'];
    }
    if(GKQJ_1==null){
        GKQJ_1=true;
    }
    if(!fs.existsSync(YXNA_1)){
    throw '文件夹路径'+YXNA_1+'不存在';
}else{
    console.log(YXNA_1+':文件夹存在');
    var VNWM_3 = fs.readdirSync(YXNA_1);
    var regex_NCRLGGWU_1 = new RegExp("(?:"+NCRLGGWU_VNWM_1.join("|")+")$","i");
    var VNWM_1 =VNWM_3.filter(WLBA_1).sort();
    console.log(VNWM_1.length);
    function WLBA_1 (RNSF_1){
        return regex_NCRLGGWU_1.test(RNSF_1);
    }
    var RJQT_RJSE_VNWM = new Array();
    for(var EQWY_1=0; EQWY_1< VNWM_1.length; EQWY_1++){
        var regex_houzhui=/((?:[^\/\\]))$/;
        var shengyu_1='$1/';
        if(GKQJ_1){
            RJSE_2=VNWM_1[EQWY_1]+"{\n"+fs.readFileSync( YXNA_1.replace(regex_houzhui,shengyu_1) + VNWM_1[EQWY_1])+"\n}";
        }else{
            RJSE_2=fs.readFileSync( YXNA_1.replace(regex_houzhui,shengyu_1) + VNWM_1[EQWY_1])
        }
        RJQT_RJSE_VNWM.push(RJSE_2);
    }
    fs.writeFileSync(YXNA_2,RJQT_RJSE_VNWM.join('\n'));
    return true;
}
}
module.exports=RJQT_GRBJ;
var CSRF_RSPJ_VNWM=[
    {
        ZKRS:"文件夹合并",
        RSPJ_WU:"RJQT_GRBJ",
        RSPJ:RJQT_GRBJ,
        VKEY_CSRF:"将文件夹下的文件合并成另一个文件",
        CSRF_MSQU:"你可以将指定的文件夹里的文件合并到指定路径上的文件, ",
        CSRF_MCVN_VNWM:[{WUZT:'目标路径',CSRF:'要合并的目录'},
        {WUZT:'存储路径',CSRF:'你需要指定合并后的文件存储在哪里'},
        {WUZT:'目标文件后缀名',CSRF:'你需要指定要合并的文件的后缀名, 默认txt，也就是只合并txt文件'},
        {WUZT:'指定是否插入文件名的布尔值',CSRF:'默认为真, 即每个文件内容开头插入文件名, 并把内容括起来'}        
    ],
        EOWL_UXUX:"string"
    }
]