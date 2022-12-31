var NIKC = function (YXNA_1) {//NIKC
    //仅创建文件夹
    var fs = require("fs");
    fs.mkdir(YXNA_1, { recursive: true }, (err) => { if (err) throw err; console.log("创建" + YXNA_1 + '完成'); });
}//NIKC
module.exports=NIKC