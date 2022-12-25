

const {marked} = require('marked');
const fs=require('fs');
const VR_AFOA_RJOK = require('./VR_AFOA_RJOK');

function WLYC_VR_VKJP(req,res){
    var rj_kp=fs.readFileSync('./views/VR_VKJP.md').toString()
    var rj_vkjp=rj_kp.replace(/([\S\s]*?\n\s*======+)[\s\S]*$/,"$1")
    var rj_1=rj_vkjp+"\n"+VR_AFOA_RJOK(null,"sopc",'yhrj')    
    var html_1 = marked(rj_1);
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    });
    res.write(html_1);
    res.end();

}
module.exports=WLYC_VR_VKJP;