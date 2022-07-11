function VNWM_LD_IOWRGGVNWM(VNWM1){//VNWM_LD_IOWRGGVNWM
		var regex_ID=/(?:0x\w{3,8}|\w+ H)/g;
		var regex_VNWY=/[^\s]{2}(?:\s[^\s]{2}){3,100}/;
		var regex_ZDTI= /\d+:\d+:\d+/
		var regex_eS_UXUX= /..帧/
		var regex_YHRJ= /[\u4E00-\u9FA5]+/g;
		var VNWM2=[];
	for(EQWY1=0;EQWY1<VNWM1.length;EQWY1++){//
		var RJSE1=VNWM1[EQWY1];
		var IOWR_1={};
		var VNWN_ID_match=RJSE1.match(regex_ID);
		if(VNWN_ID_match==null){//
			continue;
		}//
		if(VNWN_ID_match.length>1){
		IOWR_1.ID=VNWN_ID_match[1];
		}else{
		IOWR_1.ID=VNWN_ID_match[0];
		}
		IOWR_1.VNWY=String(RJSE1.match(regex_VNWY));
		IOWR_1.GMIH=EQWY1;
		IOWR_1.ZDTI=String(RJSE1.match(regex_ZDTI));
		IOWR_1.eS_UXUX=String(RJSE1.match(regex_eS_UXUX));
		IOWR_1.YHRJ=String(RJSE1.match(regex_YHRJ));
		VNWM2.push(IOWR_1);
	}//
	return VNWM2;
}//VNWM_LD_IOWRGGVNWM
module.exports=VNWM_LD_IOWRGGVNWM;