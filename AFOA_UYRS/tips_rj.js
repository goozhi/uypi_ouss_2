function tips_rj(){
var tips = `
@TIPS
*NOT_SUPPORT_TEST,不支持该项测试!;
*SELECT_TEST_ITEM,请选择测试项!;
*FILE_OPEN_ERROR,资料文件打开错误!;
*ENTER,确认;
*EXIT,退出;
*BACK,返回;
*CONTACT_ME,请与厂家联系;
*ECU_NOT_RSP,汽车无应答，请重测!;
*REQ_CMD_ERROR_CONTACT_ME,请求指令出错,请联系客服!;
*NOT_DTC,该系统无故障!;
*DTC_SUM,故障码数;
*DTC_CLS_DONE,故障码已清除;
*DTC_CLS_SEND,清除故障码指令已发送;
*DTC_READ_FAULT,未能读取故障码,请重测!\\n点火开关在ON位置,发动机不启动.;
*DTC_CLS_FAULT,未能清除故障码,请重测!\\n点火开关在ON位置,发动机不启动.;
//通讯故障
*ERROR_SEND,指令无法发送，请重测！;
*ERROR_VCI,VCI应答出错，请断开VCI后重测！;
*ERROR_NRC,汽车消极应答！\\n请求服务被拒绝,该发送指令不支持;
*ERROR_VCI_LEN,接收时，数据长度出错;
//配置
*WRITE_CFG_ERROR,写入配置出错!;
*WRITE_CFG_SUCESS,写入配置成功!;

*BMS_NAME_Z4KJCF,电池检测;
*BMS_NAME_DEFAUL,电池包诊断;
***
`
return tips
}
module.exports=tips_rj