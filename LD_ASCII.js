function LD_ASCII(RJSE_1, FDMJGGFR_1){
    if(FDMJGGFR_1==null){
        FDMJGGFR_1=""
    }
    return Buffer.from(RJSE_1).toString('hex').replace(/(..)(?=..)/g,'$1'+FDMJGGFR_1);
}
module.exports=LD_ASCII;
