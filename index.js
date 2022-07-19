var express = require('express');
var WLYC_ASCIIGGLDRG = require('./WLYC_ASCIIGGLDRG');
var WLYC_RJQT_GRBJ = require('./WLYC_RJQT_GRBJ');
var WLYC_EYRHGGHQTB = require('./WLYC_EYRHGGHQTB');
var WLYC_DIZCGGOUSS = require('./WLYC_DIZCGGOUSS');
var WLYC_ZSGGTRGGYJGGEYRH = require('./WLYC_ZSGGTRGGYJGGEYRH');
var WLYC_EOSRGGJUZCGGTZGGYJEYRH = require('./WLYC_EOSRGGJUZCGGTZGGYJEYRH');
var WLYC_EYRH_NINI_HQMV_YENH_YYHA = require('./WLYC_EYRH_NINI_HQMV_YENH_YYHA');
var WLYC_NINI_SIIH_DIAX = require('./WLYC_NINI_SIIH_DIAX');
var WLYC_SIIHGGUXGGRJSEGGBRTZGGFS = require('./WLYC_SIIHGGUXGGRJSEGGBRTZGGFS');
var WLYC_VKVY_LD_TYUB_VN_ZNZK_NQLL = require('./WLYC_VKVY_LD_TYUB_VN_ZNZK_NQLL');
var WLYC_VKVY_LD_TYUB_VN_ZNZK_NQUD = require('./WLYC_VKVY_LD_TYUB_VN_ZNZK_NQUD');
var WLYC_sysData_ZJZJ = require('./WLYC_sysData_ZJZJ');
var WLYC_BRTZ_FS_3f=require('./WLYC_BRTZ_FS_3f');
var WLYC_BRTZ_FS_3f_Beiqi_ec180=require('./WLYC_BRTZ_FS_3f_Beiqi_ec180');
var WLYC_BRTZ_FS_Beiqi_ec180=require('./WLYC_BRTZ_FS_Beiqi_ec180');

var app = express();
var config = require("./config");
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || config.port);


app.get('/', function (req, res) {
    res.render('home');
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
app.get('/DIZCGGOUSS', function (req, res) {
    res.render('DIZCGGOUSS');
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
app.get('/ZSGGTRGGYJGGEYRH', function (req, res) {
    res.render('ZSGGTRGGYJGGEYRH');
});
app.get('/EOSRGGJUZCGGTZGGYJGGEYRH', function (req, res) {
    res.render('EOSRGGJUZCGGTZGGYJGGEYRH');
});
app.get('/EYRH_REUY', function (req, res) {
    res.render('EYRH_REUY');
});
app.get('/EYRH_NINI_HQMV_YENH_YYHA', function (req, res) {
    res.render('EYRH_NINI_HQMV_YENH_YYHA');
});
app.get('/EYRH_NINI_HQMV', function (req, res) {
    res.render('EYRH_NINI_HQMV');
});
app.get('/EYRHGGHQTB', function (req, res) {
    res.render('EYRHGGHQTB');
});
app.get('/NINI_SIIH_DIAX', function (req, res) {
    res.render('NINI_SIIH_DIAX');
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
app.get('/about', function (req, res) {
    //var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about');
});
app.use(express.static(__dirname + '/public'));
app.use(require('body-parser')());
app.get('/newsletter', function (req, res) {
    res.render('newsletter', { csrf: 'CSRF token goes here' });
});
app.get('/sysData_ZJZJ', function (req, res) {
    res.render('sysData_ZJZJ');
});
app.get('/BRTZ_FS_3f', function (req, res) {
    res.render('BRTZ_FS_3f');
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
    console.error(err);
    console.error(err.stack);
    res.status(500);
    res.render('500', { err: err, LCLC_CSRF: err.stack });
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.\nhttp://localhost:' + app.get('port'));
});