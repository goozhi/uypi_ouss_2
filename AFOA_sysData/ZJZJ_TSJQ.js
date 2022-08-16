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
    switch (TSJQ_WU) {
        case "Str":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_Str(element);
            });
            return VNWM_YHLD.join("");
        case "Ecu":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_Ecu(element);
            });
            return VNWM_YHLD.join("");
        case "Display":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_Display(element);
            });
            return VNWM_YHLD.join("");
        case "ReadDtc":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_ReadDtc(element);
            });
            return VNWM_YHLD.join("");
        case "ClearDtc":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_ClearDtc(element);
            });
            return VNWM_YHLD.join("");
        case "SetPeriod":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_SetPeriod(element);
            });
            return VNWM_YHLD.join("");
        case "Send":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_Send(element);
            });
            return VNWM_YHLD.join("");

        case "Fire":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_Fire(element);
            });
            return VNWM_YHLD.join("");

        case "Calc":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_Calc(element);
            });
            return VNWM_YHLD.join("");
        case "Lab":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_Lab(element);
            });
            return VNWM_YHLD.join("");
        case "GotoLab":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_GotoLab(element);
            });
            return VNWM_YHLD.join("");
        case "PSW27":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_PSW27(element);
            });
            return VNWM_YHLD.join("");
        case "GotoLab":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_GotoLab(element);
            });
            return VNWM_YHLD.join("");
        case "Input":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_Input(element);
            });
            return VNWM_YHLD.join("");
        case "F":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_F(element);
            });
            return VNWM_YHLD.join("");
        case "InputBox":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_InputBox(element);
            });
            return VNWM_YHLD.join("");
        case "Act":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_Act(element);
            });
            return VNWM_YHLD.join("");
        case "Button":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_Button(element);
            });
            return VNWM_YHLD.join("");
        case "Init":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_Init(element);
            });
            return VNWM_YHLD.join("");
        case "EXIT":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_EXIT(element);
            });
            return VNWM_YHLD.join("");
        case "List":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_List(element);
            });
            return VNWM_YHLD.join("");
        case "Delayms":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_Delayms(element);
            });
            return VNWM_YHLD.join("");
        case "LJEY":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_LJEY_NINI_EYNH_LJEY(element);
            });
            return VNWM_YHLD.join("");
        case "ContinueFor_BreakFor":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_ContinueFor_BreakFor(element);
            });
            return VNWM_YHLD.join("");
        case "If":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_If(element);
            });
            return VNWM_YHLD.join("");
        case "For":
            var VNWM_YHLD = ZJZJ_RJSE_VNWM.map(element => {
                return ZJZJ_TSJQ_For(element);
            });
            return VNWM_YHLD.join("");
        default:
            throw new Error("ACUN MCVN : " + TSJQ_WU);
    }
}
module.exports = ZJZJ_TSJQ;