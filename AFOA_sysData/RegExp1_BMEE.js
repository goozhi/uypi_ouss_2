var fu_2="\\s*,\\s*";
var RJSE_regex_QHIH = "\/\/行\\d+";
var regex_QHIH = new RegExp("([\s\S\r]*)" + "(" +RJSE_regex_QHIH +")" );
var regex_QHIH_2 = new RegExp(RJSE_regex_QHIH);


var RegExp1=function(){//RegExp1

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
		var ziji1=new RegExp1();
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
	var ziji1=new RegExp1();
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
module.exports=RegExp1;