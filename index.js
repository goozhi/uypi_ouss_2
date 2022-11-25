var express = require('express');
const bodyParser = require('body-parser');
var WLYC_ASCIIGGLDRG = require('./WLYC_ASCIIGGLDRG');
var WLYC_SLRH_JYUY = require('./WLYC_SLRH_JYUY');
var WLYC_RJQT_GRBJ = require('./WLYC_RJQT_GRBJ');
var WLYC_RJQT_FDMJ = require('./WLYC_RJQT_FDMJ');
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
var WLYC_sysData_ZJZJ = require('./WLYC_sysData_ZJZJ');
var WLYC_menuData_ZJZJ = require('./WLYC_menuData_ZJZJ');
var WLYC_ESIH_BRTZ_FS = require('./WLYC_ESIH_BRTZ_FS');
var WLYC_dtcData_ZJZJ = require('./WLYC_dtcData_ZJZJ');
var WLYC_VNWY_TU_NINI_BRTZ_FS = require('./WLYC_VNWY_TU_NINI_BRTZ_FS')
var WLYC_BRTZ_FS_3f=require('./WLYC_BRTZ_FS_3f');
var WLYC_BRTZ_FS_3f_Beiqi_ec180=require('./WLYC_BRTZ_FS_3f_Beiqi_ec180');
var WLYC_BRTZ_FS_Beiqi_ec180=require('./WLYC_BRTZ_FS_Beiqi_ec180');
var WLYC_TYUB_LDRG=require('./WLYC_TYUB_LDRG');
var app = express();
var config = require("./config");
const NVMS_EBWU_LD_YHRJ_1 = require('./AFOA_BX/NVMS_EBWU_LD_YHRJ_1');
const NVMS_EBWU_LD_YHRJ_3 = require('./AFOA_BX/NVMS_EBWU_LD_YHRJ_3');
const NVMS_EBWU_LD_YHRJ_2 = require('./AFOA_BX/NVMS_EBWU_LD_YHRJ_2');
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });
app.use(bodyParser.urlencoded({extended: false, limit: '10mb'}));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || config.port);


app.get('/', function (req, res) {
    var YMCE_HITD=config.YMCE_HITD
    var version=config.version
    res.render('home',{YMCE_HITD,version});
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
    res.render('DIZCGGOUSS',{KLCH:"*\"示例\",{22 00 22},cf,d4,.0,;"});
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
    res.render('VR_EBWU_ATRS');
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
    var iowr_vnwm_eytr_dyih=require('./AFOA_BX/KPLU/iowr_vnwm_eytr_dyih.json')
    var JTYP_1=iowr_vnwm_eytr_dyih.map(RNSF=>{
        return RNSF.DYIH+" <=> "+RNSF.EYTR
    }).join('\n')
    res.render('eytr_dyih_zjqt',{JTYP_1});
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
    res.render('BRTZ_FS_3f',{JTYP_2:"示例1\n示例2\n示例3\n示例4\n"});
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
    WLYC_VR_EBWU_BRTZ_FS(req, res);
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
        if(err.cause!=undefined){
            err= NVMS_EBWU_LD_YHRJ_2(err)
        }else if(err.message!=undefined&&/csrf-/i.test(err.message)){
            err= NVMS_EBWU_LD_YHRJ_3(err)
        }else if(err.message!=undefined){
            err= NVMS_EBWU_LD_YHRJ_1(err)
        }
        else{
            
        }
    res.render('500', { err, err_stack: err.stack });
    console.log(err)
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.\nhttp://localhost:' + app.get('port'));
});