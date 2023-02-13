this.lei_3f_jiancha=function (wenben3){//this.lei_3f_jiancha
    var wenben2="";//存储数组
    var regex6=new RegExp(fu_2+this.lianxuDizhi+fu_2);
    var regex7=/;/;
    var suoyin1=wenben3.search(regex6);
    var suoyin2=wenben3.search(regex7);
    if(suoyin1>0&&suoyin2>0){//确定地址位置和分号位置是存在的
        wenben2=wenben3.slice(suoyin1,suoyin2);
    }//确定地址位置和分号位置是存在
    else{//
        return "地址或者分号找不到"+suoyin1+","+suoyin2;
        //return RJSE_0.RJSE_3;
    }//
    ////以下是数组格式匹配///
    var regex1=new RegExp("^\\s*"+this.shuzu+"$");
    var regex2=new RegExp("^\\s*"+this.shuzu_2+"$");
    var regex5=new RegExp("^\\s*"+this.shuzu_5+"$");

    var RJSE_31="不是数组格式错误";
    var RJSE_32="真的是数组格式错误";
    if(LJEY_3(wenben2, RJSE_32, RJSE_31)==RJSE_31){
        var RJSE_65="项目名到帧号之间有格式错误(也许是空格编码问题)";
        var RJSE_66="其他错误。项目名或者空格没有问题(空格是编码问题)"
        if(qianzhui_jiancha(wenben3, RJSE_65, RJSE_66)==RJSE_66){
        var RJSE_67="不是数组格式、项目名、帧号、空格造成的错误";
        return RJSE_67;
    }else{
        return RJSE_65;
    }
    }else{
        return ZJZJ_3f_VNWM.ZJZJ(wenben3);
    }
    function LJEY_3(wenben2,RJSE_PCMS,RJSE_SOMS){//LJEY_3
    switch(true){//
    case regex1.test(wenben2):
    
    return RJSE_SOMS;
    case regex2.test(wenben2):
    
    return RJSE_SOMS;
    case regex5.test(wenben2):
    
    return RJSE_SOMS;
    default : 
    return RJSE_PCMS;
    }//
    }//LJEY_3
}//this.lei_3f_jiancha

this.lei_jiancha=function (regex2,wenben2,RJSE_SOMS,RJSE_PCMS){//this.lei_jiancha
//regex2为字符串表达式，wenben2为要匹配的内容,当匹配结果为真时输出RJSE1，否则输出RJSE2。
var regex1=new RegExp(regex2);
    switch(false){//
    case regex1.test(wenben2):
    return RJSE_SOMS;
    default : return RJSE_PCMS;
    }//
}//this.lei_jiancha

this.lei_cf_jiancha=function (wenben2){//this.lei_cf_jiancha
    var RJSE_65="项目名到帧号之间有格式错误(也许是空格编码问题)";
    var RJSE_66="项目名到帧号之间无格式错误，错误在后面"
    return qianzhui_jiancha(wenben2, RJSE_65, RJSE_66);
}//this.lei_cf_jiancha
function qianzhui_jiancha(RJSE_NINI_1, RJSE_PCMS, RJSE_SOMS){
    if(new RegExp(DIWR_RegExp1.qianzhui_3).test(RJSE_NINI_1)){
        return RJSE_SOMS;
    }else{
        return RJSE_PCMS;
    }
}
this.lei_21_jiancha=function (wenben2){//this.lei_21_jiancha
    return RJSE_0.RJSE_12+RJSE_0.RJSE_1;
}//this.lei_21_jiancha
this.lei_16_jiancha=function (wenben2){//this.lei_16_jiancha
    return RJSE_0.RJSE_15+RJSE_0.RJSE_1;
}//this.lei_16_jiancha
this.lei_0a_jiancha=function (wenben2){//this.lei_0a_jiancha
    return RJSE_0.RJSE_14+RJSE_0.RJSE_1;
}//this.lei_0a_jiancha
this.lei_10_jiancha=function (wenben2){//this.lei_10_jiancha
    return RJSE_0.RJSE_13+RJSE_0.RJSE_1;
}//this.lei_10_jiancha
