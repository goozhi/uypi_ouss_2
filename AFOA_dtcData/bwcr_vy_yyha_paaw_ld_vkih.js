var gn=require("./gongnengKuai");
var gn=new gn.gongnengKuai();//功能块
/////////////////////////////
var RJSE1=rawInput("请输入文本内容");
gn.CFGN(RJSE1)
var shuzu1=RJSE1.split("\n");
var jinzhi_16="(?:\\d|[a-f]|[A-F]){5}";
var jinzhi_16_6_8="(?:(?:\\d|[a-f]|[A-F]){8}|(?:\\d|[a-f]|[A-F]){6})";
var jinzhi_16_5_3="(?:(?:\\d|[a-f]|[A-F]){5}|(?:\\d|[a-f]|[A-F]){3})";

var RJSE_bianma1="(?:P[0-3]|C[0-3]|U[0-3]|u[0-3]|B[0-3])"+jinzhi_16_5_3;
var shuzu3=new Array();
var regex_bianma1=new RegExp(RJSE_bianma1);
var regex_dizhi1=new RegExp(jinzhi_16_6_8);
for(suoyin1 in shuzu1){//
	RJSE2=shuzu1[suoyin1];
	RJSE3=RJSE2.match(regex_dizhi1);
	if(RJSE3==null){//
		continue;
	}//
	RJSE3=RJSE3[0];
	var suoyin2=RJSE2.search(RJSE3);
	RJSE2=RJSE2.slice(suoyin2,RJSE2.length);
	RJSE2=RJSE2+" ["+zhuanBianhao(RJSE3)+"]";
	shuzu3.push(RJSE2);
}//
//alert("格式化结果",shuzu3.join("\n"));
setClip(shuzu3.join("\n"));
function zhuanBianhao(dizhi1){//zhuanBianhao
	var RJSE1=dizhi1.slice(0,1);
	var RJSE2=dizhi1.slice(1,dizhi1.length);
	RJSE1=zhuanGuzhangMaBianma(RJSE1);
	return RJSE1+RJSE2;
}//zhuanBianhao


function zhuanGuzhangMaBianma(RJSE1){//guzhangMaDaihao
RJSE1=String(RJSE1);
	switch(RJSE1){//
		case "0": 
		return "P0";
		case "1": 
		return "P1";
		case "2": 
		return "P2";
		case "3": 
		return "P3";
		case "4": 
		return "C0";
		case "5": 
		return "C1";
		case "6": 
		return "C2";
		case "7": 
		return "C3";
		case "8": 
		return "B0";
		case "9": 
		return "B1";
		case "A": 
		return "B2";
		case "B": 
		return "B3";
		case "C": 
		return "U0";
		case "D": 
		return "U1";
		case "E": 
		return "U2";
		case "F": 
		return "U3";
		default : 
		return false;
	}//
}//guzhangMaDaihao