
var reg_BX_ZV_TSJQ = function () {
    this.reg_RJSE_bianjie_3 = "\\B\\s*(\\/\\/.*|)(\\r|)";
    this.reg_RJSE_Display_ZV_VJBR = "\\$(?:D|d)isplay\\((?:ENTER|EE|EXIT)\\)\\{\".*\"\\}";
    this.reg_RJSE_Display_multiLines_ZV_VJBR = "\\$(?:D|d)isplay\\((?:ENTER|EE|EXIT|)\\)\\{(?:" + this.reg_RJSE_bianjie_3 + "\\n+\\s*\"" + "|\")[^\\}]+\"\\}(?:;|)";
    this.Str = /\$Str\(.{0,99}\)[\s\S]{0,299999}?\*\*\*/ig;
    this.Ecu = /\$Ecu\(.{0,99}\)[\s\S]{0,299999}?\*\*\*/ig;
    this.SetPeriod = /\$SetPeriod\(.{0,999}\)/ig;
    this.ClearDtc = /\$ClearDtc\(.{0,999}\)[\S\s]{0,99}?\{[^\}]{0,999}?\}(?:;|)/ig;
    this.Send = /\$Send\(.*/ig;
    this.PSW27 = /\$PSW27\(.*/ig;
    this.Input = /\$Input\(.*/ig;
    this.EXIT = /\$EXIT\(.*/ig;
    this.Lab = /\$Lab\(.*/ig;
    this.GotoLab = /\$GotoLab\(.*/ig;
    this.Delayms = /\$Delayms\(.*/ig;
    this.F = /\$F\(.*/ig;
    this.ContinueFor_BreakFor = /\$(?:ContinueFor|BreakFor)\(.*/ig;
    
    this.ReadDtc = /\$ReadDtc\(\)(?:(?:.*\n|).*\n.*\}[^=]{0,20}=[^,]{0,999}[^=]{0,20}=[^,]{0,999}.*|.*)/ig;
    this.InputBox = /\$InputBox\(.*\n(?:"[^\"]+".*\n)+/ig;
    this.Button = /\$Button\(.*(?:(?:\n&.*)+|)\n(?:"[^\"]+".*\n)+/ig;
    this.Display = /\$Display(?:(?!\$)[\S\s])*?\}.*/ig;
    this.Act = /\$Act\([\S\s]*?\n\$\$\$.*\n\*\*\*/ig;


    this.If = /\$If(?:(?!\$If)[\S\s])*?\$EndIf.*/i;
    this.For = /\$For(?:(?!\$For)[\S\s])*?\$EndFor.*/i;

    //以下是正则表达式检测库数组，注意元素顺序，这个影响匹配优先级。
    this.BX = [
        { reg: this.Display, WUZT: "Display" },
        { reg: this.SetPeriod, WUZT: "SetPeriod" },
        { reg: this.Ecu, WUZT: "Ecu" },
        { reg: this.ReadDtc, WUZT: "ReadDtc" },
        { reg: this.ClearDtc, WUZT: "ClearDtc" },
        { reg: this.Str, WUZT: "Str" },
        { reg: this.Lab, WUZT: "Lab" },
        { reg: this.GotoLab, WUZT: "GotoLab" },
        { reg: this.PSW27, WUZT: "PSW27" },
        { reg: this.Input, WUZT: "Input" },
        { reg: this.F, WUZT: "F" },
        { reg: this.Delayms, WUZT: "Delayms" },
        { reg: this.Send, WUZT: "Send" },
        { reg: this.ContinueFor_BreakFor, WUZT: "ContinueFor_BreakFor" },
        { reg: this.EXIT, WUZT: "EXIT" },
        { reg: this.InputBox, WUZT: "InputBox" },
        { reg: this.Button, WUZT: "Button" },
        { reg: this.Act, WUZT: "Act" }
    ];

    this.BX_2 = [{ reg: this.If, WUZT: "If" },
    { reg: this.For, WUZT: "For" }
    ];
}

module.exports = reg_BX_ZV_TSJQ;