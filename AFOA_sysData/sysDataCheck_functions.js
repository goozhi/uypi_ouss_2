//var YXNAGGBX=require("/sdcard/脚本/分享版/YXNAGGBX.js");
//var YXNAGGBX=new YXNAGGBX.YXNAGGBX();//YXNA库
//var gn=require(YXNAGGBX.YXNA45);
//var gn=new gn.gongnengKuai();//功能块
//////////////////////////////

var banben="1.0.211104";
var fu_2="\\s*,\\s*";
var RJSE_regex_QHIH = "\/\/行\\d+";
var regex_QHIH = new RegExp("([\s\S\r]*)" + "(" +RJSE_regex_QHIH +")" );
var regex_QHIH_2 = new RegExp(RJSE_regex_QHIH);

var shengyu_1 = "$2";
exports.CuowuDuixiang=function(cuowuXuhao,cuowuWenben,cuowuLeixing){//CuowuDuixiang
	this.cuowuXuhao=cuowuXuhao;
	this.cuowuWenben=cuowuWenben;
	this.cuowuLeixing=cuowuLeixing;
	this.baocun=function(){//this.baocun
		var dui2={xuhao : this.cuowuXuhao, wenben : this.cuowuWenben, leixing : this.cuowuLeixing};
		switch(this.cuowuLeixing){//
		case "语法错误":
		shuzu3.push(dui2);
		break;
		case "逻辑错误":
		shuzu6.push(dui2);
		break;
		case "警告":
		shuzu7.push(dui2);
		break;
		}//
	}//this.baocun
}//CuowuDuixiang


exports.Cuowu=function(yufaCuowuShuzu1,luojiCuowuShuzu1,jinggaoShuzu1){//Cuowu
	this.changdu1=0;
	this.changdu2=0;
	this.changdu3=0;
	this.yufaCuowu1=yufaCuowuShuzu1;
	this.luojiCuowu1=luojiCuowuShuzu1;
	this.jinggao1=jinggaoShuzu1;
	this.shuchu=function(){//
		this.changdu1=this.yufaCuowu1.length;
		this.changdu2=this.luojiCuowu1.length;
		this.changdu3=this.jinggao1.length;
		this.yufaCuowu1=this.yufaCuowu1.join("\n");
		this.luojiCuowu1=this.luojiCuowu1.join("\n");
		this.jinggao1=this.jinggao1.join("\n");
		var zhuti1="语法错误共"+this.changdu1+"行{}";
		var zhuti2="逻辑错误共"+this.changdu2+"行{}";
		var zhuti3="警告共"+this.changdu3+"行{}";
		var shuzu1=[];
		push1(zhuti1,this.yufaCuowu1);
		push1(zhuti2,this.luojiCuowu1);
		push1(zhuti3,this.jinggao1);
		var wenben1=shuzu1.join("\n");
		if(wenben1=="")
			wenben1=RJSE_0.RJSE_23;
		return wenben1;
		function push1(zhuti3,shuzu2){//push1
			if(shuzu2.length>0)
				shuzu1.push(zhuti3.slice(0,zhuti3.length-1)+"\n"+shuzu2+"\n"+zhuti3.slice(zhuti3.length-1,zhuti3.length));
		}//push1
	}//
}//Cuowu

exports.RegExp1=function(){//RegExp1

this.VNWMGGWU_eS="f\\[\\d+\\]\\[\\d+\\]";
this.fu_1="\\\"";
this.biaoshifu_7f="\\d+,-\\d+";
this.lei_16="16";
this.lei_10="10";
this.lei_21="21";
this.lei_0a="0a";
this.lei_7f="7f";
this.lei_3f="3f";
this.lei_cf="cf";
this.lei_3c="3c";
this.lei_bb="bb";
this.jinzhi_16="[0123456789ABCDEFabcdef]";
this.jinzhi_16_2_x="(?:(f(\\[\\d{1,3}\\])+\\d{1,2})|(?:\\d|[a-f]|[A-F]){2})";
this.jinzhi_16_2=this.jinzhi_16+"{2}";
this.jinzhi_16_2_1=this.jinzhi_16+"{1,2}";
this.jinzhi_16_4=this.jinzhi_16+"{4}";
this.jinzhi_16_4_2="(?:"+this.jinzhi_16_4+"|"+this.jinzhi_16_2+")";
this.jinzhi_16_4_2_1="(?:"+this.jinzhi_16_4+"|"+this.jinzhi_16_2+"|"+this.jinzhi_16+")";
this.jinzhi_16_6=this.jinzhi_16+"{6}";
this.jinzhi_16_tonglei="(?:"+this.jinzhi_16_4_2+"-"+this.jinzhi_16_4_2+"|"+this.jinzhi_16_4_2+")";//00-0f
this.zhenID="\\{"+this.jinzhi_16+"{2}"+"("+"\\s"+this.jinzhi_16+"{2}){1,30}"+"\\}";
this.zhenID_or=this.zhenID+"(?:/"+this.zhenID+")*";
this.zhenID_t="\\{(?:t\\d+|"+this.jinzhi_16+"{2})"+"(\\s(?:t\\d+|"+this.jinzhi_16+"{2})){1,30}"+"\\}";
this.zhenID_x="\\{"+this.jinzhi_16_2_x+"("+"\\s"+this.jinzhi_16_2_x+"){1,7}"+"\\}";
this.qianzhui="\\B(?:\\&|\\*)\\\".*?\\\"\\s*,\\s*";
this.qianzhui_2="\\B(?:\\&|\\*)(?:|del\\(.+:.+\\))\\\".*?\\\",\\s*";
this.qianzhui_3="^\\s*"+this.qianzhui+this.zhenID;
this.ku="(?:库id|lib|id)=(?:null|\\d+)";
this.geshu="(?:个数|num)=(null|d\\d)";
this.kaishi="(?:开始|start)=d\\d";
this.bianma="(?:编码|code)=\\d";
this.jiange="(间隔|space)=\\d";

this.dizhi="d\\d{1,3}(?:(?:\\&.+|>>.+|<<.+)|)";

this.dizhi_2_1="("+this.dizhi+"){1,2}";
this.lianxuDizhi="("+this.dizhi+")+";
this.tongleiDizhi="("+this.dizhi+"-"+this.dizhi+"|"+this.dizhi+")";//d4-d7
this.bianjie=";\\B\\s*(\\/\\/.*|)(\\r|)$";
this.bianjie_1="\\B\\s*(\\/\\/.*|)(\\r|)$";
this.bianjie_2="(?:;|)\\B\\s*(\\/\\/.*|)(\\r|)$";
this.bianjie_1_b="\\b(\\/\\/.*|\\s*)";
this.bianjie_3="\\B\\s*(\\/\\/.*|)(\\r|)";
this.zhuangtai="[^,;]+\\|[^,;]+";
this.jihuoZhi=this.jinzhi_16_2;
this.shuzu_houzhui="(?:|"+"(?:"+fu_2+"\\'oth:.{1,30}\\'|"+fu_2+"\\'oth:.{1,30}\\'"+this.jinzhi_16_4_2_1+"(?:|循环)))";
this.yuansu_4_2="\\'"+this.jinzhi_16_4_2+":[^\\'\n]+\\'";
this.yuansu_6="\\'"+this.jinzhi_16_6+":[^\\'\n]+\\'";
this.yuansu_tonglei="\\'"+this.jinzhi_16_tonglei+":[^\\'\n]+\\'";
this.yuansu_4_2JiaJinzhi_16_2_1="\\'"+this.jinzhi_16_4_2+":[^;]{1,56}\\'"+this.jinzhi_16_2_1;
this.yuansu_6JiaJinzhi_16_2_1="\\'"+this.jinzhi_16_6+":[^;]{1,56}\\'"+this.jinzhi_16_2_1;
this.yuansu_tongleiJiaJinzhi_16_2_1="\\'"+this.jinzhi_16_tonglei+":[^;]{1,56}\\'"+this.jinzhi_16_2_1;
this.shuzu=this.yuansu_4_2+"("+fu_2+this.yuansu_4_2+")"+"{0,106}"+this.shuzu_houzhui;
this.shuzu_5=this.yuansu_6+"("+fu_2+this.yuansu_6+")"+"{0,106}"+this.shuzu_houzhui;

this.shuzu_2=this.yuansu_tonglei+"("+fu_2+this.yuansu_tonglei+")"+"{0,106}"+this.shuzu_houzhui;
this.bianjie_shu="(?!\\B)";
this.shu="(?:\\+|-|)\\d+(?:\\.\\d+|)";
this.chengFa=this.dizhi+"(\\*(?:|\\(-)\\d+(?:\\.\\d+|\\)|))+"+this.bianjie_shu;
this.chuFa=this.dizhi+"\\*(?:|\\(-)\\d+(?:\\.\\d+|)"+"(?:/(255|127|10*)|(/256)+)"+this.bianjie_shu;
this.quYu_chengFa=this.dizhi+"(?:%|#)\\d+"+"(\\*(?:|\\(-)\\d+(?:\\.\\d+|\\)|))+"+this.bianjie_shu;
this.quYu_zhengChu=this.dizhi+"(?:%|#)\\d+(?!\\B)";
//this.suanshi_8=this.lianxuDizhi+this.chuFa+"(?:"+this.shu+"|)";
this.suanshi_8=this.lianxuDizhi+"(?:((?:\\*|/)"+this.shu+")+|)"+"(?:"+this.shu+"|)";
this.suanshi_6=this.dizhi+"(?:"+this.shu+"|"+this.lianxuDizhi+"|)"+this.bianjie_shu;
this.suanshi_5="(?:"+this.chuFa+"|"+this.quYu_chengFa+"|"+this.chengFa+")"+"((?:\\+|-)"+"(?:"+this.chuFa+"|"+this.chengFa+"|"+this.shu+")"+")*"+"(?:"+"\\+"+this.suanshi_6+"|"+this.shu+"|)";
this.suanshi_linshi="(?:"+this.chuFa+"|"+this.quYu_chengFa+"|"+this.chengFa+")"+"((?:\\+|-)"+"(?:"+this.chuFa+"|"+this.chengFa+"|"+this.shu+")"+")*"+"(?:"+"\\+"+this.suanshi_6+"|"+this.shu+"|)";
this.suanshi_7=this.dizhi+"\\+"+this.chuFa+"("+this.shu+"|"+")"+this.bianjie_shu;


this.suanshi="("+this.suanshi_5+"|"+this.suanshi_6+"|"+this.suanshi_7+"|"+this.suanshi_8+"|"+this.quYu_zhengChu+")";
//this.suanshi=this.suanshi_4;
this.xiaoshuWeishu="(?:\\d{1,2}|)\\.[01234]";
this.danwei=".+";
this.Read="Read";
this.Spec="Spec";
this.Clear="Clear";
this.Str="Str";
this.jiaKuang="\\+\\d\\[.+\\]"+"\\("+"(?:"+this.Read+"|"+this.Spec+"|"+this.Clear+"|"+this.Str+"|Ecu)"+"\\)";
this.sanxing="(?:\\&|\\*){3}";
this.diaoyong="\\$[A-Z]\\w+\\((?:\\w+|)\\)"+"(?:|"+this.zhenID+")";
this.diaoyong_Str="\\$Str.*";
this.diaoyong_ClearDtc="\\$Clear.*";
this.diaoyong_ReadDtc="\\$Read.*";
this.diaoyong_Ecu="\\$Ecu.*";
this.diaoyong_Init="\\$Init.*";
this.diaoyong_dandiao="^\\s*"+"(?:"+[this.diaoyong_Str,this.diaoyong_ClearDtc,this.diaoyong_ReadDtc,this.diaoyong_Ecu,this.diaoyong_Init].join("|")+")";
this.sanYuan="\\$\\$\\$";
this.jieshu="\\s*(\\/\\/.*|)(\r|)$";
this.jieshuYu_1=this.sanxing+"(\\r|)\\n"+this.sanYuan;
this.exit_1="exit(?:\\{null\\}|"+this.zhenID_or+")";
this.link="link(?:"+this.zhenID_or+"|null)"+"\\d+,\\d+ms";
this.in_1="in"+this.zhenID_or+"(?:PS\\w+\\(\\d+\\)|)";
this.in_2=this.in_1+".*faultSend.*(?:PSW\\(\\d+\\)|)";
this.in_3="(?:"+this.in_1+"|"+this.in_2+")";
this.at="@[A-Z]*";
this.zhenID_2="(?:"+this.zhenID+"|"+this.zhenID+"/"+this.zhenID+")";
this.zhenID_2_x="(?:"+this.zhenID_x+"|"+this.zhenID_x+"/"+this.zhenID_x+")";
this.zhenID_2_f="\\{(?:"+this.jinzhi_16_2+"|"+"f\\[\\d+\\]\\[\\d+\\])"+"(?:\\s(?:"+this.jinzhi_16_2+"|"+"f\\[\\d+\\]\\[\\d+\\]))*\\}";
this.zhenID_2_f_or=this.zhenID_2_f+"(?:/"+this.zhenID_2_f+")*";
this.CAN="CAN,\\d{1,2}(位|)";
this.boteLv="\\d{2,4}K";
this.boteLv_2="\\d{2,6}bps";
this.pin="pin:\\d+\\+\\d{1,2}";
this.pin_2="pin:\\d{1,2}(\\s+\\d{1,2})*";
this.zhouqi="\\d+/\\d+ms";
this.K_BUS="K.{2,10}";
this.J_BUS="J.{2,10}";
this.ECU_dizhi="..../..../....";
this.zhenShu="\\d{1,2}帧"+this.zhenID;
this.con="con:\\d+";
//$SetPeriod(CAN,0/2000/100/0/6000)
this.SetPeriod="\\$(S|s)et(?:P|p)eriod\\(CAN,\\d+\\/\\d+\\/\\d+\\/\\d+\\/\\d+\\)";
this.period="period:\\d{1,4}\\/\\d{1,4}\\/\\d{1,4}\\/\\d{1,4}\\/\\d{1,4}";
this.zhuti="\\+\\d\\[.+\\]\\(\\+\\)(?:\\$\\$\\$|)";
this.Display="\\$(?:D|d)isplay\\((?:ENTER|EE|EXIT|)\\)\\{\".*\"\\}";
this.Display_2="\\$(?:D|d)isplay\\(\".+\"\\)";
this.Display_multiLines="\\$(?:D|d)isplay\\((?:ENTER|EE|EXIT|)\\)\\{(?:"+this.bianjie_3+"\\n+\\s*\""+"|\")[^\\}]+\"\\}(?:;|)";
this.Delayms="\\$(?:D|d)elayms\\(\\d+\\)";
this.Send="\\$(?:S|s)end\\((?:.\\[.{1,2}\\]|)\\)"+this.zhenID_2_x;
this.Send_2="\\$(?:S|s)end\\((?:.\\[.{1,2}\\]|)\\)"+this.zhenID_2_f;
this.Send_3="\\$(?:S|s)end\\((?:.\\[.{1,2}\\]|)\\)"+this.zhenID_2_f_or;
this.zhenFuwei="\\$F\\(\\d+,\\d+,\\d+\\)";
this.If="\\$(?:If|if|Elseif|ElseIf|elseif|endIf)\\(.+:.+\\)";
this.L="\".+\"L.+";
this.InputBox="\\$InputBox\\((?:0a|16),(?:len=\\d{1,3},|).*?\\)";
this.danwei_3c="(?:\\[\\d+-\\d+\\]|)\"[^',\"]*\"";
this.zifuChuan="\"[^\"]*\"";
this.fenshi="[\\+\\d\\.\\*/\\#\\%]+";
this.suanshi_ziyou=this.fenshi+"(?:(?:\\+|-)"+this.fenshi+"|)";
this.UYUYGGZTFR="[\\+\\dfdt\\.\\*-/\\#\\%\\^\\|\\&>\\)\\[\\]\\(<]";
this.UYUYGGFR="(?:[\\+-\\|\\&\\*/\\#\\%]|>>|<<)";
this.suanshi_ziyou_2=this.UYUYGGZTFR+"+";
this.Input="\\$Input\\(10,range="+this.shu+"-"+this.shu+"(?:\\s*,\\s*again|)(,t\\d+=val(?:"+this.suanshi_ziyou+"|))+\\)"+this.zhenID_t;
this.zhuangtai_2="(状态|state)=\\s*"+"(?:"+"null|"+this.dizhi+fu_2+"(?:"+this.shuzu_2+"|"+this.shuzu_5+"|"+this.shuzu+")"+"|[\\u4E00-\\u9FA5]+)";
this.Button="\\$(?:B|b)utton\\("+this.jinzhi_16_4_2+"\\+-.*\\)";
this.Button_ZHQH="\".*\"(?:\\+|-)"+this.jinzhi_16_4_2_1+this.zhenID_t;
////记得添加到数组
this.hang_Button="^\\s*"+this.Button+this.bianjie_2;
this.hang_Button_ZHQH="^\\s*"+this.Button_ZHQH+this.bianjie_2;
this.hang_SetPeriod="^\\s*"+this.SetPeriod+this.bianjie_2;
this.hang_Input="^\\s*"+this.Input+this.bianjie_2;
this.hang_InputBox="^\\s*"+this.InputBox+this.bianjie_2;
this.hang_L="^\\s*"+this.L+this.bianjie;
this.hang_If="^\\s*"+this.If+this.bianjie_2;
this.hang_F="^\\s*"+this.zhenFuwei;
this.hang_Display="^\\s*"+"(?:"+this.Display+"|"+this.Display_2+")"+this.bianjie_2;
this.hang_Delayms="^\\s*"+this.Delayms+this.bianjie;
this.hang_Send="^\\s*"+this.Send+this.bianjie_2;
this.hang_Send_2="^\\s*"+this.Send_2+this.bianjie_2;
this.hang_Send_3="^\\s*"+this.Send_3+this.bianjie_2;
this.hang_zhuti="^\\s*"+this.zhuti+this.bianjie_1;
this.hang_CAN="^\\s*"+[this.CAN,this.boteLv,this.pin,this.ECU_dizhi,this.zhenShu,this.period].join(fu_2)+fu_2+this.bianjie_1;
this.hang_K_BUS="^\\s*"+[this.K_BUS,this.zhouqi,this.boteLv_2,this.pin_2,this.jinzhi_16_4,this.con,this.period].join(fu_2)+fu_2+this.bianjie_1;
//KW2000,25/25ms,10400bps,pin:7 8 9 10 12,58f1,con:0,period:20/2000/100/6/6000,
this.hang_J_BUS="^\\s*"+[this.J_BUS,"NER",this.boteLv,this.pin,this.period].join(fu_2)+fu_2+this.bianjie_1;
//J1939,NER,500K,pin:6+14,period:0/2000/100/0/6000,
this.hang_CANCP="^\\s*CANCP.*";
this.hang_jieshi="^\\/\\/.*";
this.hang_zhen_3="^\\s*\".*\"\\s*"+"(?:|(?:-|\\+)\\d+)"+this.zhenID_t+"(?:|\\/"+this.zhenID_t+")"+this.bianjie;
this.hang_zhen="^\\s*"+this.zhenID+"(?:null|)"+this.bianjie_2;
this.hang_guzhangMa="^\\s*"+[this.zhenID+this.ku,this.geshu,this.kaishi,this.bianma,this.jiange,this.zhuangtai_2].join(fu_2)+this.bianjie;
this.hang_lab="^\\s*\\$(?:Lab|LAB|lab)\\(\\w+\\)"+this.bianjie_2;
this.hang_ECU="^_S\\d{3}_.+\\(.*\\)(?:\\{.*?\\}|)";
this.hang_ECU_null="^_S\\d{3}_null\\(\\)\\{\\}"+this.bianjie_1;
this.hang_at="^\\s*"+this.at+this.bianjie_1_b;
this.hang_diaoyong="^\\s*"+this.diaoyong+"(?:"+this.bianjie+"|"+this.bianjie_1+")";
this.hang_s_2="^(\r|)$";
this.hang_s="^(?:\\s*|\\s*//.*)$";
this.hang_exit="^\\s*"+this.exit_1+fu_2+this.bianjie_1;
this.hang_sanxing="^\\s*"+this.sanxing+this.bianjie_1;
this.hang_jieshuYu="^\\s*"+this.sanYuan+this.bianjie_1;
this.hang_jiakuang="^\\s*"+this.jiaKuang+this.bianjie_1;
this.hang_in="^\\s*"+this.in_3+fu_2;
this.hang_link="^\\s*"+this.link+fu_2;
this.hang_qianzhui="^\\s*"+this.qianzhui+this.bianjie_1;
this.hang_0a="^\\s*"+this.qianzhui+this.zhenID+fu_2+this.lei_0a+fu_2+this.tongleiDizhi+this.bianjie;
this.hang_16="^\\s*"+this.qianzhui+this.zhenID+fu_2+this.lei_16+fu_2+"(?:"+this.tongleiDizhi+"|"+this.dizhi_2_1+")"+this.bianjie;
this.hang_10="^\\s*"+this.qianzhui+this.zhenID+fu_2+this.lei_10+fu_2+this.tongleiDizhi+this.bianjie;
this.hang_3c="^\\s*"+this.qianzhui+this.zhenID+fu_2+this.lei_3c+fu_2+this.lianxuDizhi+fu_2+this.xiaoshuWeishu+fu_2+this.danwei_3c+fu_2+this.shuzu_2+this.bianjie;
this.hang_3c_shiyan1="^\\s*"+this.qianzhui+this.zhenID+fu_2+this.lei_3c+fu_2+this.lianxuDizhi+fu_2+this.xiaoshuWeishu+fu_2+this.danwei_3c+fu_2;
this.hang_3f="^\\s*"+this.qianzhui+this.zhenID+fu_2+this.lei_3f+fu_2+this.lianxuDizhi+fu_2+this.shuzu+this.bianjie;
this.hang_3f_2="^\\s*"+this.qianzhui+this.zhenID+fu_2+this.lei_3f+fu_2+this.lianxuDizhi+fu_2+this.shuzu_2+this.bianjie;
this.hang_bb="^\\s*"+this.qianzhui+this.zhenID+fu_2+this.lei_bb+"("+fu_2+"(?:"+this.zifuChuan+"|"+this.dizhi_2_1+"(?:h|a|)"+"|"+this.lianxuDizhi+"|"+this.tongleiDizhi+"(?:h|a|)"+")){1,20}"+this.bianjie;
this.hang_3f_5="^\\s*"+this.qianzhui+this.zhenID+fu_2+this.lei_3f+fu_2+this.lianxuDizhi+fu_2+this.shuzu_5+this.bianjie;
this.hang_cf_yiqian="^\\s*"+this.qianzhui_2+this.zhenID+fu_2+this.lei_cf+fu_2+this.suanshi+fu_2+this.xiaoshuWeishu+fu_2+"("+this.danwei+"|"+")"+this.bianjie;
this.hang_cf="^\\s*"+this.qianzhui_2+this.zhenID+fu_2+this.lei_cf+fu_2+this.suanshi_ziyou_2+fu_2+this.xiaoshuWeishu+fu_2+"("+this.danwei+"|"+")"+this.bianjie;
this.hang_7f="^\\s*"+this.qianzhui+this.zhenID+fu_2+this.lei_7f+fu_2+this.biaoshifu_7f+fu_2+this.suanshi_ziyou_2+fu_2+this.xiaoshuWeishu+fu_2+"("+this.danwei+"|"+")"+this.bianjie;
this.hang_21="^\\s*"+this.qianzhui+this.zhenID+fu_2+this.lei_21+fu_2+this.lianxuDizhi+fu_2+this.jihuoZhi+fu_2+this.zhuangtai+this.bianjie;
//this.hang_Display_multiLines="^\\s*"+this.Display_multiLines;
//this.hang_Display_multiLines_out=this.hang_sanxing+"|"+"^\\s*\\$";
//this.hang_Display_multiLines_end=".*\"\\}(?:"+this.bianjie+"|"+this.bianjie_1+")";
/////
this.regexShuzu1=[this.hang_s,this.hang_3f,this.hang_3f_2,this.hang_3f_5,this.hang_7f,this.hang_21,this.hang_10,this.hang_16,this.hang_cf,this.hang_0a,this.hang_link,this.hang_in,this.hang_jiakuang,this.hang_zhuti,this.hang_jieshuYu,this.hang_sanxing,this.hang_exit,this.hang_diaoyong,this.hang_jieshi,this.hang_at,this.hang_ECU,this.hang_ECU_null,this.hang_guzhangMa,this.hang_zhen,this.hang_zhen_3,this.hang_CAN,this.hang_CANCP,this.hang_Send,this.hang_Send_2,this.hang_Delayms,this.hang_Display,this.hang_F,this.hang_If,this.hang_L,this.hang_InputBox,this.hang_3c,this.hang_bb,this.hang_Input,this.hang_SetPeriod,this.hang_K_BUS,this.hang_J_BUS,this.hang_qianzhui,this.hang_Send_3,this.hang_Button,this.hang_Button_ZHQH,this.hang_lab];
///
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
		if(new RegExp(IOWR_RegExp1.qianzhui_3).test(RJSE_NINI_1)){
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
	
///
this.shuchu1=function(){//
	var shuzu1=[];
	for(suoyin1=0;suoyin1<this.regexShuzu1.length;suoyin1++){//
		var regex1=new RegExp(this.regexShuzu1[suoyin1],"i");
		shuzu1.push(regex1);
	}//
	return shuzu1;
}//
this.shuchu2=function(key1){//this.shuchu2
	return new RegExp(this[key1]);
}//this.shuchu2
this.pipei_lei_PHFD=function (wenben2){//this.pipei_lei_PHFD
	var key1=this.pipei_lei(wenben2);
	if(key1!=null){//
		switch(key1){//
			case "lei_16":
			return this.lei_16_jiancha(wenben2);
			case "lei_0a":
			return this.lei_0a_jiancha(wenben2);
			case "lei_21":
			return this.lei_21_jiancha(wenben2);
			case "lei_3f":
			return this.lei_3f_jiancha(wenben2);
			case "lei_7f":
			return this.lei_jiancha(fu_2+this.suanshi+fu_2,wenben2,RJSE_0.RJSE_9+RJSE_0.RJSE_5,RJSE_0.RJSE_6);
			case "lei_10":
			return this.lei_jiancha(this.lei_10,wenben2,RJSE_0.RJSE_13+RJSE_0.RJSE_1,RJSE_0.RJSE_1);
			case "lei_cf":
			return this.lei_cf_jiancha(wenben2);
			case "lei_3c":
			return this.lei_jiancha(fu_2+this.danwei_3c+fu_2,wenben2,"3c类型 : 单位少了引号","3c类型 : 不是单位格式书写错误，可能是数组格式错误");
			case "lei_bb":
			return "bb格式错误";
		}//
	}else{//
	return null;
	}//
}//this.pipei_lei_PHFD
this.pipei_lei=function (wenben2){//this.pipei_lei
	//wenben2为要与类表达式匹配的内容
		var ziji1=new exports.RegExp1();
		for(key1 in ziji1){//循环判断确定类
			if(/lei/.test(key1)){
				var regex1=new RegExp(fu_2+ziji1[key1]+fu_2);
				if(regex1.test(wenben2))
					return key1;
			}			
		}//循环判断确定类
		return null;
}//this.pipei_lei
this.pipei2=function (wenben1,wenben2){//this.pipei2
//wenben1为表达式名字也就是key，wenben2为要与表达式匹配的内容
	var ziji1=new exports.RegExp1();
	for(key1 in ziji1){//确定需要匹配的表达式
	
		if(key1==wenben1){//
			var regex1=new RegExp(ziji1[key1]);
			return regex1.test(wenben2);
		}//
	}//确定需要匹配的表达式
	return false;
}//this.pipei2
this.pipei=function (wenben1){//this.pipei
	var shuzu1=this.regexShuzu1.filter(hui2);
	return shuzu1;//返回字符串数组
	function hui2(yuan2){//hui2
		var regex1=new RegExp(yuan2);
		
		return regex1.test(wenben1);
	}//hui2
}//this.pipei
}//RegExp1




exports.jiance_21=function(){
var regex1=/\b10*\b/;
return regex1.test(wenben1);
}
exports.RJSEGGBX=function(){//RJSE
//所有RJSE所调用的变量必须是构造器本身的变量，防止外围变量修改后内容错乱。
	this.JTaU=function(BQEO_1){"<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>结果</title>\n</head>\n<body>\n        \n\n    <script>\n       document.write\(\""+gn.SturnR(BQEO_1)+"\"\);\n    </script>\n</body>\n</html>"
	}
	this.alert_GengxinNeirong="220122版 :\n录入更多的合法格式。\n解决基于逐行匹配机制中的Display多行显示的无规则问题。\n\n211104版 :\n录入了3c、bb等数据格式，将\[帧号地址和激活值相同\]由逻辑错误级别降为警告级别。\n\n211022版 :\n优化了判断 : 按等级判断系数比例是否合理。\n增加了字符串 : 。\n\n211018版 :\n放宽了判断 : 将系数比例256\+-2改为256\+-10。\n增加了字符串 : 。"
	this.RJSE_1="格式书写错误";
	this.RJSE_2="数组"+this.RJSE_1;
	this.RJSE_4="未知错误，可能不是";
	this.RJSE_3=this.RJSE_4+this.RJSE_2;
	this.RJSE_5="算式"+this.RJSE_1+"(255|256|127)";
	this.RJSE_6=this.RJSE_4+this.RJSE_5;
	this.RJSE_7="帧ID"+this.RJSE_1;
	this.RJSE_8=this.RJSE_4+this.RJSE_5;
	this.RJSE_9="7f类型 :";
	this.RJSE_10="3f类型 :";
	this.RJSE_11="cf类型 :";
	this.RJSE_12="21类型 :";
	this.RJSE_13="10类型 :";
	this.RJSE_14="0a类型 :";
	this.RJSE_15="16类型 :";
	this.RJSE_16="16类型 :";
	this.RJSE_17="7f类型 :";
	this.RJSE_18="7f类型 :";
	this.RJSE_19="通知 :";
	this.RJSE_20="目前支持检查的对象有 : ";
	this.RJSE_21="基本指令和标识符";
	this.RJSE_22=this.RJSE_20+[this.RJSE_9,this.RJSE_15,this.RJSE_10,this.RJSE_11,this.RJSE_12,this.RJSE_13,this.RJSE_14,this.RJSE_21].join("、");
	this.RJSE_23="Wow~居然逃过了我的火眼金睛😒";
	this.RJSE_24="请选择";
	this.RJSE_25="文件编码格式";
	this.RJSE_26="稍后有个悬浮窗报告,你可以缩小和放大它以便随时查看";
	this.RJSE_27="结果已保存在";
	this.RJSE_28="激活值";
	this.RJSE_34="状态值";
	this.RJSE_35="系数";
	this.RJSE_36="数组元素";
	this.RJSE_37="地址";
	this.RJSE_38="帧号";
	this.RJSE_39="单位";
	this.RJSE_40="指定小数位数";
	this.RJSE_29="不合理";
	this.RJSE_41="前面"+this.RJSE_37;
	this.RJSE_42="后面"+this.RJSE_37;
	this.RJSE_30=this.RJSE_28+this.RJSE_29;
	this.RJSE_31="正在检测";
	this.RJSE_32="可以先选择参考路径";
	this.RJSE_33="请输入需检查的文件的路径";
}//RJSE

exports.chushiHua=function(alert_GengxinNeirong){//chushiHua
var panduan1=files.createWithDirs(YXNA7);
if(panduan1||files.read(YXNA7)==""){//panduan1成立
alert(RJSE_0.RJSE_19,RJSE_0.RJSE_22);
alert("版本更新完成",alert_GengxinNeirong);
cunchu1.banben=banben;
cunchu1.lujingShuzu1=[];
cunchu1.lujingShuzu2=[];
cunchu1.lujingShuzu1.push({std:"/sdcard/bluetooth/sysData.TXT"});
cunchu1.lujingShuzu2.push("/sdcard/bluetooth/sysData.TXT");
cunchu1.cunchu("cunchu1");
}//panduan1成立
}//chushiHua
exports.chushiHua2=function(alert_GengxinNeirong){//exports.chushiHua2
	var cunchu2=cunchu1.duqu("cunchu1");
	if(cunchu2.banben!=banben){
		alert(alert_GengxinNeirong);
		cunchu2.banben=banben;
		cunchu2.cunchu("cunchu1");
	}
	return cunchu2;
}//exports.chushiHua2
exports.Xiangmu=function(mingzi){//Xiangmu
this.mingzi=mingzi;
this.zhenID="";
this.lei="";
this.dizhi="";
this.jihuoZhi="";
this.zhuangtai="";
}//Xiangmu

exports.gengxin=function(YXNA8){//exports.gengxin

	var suoyin1=cunchu1.lujingShuzu2.indexOf(YXNA8);
	if(suoyin1>0){
   	cunchu1.lujingShuzu1.splice(suoyin1,1);
   	cunchu1.lujingShuzu2.splice(suoyin1,1);
   	liebiaoShuzu1.splice(suoyin1,1);
   }
   if(suoyin1!=0){
   cunchu1.lujingShuzu1.unshift({std:YXNA8});
   	cunchu1.lujingShuzu2.unshift(YXNA8);
   	liebiaoShuzu1.unshift({std:YXNA8});
   	cunchu1.cunchu("cunchu1");
   }
}//exports.gengxin

exports.shuchuJieguo=function(RJSE_1){
	var regex1=/.*\s:\s.*(?=\s:)|.+\{|^\}$/g;
	var shuzu1=RJSE_1.match(regex1);
	shuzu1.reverse();
	for(suoyin1 in shuzu1){
		liebiaoShuzu1.unshift({std : shuzu1[suoyin1]});
	}
}

exports.Yufa=function(shuzu1){//Yufa
	var dui1=new gnn.RegExp1();
	//var regex_Display_multiLines=new RegExp(dui1.hang_Display_multiLines);
	//var regex_Display_multiLines_out=new RegExp(dui1.hang_Display_multiLines_out);
	//var regex_Display_multiLines_end=new RegExp(dui1.hang_Display_multiLines_end);
	//var shuzu_Dis_ZanCun=null;//存储Display数据
	//var panduan2=false;//判断是否是Dis第一行
	this.shuzu1=shuzu1;
	this.jindu1=0;
	this.jiancha=function (){//this.jiancha
		for(suoyin1=0;suoyin1<this.shuzu1.length;suoyin1++){//xunhuanJiancha
			
			this.jindu1=100/this.shuzu1.length*suoyin1;
			//if(exports.hulueMingdan(this.shuzu1[suoyin1],suoyin1))
				//continue;//忽略名单可直接跳过检查
				
			var shuzu2=dui1.pipei(this.shuzu1[suoyin1]);
			
			if(shuzu2.length==0){//未匹配到
				
				var RJSE_9=dui1.pipei_lei_PHFD(this.shuzu1[suoyin1]);
				if(RJSE_9!=null){//语法错误
				var xuhao_1=this.shuzu1[suoyin1].slice(this.shuzu1[suoyin1].search(regex_QHIH_2))
					new gnn.CuowuDuixiang(xuhao_1,RJSE_9+" : "+this.shuzu1[suoyin1].replace(regex_QHIH, "$1"),"语法错误").baocun();			
				}//语法错误
				else{//不明语法
					var RJSE_56=bumingJiancha_Yufa(this.shuzu1[suoyin1]);
					if(RJSE_56!=null){
						var xuhao_1=this.shuzu1[suoyin1].slice(this.shuzu1[suoyin1].search(regex_QHIH_2))
					new gnn.CuowuDuixiang(xuhao_1,RJSE_56+":"+this.shuzu1[suoyin1].replace(regex_QHIH, "$1"),"语法错误").baocun();
					}else{
					var xuhao_1=this.shuzu1[suoyin1].slice(this.shuzu1[suoyin1].search(regex_QHIH_2))
					new gnn.CuowuDuixiang(xuhao_1,"此行有不明语法 : "+this.shuzu1[suoyin1].replace(regex_QHIH, "$1"),"语法错误").baocun();
					}
				}//不明语法
			}//未匹配到
		}//xunhuanJiancha
	}//this.jiancha
}//Yufa
function bumingJiancha_Yufa(RJSE_NINI){
	var regex_guzhangMa=/库/;
	var regex_link=/link\{/;
	var regex_ECU=/_S\d+_/;
	var regex_in=/in\{/;
	var regex_Display=/\Display\(/;
	var regex_exit=/exit\{/;
	switch(true){
		case regex_guzhangMa.test(RJSE_NINI):
			return guzhangMa_jiancha(RJSE_NINI);
		case regex_link.test(RJSE_NINI):
			return link_jiancha(RJSE_NINI);
		case regex_in.test(RJSE_NINI):
			return in_jiancha(RJSE_NINI);
		case regex_ECU.test(RJSE_NINI):
			return ECU_jiancha(RJSE_NINI);
		case regex_Display.test(RJSE_NINI):
			return Display_jiancha(RJSE_NINI);
		case regex_exit.test(RJSE_NINI):
			return exit_jiancha(RJSE_NINI);
		default:
		return null;
	}
}
function exit_jiancha(RJSE_NINI){
if(/\{..\}/.test(RJSE_NINI)){
		return "警告 : 只有一个字节";
	}else{
		return null;
	}
}
function Display_jiancha(RJSE_NINI){
	if(!/\"[\s\S]*\"/.test(RJSE_NINI)){	
		return "缺少引号"
	}
	else if(/^\s*(?!\$)/.test(RJSE_NINI)){
		return "缺少$";
	}else{
		return null;
	}
}
function guzhangMa_jiancha(RJSE_NINI){
	var regex_mull=/mull/
	if(regex_mull.test(RJSE_NINI)){
		return "null写成mull";
	}else{
		return null;
	}
}
function in_jiancha(RJSE_NINI){
	var regex_douhao=/[^,]\s*$/
	if(regex_douhao.test(RJSE_NINI)){
		return "in后无逗号";
	}else{
		return null;
	}
}
function ECU_jiancha(RJSE_NINI){
	var regex_dian=/.*\..*\(/
	if(regex_dian.test(RJSE_NINI)){
		return "使用了.符号";
	}else{
		return null;
	}
}
function link_jiancha(RJSE_NINI){
	var regex_douhao=/ms(?!,)/
	if(regex_douhao.test(RJSE_NINI)){
		return "link后无逗号";
	}else if(/\{..\}/.test(RJSE_NINI)){
		return "警告 : 只有一个字节";
	}else{
		return null;
	}
}
exports.Luoji=function(shuzu10){//Luoji
		var regex_jihuoZhi=/01|02|04|08|10|20|40|80/;
		this.shuzu10=shuzu10;
		this.suoyin1=0;
		this.jindu1=0;
		var re = new gnn.RegExp1();
		this.jiancha=function (){//luojiJiancha
			
			var jishu1=0;
			for(suoyin10 in shuzu10){//zhuHangJiancha
				
				this.jindu1=100/shuzu10.length*suoyin10;
				var RJSE_1=shuzu10[suoyin10];
				if(RJSE_1!=null){//
					var RJSE_4=this.pipei_lei(RJSE_1);
					if(RJSE_4!=null){//特定类型有逻辑错误
						var xuhao_1=RJSE_1.slice(RJSE_1.search(regex_QHIH_2))
						new gnn.CuowuDuixiang(xuhao_1,RJSE_4+" : "+RJSE_1.replace(regex_QHIH, "$1"),"逻辑错误").baocun();
					}//特定类型有逻辑错误
					else {//检查外围逻辑
					/////////检查函数调用//////
					var RJSE_5=this.ZJZJ_ATVN(RJSE_1);
					if(RJSE_5!=null){//函数语法逻辑有错
						var xuhao_1=RJSE_1.slice(RJSE_1.search(regex_QHIH_2))
						new gnn.CuowuDuixiang(xuhao_1,RJSE_5+" : "+RJSE_1.replace(regex_QHIH, "$1"),"逻辑错误").baocun();
					}//函数语法逻辑有错
					//////////结束语检查///////////
					var regex4=new RegExp(re.hang_jieshuYu);
					var regex5=new RegExp(re.diaoyong_dandiao);
					if(regex5.test(RJSE_1)){//
						jishu1++;
						if(jishu1>1){//
							new gnn.CuowuDuixiang(RJSE_1.slice(RJSE_1.search(regex_QHIH_2)),"结束语漏添"+" : "+RJSE_1.replace(regex_QHIH, "$1"),"逻辑错误").baocun();
							jishu1=0;
							}//
					}//
					if(regex4.test(RJSE_1)){//
						jishu1--;
						
					}//
					
						//this.waiweiJiancha();
					}//检查外围逻辑
					
				}//
				else{//
					break;
				}//
				this.suoyin1++;
			}//zhuHangJiancha
		}//luojiJiancha
	this.ZJZJ_ATVN=function(RJSE_1){//this.ZJZJ_ATVN
		var regex_button_2=/\".*\"\s*\{/;
		switch(true){
		case regex_button_2.test(RJSE_1):
		return button_ZJZJ(RJSE_1);
		}
		return null;
	}//this.ZJZJ_ATVN
	function button_ZJZJ(RJSE_NINI){
		if(!/\;/.test(RJSE_NINI)){
		return "button定义的控件后面必须有分号，否则会继续执行下一行。"
		}
		return null;
	}
 	 this.pipei_lei=function(RJSE_1){//this.pipei_lei
	 	var key1=re.pipei_lei(RJSE_1);
	 	if(key1!=null){//
		switch(key1){//
			case "lei_16":
			return null;
			case "lei_0a":
			return null;
			case "lei_21":
			return this.lei_21_luoji(RJSE_1);
			case "lei_3f":
			return this.lei_3f_luoji(RJSE_1);
			case "lei_3c":
			return this.lei_3c_luoji(RJSE_1);
			case "lei_7f":
			return this.lei_7f_luoji(RJSE_1);
			case "lei_10":
			return null;
			case "lei_cf":
			return this.lei_cf_luoji(RJSE_1);
			}//
	}else{//
	return null;
	}//
	}//this.pipei_lei
	this.lei_7f_luoji=function(RJSE_1){//this.lei_7f_luoji
		return null;
	}//this.lei_7f_luoji
	this.lei_3c_luoji=function(RJSE_1){//this.lei_3c_luoji
		var VNWM_1 = RJSE_1.split(/','/);
		for(var EQWY_1 = 0; EQWY_1< VNWM_1.length; EQWY_1++){
			var RJSE_2=VNWM_1[EQWY_1];
			var regex_1=new RegExp("^"+re.jinzhi_16_tonglei+"\s*:\s*[^d\*-]");
			var regex_2=/oth:[^d\*-]/;
			if(regex_1.test(RJSE_2)){
				return "第"+(EQWY_1+1)+"个数组元素非算式内容缺少星号标识(将导致闪退)";
			}else if(regex_2.test(RJSE_2)){
				return "最后1个数组元素非算式内容缺少星号标识(将导致闪退)";
			}
		}
		return null;
	}//this.lei_3c_luoji
	function IOWR_cf(RJSE_1){
		RJSE_1=RJSE_1.replace(/\".*,.*\"/,"");
		this.UYTZ;
		this.TRVN_MCVN;
		var VNWM_1=RJSE_1.split(/\s*,\s*/);
		if(VNWM_1.length!=6){	
		}else{
			this.UYTZ=VNWM_1[3]
			this.TRVN_MCVN=VNWM_1[4]
		}
	}
	this.lei_cf_luoji=function(RJSE_1){//this.lei_cf_luojilgz 220305
		var IOWR_1 = new IOWR_cf(RJSE_1);
		if(IOWR_1.UYTZ==null)
			return "[cf参数个数不等于6个(有可能项目名使用了英文逗号)]";
		var RJSE_1 = AGVN_ZJZJ(IOWR_1.UYTZ, IOWR_1.TRVN_MCVN);
		RJSE_1+=UYTZ_ZJZJ_2(IOWR_1.UYTZ);
		RJSE_1+=UYTZ_ZJZJ.ZJZJ(IOWR_1.UYTZ);
		if(RJSE_1=="")
			return null;
		else
			return RJSE_1;
		
		function AGVN_ZJZJ(UYTZ_1, TRVN_MCVN){//AGVN_ZJZJ
		var regex_AGVN=/\d+\.\d{2}/;
		if(regex_AGVN.test(UYTZ_1)){
			if(/\.0/.test(TRVN_MCVN)){
				return "[小数位数不合理]";
			}
		}
			return "";
		}//AGVN_ZJZJ
		function UYTZ_ZJZJ_2(UYTZ_1){//UYTZ_ZJZJ_2
		/////以下检查运算符号后是否无数字////
		log(UYTZ_1);
		var RJSE_2="";//ZZZZGGMSOXGGNVCM
		var regex_UYUYGGFR=/(?:\+|-|\&|\*|\/|\#|\%|>>|<<)(?![dft\d\(])/;
		if(regex_UYUYGGFR.test(UYTZ_1)){
			return "[运算符后面没有数字或字节地址]";
		}
		else{
			return "";
		}
		}//UYTZ_ZJZJ_2
		//////以下检查权重是否合理///////
		
	}//this.lei_cf_luoji
	this.lei_3f_luoji=function(RJSE_1){//
	}//
	this.lei_21_luoji=function(RJSE_1){//this.lei_21_luoji
		var shuzu1=RJSE_1.replace(";","").split(/\s*,\s*/);
		if(shuzu1.length!=6){//
			return null;
			//return "在检查逻辑错误时发现21格式不对";
		}
		var RJSE_5="";
		var RJSE_2=shuzu1[4];
		var RJSE_4=shuzu1[5];
		var shuzu2=RJSE_4.split("|");
		if(shuzu2[0]==shuzu2[1])
			RJSE_5+="["+RJSE_0.RJSE_34+RJSE_0.RJSE_29+"]";
		//var shu1=gn.ShunJinzhiZhuanhuan(RJSE_2,1);
		//var shu2=gn.NiJinzhiZhuanhuan(shu1,2);
		//var regex2=/^10*$/;
		if(!regex_jihuoZhi.test(RJSE_2)){//激活值不合理
			RJSE_5+="["+RJSE_0.RJSE_28+RJSE_0.RJSE_29+"]";
		}//激活值不合理
		/////
		var RJSE_6=shuzu1[1];
		var RJSE_7=shuzu1[3];
		if(RJSE_6==RJSE_8&&RJSE_7==RJSE_9){//
		
			if(RJSE_2==RJSE_10){//帧号地址激活值相同
				var RJSE_12="[如果"+RJSE_0.RJSE_37+RJSE_0.RJSE_38+"相同"+RJSE_0.RJSE_28+"不太可能相同"+"]";
				var dui3={xuhao : RJSE_1.slice(RJSE_1.search(regex_QHIH_2)), wenben : RJSE_12+RJSE_1.replace(regex_QHIH, "$1"), leixing : "警告"};
				shuzu7.push(dui3);
				return null;
				}//帧号地址激活值相同
				
		}//
		else{//
			RJSE_8=RJSE_6;
			RJSE_9=RJSE_7;
			RJSE_10=RJSE_2;
		}//
		////
		if(RJSE_5=="")
			return null;
		else
		return RJSE_5;
	}//this.lei_21_luoji
}//Luoji
exports.hulueMingdan=function(RJSE_1,suoyin1){//exports.hulueMingdan
	var shuzu1=RJSE_1.match(/','/g);
	if(shuzu1==null){
		return false;
	}
	else if(shuzu1.length>18){
		new gnn.CuowuDuixiang(this.shuzu1[suoyin1].slice(this.shuzu1[suoyin1].search(regex_QHIH_2)),"[此行数组长度太长无法自动扫描格式] : "+RJSE_1.replace(regex_QHIH, "$1"),"警告").baocun();
		return true;
	}
	else{
	return false;
	}
}//exports.hulueMingdan