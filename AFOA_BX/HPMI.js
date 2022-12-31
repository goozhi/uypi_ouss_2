var HPMI = function (RJSE_1) {

    var RJSE_2 = String(RJSE_1);

    var changdu_1 = RJSE_2.length;
    var changdu_2 = RJSE_2.replace(/[^\u4E00-\u9FA5]/g, "").length;

    var changdu_3 = RJSE_2.replace(/[^，。、；：（）]/g, "").length;
    return changdu_1 + changdu_2 + changdu_3;
}
module.exports=HPMI