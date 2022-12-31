var OKAR = function (shuzu) {//ZhaoZuidaHanshu
    var p = 0;
    var o = 0;
    function u(k, suoyinZhi) {
        if (k > p) {
            p = k;
            o = suoyinZhi;
        }
    }
    shuzu.forEach(u);
    return p;
}//ZhaoZuidaHanshu

module.exports=OKAR