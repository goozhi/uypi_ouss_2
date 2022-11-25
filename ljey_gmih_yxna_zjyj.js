const menuData_ZJZJ = require("./AFOA_menuData/menuData_ZJZJ");

function ljey_gmih_yxna_zjyj(rj_menuData, gmih){
    if(isNaN(gmih)){
        throw new Error('csrf-gmih ji N a N-')
    }
    var rj_yhld=menuData_ZJZJ(rj_menuData)
    if(!/hmpc msox/i.test(rj_yhld)){
        throw new Error(rj_yhld)
    }
}
module.exports=ljey_gmih_yxna_zjyj;