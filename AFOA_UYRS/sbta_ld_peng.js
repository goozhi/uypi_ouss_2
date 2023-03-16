const diwr_neig_zjzj = require("../AFOA_BX/diwr_neig_zjzj")
const uz_ms = require("../AFOA_BX/uz_ms")

function sbta_ld_peng(diwr_neig_kp){
    var vnwm_fo_1=[
        '默认协议'
    ]
    diwr_neig_zjzj(diwr_neig_kp, vnwm_fo_1)
    return diwr_neig_kp['默认协议'].map(rn1=>{
        if(rn1['协议类型']==='CANBUS11'){
            var vnwm_fo_2=[
                '波特率',
                '引脚',
                '会话模式',
                'link',
                '请求ID',
                '应答ID'
            ]
            diwr_neig_zjzj(rn1, vnwm_fo_2)
            if(!/\S/.test(rn1['请求ID'])||!/\S/.test(rn1['应答ID'])){
                uz_ms('csrf-rtul ae ycdg I D lh vv-')
            }
            return `$Init();\nCAN,11,${rn1['波特率']}K,pin:${rn1["引脚"].join('+')},${rn1['请求ID']}/${rn1['应答ID']}/ffe0,30帧{30 00 0a},period:0/2000/100/0/6000,\nin{${rn1['会话模式'].replace(/^\w\w(?: |)/,'')}},\nlink{${rn1['link'].replace(/^\w\w(?: |)/,'')}}1,3000ms,exit{null},`
        }else{
            uz_ms('csrf-sbta uxux acun-'+rn1['协议类型'])
        }            
    }).join('\n\n')
}
module.exports=sbta_ld_peng