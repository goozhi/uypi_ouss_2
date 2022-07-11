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
