function Peng_TZFS(RJSE_KP){
    var RJSE_1=RJSE_KP;
    RJSE_1=RJSE_1.replace(/\r/g,"")
    RJSE_1=RJSE_1.replace(/((?:\n|^))[^\n\S]+/g,"$1").replace(/\n\n+(?=\$\$\$)/g,"\n").replace(/(.\n)(?=\+)/g,"$1\n").replace(/(\$Str().*\n)(\n+)/g,"$1").replace(/((?:SPEC|\+)\)\n)\n+/ig,"$1").replace(/(\u0024\u0024\n)([^\n])/g,"$1\n$2")
    RJSE_1=RJSE_1.replace(/\s*?\n\s*?\n\s*?\n+/g,"\n\n")
    return RJSE_1;
}
module.exports=Peng_TZFS;