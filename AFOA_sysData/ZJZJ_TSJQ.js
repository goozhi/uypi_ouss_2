function ZJZJ_TSJQ(TSJQ_WU, ZJZJ_RJSE_VNWM) {
    var ZJZJ_TSJQ_InputBox = require('./ZJZJ_TSJQ_InputBox')
    var ZJZJ_TSJQ_Act = require('./ZJZJ_TSJQ_Act')
    var ZJZJ_TSJQ_Button = require('./ZJZJ_TSJQ_Button')
    var ZJZJ_TSJQ_Init = require('./ZJZJ_TSJQ_Init')
    var ZJZJ_TSJQ_EXIT = require('./ZJZJ_TSJQ_EXIT')
    var ZJZJ_TSJQ_List = require('./ZJZJ_TSJQ_List')
    var ZJZJ_TSJQ_Input = require('./ZJZJ_TSJQ_Input')
    var ZJZJ_TSJQ_Str = require('./ZJZJ_TSJQ_Str')
    var ZJZJ_TSJQ_Lab = require('./ZJZJ_TSJQ_Lab')
    var ZJZJ_TSJQ_Calc = require('./ZJZJ_TSJQ_Calc')
    var ZJZJ_TSJQ_PSW27 = require('./ZJZJ_TSJQ_PSW27')
    var ZJZJ_TSJQ_Fire = require('./ZJZJ_TSJQ_Fire')
    var ZJZJ_TSJQ_Delayms = require('./ZJZJ_TSJQ_Delayms')
    var ZJZJ_TSJQ_GotoLab = require('./ZJZJ_TSJQ_GotoLab')
    var ZJZJ_TSJQ_Send = require('./ZJZJ_TSJQ_Send')
    var ZJZJ_TSJQ_Ecu = require('./ZJZJ_TSJQ_Ecu')
    var ZJZJ_TSJQ_If = require('./ZJZJ_TSJQ_If')
    var ZJZJ_TSJQ_For = require('./ZJZJ_TSJQ_For')
    var ZJZJ_TSJQ_Display = require('./ZJZJ_TSJQ_Display')
    var ZJZJ_TSJQ_SetPeriod = require('./ZJZJ_TSJQ_SetPeriod')
    var ZJZJ_TSJQ_ReadDtc = require('./ZJZJ_TSJQ_ReadDtc')
    var ZJZJ_TSJQ_ClearDtc = require('./ZJZJ_TSJQ_ClearDtc')
    var ZJZJ_TSJQ_F = require('./ZJZJ_TSJQ_F')
    var ZJZJ_TSJQ_ContinueFor_BreakFor = require('./ZJZJ_TSJQ_ContinueFor_BreakFor')
    var ZJZJ_LJEY_NINI_EYNH_LJEY = require('./ZJZJ_LJEY_NINI_EYNH_LJEY');

    if (ZJZJ_RJSE_VNWM == null) {
        throw new Error("MCVN NRAP");
    }
    var UXUX_YHLD = typeof (ZJZJ_RJSE_VNWM)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX, ACJI object : " + UXUX_YHLD)
    }
    var UXUX_YHLD = typeof (TSJQ_WU)
    if (UXUX_YHLD != "string") {
        throw new Error("MCVN UXUX MSOX, ACJI string : " + UXUX_YHLD)
    }
    var diwr_VNWM_YHLD
    switch (TSJQ_WU) {
        case "Str":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_Str(element);
            });
            break;
        case "Ecu":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_Ecu(element);
            });
            break;
        case "Display":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_Display(element);
            });
            break;
        case "ReadDtc":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_ReadDtc(element);
            });
            break;
        case "ClearDtc":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_ClearDtc(element);
            });
            break;
        case "SetPeriod":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_SetPeriod(element);
            });
            break;
        case "Send":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_Send(element);
            });
            break;

        case "Fire":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_Fire(element);
            });
            break;

        case "Calc":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_Calc(element);
            });
            break;
        case "Lab":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_Lab(element);
            });
            break;
        case "GotoLab":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_GotoLab(element);
            });
            break;
        case "PSW27":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_PSW27(element);
            });
            break;
        case "GotoLab":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_GotoLab(element);
            });
            break;
        case "Input":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_Input(element);
            });
            break;
        case "F":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_F(element);
            });
            break;
        case "InputBox":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_InputBox(element);
            });
            break;
        case "Act":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_Act(element);
            });
            break;
        case "Button":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_Button(element);
            });
            break;
        case "Init":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_Init(element);
            });
            break;
        case "EXIT":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_EXIT(element);
            });
            break;
        case "List":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_List(element);
            });
            break;
        case "Delayms":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_Delayms(element);
            });
            break;
        case "LJEY":
            DIWR_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_LJEY_NINI_EYNH_LJEY(element);
            });
            return new Promise((resolve, reject) => {
                Promise.all(DIWR_VNWM_YHLD).then(jtyj => {
                    resolve(jtyj.join(''))
                })
            })
        case "ContinueFor_BreakFor":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_ContinueFor_BreakFor(element);
            });
            break;
        case "If":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_If(element);
            });
            break;
        case "For":
            diwr_VNWM_YHLD = ZJZJ_RJSE_VNWM.map(async element => {
                return await ZJZJ_TSJQ_For(element);
            });
            break;
        default:
            throw new Error("ACUN MCVN : " + TSJQ_WU);
    }
    return new Promise((resolve, reject) => {
        Promise.all(diwr_VNWM_YHLD).then(jtyj => {
            resolve(jtyj.join(''))
        }).catch(err=>{
            console.log(err)
        })
    })
}
module.exports = ZJZJ_TSJQ;