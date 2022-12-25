var VR_TSJQ_BRTZ_FS_ZV_LJEY = require('./VR_TSJQ_BRTZ_FS_ZV_LJEY')
var VR_TSJQ_BRTZ_FS_ZV_VR_LJEY_RJQT_GMIH_YXNA_ZJYJ = require('./VR_TSJQ_BRTZ_FS_ZV_VR_LJEY_RJQT_GMIH_YXNA_ZJYJ')
var VR_TSJQ_BRTZ_FS_ZV_VNWY_TU = require('./VR_TSJQ_BRTZ_FS_ZV_VNWY_TU')
var VR_TSJQ_BRTZ_FS_ZV_33_VNWM_MCVN = require('./VR_TSJQ_BRTZ_FS_ZV_33_VNWM_MCVN')
var VR_TSJQ_BRTZ_FS_ZV_SIIH_DIAX = require('./VR_TSJQ_BRTZ_FS_ZV_SIIH_DIAX')
const VR_TSJQ_BRTZ_FS_ZV_OSSE_ZZUY = require('./VR_TSJQ_BRTZ_FS_ZV_OSSE_ZZUY')
const VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS = require('./VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS')
var VR_TSJQ_BRTZ_FS_ZV_UYPI_RFRF_BRTZ_FS = require('./VR_TSJQ_BRTZ_FS_ZV_UYPI_RFRF_BRTZ_FS')
const VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS_2 = require('./VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS_2')
const VR_TSJQ_BRTZ_FS_ZV_sysData_ZJZJ = require('./VR_TSJQ_BRTZ_FS_ZV_sysData_ZJZJ')
var VR_TSJQ_BRTZ_FS_ZV_EYRH_VNWY_RSCS = require('./VR_TSJQ_BRTZ_FS_ZV_EYRH_VNWY_RSCS')
const VR_TSJQ_BRTZ_FS_ZV_ESIH_BRTZ_FS = require('./VR_TSJQ_BRTZ_FS_ZV_ESIH_BRTZ_FS')
const VR_TSJQ_BRTZ_FS_ZV_STST_NINI_WU_YMRG_BC_NIXB_NINI_WU = require('./VR_TSJQ_BRTZ_FS_ZV_STST_NINI_WU_YMRG_BC_NIXB_NINI_WU')
var VR_TSJQ_BRTZ_FS_ZV_KLVQ_SHZN = require('./VR_TSJQ_BRTZ_FS_ZV_KLVQ_SHZN')
var VR_TSJQ_BRTZ_FS_ZV_FIGB_EYRH_ZJYJ = require('./VR_TSJQ_BRTZ_FS_ZV_FIGB_EYRH_ZJYJ')
var VR_TSJQ_BRTZ_FS_ZV_rj_bwcr_vy = require('./VR_TSJQ_BRTZ_FS_ZV_rj_bwcr_vy')
var VR_TSJQ_BRTZ_FS_ZV_data_VNWY_RIRI = require('./VR_TSJQ_BRTZ_FS_ZV_data_VNWY_RIRI')
var VR_TSJQ_ZV_VR_RJOK = require('./VR_TSJQ_ZV_VR_RJOK')
var VR_TSJQ_BRTZ_FS_ZV_TSZN_BQEO_BRTZ_FS = require('./VR_TSJQ_BRTZ_FS_ZV_TSZN_BQEO_BRTZ_FS')
function vr_afoa_bx() {
    this.diwr_vnwm_tsjq = [{
        vr_afoa_wu: "LJEY",
        zkrs: "菜单指令",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_LJEY,
        csrf: `菜单指令：操作符为1或者menu(大小写不敏感)，参数为菜单的名字，支持主流菜单名的拼音写法(shujuliu banbenxinxi等(拼错自动矫正))
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
        zkrs: "RA HUOP",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_data_VNWY_RIRI,
        csrf: "bi afoa ra bs.. riri Peng data VNWY, AH DREQ mr ZHVT TSZN VNWY",
        klch: ``,
        vnwm_vr_afoa_lzm_wu: ["2", "DATA"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object"
    }, {
        vr_afoa_wu: "FIGB_EYRH_FDCS",
        zkrs: "figb eyrh zjyj",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_FIGB_EYRH_ZJYJ,
        csrf: "mcvn : 9=utf8 jukl jowy utf8 vkvy rjvt nvrj; bqeo : ah zqjp vdzv nvrj tyqh fdcs . oin nq yxna rjvt hqtz tt sr vdzv nvrj yxna no rjvt bi yxna tt dk bqeo, kqud di ynl tyqh fdcs.",
        klch: `CELLFIND=9=utf8{{
            //path
        }}`,
        vnwm_vr_afoa_lzm_wu: ["4", "CELLFIND"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "RJ_BWCR_VY",
        zkrs: "读故障码指令",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_rj_bwcr_vy,
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
        vr_afoa_wu: "OSSE_ZZUY",
        zkrs: "版本信息指令",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_OSSE_ZZUY,
        csrf: `版本信息指令：操作符为8或者ecu(大小写不敏感)，如果参数为0时则自动将空的帧填上MD-99 99 99-MD. 有关版本信息项目编写规范请参考 "md-VR-md语言之数据流项目编写示例"
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
        zkrs: "数据流指令",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_VNWY_TU,
        csrf: `数据流指令：操作符为9或者STR(大小写不敏感)，参数为彭语言中str()的参数，如果参数为0时则自动将空的帧填上MD-99 99 99-MD. 有关数据流项目编写规范请参考 "md-VR-md语言之数据流项目编写示例"
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
        vr_afoa_wu: "VR_33_VNWM_MCVN",
        zkrs: "3f数组参数格式化",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_33_VNWM_MCVN,
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
        zkrs: "指定内容向彭语言格式化",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_TSZN_BQEO_BRTZ_FS,
        csrf: `指定文本中的md-VR-md指令或彭指令中含有的md-VR-md语言向彭语言格式化 : 操作符为58。参数可填str 或9、ecu或8 、rdtc或3、menu或1，多个参数用逗号或空格隔开，参数大小写不敏感
        `,
        klch: `        58=str ecu{{
            +1[版本信息](Spec)
            $Ecu();
            *"硬件版本",                   {22 F1 A3},cf,d4*(1)+(0),.0,;// =4
            *"硬件日期",                   {22 F1 A3}88 8年9月
            ***
            $$$
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["58", "SELECT"],
        VBYT_VKRF_Peng_EBWU: true,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "VR_SIIH_DIAX",
        zkrs: "大括号对齐",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_SIIH_DIAX,
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
        vr_afoa_wu: "VR_PRVD_VM_KLVQ_SHZN",
        zkrs: "（该指令暂未支持）传输轴范围锁定",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_KLVQ_SHZN,
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
        vr_afoa_wu: "DIZC_OUSS",
        zkrs: "Bi tsjq cd id",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS,
        csrf: `Bi tsjq cd id`,
        klch: ``,
        vnwm_vr_afoa_lzm_wu: ["69"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object"
    },
    {
        vr_afoa_wu: "DIZC_OUSS_2",
        zkrs: "调用对比助手",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_DIZC_OUSS_2,
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
        zkrs: "调用sysData检查助手",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_sysData_ZJZJ,
        csrf: `调用sysData检查助手 : 操作符为90。参数名为9表示输入内容为路径，将根据路径检查该路径对应的文件内容，不写参数默认检查输入的内容。
        `,
        klch: `        90={{
            $Str()
            *"变道盲区按键次数",   {22 b0 01},cf,d4*16777216+d5*65536+d6*256+d7,.0,次;
            *"车道偏离按键次数",   {22 b0 01},cf,d8*16777216+d9*65536+d10*256+d11,.0,次;
            ***
        }}
        90=9=GB2312{{
            D:\WRVR\working\汉EV\ZCZC1.JAVA
        }}
    `,
        vnwm_vr_afoa_lzm_wu: ["90", "CHECK"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string"
    },
    {
        vr_afoa_wu: "VR_STST_NINI_WU_YMRG_BC_NIXB_NINI_WU",
        zkrs: "相似项目替换目标项目名",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_STST_NINI_WU_YMRG_BC_NIXB_NINI_WU,
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
        zkrs: "翻译数据格式化",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_UYPI_RFRF_BRTZ_FS,
        csrf: `翻译数据格式化 : 98或fix。参数：9=UTF8表示以UTF8编码读取指定路径，默认UTF8。 `,
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
        zkrs: "RA HUOP",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_VR_LJEY_RJQT_GMIH_YXNA_ZJYJ,
        csrf: "bi afoa ra bs.. fywy pzre gmih nq menuData yh yj um ljey tyzv yxna",
        klch: ``,
        vnwm_vr_afoa_lzm_wu: ["30"
            , "FINDMENU"],
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "object"
    },
    {
        vr_afoa_wu: "ESIH_BRTZ_FS",
        zkrs: "帧md-id-md格式化",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_ESIH_BRTZ_FS,
        csrf: `帧md-id-md格式化 : 操作符为19。Vdzv dk bqeo brtz fl oan if tt : 空白符和逗号作为md-id-md分隔符。“-”为连续递增标识符
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
        zkrs: "Vdum md-VR-md stgn rjok",
        csrf: `Vdum md-VR-md stgn rjok : md-nixb=AFOA_WU-md : JUKL EOWL SOPC AFOA WU , md-nixb=afoa_lzm_wu-md : jukl eowl sopc afoa lzm wu, md-nixb=sopc-md : jukl eowl sopc rjok zzuy. uxst dk hy pc md-"csrf, klch"-md
        md-VR-md sopc rjok cd sysa sasa dk lplp xm dbkz zqjp zjhq.
        `,
        klch: `RJOK=nixb=AFOA_WU{{
    }}
    `
        , vr_afoa_rh: VR_TSJQ_ZV_VR_RJOK,
        VBYT_VKRF_Peng_EBWU: false,
        eowl_uxux: "string",
        vnwm_vr_afoa_lzm_wu: ["RJOK"]
    },

    {
        vr_afoa_wu: "EYRH_VNWY_RSCS",
        zkrs: "单体排序指令",
        vr_afoa_rh: VR_TSJQ_BRTZ_FS_ZV_EYRH_VNWY_RSCS,
        csrf: `在报文中将所有md-id-md进行精简并排序。参数格式如下: 2=1-1(表示每帧第一个字节到第一个字节为标识字节), 9=GB2312(表示将输入内容视为文件路径，按GB2312编码读取文件。如果不写此参数则将输入内容视为目标内容)。`,
        klch: `        97=2=1-1,9=GB2312{{
            D:\Che\zhongzhi中值3\报文2\温度数据摘取.TXT
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
module.exports = vr_afoa_bx;