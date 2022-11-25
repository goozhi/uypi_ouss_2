var zq_ld=require('./zq_ld')
function gl_qi_Str2ID(rj_eynh_Stri2ID_kp){
    rj1=rj_eynh_Stri2ID_kp;
    rj1=zq_ld(rj1);
    rj1=rj1.replace(/(?:\n|)"\s*$/,"");
    rj1=rj1.replace(/Str2ID\(\w+\)(?!,)/,"\),");
    rj1=rj1.replace(/\u2103/g,"degree C")
    rj1=rj1.replace(/\u00b0/g,"deg")
    
    rj1=rj1.replace(/\n+$/,"").replace(/\n/,"\\n");
    rj1=rj1.replace(/([^;\s])\s*$/,"$1;")
    return rj1;
}
module.exports=gl_qi_Str2ID;