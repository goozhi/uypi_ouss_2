// const { exec } = require('child_process');
var fs = require('fs')
// const iconv = require('iconv-lite');
// const VR_EBWU_AFOA_BRTZ_FS = require('./VR_EBWU_AFOA_BRTZ_FS');
// var r1 = /(\b(?:(?!0x)f)+)/ig
// var sheng1 = "0x$1"
// var YXNA_1 = "D:/RSGM/nodejs/UYPI_OUSS_2/ZCZC_1.JAVA"
// var str1 = "(33f"
// var TT
// var VBYT_KLVQ=require('./AFOA_BX/VBYT_KLVQ')
// var IOWR_VNWM_1=[{VNWM:[3,4]},{VNWM:[5,66]},{VNWM:[5,99]}]
// var EQWY=VBYT_KLVQ(IOWR_VNWM_1,"VNWM",99)
// const VNZT_YTNC_FS = require('./AFOA_BX/VNZT_YTNC_FS');
// UYTZ="d5&0X10"
// JTYP="0X10"
// REG_1="d\\d+"
// VNWM_1=[1]
// var JT=VNZT_YTNC_FS(VNWM_1)
// throw JT
// //  exec('clip').stdin.end(iconv.encode(TT, 'gbk'));
// // switch (true) {
// //     case 7 == 8-1:
// //         throw 777
// //         break;
// //     case 7+1 != 8:
// //         throw 99988
// //         break;
// //     default:
// //         throw 9999
// // }
const Table = require('cli-table');
let table = new Table({
     head: ['姓名', '年龄', '职业'],
     colWidths: [5, 5, 5]
  });
table.push(["*\"放电是否允许\"","                       {22 00 16}","3f","d4","'00:不允许'","'01:允许'","'Oth:无效数值/预留';"])
table.push(["*\"充电是否允许\"","                       {22 00 17}","3f","d4","'00:不允许'","'01:允许'","'Oth:无效数值/预留';"])
table.push(["*\"充电感应信号-直流\"","                  {22 00 19}","3f","d4","'00:有'","'01:无'","'Oth:无效数值/预留';"])
table.push(["*\"预充状态\"","                           {22 00 1a}","3f","d4","'00:未预充'","'01:正在预充'","'02:预充完成'","'03:预充失败'","'Oth:无效数值/预留';"])
table.push(["*\"负极接触器状态\"","                     {22 00 1c}","3f","d4","'00:断开'","'01:吸合'","'Oth:无效数值/预留';"])
table.push(["*\"预充接触器状态\"","                     {22 00 1d}","3f","d4","'00:断开'","'01:吸合'","'Oth:无效数值/预留';"])
table.push(["*\"高压互锁1\"","                          {22 00 24}","3f","d4","'00:锁止'","'01:未锁止'","'Oth:无效数值/预留';"])
table.push(["*\"高压系统状态\"","               {22 00 27}","3f","d4","'00:正常'","'01:一般异常'","'02:严重异常'","'Oth:无效数值/预留';"])
table.push(["*\"直流充电正极接触器状态\"","             {22 00 36}","3f","d4","'00:断开'","'01:吸合'","'Oth:无效数据/预留';"])
table.push(["*\"直流充电负极接触器状态\"","             {22 00 37}","3f","d4","'00:断开'","'01:吸合'","'Oth:无效数据/预留';"])
table.push(["*\"智能充电\"","                           {22 0a 04}","3f","d4","'00:不允许'","'01:允许'","'02:保留'","'Oth:无效数值/预留';"])
table.push(["*\"用电设备工作状态\"","                   {22 0a 05}","3f","d4","'01:允许'","'02:不允许'","'Oth:无效数据';"])
table.push(["*\"VTOL(车对排插放电)放电命令\"","         {22 0a 08}","3f","d4","'00:不允许'","'01:允许'","'02:等待'","'oth:未定义';"])
table.push(["*\"DC工作命令\"","                         {22 0a 10}","3f","d4","'00:不允许'","'01:允许'","'02:保留'","'Oth:无效数值/预留';"])
table.push(["*\"主动泄放命令\"","                       {22 0a 11}","3f","d4","'00:不允许'","'01:允许'","'02:保留'","'Oth:无效数值/预留';"])
table.push(["*\"热管理命令\"","                         {22 1f f3}","3f","d4","'00:无效'","'01:启动冷却系统一档'","'02:启动冷却系统二档'","'03:启动加热系统一档'","'04:启动加热系统二档'","'05:启动加热系统三档'","'06:无效'","'07:内循环'","'Oth:无效数值';"])
table.push(["*\"热管理请求状态\"","                     {22 1f f8}","3f","d4","'00:热管理请求开启'","'01:热管理请求关闭'","'Oth:无效数值';"])
table.push(["*\"电池冷却空调故障状态\"","               {22 1f f4}","3f","d4","'00:无效'","'01:正常'","'02:故障'","'Oth:预留';"])
table.push(["*\"电池内循环空调故障状态\"","             {22 1f f5}","3f","d4","'00:无效'","'01:正常'","'02:故障'","'Oth:预留';"])
table.push(["*\"电池热管理空调系统状态\"","             {22 1F f6}","3f","d4","'00:关闭'","'01:冷却系统一档运行'","'02:加热运行'","'03:内循环运行'","'04:冷却系统二档运行'","'oth:未定义';"])
console.log(table.toString());

// var diwr_1=new VR_TSJQ_DIWR()
// console.log(diwr_1.zjzj())