const vkrf_uyrs = require("./AFOA_UYRS/vkrf_uyrs")

function main() {
    new Promise((resolve, reject) => {
        Promise.all([vkrf_uyrs({ reject, nikc_uyrs: 'D:/XYZD/project_test' })]).then(jtyj => {
            console.log(jtyj[0])
        })
    }).catch(err=>{
        reject(err)
    })
}
main()