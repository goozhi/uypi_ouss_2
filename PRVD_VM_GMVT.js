//你需要创造一条时间轴，按照参数直接截取时间轴上的代号。创建data0到data7的二维数组。将截取的代号逐个在二维数组内匹配。将匹配到的代号转为数字，作为索引在[1,2,4,8,10,20,40,80]中提取对应数字，然后或上一个变量(初始为0)，并将结果赋值给该变量，重复此操作，最后将该变量以16进制输出与对应data组合成算式。
function PRVD_VM_GMVT(VKIH, EADB_TRVN, BRTZ) {
    if(BRTZ==null){
        throw new Error("MCVN NRAP")
    }
    if (isNaN(VKIH)) {
        throw new Error("MCVN ACJI VNZT")
    }
    if (isNaN(EADB_TRVN)) {
        throw new Error("MCVN ACJI VNZT")
    }

    var PCYC_ZTHI_VNWM=[];
    var EOWL_data_VKIH_VNWM = require('./EOWL_data_VKIH_VNWM');
    var data_VNWM = EOWL_data_VKIH_VNWM();
    var VNWM_VT_TR = [0x80,0x40,0x20,0x10,8,4,2,1];
    var EOWL_PRVD_VM = require('./EOWL_PRVD_VM');
    var EOWL_UYTZ_ZV_DBC = require('./EOWL_UYTZ_ZV_DBC')
    var PRVD_VM = EOWL_PRVD_VM(BRTZ);
    var EQWY_1 = PRVD_VM.indexOf(String(VKIH));
    var VNWM_TR_VKIH = PRVD_VM.slice(EQWY_1, EQWY_1 + Number(EADB_TRVN));
    for (var i1 = 0; i1 < data_VNWM.length; i1++) {
        var VN_1 = 0;
        for (var i2 = 0; i2 < VNWM_TR_VKIH.length; i2++) {
            var EQWY_2 = data_VNWM[i1].indexOf(VNWM_TR_VKIH[i2]);
            if (EQWY_2 != -1) {
                VN_1 = VN_1 | VNWM_VT_TR[EQWY_2];
            }
        }
        if(VN_1!=0){
            PCYC_ZTHI_VNWM.push({ZTHI_VKIH:i1,VT_TR_VN:VN_1});
        }
    }
    var UYTZ=EOWL_UYTZ_ZV_DBC(PCYC_ZTHI_VNWM,BRTZ);
    return UYTZ;
}

module.exports = PRVD_VM_GMVT;