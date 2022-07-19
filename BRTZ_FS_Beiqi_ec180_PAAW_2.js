function BRTZ_FS_Beiqi_ec180_PAAW_2(YXNA_1,VKVY) {
    var NINI_SIIH_DIAX=require('./NINI_SIIH_DIAX');
    var encoding=require('encoding');
    var BRTZ_FS_Beiqi_ec180_PAAW = require('./BRTZ_FS_Beiqi_ec180_PAAW');
    var fs=require('fs');
    if(VKVY==null){
        VKVY="GB2312"
    }
    if(!fs.existsSync(YXNA_1)){
        throw new Error("YXNA AC ZZNQ Â·¾¶²»´æÔÚ: "+YXNA_1)
    }
    var RJSE_KP = encoding.convert(fs.readFileSync(YXNA_1),"utf8",VKVY).toString();
    var reg_QH_NINI_WU=/CM_ SG_.*/g;
    var reg_QH_DIYC_YG=/VAL_ \d+.*/g;
    var reg_QH_TRIG_KLVQ=/.*(?:@\d\+).*/g;
    var QH_NINI_WU_SLGR_RJSE=RJSE_KP.match(reg_QH_NINI_WU);
    var QH_DIYC_YG_SLGR_RJSE=RJSE_KP.match(reg_QH_DIYC_YG);
    var QH_TRIG_KLVQ_SLGR_RJSE=RJSE_KP.match(reg_QH_TRIG_KLVQ);
    if(QH_DIYC_YG_SLGR_RJSE==null){
        throw new Error("YJ AC AB QH_DIYC_YG")
    }
    if(QH_NINI_WU_SLGR_RJSE==null){
        throw new Error("YJ AC AB QH_NINI_WU")
    }
    if(QH_TRIG_KLVQ_SLGR_RJSE==null){
        throw new Error("YJ AC AB QH_TRIG_KLVQ")
    }
    QH_NINI_WU_SLGR_RJSE=QH_NINI_WU_SLGR_RJSE.join('\n')
    QH_DIYC_YG_SLGR_RJSE=QH_DIYC_YG_SLGR_RJSE.join('\n')
    QH_TRIG_KLVQ_SLGR_RJSE=QH_TRIG_KLVQ_SLGR_RJSE.join('\n')
    return NINI_SIIH_DIAX(BRTZ_FS_Beiqi_ec180_PAAW(QH_NINI_WU_SLGR_RJSE, QH_DIYC_YG_SLGR_RJSE, QH_TRIG_KLVQ_SLGR_RJSE));

}
module.exports = BRTZ_FS_Beiqi_ec180_PAAW_2;