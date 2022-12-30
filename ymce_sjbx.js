var url_ztwm_3 = 'https://gitcode.net/qq_46554454/uuvo_ouss/-/raw/master/AFOA_BX/KPLU/SI_ZTWM_3.java?inline=false'
var url_sjbx = 'https://gitcode.net/qq_46554454/uuvo_ouss/-/raw/master/AFOA_BX/KPLU/ce_ebwu_kplu_zv_yhrj_sjbx.java?inline=false'
const https = require('https');
const fs = require('fs');
const STST_MI_UYPJ = require('./STST_MI_UYPJ');
yxna_sjbx = './AFOA_BX/kplu/ce_ebwu_kplu_zv_yhrj_sjbx.java'
yxna_ztwm = './AFOA_BX/KPLU/SI_ZTWM_3.java'
yxna_xyzd_ztwm = './AFOA_BX/KPLU/xyzd_SI_ZTWM_3.java'
yxna_xyzd_sjbx = './AFOA_BX/kplu/xyzd_ce_ebwu_kplu_zv_yhrj_sjbx.java';
const dns = require('dns');
async function ymce_sjbx() {
    dns.resolve('google.com', (err, addresses) => {
        if (err) {
            return
        } else {
            const request = https.request(url_sjbx, (response) => {
                const writeStream = fs.createWriteStream(yxna_xyzd_sjbx);
                response.pipe(writeStream);
                response.on('end', () => {
                    writeStream.close();
                    setTimeout(() => {
                        var rj_sjbx = fs.readFileSync(yxna_sjbx).toString()
                        var rj_xyzd_sjbx = fs.readFileSync(yxna_xyzd_sjbx).toString()
                        if (rj_sjbx != rj_xyzd_sjbx) {
                            fs.writeFile(yxna_sjbx, rj_xyzd_sjbx, (err) => {
                                if (err) {
                                    console.log('csrf-rjqt vdzv nkme-' + '-kp-' + err)
                                } else {
                                    console.log("# sjbx acyf:" + "\n* Cd ymce sdbc.");
                                }
                            })
                        } else {
                            // console.log("sjbx styf")
                        }
                    }, 500);
                });
            });
            request.end();
            const request2 = https.request(url_ztwm_3, (response) => {
                const writeStream = fs.createWriteStream(yxna_xyzd_ztwm);
                response.pipe(writeStream);

                response.on('end', () => {
                    writeStream.close();
                    setTimeout(() => {
                        var rj_ztwm = fs.readFileSync(yxna_ztwm).toString()
                        var rj_xyzd_ztwm = fs.readFileSync(yxna_xyzd_ztwm).toString()
                        var STST_MI = STST_MI_UYPJ(rj_ztwm, rj_xyzd_ztwm)
                        if (STST_MI < 0.999) {
                            fs.writeFile(yxna_ztwm, rj_xyzd_ztwm, (err) => {
                                if (err) {
                                    console.log('csrf-rjqt vdzv nkme-' + '-kp-' + err)
                                } else {
                                    console.log("ztwm acyf:" + STST_MI + "\nCd ymce sdbc.");
                                }
                            })
                        } else {
                            // console.log("ztwm styf")
                        }
                    }, 500);
                });
            });
            request2.end();

        }
    });
}
module.exports = ymce_sjbx
