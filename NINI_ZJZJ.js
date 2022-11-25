function NINI_ZJZJ(VNWM_1) {
    if (!LJEY_1(VNWM_1[2])) {
        throw 'ACUN UXUX DK NINI: 不明类型的项目 : ' + VNWM_1.join(",")
    }
}
function LJEY_1(RJSE_1) {
    switch (RJSE_1) {
        case 'cf':
            return true;
        case '16':
            return true;
        case '0a':
            return true;
        case 'bb':
            return true;
        case '7f':
            return true;
        case '3f':
            return true;
        case '1f':
        case '1F':
            return true;
        case '21':
            return true;
        default:
            return false;
    }
}

module.exports = NINI_ZJZJ;