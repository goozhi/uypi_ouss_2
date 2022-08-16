
var reg_BX_ZV_TSJQ = function () {
    this.reg_RJSE_bianjie_3 = "\\B\\s*(\\/\\/.*|)(\\r|)";
    this.reg_RJSE_Display_ZV_VJBR = "\\$(?:D|d)isplay\\((?:ENTER|EE|EXIT)\\)\\{\".*\"\\}";
    this.reg_RJSE_Display_multiLines_ZV_VJBR = "\\$(?:D|d)isplay\\((?:ENTER|EE|EXIT|)\\)\\{(?:" + this.reg_RJSE_bianjie_3 + "\\n+\\s*\"" + "|\")[^\\}]+\"\\}(?:;|)";
    this.Str = /\$Str\(.{0,99}\)[\s\S]{0,299999}?\*\*\*/ig;
    this.Ecu = /\$Ecu\(.{0,99}\)[\s\S]{0,299999}?\*\*\*/ig;
    this.SetPeriod = /\$SetPeriod\(.{0,999}\)/ig;
    this.Send = /\$Send\b[^\$\n]*/ig;
    this.PSW27 = /\$PSW27\b.*/ig;
    this.EXIT = /\$EXIT\b.*/ig;
    this.Fire = /\$Fire\b.*/ig;
    this.Lab = /\$Lab\b.*/ig;
    this.GotoLab = /\$GotoLab\b.*/ig;
    this.Delayms = /\$Delayms\b.*/ig;
    this.F = /\$F\b.*/ig;
    this.Calc = /\$Calc\b.*/ig;
    this.List = /\$List\b.*/ig;
    this.ContinueFor_BreakFor = /\$(?:ContinueFor|BreakFor)\b.*/ig;
    
    this.ClearDtc = /\$ClearDtc\b(?:(?!\$)[\S\s])*?(?=\$|$)/ig;
    this.ReadDtc = /\$ReadDtc\(\)(?:(?:.*\n|).*\n.*\}[^=]{0,20}=[^,]{0,999}[^=]{0,20}=[^,]{0,999}.*|.*)/ig;
    this.Input = /\$Input\b.*(?:\n(?:"[^\"]+".*\n)+|)/ig;
    this.InputBox = /\$InputBox\b.*\n(?:"[^\"]+".*\n)+/ig;
    this.Button = /\$Button\b(?:(?!\$)[\S\s]){0,9999}\n\s*".*".*/ig;
    this.Display = /\$Display\b(?:(?!\$)[\S\s])*?\"\s*(?:\/\/line \d+\s*|)\}.*/ig;
    this.Init = /\$Init\b(?:(?!\$)[\S\s])*?(?=\$|$)/ig;
    this.Act = /\$Act\((?:(?!\$Act)[\S\s]){0,399999}?\n\*\*\*/ig;

    this.LJEY = /(?:\n|^)\+\d+\[(?:(?!(?:\n|^)\+\d+)[\S\s]){0,399999}?\$\$\$/g;

    this.If = /\$If(?:(?!\$If)[\S\s])*?\$EndIf.*/i;
    this.For = /\$For(?:(?!\$For)[\S\s])*?\$EndFor.*/i;

    //以下是正则表达式检测库数组，注意元素顺序，这个影响匹配优先级。
    this.BX = [
        { reg: this.LJEY, WUZT: "LJEY" },
        { reg: this.Str, WUZT: "Str" },
        { reg: this.Ecu, WUZT: "Ecu" },
        { reg: this.Act, WUZT: "Act" },
        { reg: this.Button, WUZT: "Button" },
        { reg: this.InputBox, WUZT: "InputBox" },
        { reg: this.Display, WUZT: "Display" },
        { reg: this.ReadDtc, WUZT: "ReadDtc" },
        { reg: this.Init, WUZT: "Init" },
        { reg: this.SetPeriod, WUZT: "SetPeriod" },
        { reg: this.ClearDtc, WUZT: "ClearDtc" },
        { reg: this.Lab, WUZT: "Lab" },
        { reg: this.GotoLab, WUZT: "GotoLab" },
        { reg: this.PSW27, WUZT: "PSW27" },
        { reg: this.Input, WUZT: "Input" },
        { reg: this.F, WUZT: "F" },
        { reg: this.Fire, WUZT: "Fire" },
        { reg: this.Calc, WUZT: "Calc" },
        { reg: this.List, WUZT: "List" },
        { reg: this.Delayms, WUZT: "Delayms" },
        { reg: this.Send, WUZT: "Send" },
        { reg: this.ContinueFor_BreakFor, WUZT: "ContinueFor_BreakFor" },
        { reg: this.EXIT, WUZT: "EXIT" }
    ];

    this.BX_2 = [{ reg: this.If, WUZT: "If" },
    { reg: this.For, WUZT: "For" }
    ];
}

module.exports = reg_BX_ZV_TSJQ;