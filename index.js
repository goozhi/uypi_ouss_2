const child_process = require('child_process');
const spawn = child_process.spawn
var express = require('express');
var encoding = require('encoding')
const bodyParser = require('body-parser');
var WLYC_ASCIIGGLDRG = require('./WLYC_ASCIIGGLDRG');
var WLYC_SLRH_JYUY = require('./WLYC_SLRH_JYUY');
var WLYC_VR_VKJP = require('./WLYC_VR_VKJP')
var WLYC_RJQT_GRBJ = require('./WLYC_RJQT_GRBJ');
var WLYC_RJQT_FDMJ = require('./WLYC_RJQT_FDMJ');
var WLYC_VR_EBWU_ATRS = require('./WLYC_VR_EBWU_ATRS')
var WLYC_EYRHGGHQTB = require('./WLYC_EYRHGGHQTB');
var WLYC_DIZCGGOUSS = require('./WLYC_DIZCGGOUSS');
var WLYC_ZSGGTRGGYJGGEYRH = require('./WLYC_ZSGGTRGGYJGGEYRH');
var WLYC_EOSRGGJUZCGGTZGGYJEYRH = require('./WLYC_EOSRGGJUZCGGTZGGYJEYRH');
var WLYC_EYRH_NINI_HQMV_YENH_YYHA = require('./WLYC_EYRH_NINI_HQMV_YENH_YYHA');
var WLYC_NINI_SIIH_DIAX = require('./WLYC_NINI_SIIH_DIAX');
var WLYC_NINI_CGNE_ZV_NINI_WU_MR_ES = require('./WLYC_NINI_CGNE_ZV_NINI_WU_MR_ES');
var WLYC_SIIHGGUXGGRJSEGGBRTZGGFS = require('./WLYC_SIIHGGUXGGRJSEGGBRTZGGFS');
var WLYC_VKVY_LD_TYUB_VN_ZNZK_NQLL = require('./WLYC_VKVY_LD_TYUB_VN_ZNZK_NQLL');
var WLYC_VKVY_LD_TYUB_VN_ZNZK_NQUD = require('./WLYC_VKVY_LD_TYUB_VN_ZNZK_NQUD');
var WLYC_VR_EBWU_BRTZ_FS = require('./WLYC_VR_EBWU_BRTZ_FS');
const WLYC_VR_KUOE_AFOA_TSFZ_RJOK_html_FS = require('./WLYC_VR_KUOE_AFOA_TSFZ_RJOK_html_FS');
const WLYC_DBC_RJOK = require('./WLYC_DBC_RJOK');
var WLYC_sysData_ZJZJ = require('./WLYC_sysData_ZJZJ');
var WLYC_menuData_ZJZJ = require('./WLYC_menuData_ZJZJ');
var WLYC_ESIH_BRTZ_FS = require('./WLYC_ESIH_BRTZ_FS');
var WLYC_dtcData_ZJZJ = require('./WLYC_dtcData_ZJZJ');
var WLYC_VNWY_TU_NINI_BRTZ_FS = require('./WLYC_VNWY_TU_NINI_BRTZ_FS')
var WLYC_BRTZ_FS_3f = require('./WLYC_BRTZ_FS_3f');
var WLYC_BRTZ_FS_3f_Beiqi_ec180 = require('./WLYC_BRTZ_FS_3f_Beiqi_ec180');
var WLYC_BRTZ_FS_Beiqi_ec180 = require('./WLYC_BRTZ_FS_Beiqi_ec180');
var WLYC_TYUB_LDRG = require('./WLYC_TYUB_LDRG');
var app = express();
var ymce_sjbx = require('./ymce_sjbx')
var config = require("./config");
const NVMS_EBWU_LD_YHRJ_1 = require('./AFOA_BX/NVMS_EBWU_LD_YHRJ_1');
const NVMS_EBWU_LD_YHRJ_3 = require('./AFOA_BX/NVMS_EBWU_LD_YHRJ_3');
const NVMS_EBWU_LD_YHRJ_2 = require('./AFOA_BX/NVMS_EBWU_LD_YHRJ_2');
const WLYC_UYPI_OUSS_RVDB_TSFZ_RJOK_html_FS = require('./WLYC_UYPI_OUSS_RVDB_TSFZ_RJOK_html_FS');
const os = require('os');
const WLYC_VR_MD_RJOK_html_FS = require('./WLYC_VR_md_RJOK_html_FS');
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || config.port);
app.get('/', function (req, res) {
    var YMCE_HITD = config.YMCE_HITD
    var version = config.version
    var author = config.piqr
    res.render('home', { YMCE_HITD, version, author });
});
app.get('/GLRH', function (req, res) {
    res.render('GLRH');
});
app.get('/HD_LZJK', function (req, res) {
    res.render('HD_LZJK');
});
app.get('/HD_LZJK_FYWYGGXBST', function (req, res) {
    res.render('HD_LZJK_FYWYGGXBST');
});
app.get('/TYUB_LDRG', function (req, res) {
    res.render('TYUB_LDRG');
});
app.get('/DIZCGGOUSS', function (req, res) {
    res.render('DIZCGGOUSS', { KLCH: "*\"示例\",{22 00 22},cf,d4,.0,;" });
});
app.get('/QH_MAGM', function (req, res) {
    res.render('QH_MAGM');
});
app.get('/ARAGGGVDGGLDRG', function (req, res) {
    res.render('ARAGGGVDGGLDRG');
});
app.get('/ASCIIGGLDRG', function (req, res) {
    res.render('ASCIIGGLDRG');
});
app.get('/SLRH_JYUY', function (req, res) {
    res.render('SLRH_JYUY');
});
app.get('/ZSGGTRGGYJGGEYRH', function (req, res) {
    res.render('ZSGGTRGGYJGGEYRH');
});
app.get('/VR_EBWU_ATRS', function (req, res) {
    WLYC_VR_EBWU_ATRS(req, res)
});
app.get('/VR_VKJP', function (req, res) {
    WLYC_VR_VKJP(req, res);
});
app.get('/uypi_ouss_zvow_rjok_ld_html', function (req, res) {
    WLYC_VR_MD_RJOK_html_FS(req, res, "./public/md/uypi_ouss_zvow.md");
});
app.get('/ywzb_kfou_zv_rvdb_ouss_ssvl_os_rjok_ld_html', function (req, res) {
    WLYC_VR_MD_RJOK_html_FS(req, res, "./public/md/ywzb_kfou_zv_rvdb_ouss_ssvl_os.md");
});
app.get('/ywzb_kfou_zv_vscode_rvdb_tsfz_rjok_ld_html', function (req, res) {
    WLYC_VR_MD_RJOK_html_FS(req, res, "./public/md/ywzb_kfou_zv_vscode_rvdb_tsfz.md");
});
app.get('/ywzb_kfou_zv_rfrf_uypi_wtjn_rjok_ld_html', function (req, res) {
    WLYC_VR_MD_RJOK_html_FS(req, res, "./public/md/ywzb_kfou_zv_rfrf_uypi_wtjn.md");
});

app.get('/ywzb_kfou_zv_nwvt_vo_vy_es_rjok_ld_html', function (req, res) {
    WLYC_VR_MD_RJOK_html_FS(req, res, "./public/md/ywzb_kfou_zv_nwvt_vo_vy_es.md");
});
app.get('/ywzb_kfou_zv_vr_vnwy_tu_ngnc_rjok_ld_html', function (req, res) {
    WLYC_VR_MD_RJOK_html_FS(req, res, "./public/md/ywzb_kfou_zv_vr_vnwy_tu_ngnc.md");
});
app.get('/riri_cl_rvdb_wtjn_rjok_ld_html', function (req, res) {
    WLYC_VR_MD_RJOK_html_FS(req, res, "./public/md/riri_cl_rvdb_wtjn.md");
});
app.get('/UYPI_OUSS_RVDB_TSFZ_RJOK_html_FS', function (req, res) {
    WLYC_UYPI_OUSS_RVDB_TSFZ_RJOK_html_FS(req, res);
});
app.get('/VR_KUOE_AFOA_TSFZ_RJOK_html_FS', function (req, res) {
    WLYC_VR_KUOE_AFOA_TSFZ_RJOK_html_FS(req, res);
});
app.get('/DBC_RJOK', function (req, res) {
    WLYC_DBC_RJOK(req, res);
});
app.get('/VR_EBWU_BRTZ_FS_ZV_VNWY_TU_NINI_VKVD_KLCH', function (req, res) {
    res.render('VR_EBWU_BRTZ_FS_ZV_VNWY_TU_NINI_VKVD_KLCH');
});
app.get('/EOSRGGJUZCGGTZGGYJGGEYRH', function (req, res) {
    res.render('EOSRGGJUZCGGTZGGYJGGEYRH');
});
app.get('/EYRH_REUY', function (req, res) {
    res.render('EYRH_REUY');
});
app.get('/VNWY_TU_NINI_BRTZ_FS', function (req, res) {
    res.render('VNWY_TU_NINI_BRTZ_FS');
});
app.get('/EYRH_NINI_HQMV_YENH_YYHA', function (req, res) {
    res.render('EYRH_NINI_HQMV_YENH_YYHA');
});
app.get('/EYRH_NINI_HQMV', function (req, res) {
    res.render('EYRH_NINI_HQMV');
});
app.get('/VR_EBWU_BRTZ_FS', function (req, res) {
    res.render('VR_EBWU_BRTZ_FS');
});
app.get('/eytr_dyih_zjqt', function (req, res) {
    var iowr_vnwm_eytr_dyih = require('./AFOA_BX/KPLU/iowr_vnwm_eytr_dyih.json')
    var JTYP_1 = iowr_vnwm_eytr_dyih.map(RNSF => {
        return RNSF.DYIH + " <=> " + RNSF.EYTR
    }).join('\n')
    res.render('eytr_dyih_zjqt', { JTYP_1 });
});
app.get('/EYRHGGHQTB', function (req, res) {
    res.render('EYRHGGHQTB');
});
app.get('/NINI_SIIH_DIAX', function (req, res) {
    res.render('NINI_SIIH_DIAX');
});
app.get('/NINI_CGNE_ZV_NINI_WU_MR_ES', function (req, res) {
    res.render('NINI_CGNE_ZV_NINI_WU_MR_ES');
});
app.get('/SIIHGGUXGGRJSEGGBRTZGGFS', function (req, res) {
    res.render('SIIHGGUXGGRJSEGGBRTZGGFS');
});
app.get('/EYRH_REUY_CJZY', function (req, res) {
    res.render('EYRH_REUY_CJZY');
});
app.get('/VKVY_LD_TYUB_VN_ZNZK_NQUD', function (req, res) {
    res.render('VKVY_LD_TYUB_VN_ZNZK_NQUD');
});
app.get('/VKVY_LD_TYUB_VN_ZNZK_NQLL', function (req, res) {
    res.render('VKVY_LD_TYUB_VN_ZNZK_NQLL');
});
app.get('/RJQT_GRBJ', function (req, res) {
    res.render('RJQT_GRBJ');
});
app.get('/RJQT_FDMJ', function (req, res) {
    res.render('RJQT_FDMJ');
});
app.get('/about', function (req, res) {
    //var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about');
});
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/afoa_bx'));
app.use(bodyParser());
app.get('/newsletter', function (req, res) {
    res.render('newsletter', { csrf: 'CSRF token goes here' });
});
app.get('/sysData_ZJZJ', function (req, res) {
    res.render('sysData_ZJZJ');
});
app.get('/ESIH_BRTZ_FS', function (req, res) {
    res.render('ESIH_BRTZ_FS');
});
app.get('/menuData_ZJZJ', function (req, res) {
    res.render('menuData_ZJZJ');
});
app.get('/dtcData_ZJZJ', function (req, res) {
    res.render('dtcData_ZJZJ');
});
app.get('/BRTZ_FS_3f', function (req, res) {
    res.render('BRTZ_FS_3f', { JTYP_2: "示例1\n示例2\n示例3\n示例4\n" });
});
app.get('/BRTZ_FS_3f_Beiqi_ec180', function (req, res) {
    res.render('BRTZ_FS_3f_Beiqi_ec180');
});
app.get('/BRTZ_FS_Beiqi_ec180', function (req, res) {
    res.render('BRTZ_FS_Beiqi_ec180');
});
app.post('/sysData_ZJZJ', function (req, res) {
    WLYC_sysData_ZJZJ(req, res);
});
app.post('/GLRH', function (req, res) {
    throw req.body;
});

app.post('/menuData_ZJZJ', function (req, res) {
    WLYC_menuData_ZJZJ(req, res);
});
app.post('/dtcData_ZJZJ', function (req, res) {
    WLYC_dtcData_ZJZJ(req, res);
});
app.post('/VNWY_TU_NINI_BRTZ_FS', function (req, res) {
    WLYC_VNWY_TU_NINI_BRTZ_FS(req, res);
});
app.post('/TYUB_LDRG', function (req, res) {
    WLYC_TYUB_LDRG(req, res);
});
app.post('/ESIH_BRTZ_FS', function (req, res) {
    WLYC_ESIH_BRTZ_FS(req, res);
});
app.post('/VR_EBWU_BRTZ_FS', function (req, res) {
    WLYC_VR_EBWU_BRTZ_FS(req, res, config);
});
app.post('/BRTZ_FS_3f', function (req, res) {
    WLYC_BRTZ_FS_3f(req, res);
});
app.post('/BRTZ_FS_3f_Beiqi_ec180', function (req, res) {
    WLYC_BRTZ_FS_3f_Beiqi_ec180(req, res);
});
app.post('/BRTZ_FS_Beiqi_ec180', function (req, res) {
    WLYC_BRTZ_FS_Beiqi_ec180(req, res);
});
app.post('/ARAGGGVDGGLDRG', function (req, res) {
    res.render('ARAGGGVDGGLDRG', { JTYP_1: req.body.VDZV_1.toUpperCase(), JTYP_2: req.body.VDZV_1.toLowerCase() });
});
app.post('/RJQT_GRBJ', function (req, res) {
    WLYC_RJQT_GRBJ(req, res);
});
app.post('/RJQT_FDMJ', function (req, res) {
    WLYC_RJQT_FDMJ(req, res);
});
app.post('/VKVY_LD_TYUB_VN_ZNZK_NQUD', function (req, res) {
    WLYC_VKVY_LD_TYUB_VN_ZNZK_NQUD(req, res);
});
app.post('/VKVY_LD_TYUB_VN_ZNZK_NQLL', function (req, res) {
    WLYC_VKVY_LD_TYUB_VN_ZNZK_NQLL(req, res);
});
app.post('/ZSGGTRGGYJGGEYRH', function (req, res) {
    WLYC_ZSGGTRGGYJGGEYRH(req, res);
});
app.post('/NINI_SIIH_DIAX', function (req, res) {
    WLYC_NINI_SIIH_DIAX(req, res);
});
app.post('/NINI_CGNE_ZV_NINI_WU_MR_ES', function (req, res) {
    WLYC_NINI_CGNE_ZV_NINI_WU_MR_ES(req, res);
});
app.post('/EOSRGGJUZCGGTZGGYJGGEYRH', function (req, res) {
    WLYC_EOSRGGJUZCGGTZGGYJEYRH(req, res);
});
app.post('/EYRHGGHQTB', function (req, res) {
    WLYC_EYRHGGHQTB(req, res);
});
app.post('/EYRH_NINI_HQMV_YENH_YYHA', function (req, res) {
    WLYC_EYRH_NINI_HQMV_YENH_YYHA(req, res);
});
app.post('/ASCIIGGLDRG', function (req, res) {
    WLYC_ASCIIGGLDRG(req, res);
});
app.post('/SLRH_JYUY', function (req, res) {
    WLYC_SLRH_JYUY(req, res);
});
app.post('/SIIHGGUXGGRJSEGGBRTZGGFS', function (req, res) {
    WLYC_SIIHGGUXGGRJSEGGBRTZGGFS(req, res);
});
app.post('/DIZCGGOUSS', function (req, res) {
    WLYC_DIZCGGOUSS(req, res);
});
app.use(function (req, res, next) {
    var req_RJSE_1;
    for (key1 in req) {
        req_RJSE_1 += "\n" + key1;
    }
    res.status(404);
    res.render('404', { JTHA_1: "YYHA YJ AC AB:" + req.url });
});

app.use(function (err, req, res, next) {
    res.status(500);
    if (err.cause != undefined) {
        err = NVMS_EBWU_LD_YHRJ_2(err)
    } else if (err.message != undefined && /csrf-/i.test(err.message)) {
        err = NVMS_EBWU_LD_YHRJ_3(err)
    } else if (err.message != undefined) {
        err = NVMS_EBWU_LD_YHRJ_1(err)
    }
    else {

    }
    res.render('500', { err, err_stack: err.stack });
    console.log(err)
});

ymce_sjbx()

app.listen(app.get('port'), function () {
    var yxna_url = 'http://localhost:' + app.get('port')
    var yxna_exe = "\"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe\""
    var yxna_exe2 = "\"C:/Users/coocaa/AppData/Local/Google/Chrome/Application/chrome.exe\""
    console.log('启动成功，将自动调用浏览器启动工作助手网页.\n如果无法自动调用浏览器，请与开发者联系，这一定是开发者疏忽忘记解开注释了~~您可以手动打开浏览器输入以下链接' + yxna_url)
    if (config.AutoStartBro) {

        child_process.exec('wmic diskdrive get serialnumber', (error, stdout) => {
            if (error) {
                console.error(`exec msox: ${error}`);
            } else {
                var vwdp_vnwm = config.vnwm_wj_dk_kmqt_ih.map(async rn1 => {
                    if (stdout.indexOf(rn1) != -1) {
                        return true;
                    }
                })
                Promise.all(vwdp_vnwm).then(jtyj => {
                    for (yg1 of jtyj) {
                        if (yg1) {
                            return;
                        }
                    }
                    child_process.exec(yxna_exe + ' ' + yxna_url, (error, stdout) => {
                        if (error) {
                            console.error(`exec drbz riri cl msox: ${error}`);
                        }
                    })
                    var child
                    try {
                        // child = spawn('cmd.exe');
                        // child.stdin.write(yxna_exe + ' ' + yxna_url + '\n');
                        // child.stdout.on('data', (data) => {
                        // console.log(`stdout: ` + encoding.convert(data, 'utf8', 'GB2312').toString());
                        // });
                        // 
                        // child.stderr.on('data', (data) => {
                        // console.error(`stderr: ${data}`);
                        // });
                        // 
                        // child.on('close', (code) => {
                        // console.log(`子进程退出码：${code}`);
                        // });
                        // 
                        // child.on('exit', code => {
                        // console.log('child exit code: ' + code)
                        // })
                        // child.on('close', code => {
                        // console.log('child close code: ' + code)
                        // })
                    } catch (err) {

                    }
                }).catch(err => {
                    if (err) {
                        console.error("* NWVT md-ID-md NKME : " + err)
                    }
                })

            }
            return false
        });
    }

});