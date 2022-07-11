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
