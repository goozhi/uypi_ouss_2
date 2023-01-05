function zjzj_brtz_zv_Str2ID(rj_kp) {
    var rj1=rj_kp
    var rj_msox = ""
    var reg_lg_xbst = /^Str2ID\(\w+\)/;
    var rj_yhld = rj1
    var reg_bq_pc_yhrj = /[\u4E00-\u9FA5]/
    if (reg_bq_pc_yhrj.test(rj1)) {
        rj_msox += "csrf-pc yhrj-" + rj1.match(reg_bq_pc_yhrj) + " kp-" + rj_kp
        return rj_msox
    }

    if (!reg_lg_xbst.test(rj_yhld)) {
        rj_msox += "csrf-lg xbst msox-"+"-kp-"+rj_kp
    } else {
        rj_yhld = rj_yhld.replace(reg_lg_xbst, "")
        if (!/^,/.test(rj_yhld)) {
            rj_msox += "csrf-nrap ','-" + rj_yhld + " kp-" + rj_kp
        } else {

            rj_yhld = rj_yhld.replace(/^,/, "")
            var reg_bqeo = /[^\u4E00-\u9FA5\uff0c\uff1b\u3002\u2018\u2019\u201d\u201c;\ufffd]*/
            if (!reg_bqeo.test(rj_yhld)) {
                rj_msox += "csrf-bqeo pc ftpj frih-" + rj_yhld + " kp-" + rj_kp
            } else {
                rj_yhld = rj_yhld.replace(reg_bqeo, "");
                if (/[^;\s]/.test(rj_yhld)) {
                    rj_msox += "csrf-bqeo pc ftpj frih-" + rj_yhld[0] + " kp-" + rj_kp
                } else {
                    if (!/^\s*;\s*$/.test(rj_yhld)) {
                        rj_msox += "csrf-NRAP AE MH LW ';'-"+ rj_yhld + " kp-" + rj_kp
                    }
                }
            }
        }
    }
    return rj_msox;
}
module.exports=zjzj_brtz_zv_Str2ID
