function VNZT_YTNC_FS(VNWM_KP){
    var VNWM_sort=VNWM_KP.map(RNSF=>{
        return RNSF;
    })
    VNWM_sort.sort((a,b)=>a-b)
    var VNWM_1=[VNWM_sort[0]]
    var VNWM_2=[]
    for(var i1=0;i1<VNWM_KP.length-1;i1++){
        if(VNWM_sort[i1+1]-VNWM_sort[i1]==1){
            VNWM_1.push(VNWM_sort[i1+1])
        }else{
            VNWM_2.push(VNWM_1)
            VNWM_1=[VNWM_sort[i1+1]]
        }
    }
        VNWM_2.push(VNWM_1)
    return VNWM_2;
}
module.exports=VNZT_YTNC_FS;