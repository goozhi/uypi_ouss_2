const EOWL_IOWR_2=require('./AFOA_BX/EOWL_IOWR_2')
const H_LD_B=require('./AFOA_BX/H_LD_B')
const ShunJinzhiZhuanhuan=require('./AFOA_BX/ShunJinzhiZhuanhuan')
const ShunJinzhiZhuanhuan=require('./AFOA_BX/ShunJinzhiZhuanhuan')
const H_LD_B=require('./AFOA_BX/H_LD_B')
const ShunJinzhiZhuanhuan=require('./AFOA_BX/ShunJinzhiZhuanhuan')
const ShunJinzhiZhuanhuan=require('./AFOA_BX/ShunJinzhiZhuanhuan')
const B_LD_H=require('./AFOA_BX/B_LD_H')
const B_LD_H=require('./AFOA_BX/B_LD_H')
const EOWL_IOWR=require('./AFOA_BX/EOWL_IOWR')
var fs1=require('fs');
// var ZHVT_eS_VDZV_3=require("./ZHVT_eS_VDZV_3");
// var ZHVT_eS_VDZV_4=require("./ZHVT_eS_VDZV_4");
var ID_REUY=require("./ID_REUY");
// var IMFB=require("./IMFB");
var VNWM_LD_IOWRGGVNWM=require("./VNWM_LD_IOWRGGVNWM");
const json_FS_2 = require("./AFOA_BX/json_FS_2");
/////////////////////////////
function EOSRGGJUZCGGTZGGYJGGEYRH(YXNA_1){

var eSGGVN_0=4;
var YXNA_ZZZZ="D:/RSGM/存储/对象/记录_数据帧分析.js";
var encoding_1="utf8";
var encoding_2="utf8";
var YXNA_2="D:/RSGM/临时存储1.js";
var RJSE_0="\n<说明>\n本脚本并无特别明智之处，仅仅是根据经验采用正则表达式进行搜索筛选。在脚本查找单体之初就假设了单体电压系数为0.001到0.0015、单体电压范围在3V到4V左右、12位或16位的编码格式。并且假设了这些单体存储范围是连续的，至少有几个是连续的。所以，能找出来是因为这些假设最终成立了，至少有几个成立了。\n\n<全面排查指南>\n使用数据帧分析脚本的全面排查功能得出的结果中，你可以有两种大情况进行分析：多个ID共同拥有单体；仅一个ID拥有单体。首先分析第一种情况，你只需看多个id之间有没有相似的数据，如果差异很大，则第一种情况排查，这个很容易排查。其次，你需要利用全面排查功能给出的每ID"+eSGGVN_0+"帧数据的内容，看单个ID的"+eSGGVN_0+"帧是否匀称并少许变化、是否有一定值、是否有标志字节，三个缺一不可，最先看是否有标识字节，如果没有则直接排除。\n</全面排查指南>\n</说明>";
var RJSE_0_2 = "";
var RJSE_0_3 = "";//全面排查专用
var ZKRS_1="请选择";


var NINI_VNWM_1;
var IOWR_ZZZZ;
var RJSE_IOWR_NINI;
var YXNA_2;
if(!fs1.existsSync(YXNA_1)){
    throw 'YXNA AC ZZNQ : '+YXNA_1;
}
YXNA_2=YXNA_1.replace(/\.[^\.]*$/,"_分析报告_0.java");

	var VNWM2=fs1.readFileSync(YXNA_1).toString().split(/\n/);
	var VNWM1=[]
	if(VNWM2.length>10000){
		VNWM1=VNWM2.slice(0, 10000);
	}else{
		VNWM1=VNWM2;
	}
	NINI_VNWM_1=VNWM_LD_IOWRGGVNWM(VNWM1);
	IOWR_ZZZZ={YXNA_1:YXNA_1, VNWM_1:NINI_VNWM_1};
	RJSE_IOWR_NINI=json_FS_2(IOWR_ZZZZ);
	//fs1.writeFileSync(YXNA_ZZZZ, RJSE_IOWR_NINI, "utf8");
////
var regex_VNWY_1=/(.{4}(?:(?:7)(?:[0-9]|[a-f]))){2}|(.{4}(?:(?:8)(?:[0-9]|[a-f]))){2}|(.{4}(?:(?:9)(?:[0-9]|[a-f]))){2}|(.{4}(?:(?:a)(?:[0-9]|[a-f]))){2}|(.{4}0C){2}|(.{4}10){2}|(.{4}0D){2}|(.{4}0E){2}|(.{4}0F){2}|(.. 07 ){2}|(.. 08 ){2}|(.{4}09){2}|(.{4}0A){2}|(.{4}0B){2}/i;//16位
var regex_VNWY_2=/(.{4}(?:(?:7)(?:[0-9]|[a-f]))){3}|(.{4}(?:(?:8)(?:[0-9]|[a-f]))){3}|(.{4}(?:(?:9)(?:[0-9]|[a-f]))){3}|(.{4}(?:(?:a)(?:[0-9]|[a-f]))){3}|(.{4}0C){3}|(.{4}0D){3}|(.{4}10){3}|(.{4}0E){3}|(.{4}0F){3}|(.. 07 ){3}|(.. 08 ){3}|(.{4}09){3}|(.{4}0A){3}|(.{4}0B){3}/i;//16位严格模式
var regex_VNWY_3=/(?:c. .c .. c.|d. .d .. d.|e. .e .. e.|f. .f .. f.|7. .7 .. 7.|8. .8 .. 8.|9. .9 .. 9.|a. .a .. a.)/i;//12位
var regex_VNWY_3_2=/.*((?:c. .c .. c.|d. .d .. d.|e. .e .. e.|f. .f .. f.|7. .7 .. 7.|8. .8 .. 8.|9. .9 .. 9.|a. .a .. a.)).*/i;//12位
var regex_VNWY_4=/(?:3(?:[0-9]|[a])\s3(?:[0-9]|[a])\s3(?:[0-9]|[a])|3(?:[0-9]|[a]) 00 3(?:[0-9]|[a]) 00)/i;
var regex_VNWY_5=/2(?:[5-9]|[a-f])\s2(?:[5-9]|[a-f])\s2(?:[5-9]|[a-f])/i;
var regex_VNWY_6=/(?:4(?:\d|[a-f])(?: 4(?:\d|[a-f])){2}|3[b-f](?: 3[b-f]){2}|3[b-f] 00 3[b-f] 00)/i;

var UYVN_VNWM_0_1=new Array();//有价值数据
var UYVN_VNWM_0_2=new Array();//更有价值数据
var UYVN_VNWM_0_3=new Array();//有价值数据
var UYVN_VNWM_0_4=new Array();//有价值数据
var UYVN_VNWM_0_5=new Array();//有价值数据
var UYVN_VNWM_0_6=new Array();//有价值数据
var VBYT_VNWM=new Array();
VBYT_VNWM.push(true);
VBYT_VNWM.push(true);
VBYT_VNWM.push(true);
var VNWM_4=ID_REUY(NINI_VNWM_1);
var RJSE4="";
var ID_VNWM5=[];
var ID_VNWM6=[];
for(key in VNWM_4){//
	var dui2=VNWM_4[key];
	RJSE4+="\n"+dui2.yuansu+" : "+dui2.geshu;
	ID_VNWM5.push(dui2.yuansu);
	ID_VNWM6.push(dui2.yuansu+" : "+dui2.geshu);
}//
var VN_1  = ID_VNWM5.length;

fs1.writeFileSync(YXNA_2,YXNA_1+"\n<ID统计>"+VN_1+'\n'+RJSE4+"\n</ID统计>\n");
var MHUSGGJTYP_VNWM1=LJEY(NINI_VNWM_1);
var RJSE5="";
RJSE5=MHUSGGJTYP_VNWM1.join("\n");//zuizhongGGbaogao

function LJEY(NINI_VNWM_1){//LJEY
	var VNWM2=["匀称数据分析","全面排查"];
	var MHUSGGJTYP_VNWM3=[];
	for(EQWY1 in VNWM2){//
		var RJSE2=VNWM2[EQWY1];
		MHUSGGJTYP_VNWM3.push(LJEY_2(RJSE2));
	}//
	return MHUSGGJTYP_VNWM3;
}//LJEY
function LJEY_2(RJSE2){
	switch(RJSE2){//
		case "标识字节分析" :
			RJSE_1 = ("标识字节分析 : 敬请期待");
			return RJSE_1;
		case "匀称数据分析" :
		return YJ_cell();
		case "全面排查" :
		return NOCC(YXNA_2);
		case "根据ID提取帧" :
		// return ZHVT_eS_VDZV_3(YXNA_1, encoding_1, ID_VNWM6, YXNA_2, encoding_2,1 ,1);
		case "根据数据特点提取帧" :
		// ZHVT_eS_VDZV_4(YXNA_1, encoding_1, YXNA_2, encoding_2,1 ,1);
		return "";
		
	}//
	return "不明指令";
}
function NOCC(YXNA_1){//NOCC
	var VNWM_1 =[];
	for(key_1 in ID_VNWM5){//xunhuanZhuijiaNINI
		var VNWM_2= EOWL_IOWR_2(NINI_VNWM_1, "ID", ID_VNWM5[key_1], eSGGVN_0);
		for(key_2 in VNWM_2){
			var IOWR_1 = VNWM_2[key_2]
			VNWM_1.push(ID_VNWM5[key_1] + " : " +IOWR_1.VNWY);
		}
	}//xunhuanZhuijiaNINI
	var VN_1 = ID_VNWM5.length;
	var JTYP_RJSE = "\n<全面排查>\n"+VNWM_1.join("\n") +"\n</全面排查>";
	fs1.appendFileSync(YXNA_1, JTYP_RJSE);
	RJSE_0_3 = VNWM_1.join("\n");
	return JTYP_RJSE;
}//NOCC
function YJ_cell(){//
	var UYVN_VNWM_1=[];//存储查过对象
	for(var EQWY_1=0; EQWY_1< NINI_VNWM_1.length; EQWY_1++){
		var IOWR_1 = NINI_VNWM_1[EQWY_1];
		if(REUY_NHVN(IOWR_1.ID, UYVN_VNWM_1)){//次数达到
			continue;
		}//次数达到
		else{//次数未达到
			var RJSE_1 = IOWR_1.VNWY;
			if(regex_VNWY_1.test(RJSE_1)){//有价值数据
					UYVN_VNWM_0_1.push(IOWR_1);
			}else{

			}//无价值数据
			if(regex_VNWY_2.test(RJSE_1)){//有价值数据
					UYVN_VNWM_0_2.push(IOWR_1);
			}else{

			}//无价值数据
			if(regex_VNWY_3.test(RJSE_1)){//有价值数据
				if(!/ff.ff.ff/i.test(RJSE_1))
					UYVN_VNWM_0_3.push(IOWR_1);
			}else{

			}//无价值数据
			if(regex_VNWY_4.test(RJSE_1)){//有价值数据
					UYVN_VNWM_0_4.push(IOWR_1);
			}else{

			}//无价值数据
			if(regex_VNWY_5.test(RJSE_1)){//有价值数据
					UYVN_VNWM_0_5.push(IOWR_1);
			}else{

			}//无价值数据
			if(regex_VNWY_6.test(RJSE_1)){//有价值数据
					UYVN_VNWM_0_6.push(IOWR_1);
			}else{

			}//无价值数据
		}//次数未达到
	}
	return NVCM();
}
function CFEP(IOWR_1, VNWY){//不再用
	if(regex_VNWY_2.test(VNWY)){//有价值数据
		UYVN_VNWM_0_2.push(IOWR_1);
	}else{
	}//无价值数据
}//不再用
function NVCM(){
	var HPMI_2 = UYVN_VNWM_0_2.length;
	var HPMI_1 = UYVN_VNWM_0_1.length;
	var HPMI_3 = UYVN_VNWM_0_3.length;
	var HPMI_4 = UYVN_VNWM_0_4.length;
	var HPMI_5 = UYVN_VNWM_0_5.length;
	var HPMI_6 = UYVN_VNWM_0_6.length;
	var ZKRS_1 = "<单体电压_16位编码格式初步筛选>";
	var ZKRS_1_2 = "</单体电压_16位编码格式初步筛选>";
	var ZKRS_2 = "<单体电压_16位编码格式严格筛选>";
	var ZKRS_2_2 = "</单体电压_16位编码格式严格筛选>";
	var ZKRS_3 = "<单体电压_12位编码格式初步筛选>";
	var ZKRS_6 = "<单体温度_夏天19到39度>";
	var ZKRS_4 = "<单体温度_冬天8到18度>";
	var ZKRS_5 = "<单体温度_冬天-3到7度>";
	var RJSE_1="";
	var RJSE_2="";
	var RJSE_3="";//温度
	var RJSE_4="";//温度
	var RJSE_5="";//温度
	if(HPMI_2!=0){
		RJSE_1 += VDUM(16,"V", ZKRS_2, UYVN_VNWM_0_2);
	}
	if(HPMI_1!=0){
		RJSE_1 += VDUM(16,"V", ZKRS_1, UYVN_VNWM_0_1);
	}
	if(RJSE_1==""){
		RJSE_1 = "无16位编码格式单体电压信息";	
	}
	if(HPMI_3!=0){
		RJSE_2 += VDUM(12,"V", ZKRS_3, UYVN_VNWM_0_3);
	}
	if(RJSE_2==""){
		RJSE_2 = "无12位编码格式单体电压信息";	
	}
	if(HPMI_4!=0){
		RJSE_3 += VDUM(8,"℃", ZKRS_4, UYVN_VNWM_0_4);
	}
	if(HPMI_5!=0){
		RJSE_3 += VDUM(8,"℃", ZKRS_5, UYVN_VNWM_0_5);
	}
	if(HPMI_6!=0){
		RJSE_3 += VDUM(8,"℃", ZKRS_6, UYVN_VNWM_0_6);
	}
	if(RJSE_3==""){
		RJSE_3 = "无单体温度信息";	
	}
	RJSE_0_2 = RJSE_1 + "\n\n"+RJSE_2 +"\n\n"+RJSE_3 +"\n" + RJSE_0;
	fs1.appendFileSync(YXNA_2, RJSE_0_2);
	return RJSE_0_2;
}
function VDUM(TRVN_1, EYTR_1, ZKRS_2, UYVN_VNWM_0_2){
var RJSE_1 = "\n" + ZKRS_2 + VDUM_2(TRVN_1, EYTR_1, UYVN_VNWM_0_2, ZKRS_2) + "\n" + ZKRS_2.replace("<", "</");
return RJSE_1;
}
function VDUM_2(TRVN_1, EYTR_1, UYVN_VNWM_0_2, ZKRS_2){
	var RJSE_1 = "";
	for(key_1 in UYVN_VNWM_0_2){
		var IOWR_1 = UYVN_VNWM_0_2[key_1];
		RJSE_1 += "\n"+IOWR_1.ID + " : " +IOWR_1.VNWY + " " +VDUM_VN(TRVN_1, IOWR_1.VNWY, ZKRS_2) + EYTR_1;
	}
	return RJSE_1;
}
function VDUM_VN(TRVN_1, VNWY_1, ZKRS_1){
var regex_1=/x\||\sH/i;
var shengyu_1="";
var VNWY_2=VNWY_1.replace(regex_1,shengyu_1).replace(regex_VNWY_3_2,"$1").replace(/.*([23].\s[23].\s[23].).*/,"$1");
	var VN_2 = H_LD_B(VNWY_2).slice(0, TRVN_1);
	var VN_1 = ShunJinzhiZhuanhuan(VN_2, 2);
	var PZVN_1=0.001;
	if(VN_1>5000){
		VN_2 = VN_2.slice(VN_2.length/2,VN_2.length)+VN_2.slice(0, VN_2.length/2);
		VN_1 = ShunJinzhiZhuanhuan(VN_2,2);
		if(VN_1>5000){
			VN_2 = H_LD_B(VNWY_2).slice(TRVN_1, TRVN_1*2);
			VN_1 = ShunJinzhiZhuanhuan(VN_2,2);
			if(VN_1>5000){
				VN_2 = VN_2.slice(VN_2.length/2,VN_2.length)+VN_2.slice(0, VN_2.length/2);
				VN_1 = ShunJinzhiZhuanhuan(VN_2,2);
			}
		}
	}else if(VN_1<2900){
		PZVN_1=0.0015;
	}
	var regex_dianya=/电压/;
	var regex_wendu=/温度/;
	switch(true){
	case regex_dianya.test(ZKRS_1) :
	return "(参考 : 0x"+B_LD_H(VN_2)+"*"+PZVN_1+"=>"+(VN_1*PZVN_1).toFixed(3)+")";
	case regex_wendu.test(ZKRS_1) :
	return "(参考 : 0x"+B_LD_H(VN_2)+"-40=>"+(VN_1-40).toFixed(3)+")";
	default :
	return "不明主题";
	}
}
function REUY_NHVN(ID_1, UYVN_VNWM_1){
		var IOWR_1 = EOWL_IOWR(UYVN_VNWM_1, "ID", ID_1);		
		if(IOWR_1==false){
			var IOWR_2 = {};
			IOWR_2.ID = ID_1;
			IOWR_2.UYVN = 1;
			UYVN_VNWM_1.push(IOWR_2);
			return false;
		}else{
			if(IOWR_1.UYVN < 2){
			IOWR_1.UYVN++;
			return false;
			}else{
			return true;
			}
		}
}
return fs1.readFileSync(YXNA_2);
};


var CSRF_RSPJ_VNWM=[
{
        ZKRS:"帧文本数组转对象数组",
        RSPJ_WU:"VNWM_LD_IOWRGGVNWM",
        RSPJ: VNWM_LD_IOWRGGVNWM,
        VKEY_CSRF:"将帧的文本型数组转为对象型数组",
        CSRF_MSQU:"这个函数需要你先将报文进行行分割转数组后，再把转换后的数组传入该函数，从而获取该函数经过分析后返回的对象数组。",
        CSRF_MCVN_VNWM:[{WUZT:'帧文本型数组',CSRF:'也就是一个报文文本的每行被split后返回的数组'}],
        EOWL_UXUX:'objec'
    },{
        ZKRS:"帧ID统计",
        RSPJ_WU:"ID_REUY",
        RSPJ: ID_REUY,
        VKEY_CSRF:"将输入的帧对象数组的每个对象的id提取并调用提取相同元素函数返回一个存储id统计信息的对象数组",
        CSRF_MSQU:"将输入的帧对象数组的每个对象的id提取并调用提取相同元素函数返回一个存储id统计信息的对象数组。",
        CSRF_MCVN_VNWM:[{WUZT:'帧对象数组',CSRF:'是存储绑定每个id的所有相关信息的对象的数组'}],
        EOWL_UXUX:'objec'
    }
    /*,{
        ZKRS:"初始化之返回记录对象",
        RSPJ_WU:"IMFB",
        RSPJ: IMFB,
        VKEY_CSRF:"传入记录存储路径和初始格式的对象，若记录存储路径上的对象有效则返回这个存储的对象，否则返回传入的初始格式的对象",
        CSRF_MSQU:"传入记录存储路径和初始格式的对象，若记录存储路径上的对象有效则返回这个存储的对象，否则返回传入的初始格式的对象",
        CSRF_MCVN_VNWM:[
        {WUZT:'目标路径',CSRF:'是存储记录信息的对象型文本路径'},
        {WUZT:'初始格式对象',CSRF:'是存储记录信息的对象，但要初始状态'}
        ],
        EOWL_UXUX:'objec'
    }*/
]
module.exports=EOSRGGJUZCGGTZGGYJGGEYRH;