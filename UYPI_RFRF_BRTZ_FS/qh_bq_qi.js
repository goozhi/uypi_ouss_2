function qh_bq_qi(rj_kp) {
    var rj1 = rj_kp
    var reg_brtz_1 = /Str2ID\(\w+\).*/g;
    var vnwm_rj1 = rj1.match(reg_brtz_1);
    if (vnwm_rj1 == null) {
        throw new Error("<RA ZJZO AB DIYC BRTZ>\n" + rj_kp + "\n</RA ZJZO AB DIYC BRTZ>")
    } else {
        rj_yhld = rj1.replace(reg_brtz_1, "")
        if (/[\S]/.test(rj_yhld)) {
            throw new Error("ACUN DK BRTZ",{cause:{nixb:rj_yhld.replace(/\n(?=\n)/g,""), kp:""}})
        }
    }
    var vnwm_jtyp_1 = vnwm_rj1.map(rn1 => {
        var reg_ft_jtco_fr=/([^;\s])\s*$/
        var diwr_ft_jtco_fr=rn1.match(reg_ft_jtco_fr)
        if(diwr_ft_jtco_fr!=null){
            if(/\w/.test(diwr_ft_jtco_fr[1])){
                rn1+=";"
            }
            else{
                throw new Error("[ACUN DK JTCO FR]"+diwr_ft_jtco_fr[1]+"<--"+rn1)
            }
        }
        if(!/\),/.test(rn1)){
            rn1=rn1.replace(/\)/,"\),")
        }
        return rn1
    })
    var rj_jtyp_1 = vnwm_jtyp_1.join("\n")
    return rj_jtyp_1
}
module.exports = qh_bq_qi;