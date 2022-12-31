var H_LD_B= require("./AFOA_BX/H_LD_B.js")
// var JI_TIQEGGSTIQ = require('./JI_TIQEGGSTIQ')
function ZJYJGGEYRH(VNWM_RJSE_ZTHI_kp) {
  var VNWM_RJSE_ZTHI = VNWM_RJSE_ZTHI_kp.map(rnsf => {
    return rnsf
  })
  if (VNWM_RJSE_ZTHI.length < 6) {
    return false;
  }

  var VNWM_2 = [14, 12];
  for (var EQWY_1 = 0; EQWY_1 < VNWM_2.length; EQWY_1++) {
    var RNSF_1 = VNWM_2[EQWY_1];
    var HPMI_1 = Math.floor(RNSF_1 / 4 * 3);
    for (var EQWY_3 = 0; EQWY_3 < 20; EQWY_3 += 4) {
      var RSSC = 2;
      while (RSSC) {
        var RJSE_KP = H_LD_B(VNWM_RJSE_ZTHI.join(''));
        RSSC--;
        var RJSE_1 = RJSE_KP.slice(EQWY_3, EQWY_3 + HPMI_1);
        if (!/[^0]/.test(RJSE_1)) {
          continue;
        }
        var CGNE_RJSE_VYGGTYUB_VNWM = RJSE_KP.match(new RegExp(RJSE_1 + "\\w{" + (RNSF_1 - HPMI_1) + "}", "g"));

        if (CGNE_RJSE_VYGGTYUB_VNWM.length > 2) {
          var CGNE_RJSE_VYGGTYUB_EQWY_VNWM = [];
          var EQWY_2 = 0;
          CGNE_RJSE_VYGGTYUB_VNWM.forEach(RNSF_1 => {
            EQWY_2 = RJSE_KP.indexOf(RNSF_1, EQWY_2);
            CGNE_RJSE_VYGGTYUB_EQWY_VNWM.push(EQWY_2);
          });
          return { RSSC: RSSC, VNWM_RJSE_ZTHI_kp, VNWY_VNWM: VNWM_RJSE_ZTHI, regex: new RegExp(RJSE_1 + "\\w{" + (RNSF_1 - HPMI_1) + "}"), TSZNGGTRVN: RNSF_1, CGNEGGLIVN: CGNE_RJSE_VYGGTYUB_VNWM.length, CGNE_RJSE_VYGGTYUB_EQWY_VNWM: CGNE_RJSE_VYGGTYUB_EQWY_VNWM };
        }
        VNWM_RJSE_ZTHI.reverse();
      }
    }
  }
  return false;
}
module.exports = ZJYJGGEYRH;