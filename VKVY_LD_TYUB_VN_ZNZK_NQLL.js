/////////////////////////////
function VKVY_LD_TYUB_VN_ZNZK_NQLL(RJSE1){
	RJSE1=RJSE1.replace(/\r/g,"")
var shuzu1=RJSE1.split("\n");
var jinzhi_16_5_3="(?:(?:\\d|[a-f]|[A-F]){5}|(?:\\d|[a-f]|[A-F]){3})";

var RJSE_bianma1="^(?:P[0-3]|C[0-3]|U[0-3]|u[0-3]|c[0-3]|B[0-3])"+jinzhi_16_5_3+"$";
var shuzu3=new Array();
var regex_bianma1=new RegExp(RJSE_bianma1);
for(suoyin1 in shuzu1){//
	RJSE2=shuzu1[suoyin1];
	RJSE3=RJSE2.match(regex_bianma1);
	if(RJSE3==null){//
		continue;
	}//
	RJSE3=RJSE3[0];
	var suoyin2=RJSE2.search(RJSE3);
	RJSE2=RJSE2.slice(suoyin2,RJSE2.length);
	RJSE4=RJSE3.replace("u","U").replace("c","C");
	RJSE2=RJSE2.replace(RJSE3,zhuanDizhi(RJSE3)+" ["+RJSE4+"]");
	shuzu3.push(RJSE2+shuzu1[Number(suoyin1)-1]+";");
}//
return shuzu3.join("\n").replace(";;",";");
}

function zhuanDizhi(bianma1){//zhuanDizhi
	var VKVY_LD_TYUB_VN=require('./VKVY_LD_TYUB_VN');
	var RJSE1=bianma1.slice(0,2);
	var RJSE2=bianma1.slice(2,bianma1.length);
	RJSE1=VKVY_LD_TYUB_VN(RJSE1);
	return RJSE1+RJSE2;
}//zhuanDizhi
module.exports=VKVY_LD_TYUB_VN_ZNZK_NQLL;