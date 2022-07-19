function BRTZ_FS_Beiqi_ec180_PAAW(QH_NINI_WU_SLGR_RJSE, QH_DIYC_YG_SLGR_RJSE, QH_TRIG_KLVQ_SLGR_RJSE) {
    var UXUX_YHLD=typeof(QH_DIYC_YG_SLGR_RJSE);
    if(UXUX_YHLD!="string"){
        throw new Error("MCVN UXUX MSOX, AOAO JI sting :"+UXUX_YHLD);
    }
    var UXUX_YHLD=typeof(QH_NINI_WU_SLGR_RJSE);
    if(UXUX_YHLD!="string"){
        throw new Error("MCVN UXUX MSOX, AOAO JI sting :"+UXUX_YHLD);
    }
    var UXUX_YHLD=typeof(QH_TRIG_KLVQ_SLGR_RJSE);
    if(UXUX_YHLD!="string"){
        throw new Error("MCVN UXUX MSOX, AOAO JI sting :"+UXUX_YHLD);
    }
    var BRTZ_FS_Beiqi_ec180 = require('./BRTZ_FS_Beiqi_ec180');
    QH_NINI_WU_SLGR_RJSE = QH_NINI_WU_SLGR_RJSE.replace(/\r/g, "").replace(/\n(?=\n)/g, "")
    QH_DIYC_YG_SLGR_RJSE = QH_DIYC_YG_SLGR_RJSE.replace(/\r/g, "").replace(/\n(?=\n)/g, "")
    QH_TRIG_KLVQ_SLGR_RJSE = QH_TRIG_KLVQ_SLGR_RJSE.replace(/\r/g, "").replace(/\n(?=\n)/g, "")
    var QH_NINI_WU_SLGR_VNWM = QH_NINI_WU_SLGR_RJSE.split(/\n/);
    var QH_DIYC_YG_SLGR_VNWM = QH_DIYC_YG_SLGR_RJSE.split(/\n/);
    var QH_TRIG_KLVQ_SLGR_VNWM = QH_TRIG_KLVQ_SLGR_RJSE.split(/\n/);
    var JTYP_VNWM = QH_NINI_WU_SLGR_VNWM.map(RNSF => {
        var reg_1 = /\d+ (\w+)/;
        var NINI_XBST = RNSF.match(reg_1);
        if (NINI_XBST == null) {
            throw new Error("YJ AC AB XBST : " + RNSF);
        }
        NINI_XBST = NINI_XBST[1];
        var reg_NINI_XBST = new RegExp("(?:\n|^)(.+" + NINI_XBST + ".*)");
        var QH_DIYC_YG = QH_DIYC_YG_SLGR_RJSE.match(reg_NINI_XBST);
        if (QH_DIYC_YG == null) {
            QH_DIYC_YG = ""
        } else {
            QH_DIYC_YG = QH_DIYC_YG[1];
        }
        var QH_TRIG_KLVQ = QH_TRIG_KLVQ_SLGR_RJSE.match(reg_NINI_XBST);
        if (QH_TRIG_KLVQ == null) {
            throw new Error("YJ AC AB XBST :" + QH_TRIG_KLVQ_SLGR_RJSE);
        } else {
            QH_TRIG_KLVQ = QH_TRIG_KLVQ[1];
        }
        return BRTZ_FS_Beiqi_ec180(RNSF, QH_DIYC_YG, QH_TRIG_KLVQ);
    })
    return JTYP_VNWM.join('\n')
}
module.exports = BRTZ_FS_Beiqi_ec180_PAAW;