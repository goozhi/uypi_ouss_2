var UYUY = function (RJSE1) {//UYUY
    RJSE1 = RJSE1.replace("(-", "-lgz");

    var VNWM_1 = RJSE1.split(/(?:\*|-(?!lgz)|\+|\/)/);
    var VNWM_2 = RJSE1.match(/(?:\*|-(?!lgz)|\+|\/)/g);
    var VN3 = VN4 = Number(VNWM_1[0]);
    var VN5 = 0;
    for (suoyin1 in VNWM_2) {//
        //var VN1=Number(VNWM_1[suoyin1]);
        var VN2 = Number(VNWM_1[Number(suoyin1) + 1].replace(/lgz|\)/g, ""));
        switch (VNWM_2[suoyin1]) {//
            case "*":
                VN4 -= VN3;
                VN3 *= VN2;
                VN4 += VN3;
                break;
            case "/":
                VN4 -= VN3;
                VN3 /= VN2;
                VN4 += VN3;
                break;
            case "+":
                VN4 += VN2;
                VN3 = VN2;
                break;
            case "-":
                VN4 -= VN2;
                VN3 = -VN2;
                break;

        }//
    }//
    return VN4;
    //如果为乘号(VN4-=VN3.VN3*=VN2.VN4+=VN3).如果为除号(VN4-=VN3.VN3/=VN2.VN4+=VN3).如果为加号(VN3=VN2.VN4+=VN2).如果为减号(VN3=-VN2.VN4-=VN2).循环执行直至最后一个运算符找到并操作完;
}//UYUY
module.exports=UYUY