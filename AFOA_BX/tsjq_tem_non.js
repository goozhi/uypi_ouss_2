var diwr_vnwm_tsjq = new vr_afoa_bx().diwr_vnwm_tsjq
function tsjq_tem_non(rj_kp, tsts_trig_kp) {
    if (tsts_trig_kp == null) {
        throw new Error('csrf-tsts_trig_kp mcvn nrap-')
    }
    var tsts_trig = tsts_trig_kp
    var reg_AFOA = /([^\s=\{\}]+)\s*=\s*([^\n\{\}]*)\{\{((?:(?!.+=.*\{\{)[\s\n\S])*?)\}\}(?!\}(?!\}))/g;
    var rj_1 = rj_kp
    var rj_tsts_llcc = rj_kp.slice(0, tsts_trig)
    var rj_tsts_udcc = rj_kp.slice(tsts_trig, rj_kp.length)
    var diwr_dbkz_tsts = rj_tsts_llcc.match(/\w+$/)
    if (diwr_dbkz_tsts == null) {
        return [{ gkqj_dbkz_tsts_yjab: false, rj_tsts_udcc, rj_tsts_llcc }];
    }
    var rj_dbkz_tsts = diwr_dbkz_tsts[0]
    var dbkz_vnwm_vr_afoa = rj_1.match(reg_AFOA)
    var vnwm_yhld = diwr_vnwm_tsjq.map(async rn1 => {
        // var vnwm_vr_afoa = rn1.klch.match(reg_AFOA)
        // if (vnwm_vr_afoa != null) {
        //     var diwr_vnwm_klch_cgne_mi = vnwm_vr_afoa.map(rn2 => {
        //         var stst_mi = DOVW_DPAV_UYPJ_ZV_EOWL_STST_MI(rn2, rj_1);
        //         return { stst_mi, dbkz_dyvy: rn2, diwr_tsjq: rn1 }
        //     })
        //     return diwr_vnwm_klch_cgne_mi.map(rn3 => {
        //         return rn3.stst_mi + rn3.diwr_tsjq.zkrs
        //     }).join('\n\n')
        // }
        var diwr_vnwm_stst_mi = rn1.vnwm_vr_afoa_lzm_wu.map(rn2 => {
            return { zkrs: rn1.zkrs, rj_dbkz_tsts, gkqj_dbkz_tsts_yjab: true, rj_tsts_llcc, rj_tsts_udcc, vr_afoa_lzm_wu: rn2, stst_mi: DOVW_DPAV_UYPJ_ZV_EOWL_STST_MI(rn2, rj_dbkz_tsts.toUpperCase()) }
        })
        diwr_vnwm_stst_mi.sort((a, b) => b.stst_mi - a.stst_mi)
        return diwr_vnwm_stst_mi
    })
    return new Promise((resolve, reject) => {
        Promise.all(vnwm_yhld).then(jtyj => {
            jtyj.sort((a, b) => b[0].stst_mi - a[0].stst_mi)
            resolve(jtyj[0][0])
        })
    })
}
function vr_afoa_bx() {
    this.diwr_vnwm_tsjq = [{
        vr_afoa_wu: "LJEY",
        zkrs:"菜单指令",
         
        csrf: `该指令帮助dbkz ngnc 彭 EBWU ljey, bi tsjq lh md-VR-md tsjq, soNO bi tsjq bqph fj oan baDB YNDF md-VR-md tsjq gq ft 彭 EBWU tsjq, pkft kf soL baDB dk md-VR-md tsjq bqph huop 彭 EBWU.
        BI TSJQ DK 操作符为1或者menu(大小写不敏感)，参数为菜单的名字。Bi mcvn huop ye aq 主流菜单名 if vnwy tu, osse zzuy iq 的拼音写法(如shujuliu(拼错自动矫正)), uo przv kraq mcvn, md-VR-md LJEY tsjq lbm jcbz ja ynL ldrg lh diyc dk yhrj.
        `,
        klch: `
        1=菜单1{{
            menu=菜单2{{
                //调用其他指令
            }}
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["MENU", "1"],
        VBYT_VKRF_Peng_EBWU: true,
        eowl_uxux: "string"
    }, {
        vr_afoa_wu: "DATA_VNWY_RIRI",
        zkrs:"未支持",
         
        csrf: "bi afoa ra bs.. riri Peng data VNWY, AH DREQ mr ZHVT TSZN VNWY",
        klch: ``,
        vnwm_vr_afoa_lzm_wu: ["2", "DATA"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object"
    }, {
        vr_afoa_wu: "FIGB_EYRH_FDCS",
        zkrs:"电池单体查找",
         
        csrf: "mcvn : 9=utf8 jukl jowy utf8 vkvy rjvt nvrj; bqeo : ah zqjp vdzv nvrj tyqh fdcs . oin nq yxna rjvt hqtz tt sr vdzv nvrj yxna no rjvt bi yxna tt dk bqeo, kqud di ynl tyqh fdcs.",
        klch: `CELLFIND=9=utf8{{
            //path
        }}`,
        vnwm_vr_afoa_lzm_wu: ["4", "CELLFIND"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "DBC_BRTZ_FS_3f_BEIQI_EC180",
        zkrs:"DBC格式化之3f_北汽EC180",
        csrf: `Bi tsjq kfou dbkz ja 北汽EC180 的dbc rjqt yh dk 3f uxux ldlh 彭 EBWU yh dk 3f vnwm.Oin aqfc dbkz gd zhvt kraq 3f vnwy.Bi tsjq lbm ba um ce dk lplp, zf ah fywy dgl lplp dk zhkl sdbc DBC格式化之3f_北汽EC180.
        `,
        klch: `31={{}}
    `
        ,  
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object",
        vnwm_vr_afoa_lzm_wu: ["31", 'BEIQI3F']
    },
    {
        vr_afoa_wu: "DBC_BRTZ_FS_ZV_BEIQI_EC180",
        zkrs:"DBC格式化之北汽EC180",
        csrf: `Bi tsjq kfou dbkz ja 北汽EC180 的dbc rjqt  ldlh 彭 EBWU .Bi tsjq lbm ba um ce dk lplp, zf ah fywy dgl lplp dk zhkl sdbc DBC格式化之北汽EC180.
        Bi tsjq mcnv nott [dbc rjok](http://localhost:3009/dbc_rjok) tyqh brtz fs.`,
        klch: `32={{}}`
        ,  
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object",
        vnwm_vr_afoa_lzm_wu: ["32", 'BEIQIDBC']
    },

    {
        vr_afoa_wu: "NVMS_BQEO_AH_WPM_FS",
        zkrs:"报错内容可视化",
         
        csrf: "JA sysData ae yndf rjqt zjzj msox ud dk nvcm tyqh nppr , kn bqeo ah wpm va bv pe.Bi tsjq lbm uwuu ce dk lplp.",
        klch: `view={{
            《描述错误的主题》
            错误内容
            《/描述错误的主题》
        }}`,
        vnwm_vr_afoa_lzm_wu: ["20", "VIEW"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object"
    },

    {
        vr_afoa_wu: "RJ_BWCR_VY",
        zkrs:"读故障码指令",
         
        csrf: `读故障码指令 : 操作符为3或rdtc。内容格式仅能如下: md-state=XXX frame=XXX code=XXX space=XXX start=XXX id=XXX num(number)=XXX-md
        `,
        klch: `        3={{
            space=4
            code=2
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["3", "RDTC"],
        VBYT_VKRF_Peng_EBWU: true,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "HD_LZJK",
        zkrs:"删重复行",
        csrf: `HD FG LZJK DK QH. BI AFOA AH NO FYWY LG XBST MR DS XBST FL FL HD FG XBST TYCC DK LZJK BQEO. BI TSJQ LBM uu uw ce dk lplp, fywy kr nh lplp dk zhkl vdzv mcvn om ahno nq vdum lplp nwvt fg lzjk dk jtyj lw. Fg lzjk qh dk jtyj dk nwvt ac nq md-VR-md lplp.
        `,
        klch: `del={{}}
    `
        ,  
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object",
        vnwm_vr_afoa_lzm_wu: ["DEL", "76"]
    },

    {
        vr_afoa_wu: "OSSE_ZZUY",
        zkrs:"版本信息指令",
         
        csrf: `版本信息指令：操作符为8或者ecu(大小写不敏感)，如果参数为0时则自动将空的帧填上MD-99 99 99-MD. 有关版本信息项目编写规范请参考 ["md-VR-md语言之数据流项目编写示例"](http://localhost:3009/VR_EBWU_BRTZ_FS_ZV_VNWY_TU_NINI_VKVD_KLCH)
        `,
        klch: `        8=0{{
            3f项目示例{2222}33，，’00：元素‘，’oth：--‘
            3f项目示例{}33，，元素1 02:元素2 元素3
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["8", "ECU"],
        VBYT_VKRF_Peng_EBWU: true,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "VNWY_TU",
        zkrs:"数据流指令",
         
        csrf: `数据流指令：操作符为9或者STR(大小写不敏感)，参数为彭语言中str()的参数，如果参数为0时则自动将空的帧填上MD-99 99 99-MD. 有关数据流项目编写规范请参考 ["md-VR-md语言之数据流项目编写示例"](http://localhost:3009/VR_EBWU_BRTZ_FS_ZV_VNWY_TU_NINI_VKVD_KLCH)
        `,
        klch: `        STR=sortCanDataByID{{
            3f项目示例{2222}33，，’00：元素‘，’oth：--‘
            3f项目示例{2223}33，，元素1 02:元素2 元素3
        }}
        9=0{{
            3f项目示例{}33，，’00：元素‘，’oth：--‘
            3f项目示例{}33，，元素1 02:元素2 元素3
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["9", "STR"],
        VBYT_VKRF_Peng_EBWU: true,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "RFRF_JTYJ_NIKC",
        zkrs:"翻译结果录入",
         
        csrf: `该指令帮助用户快速将翻译结果转为json文件保存。rvdb bi tsjq, 你需要输入三个目录，具体请看示例`,
        klch: `
        96={{
            第一行请输入：你翻译好的文件所在的目录路径，文件内每行的格式如下
            车速;"Speed"
            车速"Speed"
            没有点燃;"No ignition;"
            靠近双引号的分号将被自动去掉。所以不用担心分号问题
    
            第二行请输入：指定输出目录

            第三行请输入：用于检查翻译内容是否符合标准的目录
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["96", "DBTOJSON"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "RFRF_UYPI_ZTFR_SUM",
        zkrs:"翻译字符串",
         
        csrf: `该指令帮助用户根据资料库快速将ids文件中的中文翻译为英文。如果遇到无法自动翻译的中文，将创建一个文件夹，引导用户在该文件夹内自行翻译并录入资料库。rvdb bi tsjq, 你需要输入两个目录，具体请看示例`,
        klch: `
        //参数为9=gb2312将以gb2312编码读取ids，默认utf8
        94=9=gb2312{{
            第一行请输入：全部ids文件所在目录
            第二行请输入：指定资料库目录，也就是中英对应资料库的目录
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["94", "TRANSLATE"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "RFRF_JTYJ_JSON_KCZV",
        zkrs:"翻译结果json录入",
         
        csrf: `该指令帮助用户将翻译资料--JSON文件重新检查一遍并进行合并。该功能一般用于在更新了标准库之后重新使用最新的标准再筛查的情况。rvdb bi tsjq, 你需要输入三个目录，具体请看示例`,
        klch: `
        95={{
            第一行请输入：JSON文件所在的目录路径
            第二行请输入：指定输出目录
            第三行请输入：用于检查翻译内容是否符合标准的目录
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["95", "RECHECKJSON"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "VR_33_VNWM_MCVN",
        zkrs:"3f数组参数格式化",
         
        csrf: `3f数组参数格式化 : 操作符为33。不指定范围参数将自动分配范围参数
        `,
        klch: `        33={{
            00：元素0
            02-09：元素2
            元素3
            10
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["33", "ARRAY"],
        VBYT_VKRF_Peng_EBWU: true,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "VR_TSZN_BQEO_BRTZ_FS",
        zkrs:"指定内容向彭语言格式化",
         
        csrf: `指定文本中的md-VR-md指令或彭指令中含有的md-VR-md语言向彭语言格式化, lcyi, hvoc md-vr-md ebwu dk rslc vlub dk jheg, zf aqfc ja przv 58 tsjq dk bqeo db ye di qq wyih '\`' ae yhrj dz ih '·' sin up lq, lssr ahoa lbm nvms。参数可填str 或9、ecu或8 、rdtc或3、menu或1，多个参数用逗号或空格隔开，参数大小写不敏感
        `,
        klch: `        
        //该指令的参数表示将VR的str指令、ecu指令、menu指令或者彭语言中的VR格式的数据流项目、版本信息项目向彭语言格式化
        58=str ecu menu{{
            \`
            +1[版本信息](Spec)
            $Ecu();
            *"硬件版本",                   {22 F1 A3},cf,d4*(1)+(0),.0,;
            *"硬件日期",                   {22 F1 A3}88 8年9月//这是VR语言格式
            ***
            $$$

            1=shujuliu{{
                9={{
                  数据流项目{2233}=9 
                }}
                8={{
                    版本信息项目{22f190}16 4-27
                }}
            }}
            \`
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["58", "SELECT"],
        VBYT_VKRF_Peng_EBWU: true,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "VR_SIIH_DIAX",
        zkrs:"大括号对齐",
         
        csrf: `大括号对齐 : 操作符为77。
        `,
        klch: `        77={{
            AB{}
            DG  {}
            , ,{}
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["77", "ALIGN"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "VR_KUOE_AFOA",
        zkrs:"特殊功能",
         
        csrf: `Bi tsjq kfou dbkz ngnc kuoe afoa. Kf rvdb dk brtz dk ah rjm va pe. Pcgn bi tsjq dk brtz rt mcvc [md-vr-md kuoe afoa tsfz](http://localhost:3009/VR_KUOE_AFOA_TSFZ_RJOK_html_FS)。
        `,
        klch: `0={{
        # VIN写入
        
    *1*
    ## 行代码
    * 打印请稍等
    * 发送10 03
    * 帧数组复位1到100为0
    * 过密码23
    
    ## 选择框
    ···
    当前VIN为{22f190}09 4-20
    ···
    * 写入 2
    * 退出 exit
    
    *2*
    ## 行代码
    * 打印请输入17位VIN
    
    ## 输入框
    类型为0a 长度为17 传入帧数组1
    * 确定 3
    * 退出 exit
    
    *3*
    ## 行代码
    * 打印正在发送中，请稍等
    * 发送2e f1 90 f[1][1]16
    * 注意已发送完成，可返回查看结果
    * 跳转到1
    
    *exit*
}}
    `,
        vnwm_vr_afoa_lzm_wu: ["0", "spec"],
        VBYT_VKRF_Peng_EBWU: true,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "VR_PRVD_VM_KLVQ_SHZN",
        zkrs:"（该指令暂未支持）传输轴范围锁定",
         
        csrf: `（该指令暂未支持）传输轴范围锁定 : 操作符为47。参数为line和weight。line只能是0或1, 0表示传输轴 :md- 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7-md; 1表示传输轴: md-7 6 5 4 3 2 1 0 7 6 5 4 3 2 1 0 -md; weight只能是0或1, 0表示前一个data权重更高; 1表示后一个data权重更高。里面的内容格式示例:d4=0-3,d5=7, ‘=’ 后面是占用位表达，这里一共5位.(注意：sopc zthi bqph dk tr dk osn lz efcm ji zp rz ab sb hv wk ab xn dk. Ss prvd vm dk prvd rstz sogn.)
        `,
        klch: `        47=line=1,weight=1{{
            d4=0-3,d5=7
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["47"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object"
    },
    {
        vr_afoa_wu: "DIZC_OUSS_2",
        zkrs:"调用对比助手",
         
        csrf: `调用对比助手 : 操作符为99。
        `,
        klch: `        99={{
            *"变道盲区按键次数",   {22 b0 01},cf,d4*16777216+d5*65536+d6*256+d7,.0,次;
            *"车道偏离按键次数",   {22 b0 01},cf,d8*16777216+d9*65536+d10*256+d11,.0,次;
        }}
        //参数为32表示将会设置d4往后的值以30-39的规律循环赋值（但d4为2f），然后输出对应值（该效果仅对计算类型项目有效）。
        99=32{{
            *"变道盲区按键次数",   {22 b0 01},cf,d4*16777216+d5*65536+d6*256+d7,.0,次;
            *"车道偏离按键次数",   {22 b0 01},cf,d8*16777216+d9*65536+d10*256+d11,.0,次;
        }}
        //以下参数表示：字节d4设置为0xff 字节d5设置为0x01 时输出对应值； 字节d4设置为0x80时，输出对应值（输出对应值仅对计算类型项目有效）
        99=[4=0xff 5=0x1][4=0x80]{{
            *"变道盲区按键次数",   {22 b0 01},cf,d4*16777216+d5*65536+d6*256+d7,.0,次;
            *"车道偏离按键次数",   {22 b0 01},cf,d8*16777216+d9*65536+d10*256+d11,.0,次;
        }}
        //下面参数表示设置每条算式最高字节分别为0x10、0xff，输出对应值（输出对应值仅对计算类型项目有效）
        99=9=0x10 0xff{{
            *"变道盲区按键次数",   {22 b0 01},cf,d4*16777216+d5*65536+d6*256+d7,.0,次;
            *"车道偏离按键次数",   {22 b0 01},cf,d8*16777216+d9*65536+d10*256+d11,.0,次;
        }}
        //下面参数表示设置每条算式最高字节为开发者预设值，输出对应值（输出对应值仅对计算类型项目有效）
        99=9{{
            *"变道盲区按键次数",   {22 b0 01},cf,d4*16777216+d5*65536+d6*256+d7,.0,次;
            *"车道偏离按键次数",   {22 b0 01},cf,d8*16777216+d9*65536+d10*256+d11,.0,次;
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["99", "COMPARE"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "sysData_ZJZJ",
        zkrs:"调用sysData检查助手",
         
        csrf: `调用sysData检查助手 : 操作符为90。参数名为9表示输入内容为路径，将根据路径检查该路径对应的文件内容，不写参数默认检查输入的内容。
        `,
        klch: `        90={{
            $Str()
            *"变道盲区按键次数",   {22 b0 01},cf,d4*16777216+d5*65536+d6*256+d7,.0,次;
            *"车道偏离按键次数",   {22 b0 01},cf,d8*16777216+d9*65536+d10*256+d11,.0,次;
            ***
        }}
        90=9=GB2312{{
            D:/WRVR/working/汉EV/ZCZC1.JAVA
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["90", "CHECK"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "VR_STST_NINI_WU_YMRG_BC_NIXB_NINI_WU",
        zkrs:"相似项目替换目标项目名",
         
        csrf: `相似项目替换目标项目名 : 操作符为10。该功能用于执行匹配相似项目脚本后输出的文本中的替换动作
        `,
        klch: `        10={{
            左前车窗当前动作状态 相似度 : 0.824 *"左前窗当前动作状态",                {22 00 04},3f,d4,'00:默认值','01:停止','02:车窗打开','03:车窗关闭','oth:未定义';
            左前车窗自动下降开关信号 相似度 : 0.800 *"左前自动下降开关信号",              {22 00 08},3f,d4,'00:打开','01:关闭','oth:无效数据';
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["10"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "VR_UYPI_RFRF_BRTZ_FS",
        zkrs:"自动修复翻译数据的错误",
         
        csrf: `检查sysData字符串翻译工具翻译成英文后的格式文本的语法格式是否正确，如果有误，自动修复错误，并且输出修复后的文件。无法自动修复的将会抛出具体错误内容让用户手动修复。
        参数：9=UTF8表示以UTF8编码读取指定路径，默认UTF8。 `,
        klch: `        //根据默认编码读取目标路径进行检查修改
        98=9{{
            D:/Documents/WXWork/1688855185231552/Cache/File/2022-11/测试文件.TXT
        }}
        //可以直接写入目标内容进行检查修改
        98={{
            "Str2ID(0300014300010001000000E8)，Rated voltage
Battery production date; "
        }}
        
    `,
        vnwm_vr_afoa_lzm_wu: ["98"
            , "FIX"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "VR_LJEY_RJQT_GMIH_YXNA_ZJYJ",
        zkrs:"未支持",
         
        csrf: "bi afoa ra bs.. fywy pzre gmih nq menuData yh yj um ljey tyzv yxna",
        klch: ``,
        vnwm_vr_afoa_lzm_wu: ["30"
            , "FINDMENU"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object"
    },
    {
        vr_afoa_wu: "ESIH_BRTZ_FS",
        zkrs:"帧id格式化",
         
        csrf: `Bi tsjq kfou dbkz vkfs vdzv araw vnwy tu es ih dk uypi. Uo mc cjl vnwy tu dk es ih ji ytnc dk, sr ftcj gkgr rvdb bi tsjq. 
        Vdzv dk bqeo brtz fl oan if tt : 空白符和逗号作为md-id-md分隔符。“-”为连续递增标识符
        `,
        klch: `        19={{
            220101 - 22010A 220106
            220110
            22011A,22011C
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["19", "FRAME"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "VR_RJOK",
        zkrs:"输出VR相关文档",
        csrf: `Vdum md-VR-md stgn rjok : md-nixb=AFOA_WU-md : JUKL EOWL SOPC AFOA WU , md-nixb=afoa_lzm_wu-md : jukl eowl sopc afoa lzm wu, md-nixb=sopc-md : jukl eowl sopc rjok zzuy. uxst dk hy pc md-"csrf, klch"-md iq. Bi tsjq fl lh uuvo qr rvdb.
        md-VR-md sopc rjok cd sysa sasa dk lplp xm dbkz zqjp zjhq.Dbkz so aqn jyqh dgl tsjq.
        `,
        klch: `RJOK=nixb=AFOA_WU{{
    }}
    `
        ,  
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string",
        vnwm_vr_afoa_lzm_wu: ["RJOK"]
    },
    {
        vr_afoa_wu: "TYUB_LDRG",
        zkrs:"进制转换",
        csrf: `Bi tsjq ba um tyub ldrg lplp, zf ah fywy dgl lplp dk zhkl sdbc tyub ldrg.
        `,
        klch: `92={{}}
    `
        ,  
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object",
        vnwm_vr_afoa_lzm_wu: ["92", 'CONVERT']
    },
    {
        vr_afoa_wu: "RJQT_GRBJ",
        zkrs:"文件合并",
        csrf: `Bi tsjq kfou dbkz di nixb nikc tt dk sopc nixb rjqt tyqh grbj, bj vdum ye nh grbj ud dk rjqt.Bi tsjq ba um RJQT GRBJ lplp, zf ah fywy dgl lplp dk zhkl sdbc RJQT GRBJ.
        `,
        klch: `87={{}}
    `
        ,  
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object",
        vnwm_vr_afoa_lzm_wu: ["87", 'MERGE']
    },
    {
        vr_afoa_wu: "RJQT_FDMJ",
        zkrs:"文件分割",
        csrf: `Bi tsjq kfou dbkz di nixb rjqt tyqh FDMJ, bj vdum ye nh FDMJ ud dk NIKC.Bi tsjq LBM ba um RJQT FDMJ lplp, zf ah fywy dgl lplp dk zhkl sdbc RJQT FDMJ.
        `,
        klch: `86={{}}
    `
        ,  
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object",
        vnwm_vr_afoa_lzm_wu: ["86", 'FILESPLIT']
    },
    {
        vr_afoa_wu: "VKVY_LD_TYUB_VN_ZNZK_NQLL",
        zkrs:"故障码编码转16进制数(定义在前)",
        csrf: `Bi tsjq kfou dbkz nq di bwcr vyn jhyw bj ld lh rjzt ud yj um bwcr vyn bj ldlh dtcData brtz.Bi tsjq lbm ba um BWCR VYn VKVY LD 16 TYUB VN (ZNZK NQ LL) lplp, zf ah fywy dgl lplp dk zhkl sdbc BWCR VYn VKVY LD 16 TYUB VN.
        `,
        klch: `71={{}}
    `
        ,  
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object",
        vnwm_vr_afoa_lzm_wu: ["71", 'DTCFINDF']
    },
    {
        vr_afoa_wu: "VKVY_LD_TYUB_VN_ZNZK_NQUD",
        zkrs:"故障码编码转16进制数(定义在后)",
        csrf: `Bi tsjq kfou dbkz nq di bwcr vyn jhyw bj ld lh rjzt ud yj um bwcr vyn bj ldlh dtcData brtz.Bi tsjq lbm ba um BWCR VYn VKVY LD 16 TYUB VN (ZNZK NQ UD) lplp, zf ah fywy dgl lplp dk zhkl sdbc BWCR VYn VKVY LD 16 TYUB VN.
        `,
        klch: `72={{}}
    `
        ,  
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object",
        vnwm_vr_afoa_lzm_wu: ["72", 'DTCFINDB']
    },

    {
        vr_afoa_wu: "VNWY_TU_NINI_CGNE",
        zkrs:"项目匹配",
        csrf: `Bi tsjq kfou dbkz nq yenh sysData RJQT YH ZJYJ jcjc cofc dk vnwy tu nini.Zhxm nini wu iq mcvn, bi tsjq lbm nq mcnv vnwy tu nini ae osse zzuy nini yh yj um stn cgne dk nixb nini.Bi tsjq rvdb stst uy pj tyqh zjyj stst dk nini. Bi tsjq lbm rlkl ce lplp, zf aqfc fywy zhkl vdzv stgn mcvn , kqud nwvt stn cgne dk nini. 
        `,
        klch: `item={{}}
    `
        ,  
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object",
        vnwm_vr_afoa_lzm_wu: ["ITEM", "54"]
    },
    {
        vr_afoa_wu: "EYRH_HQTB",
        zkrs:"单体模拟",
        csrf: `Bi tsjq kfou dbkz di vkrr kk dk eyrh nini tyqh hqtb, eowl hqtb nvcm. Zf aqfc przv lr nh mcvn, fdlz ji efpc eyrh vnwy tu nini dk sysData pzre(ok kk ji eynh pzre) dk rjqt yxna, mr vo vyn rjqt. Bi tsjq lbm ba um eyrh hqtb lplp, zf ah fywy dgl lplp dk zhkl sdbc eyrh hqtb.
        `,
        klch: `46={{}}
    `
        ,  
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object",
        vnwm_vr_afoa_lzm_wu: ["46", 'SIM']
    },

    {
        vr_afoa_wu: "EYRH_VNWY_RSCS",
        zkrs:"单体排序指令",
         
        csrf: `在报文中将所有md-id-md进行精简并排序。参数格式如下: 2=1-1(表示每帧第一个字节到第一个字节为标识字节), 9=GB2312(表示将输入内容视为文件路径，按GB2312编码读取文件。如果不写此参数则将输入内容视为目标内容)。`,
        klch: `        97=2=1-1,9=GB2312{{
            D:/Che/zhongzhi中值3/报文2/温度数据摘取.TXT
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["97", "CELLSORT"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string"
    },]
    this.zjzj_lzjk_wu = function () {
        var rj_wuzt_slgr = this.diwr_vnwm_tsjq.map(rn1 => {
            return rn1.vr_afoa_wu + "," + rn1.vnwm_vr_afoa_lzm_wu.join(',')
        }).join('\n')
        this.diwr_vnwm_tsjq.forEach((rn2) => {
            var vnwm_yhld = rj_wuzt_slgr.match(new RegExp("\\b(?:" + rn2.vr_afoa_wu + "|" + rn2.vnwm_vr_afoa_lzm_wu.join("|") + ")\\b", "ig"))
            if (vnwm_yhld.length > rn2.vnwm_vr_afoa_lzm_wu.length + 1) {
                throw new Error('csrf-vr_afoa_wu ae vnwm_vr_afoa_lzm_wu lzjk-' + rn2.vr_afoa_wu + "," + rn2.vnwm_vr_afoa_lzm_wu.join(','))
            } else {

            }
        })
        return "csrf-hmpc msox-"
    }
    this.zjzj_lzjk_wu()
}