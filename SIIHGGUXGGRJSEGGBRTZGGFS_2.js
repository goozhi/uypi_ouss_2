
function SIIHGGUXGGRJSEGGBRTZGGFS_2(DIWR_1, VN_1) {
    if (VN_1 == null) {
        VN_1 = 0;
    }
    var Kongge = '                                                                                                       ';
    let RJSE_1 = "";
    for (FO_1 in DIWR_1) {
        if (typeof (DIWR_1[FO_1]) == "string") {
            if (/^\s+$/.test(DIWR_1[FO_1])) {
            } else {
                var RJSE_YHLD = DIWR_1[FO_1].replace(/((?:\n|^))\s+/g, '$1').replace(/\r/g, '')//qingkongKonggeHeHuiche
                RJSE_1 += RJSE_YHLD.replace(/((?:\n(?!$)|^))/g, "$1" + Kongge.slice(0, VN_1));
            }
        } else if (typeof (DIWR_1[FO_1] == "object")) {
            try {
                RJSE_1 = RJSE_1 + "\{\n" + SIIHGGUXGGRJSEGGBRTZGGFS_2(DIWR_1[FO_1], VN_1 + 4);
                if (/\n$/.test(RJSE_1)) {
                    RJSE_1 += Kongge.slice(0, VN_1) + '\}\n';
                } else {
                    RJSE_1 += '\n' + Kongge.slice(0, VN_1) + '\}\n';
                }
                // throw JSON.stringify(RJSE_1);
            } catch (err) {
                throw err + "\n" + FO_1 + ":" + JSON.stringify(DIWR_1[FO_1]) + "\nWLQQ UMMS 回归出错";
            }
        } else {
            throw "SIIHGGUXGGRJSEGGBRTZGGFS_2: 参数格式错误";
        }
    }
    return RJSE_1;

}
module.exports = SIIHGGUXGGRJSEGGBRTZGGFS_2;