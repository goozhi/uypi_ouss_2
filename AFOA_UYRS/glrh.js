const vkrf_uyrs = require("./vkrf_uyrs")

function main() {
    new Promise((resolve, reject) => {
        Promise.all([vkrf_uyrs({ reject, nikc_uyrs: 'D:/XYZD/project_test' })]).then(jtyj => {
            console.log(jtyj[0])
        })
    })
}
main()