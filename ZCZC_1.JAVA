404.handlebars{
<head><title>404</title></head>
<h1>404 not found 你好</h1>
<textarea rows="20" cols="30" onfocus="select()">{{JTHA_1}}</textarea>
}
500.handlebars{
<head><title>500</title></head>
<h1>500 - Server Error</h1>
<textarea rows="10" cols="100">{{err}}</textarea>
<textarea rows="20" cols="100">{{LCLC_CSRF}}</textarea>
}
ARAGGGVDGGLDRG.handlebars{
<title>澶у皬鍐欒浆鎹�</title>
<h2>澶у皬鍐欒浆鎹�</h2>
<form name="home" action="/" method="get">
<button>go home</button>
</form>
<form name="ARAGGGVDGGLDRG" action="/ARAGGGVDGGLDRG" method="post">
    璇峰湪姝よ緭鍏ユ枃鏈�<br><textarea name="VDZV_1" rows="2" cols="100"></textarea><br>
    <button>鎻愪氦</button>
</form>
澶у啓<br>
<textarea rows="2" cols="100">{{JTYP_1}}</textarea>
<br>
灏忓啓<br>
<textarea rows="2" cols="100">{{JTYP_2}}</textarea>
}
ASCIIGGLDRG.handlebars{
<head><title>ASCII鐮佽浆鎹�</title></head>
<h2>ASCII鐮佽浆鎹�</h2>
<form name="home" action="/" method="get">
<button>go home</button>
</form>
<form name="ASCIIGGLDRG" action="/ASCIIGGLDRG" method="post">
    璇峰湪姝よ緭鍏ラ渶瑕佽浆涓篈SC鐮佺殑鏂囨湰<br>
    <textarea name="VDZV_1" rows="10" cols="80"></textarea>
    <br>
    ASC鐮�, 杈撳叆鐢ㄧ┖鏍兼垨鑰呮崲琛岀�︽垨鑰呴€楀彿闅斿紑鐨勫瓧鑺�<br>
    <textarea name="VDZV_2" rows="10" cols="80"></textarea>
    <button>鎻愪氦</button>
</form>
<hr>
杈撳嚭鍐呭��<br>
<textarea name="VDZV_2" rows="10" cols="80">{{JTYP_1}}</textarea>
<br>
<textarea name="VDZV_2" rows="10" cols="80">{{JTYP_2}}</textarea>
}
DIZCGGOUSS.handlebars{
<head><title>瀵规瘮鍔╂墜</title></head>
<h2>瀵规瘮鍔╂墜</h2>
<form name="home" action="/" method="get">
<button>go home</button>
</form>
<form name="DIZCGGOUSS" action="/DIZCGGOUSS" method="post">
    鐩�鏍囨暟鎹�娴侀」鐩�<br>
    <textarea name="VDZV_1" rows="20" cols="80"></textarea>
    <br>
    <button>鎻愪氦</button>
</form>
<textarea rows="20" cols="80" onfocus="select()">{{JTYP_1}}</textarea>
}
EOSRGGJUZCGGTZGGYJGGEYRH.handlebars{
<title>姝ｅ垯琛ㄨ揪寮忔壘鍗曚綋</title>
<h2>姝ｅ垯琛ㄨ揪寮忔壘鍗曚綋</h2>
<form name="home" action="/" method="get">
<button>go home</button>
</form>
<form name="EOSRGGJUZCGGTZGGYJGGEYRH" action="/EOSRGGJUZCGGTZGGYJGGEYRH" method="post">
    璇峰湪姝よ緭鍏ユ姤鏂囨枃浠惰矾寰�<br><input type="text" name="VDZV_1"><br>
    <button>鎻愪氦</button>
</form>
杈撳嚭<br>
<textarea rows="20" cols="100" onfocus="select()">{{JTYP_1}}</textarea>
}
EYRHGGHQTB.handlebars{
<title>鍗曚綋妯℃嫙</title>
<h2>鍗曚綋妯℃嫙</h2>
<form name="home" action="/" method="get">
    <button>go home</button>
</form>

<body>
    <form action="/EYRHGGHQTB" method="post">
        椤圭洰璺�寰�<input type="text" name="VDZV_1">
        鍙戠爜璺�寰�<input type="text" name="VDZV_2">
        <button>鎻愪氦</button>
    </form>
    <textarea onfocus="select()" rows="20" cols="100">{{JTYP_1}}</textarea>
</body>

</html>
}
EYRH_NINI_HQMV.handlebars{
<title>鍗曚綋椤圭洰妯′豢涔嬪�歩d绫诲瀷</title>
<h2>鍗曚綋椤圭洰妯′豢涔嬪�歩d绫诲瀷</h2>
<form name="home" action="/" method="get">
    <button>go home</button>
</form>

<body>
    <script>
        function JYQH() {
            var ele_1 = document.getElementById("VDZV_1");
            var ele_2 = document.getElementById("VDZV_2");
            var ele_3 = document.getElementById("VDZV_3");
            var RJSE_1 = ele_1.value;//绗�涓€涓猧d椤圭洰
            var RJSE_4 = ele_2.value;//鍐呭惈鎵€鏈塱d鐨勯泦鍚堢殑鏂囨湰
            var RJSE_2 = HQMV_2(RJSE_1, RJSE_4);
            ele_3.value = RJSE_2;
        }
        function HQMV_2(RJSE_1, RJSE_ID_SONO) {
            var regex_ID = /0x(\w{3,8})/g;
            var VNWM_ID_2 = RJSE_ID_SONO.match(regex_ID);
            var VNWM_ID_1 = VNWM_ID_2.map(WLBA_1);
            var RJSE_2 = RJSE_1;//绗�涓€涓猧d椤圭洰, 鍏堝瓨涓�, 鍥犱负RJSE_1寰呬細灏辫�佸彉浜�.

            for (var EQWY_1 = 1; EQWY_1 < VNWM_ID_1.length; EQWY_1++) {
                var RJSE_ID_1 = FDMJ(VNWM_ID_1[EQWY_1 - 1], 2, ' ');
                var RJSE_ID_2 = FDMJ(VNWM_ID_1[EQWY_1], 2, ' ');
                var regex_1 = new RegExp("(\\{.{6,30}[0 ]*)(" + RJSE_ID_1 + ")", "gi");
                var shengyu_1 = "$1" + RJSE_ID_2;
                RJSE_2 = RJSE_2.replace(regex_1, shengyu_1);
                RJSE_1 = RJSE_1 + "\n" + RJSE_2;
            }
            return RJSE_1;
        }
        function WLBA_1(RNSF_1) {
            return RNSF_1.replace(/0x0000/, "").replace('0x', '');
        }
        function FDMJ(RJSE_1, VN_1, FDMJGGFR) {
            var VNWM_1 = new Array();
            var EQWY_1 = RJSE_1.length;
            for (; EQWY_1 > 0; EQWY_1 -= VN_1) {
                EQWY_2 = EQWY_1 - VN_1;
                if (EQWY_2 < 0)
                    EQWY_2 = 0;
                VNWM_1.unshift(RJSE_1.slice(EQWY_2, EQWY_1));
            }
            return VNWM_1.join(FDMJGGFR);
        }

        var CSRF_VNWM = [
            {
                ZKRS: "瀛楃�︿覆绛夐棿闅斿姞鎸囧畾鍒嗗壊绗�",
                RSPJ_WU: "FDMJ",
                RSPJ: FDMJ,
                VKEY_CSRF: "杈撳叆鏂囨湰, 鏈�鍑芥暟灏嗘枃鏈�鎸夋寚瀹氱殑姝ラ暱涔熷氨鏄�闂撮殧鏉ュ姞鍏ユ寚瀹氬垎鍓茬��, 杩斿洖缁撴灉.",
                CSRF_MSQU: "杩欎釜鐢ㄤ簬鍗曚綋缂栧啓, 鍥犱负瀛樻斁鎶ユ枃鐨勬枃浠剁殑甯�id鏄�娌℃湁绌烘牸鐨�, 浣犻渶瑕佸皢杩欎簺id鐢ㄧ┖鏍间袱涓ら殧寮€",
                CSRF_MCVN_VNWM: [{ WUZT: '鐩�鏍囨枃鏈�', CSRF: '浣犺�佸姞鍏ユ寚瀹氬垎鍓茬�︾殑鏂囨湰' },
                { WUZT: '姝ラ暱鏁�', CSRF: '闂撮殧澶氬皯涓�瀛楃�︽彃鍏ヤ竴涓�鍒嗗壊绗﹀氨杈撳叆澶氬皯鍊�' },
                { WUZT: '鍒嗛殧绗�', CSRF: '鎸囧畾鐨勫垎鍓茬��' }],
                EOWL_UXUX: "string"
            }, {
                ZKRS: "鍗曚綋椤圭洰妯′豢涔嬪�歩d绫诲瀷",
                RSPJ_WU: "HQMV_2",
                RSPJ: HQMV_2,
                VKEY_CSRF: "杈撳叆绗�涓€涓猧d鐨勯」鐩�, 浠ュ強鎵€鏈塱d鐨勯泦鍚堟枃鏈�, 杩斿洖鎵€鏈塱d鐨勯」鐩�",
                CSRF_MSQU: "鍦ㄥ�氫釜id瀛樺偍鍗曚綋鐨勬儏鍐典笅, 鏍规嵁缁欏嚭鐨勬墍鏈塱d鐨勯泦鍚堝拰绗�涓€涓猧d鐨勯」鐩�鏉ヨ緭鍑哄叾浣檌d鐨勯」鐩�. 鎵€鏈塱d鐨勬枃鏈�闆嗗悎(鏂囨湰鏍煎紡鍙�闅忔剰,鏍规嵁0x鏍囪瘑杩涜�岃瘑鍒�).",
                CSRF_MCVN_VNWM: [{ WUZT: '绗�涓€涓猧d椤圭洰鏂囨湰', CSRF: '灏嗘牴鎹�杩欎釜椤圭洰浣滀负妯℃澘杈撳嚭鍏朵粬椤圭洰' },
                { WUZT: '鎵€鏈塱d鐨勯泦鍚堢殑鏂囨湰', CSRF: '鍐呭惈鎵€鏈夌殑id鐨勬枃鏈�,鏂囨湰鏍煎紡鍙�闅忔剰, 浣嗛渶瑕佹湁0x鏍囪瘑.' }],
                EOWL_UXUX: "string"
            }
        ]
    </script>
    <div style="float: left;">
        <b>鐩�鏍囧唴瀹�<br>
            <textarea onfocus="select()" id="VDZV_1" rows="20" cols="45"></textarea>
    </div>
    <div style="float: left;">
        <b>id闆嗗悎鏂囨湰<br>
            <textarea onfocus="select()" id="VDZV_2" rows="20" cols="25"></textarea>
    </div>
    <br>
    <div style="float: left;">
        <button onclick="JYQH()">鎵ц��</button>
    </div>
    <hr style="clear: both;">
    <div>
        <b>杈撳嚭鍐呭��<br>
            <textarea onfocus="select()" id="VDZV_3" rows="30" cols="50"></textarea>
    </div>
</body>
}
EYRH_NINI_HQMV_2 220702.handlebars{
<title>鍗曚綋椤圭洰妯′豢涔嬪崟涓猧d绫诲瀷</title>
<h2>鍗曚綋椤圭洰妯′豢涔嬪崟涓猧d绫诲瀷</h2>
<form name="home" action="/" method="get">
    <button>go home</button>
</form>

<body>
    <script>
        function JYQH() {
            var ele_1 = document.getElementById("VDZV_1");
            var ele_2 = document.getElementById("VDZV_2");
            var ele_3 = document.getElementById("VDZV_3");
            var RJSE_1 = ele_1.value;
            var VN_1 = ele_2.value;
            var RJSE_2 = RJSE_1;

            for (var EQWY_1 = 0; EQWY_1 < VN_1 - 1; EQWY_1++) {
                RJSE_2 = HQMV(RJSE_2);
                RJSE_1 = RJSE_1 + "\n" + RJSE_2;
            }
            ele_3.value = RJSE_1;
            }
            function HQMV_2(RJSE_1, RJSE_ID_SONO) {
                var regex_ID = /0x(\w{3,8})/g;
                var VNWM_ID_2 = RJSE_ID_SONO.match(regex_ID);
                var VNWM_ID_1 = VNWM_ID_2.map(WLBA_1);
                var RJSE_2 = RJSE_1;//绗�涓€涓猧d椤圭洰, 鍏堝瓨涓�, 鍥犱负RJSE_1寰呬細灏辫�佸彉浜�.

                for (var EQWY_1 = 1; EQWY_1 < VNWM_ID_1.length; EQWY_1++) {
                    var RJSE_ID_1 = FDMJ(VNWM_ID_1[EQWY_1 - 1], 2, ' ');
                    var RJSE_ID_2 = FDMJ(VNWM_ID_1[EQWY_1], 2, ' ');
                    var regex_1 = new RegExp("(\\{.{6,30}[0 ]*)(" + RJSE_ID_1 + ")", "gi");
                    var shengyu_1 = "$1" + RJSE_ID_2;
                    RJSE_2 = RJSE_2.replace(regex_1, shengyu_1);
                    RJSE_1 = RJSE_1 + "\n" + RJSE_2;
                }
                return RJSE_1;
            }
    </script>
    <div style="float: left;">
        <b>鐩�鏍囧唴瀹�<br>
            <textarea onfocus="select()" id="VDZV_1" rows="20" cols="50"></textarea>
    </div>
    <div style="float: left;">
        <b>鎬诲抚鏁�<br>
            <textarea onfocus="select()" id="VDZV_2" rows="2" cols="10"></textarea>
    </div>
    <br>
    <div style="float: left;">
        <button onclick="JYQH()">鎵ц��</button>
    </div>
    <hr style="clear: both;">
    <div style="clear: both;">
        <b>杈撳嚭鍐呭��<br>
            <textarea onfocus="select()" id="VDZV_3" rows="30" cols="50"></textarea>
    </div>
</body>
}
EYRH_NINI_HQMV_YENH_YYHA.handlebars{
<title>鍗曚綋椤圭洰妯′豢涔嬪崟涓猧d绫诲瀷</title>
<h2>鍗曚綋椤圭洰妯′豢涔嬪崟涓猧d绫诲瀷</h2>
<form name="home" action="/" method="get">
    <button>go home</button>
</form>

<form name="EYRH_NINI_HQMV_YENH_YYHA" action="/EYRH_NINI_HQMV_YENH_YYHA" method="post">
    <div style="float: left;">
        <b>鐩�鏍囧唴瀹�<br>
            <textarea onfocus="select()" name="VDZV_1" rows="20" cols="50"></textarea>
    </div>
    <div style="float: left;">
        <b>鎬诲抚鏁�<br>
            <input onfocus="select()" name="VDZV_2" type="number">
    </div>
    <div style="float: left;">
        <b>鎸囧畾姝ラ暱(榛樿�や负8)<br>
            <input onfocus="select()" name="VDZV_3" type="number"/>
    </div>

    <br>
    <div style="float: left;">
        <button>鎵ц��</button>
    </div>
    <hr style="clear: both;">
</form>
<div style="clear: both;">
    <b>杈撳嚭鍐呭��<br>
        <textarea onfocus="select()" name="VDZV_4" rows="30" cols="50">{{JTYP_1}}</textarea>
</div>
}
EYRH_REUY.handlebars{
<title>鍗曚綋鏁板€肩粺璁�</title>
<h2>鍗曚綋鏁板€肩粺璁�</h2>
<form name="home" action="/" method="get">
    <button>go home</button>
</form>

<body>
    <script>
        var daxie = "QWERTYUIOPASDFGHJKLZXCVBNM"
        var xiaoxie = "qwertyuiopasdfghjklzxcvbnm";

        var AFOA = {};
        AFOA.B_LD_H = function (RJSE_3) {//B_LD_H
            RJSE_3 = RJSE_3.replace(/\s/g, "");
            var RJSE_2 = "";
            var VNWM_1 = new Array();
            var VN_1 = (4 - RJSE_3.length % 4) & 3;
            while (VN_1--) {
                RJSE_3 = "0" + RJSE_3;
            }
            for (var EQWY_1 = 0; EQWY_1 < RJSE_3.length; EQWY_1 += 4) {
                var RJSE_4 = RJSE_3.slice(EQWY_1, EQWY_1 + 4);
                VNWM_1.push(RJSE_4);
            }
            for (var EQWY_1 = 0; EQWY_1 < VNWM_1.length; EQWY_1++) {
                RJSE_2 += LJEY_2(VNWM_1[EQWY_1]);
            }
            if (RJSE_2 == "") {
                RJSE_2 = "0000";
            }
            return RJSE_2;
            function LJEY_2(ZTFR) {
                switch (ZTFR) {
                    case "0000": return ("0");

                    case "0001": return ("1");

                    case "0010": return ("2");

                    case "0011": return ("3");

                    case "0100": return ("4");

                    case "0101": return ("5");

                    case "0110": return ("6");

                    case "0111": return ("7");

                    case "1000": return ("8");

                    case "1001": return ("9");

                    case "1010": return ("a");

                    case "1011": return ("b");

                    case "1100": return ("c");

                    case "1101": return ("d");

                    case "1110": return ("e");

                    case "1111": return ("f");

                }
                return false;
            }
        }//B_LD_H
        AFOA.AR_LD_AG = function (neirong1) {//DaZhuanXiaoHanshu
            neirong1 = String(neirong1);
            var RJSE_1 = "";
            for (var suoyin1 = 0; suoyin1 < neirong1.length; suoyin1++) {//xunhuanChazhao
                var suoyin2 = daxie.indexOf(neirong1[suoyin1]);
                if (suoyin2 != -1) {//zhaoDaoLe
                    RJSE_1 = RJSE_1 + xiaoxie[suoyin2];
                }//zhaoDaoLe
                else {//meiZhaodao
                    RJSE_1 = RJSE_1 + neirong1[suoyin1];
                }//meiZhaodao
            }//xunhuanChazhao
            return RJSE_1;
        }//DaZhuanXiaoHanshu

        AFOA.H_LD_B = function (RJSE_16) {
            RJSE_16 = RJSE_16.replace(/\s/g, "");
            var RJSE_2 = "";
            RJSE_16 = AFOA.AR_LD_AG(RJSE_16);
            for (var EQWY_2 = 0; EQWY_2 < RJSE_16.length; EQWY_2++) {
                RJSE_2 += LJEY(RJSE_16[EQWY_2]);
            }
            if (RJSE_2 == "") {
                RJSE_2 = "0000";
            }
            return RJSE_2;
            function LJEY(ZTFR) {
                switch (ZTFR) {
                    case "0": return ("0000");

                    case "1": return ("0001");

                    case "2": return ("0010");

                    case "3": return ("0011");

                    case "4": return ("0100");

                    case "5": return ("0101");

                    case "6": return ("0110");

                    case "7": return ("0111");

                    case "8": return ("1000");

                    case "9": return ("1001");

                    case "a": return ("1010");

                    case "b": return ("1011");

                    case "c": return ("1100");

                    case "d": return ("1101");

                    case "e": return ("1110");

                    case "f": return ("1111");

                }
                return false;
            }
        }

        AFOA.jiaLing = function (shu1, zhidingWeishu) {//AFOA.
            //閫傜敤浜庡ぇ閲忛噸澶嶅姞闆剁▼搴忎腑锛屼笉闇€瑕侀€愪釜闆舵坊鍔犮€�
            var RJSE1 = "000000000000000000000000";
            var RJSE2 = String(shu1);
            var cha1 = zhidingWeishu - RJSE2.length;
            if (cha1 > 0) {//涓烘�ｆ暟
                RJSE2 = RJSE1.slice(0, cha1) + RJSE2;
            }//涓烘�ｆ暟
            return RJSE2;
        }//AFOA.jiaLing

        function JYQH() {
            try {
                var ele_1 = document.getElementById("VDZV_1");
                var ele_2 = document.getElementById("VDZV_2");
                var ele_3 = document.getElementById("VDZV_3");
                var ele_4 = document.getElementById("VDZV_4");
                var ele_5 = document.getElementById("VDZV_5");
                var VNWY_1 = ele_1.value;
                var reg1 = /\*\{08 (\w\w ){4}/g;
                if (reg1.test(VNWY_1))
                    VNWY_1 = VNWY_1.replace(reg1, "");
                rr1 = /\b(\w{2} )+\w{2}/gi;
                var VNWY_VNWM_1 = VNWY_1.match(rr1);
                var RJSE_2 = ele_5.value;
                var ZZZZGGKLVQ = ele_2.value;
                var RSSC = ele_3.value;
                var TRIG = ele_4.value;
                var JTYP_VNWM_1 = REUYGGFIEA(VNWY_VNWM_1, RSSC, TRIG, ZZZZGGKLVQ);
                var PHMR = 0;
                var JTYP_VNWM_2 = []
                JTYP_VNWM_1.forEach((RNSF_1) => {
                    PHMR += Number(RNSF_1.VNYG_1);
                    JTYP_VNWM_2.push(RNSF_1.ZTHI_1 + " : " + (RNSF_1.eSGGTRIG + 1));
                })
                alert(PHMR + "(" + JTYP_VNWM_1.length + ")");
                ele_5.value = ele_1.value + '\n=' + PHMR + "(" + JTYP_VNWM_1.length + ")" + "\n" + JTYP_VNWM_2.join('\n');

            } catch (err) {
                alert(err)
            }
        }
        var YBKC_VNWM = [];
        function PCGM(YBKC_VNWM) {
            this.GKQJ = false;
            this.TRIG = 0;
            var VN_2 = eval('0x' + YBKC_VNWM[0].ZTHI_1);
            if (YBKC_VNWM.length > 2) {
                VN_2 = eval('0x' + YBKC_VNWM[1].ZTHI_1) - VN_2;
            }
            var VN_3 = 0;
            for (var EQWY_1 = 1; EQWY_1 < YBKC_VNWM.length; EQWY_1++) {
                var VN_1 = eval('0x' + YBKC_VNWM[EQWY_1].ZTHI_1) - eval('0x' + YBKC_VNWM[EQWY_1 - 1].ZTHI_1);
                if (VN_2 == VN_1) {
                    VN_3++;
                } else {
                    VN_3 = 0;
                }
                if (VN_3 > 5) {
                    this.GKQJ = true;
                    this.TRIG = 1;
                    break;
                }
            }
            var VN_2 = eval('0x' + YBKC_VNWM[0].ZTHI_2);
            if (YBKC_VNWM.length > 2) {
                VN_2 = eval('0x' + YBKC_VNWM[1].ZTHI_2) - VN_2;
            }
            var VN_3 = 0;
            for (var EQWY_1 = 1; EQWY_1 < YBKC_VNWM.length; EQWY_1++) {
                var VN_1 = eval('0x' + YBKC_VNWM[EQWY_1].ZTHI_2) - eval('0x' + YBKC_VNWM[EQWY_1 - 1].ZTHI_2);
                if (VN_2 == VN_1) {
                    VN_3++;
                } else {
                    VN_3 = 0;
                }
                if (VN_3 > 5) {
                    this.GKQJ = true;
                    this.TRIG = 2;
                    break;
                }
            }
            this.GMVT = function (VNWM_1) {
                if (this.TRIG == 0)
                    return VNWM_1;
                var VNWM_2 = VNWM_1.map((RNSF_1) => {
                    return RNSF_1.split(/\s+/).reverse().slice(this.TRIG).reverse().join(' ');
                })
                return VNWM_2;
            }
        }
        function REUYGGFIEA(VNWY_VNWM_1, RSSC, TRIG, ZZZZGGKLVQ) {
            if (ZZZZGGKLVQ == null)
                throw "REUYGGFIEA : MCVN NRAP";
            var VNWY_VNWM_2;
            if (RSSC != 1) {

                var YHLD_VNWM_1 = VNWY_VNWM_1.map(WLBA_1);
                var IOWR_1 = new PCGM(YBKC_VNWM);
                if (IOWR_1.GKQJ) {
                    VNWY_VNWM_2 = IOWR_1.GMVT(YHLD_VNWM_1);
                } else {
                    VNWY_VNWM_2 = YHLD_VNWM_1;
                }
            } else {
                VNWY_VNWM_2 = VNWY_VNWM_1;
            }
            var VNWY_2 = AFOA.H_LD_B(VNWY_VNWM_2[0]);//渚濇嵁甯�
            var RJSE_1_B = VNWY_2.slice(TRIG, Number(TRIG) + Number(ZZZZGGKLVQ) / 2);
            var RJSE_2_B = eval("0x" + AFOA.B_LD_H(RJSE_1_B) + "+1").toString(2);
            var RJSE_3_B = eval("0x" + AFOA.B_LD_H(RJSE_1_B) + "-1").toString(2);
            RJSE_2_B = AFOA.jiaLing(RJSE_2_B, RJSE_1_B.length);
            RJSE_3_B = AFOA.jiaLing(RJSE_3_B, RJSE_1_B.length);

            var regex_EYRH = new RegExp("(?:" + RJSE_1_B + "|" + RJSE_2_B + "|" + RJSE_3_B + ").{" + (ZZZZGGKLVQ - RJSE_1_B.length) + "}", "g");
            var PHMR_VNWM_1 = []
            for (var EQWY_3 = 0; EQWY_3 < VNWY_VNWM_2.length; EQWY_3++) {
                var VNWY_3 = AFOA.H_LD_B(VNWY_VNWM_2[EQWY_3]);

                var CGNE_VNWY_1 = VNWY_3.slice(TRIG).match(regex_EYRH);
                if (CGNE_VNWY_1 == null) {
                    continue;
                }

                CGNE_VNWY_1.forEach((RNSF_1) => {
                    var ZTHI_1 = AFOA.B_LD_H(RNSF_1);
                    var VNYG_1 = eval("0x" + ZTHI_1);
                    PHMR_VNWM_1.push({ VYGGTYUB: RNSF_1, ZTHI_1: ZTHI_1, VNYG_1: VNYG_1, eSGGTRIG: EQWY_3 });
                });
            }
            return PHMR_VNWM_1;
        }
        function WLBA_1(RNSF_1) {
            var VNWM_1 = RNSF_1.split(/\s+/);
            YBKC_VNWM.push({ ZTHI_1: VNWM_1[0], ZTHI_2: VNWM_1[1] });
            return VNWM_1.reverse().join(" ");
        }

    </script>
    <div>
        <b>鐩�鏍囧唴瀹�<br>
            <textarea onfocus="select()" id="VDZV_1" rows="20" cols="80"></textarea>
    </div>
    <div>
        <b>鍗曚釜鍗曚綋鑼冨洿(鍐欎笉灏忎簬8鐨勬暟瀛�)<br>
            <input onfocus="select()" id="VDZV_2" rows="1" cols="50"></input>
    </div>
    <div>
        <b>瑙ｈ�绘柟鍚�(姝ｅ簭杩樻槸閫嗗簭, 姝ｅ簭涓�1, 閫嗗簭涓�0)<br>
            <input onfocus="select()" id="VDZV_3" rows="1" cols="50"></input>
    </div>
    <div>
        <b>浣嶇疆(0,4,8,16, 濡傛灉閫嗗簭鍒欎粠鍚庨潰寮€濮嬬畻璧�)<br>
            <input onfocus="select()" id="VDZV_4" rows="1" cols="50"></input>
    </div>
    <div>
        <button onclick="JYQH()">鎵ц��</button>
    </div>
    <div>
        <b>杈撳嚭鍐呭��<br>
            <textarea onfocus="select()" id="VDZV_5" rows="30" cols="80"></textarea>
    </div>
</body>
}
EYRH_REUY_CJZY.handlebars{
<title>鍗曚綋鏁板€肩粺璁�_甯歌��</title>
<h2>鍗曚綋鏁板€肩粺璁�_甯歌��</h2>
<form name="home" action="/" method="get">
    <button>go home</button>
</form>

<body>
    <script>
        function JYQH() {
            try {
                var ele_1 = document.getElementById("VDZV_1");
                var ele_3 = document.getElementById("VDZV_3");
                var ele_4 = document.getElementById("VDZV_4");
                var ele_5 = document.getElementById("VDZV_5");
                var VNWY_1 = ele_1.value;
                var RJSE_2 = EYRHGGREUY_2(ele_1.value, ele_4.value, ele_3.value);
            } catch (err) {
                alert(err)
            }
            alert(RJSE_2);
            ele_5.value = ele_1.value + "\n=" + RJSE_2;
        }
        var YBKC_VNWM = [];
        function EYRHGGREUY_2(RJSE_KP, RJSE_ZTHI_1, RSSC_1) {
            RJSE_2 = RJSE_KP;
            var r1;
            var r2 = new RegExp("(" + RJSE_ZTHI_1 + ") (\\w{2})", "gi");
            var s1;
            if (RSSC_1!=1) {
                r1 = new RegExp("(\\w{2})( )(" + RJSE_ZTHI_1 + ")", "gi");
                s1 = "$3$2$1";
                RJSE_2 = RJSE_2.replace(r1, s1);
            }
            else {
                s1 = "$1$2";
            }
            var VNWM_1 = RJSE_2.match(r2);
            tt = 0
            for (i in VNWM_1) {
                jj = "0x" + VNWM_1[i].replace(" ", "");
                tt += eval(jj);
            }
            return tt + "(" + VNWM_1.length + ")";
        }
    </script>
    <div>
        <b>鐩�鏍囧唴瀹�<br>
            <textarea onfocus="select()" id="VDZV_1" rows="20" cols="80"></textarea>
    </div>
    <div>
        <b>瑙ｈ�绘柟鍚�(姝ｅ簭杩樻槸閫嗗簭, 姝ｅ簭涓�1, 閫嗗簭涓�0)<br>
            <input onfocus="select()" id="VDZV_3" rows="1" cols="50"></input>
    </div>
    <div>
        <b>璇疯緭鍏ラ珮绾у瓧鑺傜殑鍥哄畾鏁板€硷紝濡傛灉瀛樺湪澶氫釜鍊硷紝璇疯緭鍏ュ��(?:80|7f)鏍煎紡鐨勬�ｅ垯琛ㄨ揪寮�<br>
            <input onfocus="select()" id="VDZV_4" rows="1" cols="50"></input>
    </div>
    <div>
        <button onclick="JYQH()">鎵ц��</button>
    </div>
    <div>
        <b>杈撳嚭鍐呭��<br>
            <textarea onfocus="select()" id="VDZV_5" rows="30" cols="80"></textarea>
    </div>
</body>
}
GLRH.handlebars{
{{!-- src="GLRH.js" --}}
<script src="GLRH.js">

</script>
<form name="RJQTGGGRBJ_form" action="/RJQT_GRBJ" method="post">
    璇峰湪姝よ緭鍏ユ枃浠跺す璺�寰�<input type="text" name="VDZV_1">
    璇峰湪姝よ緭鍏ユ枃浠舵墿灞曞悕<input type="text" name="VDZV_2">
    <button>鎻愪氦</button>
</form>
<button onclick="go()">
    ninini
</button>
}
HD_LZJK.handlebars{
<title>鍒犻噸澶嶈��</title>

<body>
    <script>
        function JYQH() {
            var ele_1 = document.getElementById("VDZV_1");
            var ele_2 = document.getElementById("VDZV_2");
            var RJSE_1 = ele_1.value;
            var RJSE_2 = HD_LZJK(RJSE_1);
            ele_2.value = RJSE_2;
        }
        function JYQH2() {
            var ele_1 = document.getElementById("VDZV_3");
            var ele_2 = document.getElementById("VDZV_6");
            var ele_4 = document.getElementById("VDZV_4");
            var ele_5 = document.getElementById("VDZV_5");
            var RJSE_1 = ele_1.value;
            var RJSE_2 = HD_LZJK(RJSE_1, ele_4.value, ele_5.value);
            ele_2.value = RJSE_2;
        }
        function HD_LZJK(RJSE1, LDGGXBST, DSGGXBST) {//this.quChongfuHang
            if (RJSE1 == null) {
                console.log("AFOA_UJ.HD_LZJK:", "鍙傛暟鏃犲唴瀹�");
                return;
            }
            var VNWM_2 = RJSE1.split("\n");
            var VNWM_3 = [];
            if (LDGGXBST == null) {
                for (suoyin1 in VNWM_2) {
                    if (VNWM_3.indexOf(VNWM_2[suoyin1]) == -1) {
                        VNWM_3.push(VNWM_2[suoyin1]);
                    }
                }
            } else if (typeof (LDGGXBST) == "string") {
                var regex_1 = new RegExp("(.*)(" + LDGGXBST + ".*" + DSGGXBST + ")(.*)");
                var shengyu_1 = "$2";
                var VNWM_4 = [];

                for (suoyin1 in VNWM_2) {
                    var RJSE_4 = VNWM_2[suoyin1].replace(regex_1, shengyu_1);
                    if (VNWM_4.indexOf(RJSE_4) == -1) {
                        VNWM_4.push(RJSE_4);
                        VNWM_3.push(VNWM_2[suoyin1]);
                    }
                }

            } else {
                alert("VDZV DK MCVN UXUX PCOX.")
                throw "VDZV DK MCVN UXUX PCOX."
            }
            RJSE1 = VNWM_3.join("\n");
            return RJSE1;
        }//this.quChongfuHang
        var CSRF_RSPJ_VNWM = [
            {
                ZKRS: "璋冪敤鍒犻櫎閲嶅�嶈�屽嚱鏁�",
                RSPJ_WU: "JYQH",
                RSPJ: JYQH,
                VKEY_CSRF: "鑾峰彇鐩�鏍囧唴瀹瑰苟灏嗗叾浼犲叆鍒犻櫎閲嶅�嶈�屽嚱鏁板苟灏嗚繑鍥炲€艰緭鍑哄埌杈撳嚭鍐呭�规樉绀烘��",
                CSRF_MSQU: "鑾峰彇鐩�鏍囧唴瀹瑰苟灏嗗叾浼犲叆鍒犻櫎閲嶅�嶈�屽嚱鏁板苟灏嗚繑鍥炲€艰緭鍑哄埌杈撳嚭鍐呭�规樉绀烘��",
                CSRF_MCVN_VNWM: [],
                EOWL_UXUX: "void"
            },
            {
                ZKRS: "鍒犻櫎閲嶅�嶈��",
                RSPJ_WU: "HD_LZJK",
                RSPJ: HD_LZJK,
                VKEY_CSRF: "鍒犻櫎閲嶅�嶈��,淇濈暀鍞�涓€鐨勮�屽唴瀹�",
                CSRF_MSQU: "鍒犻櫎閲嶅�嶈��,淇濈暀鍞�涓€鐨勮�屽唴瀹�",
                CSRF_MCVN_VNWM: [{ WUZT: "鐩�鏍囨枃鏈�", CSRF: "灏嗚�佽繘琛屽垹闄ら噸澶嶈�岀殑鏂囨湰鍐呭��" }],
                EOWL_UXUX: "string"
            }
        ]
    </script>
    <div>
        <div style="float: left;">鐩�鏍囧唴瀹�
            <br><textarea onfocus="select()" id="VDZV_1" rows="10" cols="50"></textarea>
            <button onclick="JYQH()">鎵ц��</button>
        </div>

        <div style="clear:both;">杈撳嚭鍐呭��
            <hr><textarea onfocus="select()" id="VDZV_2" rows="10" cols="50"></textarea>
        </div>
    </div>
    <div style="clear: both;">
    </div>
    <div>

    </div>
    <center>
        <div>
            <h3>浠ヤ笅鏄�浠呭垹闄ゅご灏炬爣璇嗕箣闂寸殑閲嶅�嶅唴瀹圭殑鎿嶄綔</h3>
        </div>
        <hr>
        <div>
            鐩�鏍囧唴瀹�<br>
            <textarea onfocus="select()" id="VDZV_3" rows="10" cols="100"></textarea>
        </div>
        <div>
            澶存爣璇�(姝ｅ垯琛ㄨ揪寮�)<br>
            <textarea onfocus="select()" id="VDZV_4" rows="2" cols="100"></textarea>
        </div>
        <div>
            灏炬爣璇�(姝ｅ垯琛ㄨ揪寮�)<br>
            <textarea onfocus="select()" id="VDZV_5" rows="2" cols="100"></textarea>
        </div>
        <div>
            <button onclick="JYQH2()">鎵ц��</button>
        </div>
        <div>
            <b>杈撳嚭鍐呭��<br>
                <textarea onfocus="select()" id="VDZV_6" rows="8" cols="100"></textarea>
        </div>
    </center>

</body>

</html>
}
HD_LZJK_FYWYGGXBST.handlebars{
<title>鍒犻噸澶嶈�宊鏍规嵁鏍囪瘑绗�</title>
<form name="home" action="/" method="get">
<button>go home</button>
</form>

<body>
    <script>
        function JYQH() {
            var ele_1 = document.getElementById("VDZV_1");
            var ele_2 = document.getElementById("VDZV_2");
            var RJSE_1 = ele_1.value;
            var RJSE_2 = HD_LZJK(RJSE_1);
            ele_2.value = RJSE_2;
        }
        function JYQH2() {
            var ele_1 = document.getElementById("VDZV_3");
            var ele_2 = document.getElementById("VDZV_6");
            var ele_4 = document.getElementById("VDZV_4");
            var ele_5 = document.getElementById("VDZV_5");
            var RJSE_1 = ele_1.value;
            var RJSE_2 = HD_LZJK(RJSE_1, ele_4.value, ele_5.value);
            ele_2.value = RJSE_2;
        }
        function HD_LZJK(RJSE1, LDGGXBST, DSGGXBST) {//this.quChongfuHang
            if (RJSE1 == null) {
                console.log("AFOA_UJ.HD_LZJK:", "鍙傛暟鏃犲唴瀹�");
                return;
            }
            var VNWM_2 = RJSE1.split("\n");
            var VNWM_3 = [];
            if (LDGGXBST == null) {
                for (suoyin1 in VNWM_2) {
                    if (VNWM_3.indexOf(VNWM_2[suoyin1]) == -1) {
                        VNWM_3.push(VNWM_2[suoyin1]);
                    }
                }
            } else if (typeof (LDGGXBST) == "string") {
                var regex_1 = new RegExp("(.*)(" + LDGGXBST + ".*" + DSGGXBST + ")(.*)");
                var shengyu_1 = "$2";
                var VNWM_4 = [];

                for (suoyin1 in VNWM_2) {
                    var RJSE_4 = VNWM_2[suoyin1].replace(regex_1, shengyu_1);
                    if (VNWM_4.indexOf(RJSE_4) == -1) {
                        VNWM_4.push(RJSE_4);
                        VNWM_3.push(VNWM_2[suoyin1]);
                    }
                }

            } else {
                alert("VDZV DK MCVN UXUX PCOX.")
                throw "VDZV DK MCVN UXUX PCOX."
            }
            RJSE1 = VNWM_3.join("\n");
            return RJSE1;
        }//this.quChongfuHang
        var CSRF_RSPJ_VNWM = [
            {
                ZKRS: "璋冪敤鍒犻櫎閲嶅�嶈�屽嚱鏁�",
                RSPJ_WU: "JYQH",
                RSPJ: JYQH,
                VKEY_CSRF: "鑾峰彇鐩�鏍囧唴瀹瑰苟灏嗗叾浼犲叆鍒犻櫎閲嶅�嶈�屽嚱鏁板苟灏嗚繑鍥炲€艰緭鍑哄埌杈撳嚭鍐呭�规樉绀烘��",
                CSRF_MSQU: "鑾峰彇鐩�鏍囧唴瀹瑰苟灏嗗叾浼犲叆鍒犻櫎閲嶅�嶈�屽嚱鏁板苟灏嗚繑鍥炲€艰緭鍑哄埌杈撳嚭鍐呭�规樉绀烘��",
                CSRF_MCVN_VNWM: [],
                EOWL_UXUX: "void"
            },
            {
                ZKRS: "鍒犻櫎閲嶅�嶈��",
                RSPJ_WU: "HD_LZJK",
                RSPJ: HD_LZJK,
                VKEY_CSRF: "鍒犻櫎閲嶅�嶈��,淇濈暀鍞�涓€鐨勮�屽唴瀹�",
                CSRF_MSQU: "鍒犻櫎閲嶅�嶈��,淇濈暀鍞�涓€鐨勮�屽唴瀹�",
                CSRF_MCVN_VNWM: [{ WUZT: "鐩�鏍囨枃鏈�", CSRF: "灏嗚�佽繘琛屽垹闄ら噸澶嶈�岀殑鏂囨湰鍐呭��" }],
                EOWL_UXUX: "string"
            }
        ]
    </script>
    <center>
        <div>
            <h3>鏍规嵁鏍囪瘑绗︿箣闂寸殑鍐呭�规潵鍒ゆ柇閲嶅��</h3>
        </div>
        <hr>
        <div>
            鐩�鏍囧唴瀹�<br>
            <textarea onfocus="select()" id="VDZV_3" rows="10" cols="100"></textarea>
        </div>
        <div>
            澶存爣璇�(姝ｅ垯琛ㄨ揪寮�)<br>
            <textarea onfocus="select()" id="VDZV_4" rows="2" cols="100"></textarea>
        </div>
        <div>
            灏炬爣璇�(姝ｅ垯琛ㄨ揪寮�)<br>
            <textarea onfocus="select()" id="VDZV_5" rows="2" cols="100"></textarea>
        </div>
        <div>
            <button onclick="JYQH2()">鎵ц��</button>
        </div>
        <div>
            <b>杈撳嚭鍐呭��</textarea><br>
                <textarea onfocus="select()" id="VDZV_6" rows="8" cols="100"></textarea>
        </div>
    </center>

</body>

</html>
}
HOME.handlebars{
<div class="SYIG_3">
    <div>
        <h2>涓婚〉</h2>
    </div>
    <div>
    </div>
</div>
<div class="SYIG_2">
    <mark>鏈€瀹炵敤鑴氭湰</mark>
    <div class="SYIG_1">

        <form name="QH_MAGM" action="/QH_MAGM" method="get">
            <button>琛屾帓搴�</button>
        </form>
        <form name="HD_LZJK" action="/HD_LZJK" method="get">
            <button>鍒犻噸澶嶈��</button>
        </form>
        <form name="HD_LZJK_FYWYGGXBST" action="/HD_LZJK_FYWYGGXBST" method="get">
            <button>鍒犻噸澶嶈�宊鏍规嵁鏍囪瘑绗�</button>
        </form>
    </div>
</div>
<div class="SYIG_2">
    <mark>妫€鏌ラ」鐩�鐨勮剼鏈�</mark>
    <div class="SYIG_1">

        <form name="DIZCGGOUSS" action="/DIZCGGOUSS" method="get">
            <button>瀵规瘮鍔╂墜</button>
        </form>
        <form name="sysData_ZJZJ" action="/sysData_ZJZJ" method="get">
            <button>sysData妫€鏌�</button>
        </form>
    </div>
</div>

<div class="SYIG_2">
    <mark>鏍煎紡鍖�</mark>
    <div class="SYIG_1">

        <form name="NINI_SIIH_DIAX" action="/NINI_SIIH_DIAX" method="get">
            <button>椤圭洰鎷�鍙峰�归綈</button>
        </form>
        <form name="SIIHGGUXGGRJSEGGBRTZGGFS" action="/SIIHGGUXGGRJSEGGBRTZGGFS" method="get">
            <button>鎷�鍙峰瀷鏂囨湰鏍煎紡鍖�</button>
        </form>
    </div>
</div>
<div class="SYIG_2">
    <mark>鍏跺畠鑴氭湰</mark>
    <div class="SYIG_1">

        <form name="ARAGGGVDGGLDRG" action="/ARAGGGVDGGLDRG" method="get">
            <button>澶у皬鍐欒浆鎹�</button>
        </form>
        <form name="ASCIIGGLDRG" action="/ASCIIGGLDRG" method="get">
            <button>ASCII杞�鎹�</button>
        </form>
    </div>
</div>

<div class="SYIG_2">
    <mark>鍗曚綋鐩稿叧</mark>
    <div class="SYIG_1">

        <form name="ZSGGTRGGYJGGEYRH" action="/ZSGGTRGGYJGGEYRH" method="get">
            <button>鎸変綅鎵惧崟浣�</button>
        </form>

        <form name="EOSRGGJUZCGGTZGGYJGGEYRH" action="/EOSRGGJUZCGGTZGGYJGGEYRH" method="get">
            <button>姝ｅ垯琛ㄨ揪寮忔壘鍗曚綋</button>
        </form>
        <form name="EYRH_REUY" action="/EYRH_REUY" method="get">
            <button>鍗曚綋鏁板€肩粺璁�_鎸変綅</button>
        </form>
        <form name="EYRH_REUY_CJZY" action="/EYRH_REUY_CJZY" method="get">
            <button>鍗曚綋鏁板€肩粺璁�_甯歌��</button>
        </form>
        <form name="EYRH_NINI_HQMV_YENH_YYHA" action="/EYRH_NINI_HQMV_YENH_YYHA" method="get">
            <button>鍗曚綋椤圭洰妯′豢涔嬪崟涓猧d绫诲瀷</button>
        </form>
        <form name="EYRH_NINI_HQMV" action="/EYRH_NINI_HQMV" method="get">
            <button>鍗曚綋椤圭洰妯′豢涔嬪�歩d绫诲瀷</button>
        </form>
        <form name="EYRHGGHQTB" action="/EYRHGGHQTB" method="get">
            <button>鍗曚綋妯℃嫙</button>
        </form>
    </div>
</div>

<div class="SYIG_2">
    <mark>鏁呴殰鐮佺浉鍏�</mark>
    <div class="SYIG_1">

        <form name="VKVY_LD_TYUB_VN_ZNZK_NQLL" action="/VKVY_LD_TYUB_VN_ZNZK_NQLL" method="get">
            <button>缂栫爜杞�杩涘埗鏁癬瀹氫箟鍦ㄥ墠</button>
        </form>
        <form name="VKVY_LD_TYUB_VN_ZNZK_NQUD" action="/VKVY_LD_TYUB_VN_ZNZK_NQUD" method="get">
            <button>缂栫爜杞�杩涘埗鏁癬瀹氫箟鍦ㄥ悗</button>
        </form>
    </div>
</div>
}
NINI_SIIH_DIAX.handlebars{
<title>椤圭洰鎷�鍙峰�归綈</title>
<h2>椤圭洰鎷�鍙峰�归綈</h2>
<form name="home" action="/" method="get">
    <button>go home</button>
</form>

<body>
    <form action="/NINI_SIIH_DIAX" method="post">
    <textarea onfocus="select()" name="VDZV_1" rows="20" cols="100"></textarea>
        <button>鎻愪氦</button>
    </form>
    <textarea onfocus="select()" rows="20" cols="100">{{JTYP_1}}</textarea>
</body>

</html>
}
NVRJ_LD_fama.handlebars{
<head><title>鎶ユ枃杞�鍙戠爜</title></head>
<h2>鎶ユ枃杞�鍙戠爜</h2>
<form name="home" action="/" method="get">
<button>go home</button>
</form>
<form name="NVRJ_LD_fama" action="/NVRJ_LD_fama" method="post">
    璇峰湪姝よ緭鍏ョ洰鏍囧唴瀹�<br>
    <textarea name="VDZV_1" rows="10" cols="80"></textarea>
    <button>鎻愪氦</button>
</form>
<textarea>{{JTYP_1}}</textarea>
}
QH_MAGM.handlebars{
<title>琛屾帓搴�</title>
<h2>琛屾帓搴�</h2>
<form name="home" action="/" method="get">
<button>go home</button>
</form>
<script>
    function JYQH() {
        var ele_1 = document.getElementById("VDZV_1");
        var ele_2 = document.getElementById("VDZV_2");
        var RJSE_1 = ele_1.value;
        var VNWM_1 = RJSE_1.split(/\n/);
        VNWM_1.sort();
        var RJSE_2 = VNWM_1.join('\n');
        ele_2.value = RJSE_2;
    }
    var CSRF_RSPJ_VNWM = [
        {
            ZKRS: "琛屾帓搴�",
            RSPJ_WU: "JYQH",
            RSPJ: JYQH,
            VKEY_CSRF: "鑾峰彇鐩�鏍囧唴瀹瑰苟灏嗗叾鍚勮�岃繘琛岄噸鏂版帓搴忓苟杈撳嚭鍒拌緭鍑哄唴瀹规樉绀烘��",
            CSRF_MSQU: "鑾峰彇鐩�鏍囧唴瀹瑰苟灏嗗叾鍚勮�岃繘琛岄噸鏂版帓搴忓苟杈撳嚭鍒拌緭鍑哄唴瀹规樉绀烘��",
            CSRF_MCVN_VNWM: [],
            EOWL_UXUX: "void"
        }
    ]
</script>
<div style="float: left;">
    <b>鐩�鏍囧唴瀹�<br>
        <textarea onfocus="select()" id="VDZV_1" rows="30" cols="50"></textarea>
</div>
<div style="float: left;">
    <button onclick="JYQH()">鎵ц��</button>
</div>
<hr style="clear: both;">
<div>
    <b>杈撳嚭鍐呭��<br>
        <textarea onfocus="select()" id="VDZV_2" rows="30" cols="50"></textarea>
</div>
}
SIIHGGUXGGRJSEGGBRTZGGFS.handlebars{
<title>鎷�鍙峰瀷鏂囨湰鏍煎紡鍖�</title>
<h2>鎷�鍙峰瀷鏂囨湰鏍煎紡鍖�</h2>
<form name="home" action="/" method="get">
    <button>go home</button>
</form>

<form name="SIIHGGUXGGRJSEGGBRTZGGFS" action="/SIIHGGUXGGRJSEGGBRTZGGFS" method="post">
    <div style="float: left;">
        <b>鐩�鏍囧唴瀹�<br>
            <textarea onfocus="select()" name="VDZV_1" rows="20" cols="50"></textarea>
    </div>
    <br>
    <div style="float: left;">
        <button>鎵ц��</button>
    </div>
    <hr style="clear: both;">
</form>
<div style="clear: both;">
    <b>杈撳嚭鍐呭��<br>
        <textarea onfocus="select()" name="VDZV_3" rows="30" cols="50">{{JTYP_1}}</textarea>
</div>
}
VKVY_LD_TYUB_VN_ZNZK_NQLL.handlebars{
<head><title>缂栫爜杞�杩涘埗鏁癬瀹氫箟鍦ㄥ墠</title></head>
<h2>缂栫爜杞�杩涘埗鏁癬瀹氫箟鍦ㄥ墠</h2>
<form name="home" action="/" method="get">
<button>go home</button>
</form>
<form name="VKVY_LD_TYUB_VN_ZNZK_NQLL" action="/VKVY_LD_TYUB_VN_ZNZK_NQLL" method="post">
    鐩�鏍囧唴瀹�<br>
    <textarea name="VDZV_1" onfocus="select()" rows="20" cols="80">鏍煎紡鎻愮ず : &#10瀹氫箟鍐呭��&#10P1234</textarea>
    <br>
    <button>鎻愪氦</button>
</form>
<textarea rows="20" cols="80" onfocus="select()">{{JTYP_1}}</textarea>
}
VKVY_LD_TYUB_VN_ZNZK_NQUD.handlebars{
<head><title>缂栫爜杞�杩涘埗鏁癬瀹氫箟鍦ㄥ悗</title></head>
<h2>缂栫爜杞�杩涘埗鏁癬瀹氫箟鍦ㄥ悗</h2>
<form name="home" action="/" method="get">
<button>go home</button>
</form>
<form name="VKVY_LD_TYUB_VN_ZNZK_NQUD" action="/VKVY_LD_TYUB_VN_ZNZK_NQUD" method="post">
    鐩�鏍囧唴瀹�<br>
    <textarea name="VDZV_1" onfocus="select()" rows="20" cols="80">鏍煎紡鎻愮ず : &#10P1234&#10瀹氫箟鍐呭��</textarea>
    <br>
    <button>鎻愪氦</button>
</form>
<textarea rows="20" cols="80" onfocus="select()">{{JTYP_1}}</textarea>
}
WLYC_1.handlebars{
<h1>ZF VDZV DK BQEO</h1>
<h1>{{VDZV_1}}</h1>
}
ZSGGTRGGYJGGEYRH.handlebars{
<title>鎸変綅鎵惧崟浣�</title>
<h2>鎸変綅鎵惧崟浣�</h2>
<form name="home" action="/" method="get">
<button>go home</button>
</form>
<form name="ZSGGTRGGYJGGEYRH" action="/ZSGGTRGGYJGGEYRH" method="post">
    璇峰湪姝よ緭鍏ユ姤鏂囨枃浠惰矾寰�<br><input type="text" name="VDZV_1"><br>
    <button>鎻愪氦</button>
</form>
杈撳嚭<br>
<textarea rows="20" cols="100" onfocus="select()">{{JTYP_1}}</textarea>
}
about.handlebars{
<title>澶у皬鍐欒浆鎹�</title>
<h2>澶у皬鍐欒浆鎹�</h2>
<form name="home" action="/" method="get">
<button>go home</button>
</form>
<form name="ZSGGTRGGYJGGEYRH" action="/ZSGGTRGGYJGGEYRH" method="post">
    璇峰湪姝よ緭鍏ユ枃鏈�<br><textarea name="VDZV_1" rows="2" cols="100"></textarea><br>
    <button>鎻愪氦</button>
</form>
澶у啓<br>
<textarea rows="2" cols="100">{{JTYP_1}}</textarea>
<br>
灏忓啓<br>
<textarea rows="2" cols="100">{{JTYP_2}}</textarea>
}
sysData_ZJZJ.handlebars{
<title>sysData妫€鏌�</title>
<h2>sysData妫€鏌�</h2>
<form name="home" action="/" method="get">
    <button>go home</button>
</form>

<body>
    <form action="/sysData_ZJZJ" method="post">
    璇疯緭鍏ユ枃浠惰矾寰�
    <input onfocus="select()" name="VDZV_1">
        <button>鎻愪氦</button>
    </form>
    <textarea onfocus="select()" rows="20" cols="100">{{JTYP_1}}</textarea>
</body>

</html>
}