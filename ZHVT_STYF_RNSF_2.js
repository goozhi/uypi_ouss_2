function ZHVT_STYF_RNSF_2(beiTiquShuzu){//ZHVT_STYF_RNSF_2
	var RJSE1="lgz5"+beiTiquShuzu.join("lgz5")+"lgz5";
	var RJSE2="";
	var VNWM3=[];
	var VNWM2=[];
	var VNWM1=[];
	
	 for(beiTiquShuzuXuhao=0;beiTiquShuzuXuhao<beiTiquShuzu.length;beiTiquShuzuXuhao++){//xunhuanZhaoXiangtongYuansuXinxi
	 	RJSE2=beiTiquShuzu[beiTiquShuzuXuhao];
	 	if(VNWM3.indexOf(RJSE2)==-1){//
	 	VNWM3.push(RJSE2);
	 	var regex1=new RegExp("lgz5"+RJSE2+"(?=lgz5)","g");
	 	VNWM2=RJSE1.match(regex1);
	 	
	 	var DIWR_1={yuansu : RJSE2, geshu : VNWM2.length};
	 	VNWM1.push(DIWR_1);
	 	}//
	 }//xunhuanZhaoXiangtongYuansuXinxi
	 return VNWM1;
}//ZHVT_STYF_RNSF_2

module.exports=ZHVT_STYF_RNSF_2;