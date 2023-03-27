const fs = require('fs')
const path = require('path')
function bat_vkrf(diwr_neig_kp = { "品牌标识": "TEST" }) {
    var nikc_win = path.join('D:/WIN',diwr_neig_kp["品牌标识"])
    var nikc_YDDL = path.join(diwr_neig_kp.nikc_YDDL)
    if (!fs.existsSync(nikc_win)) {
        fs.mkdirSync(nikc_win, { recursive: true })
    }
    var rj_bat = `
@rem sdn buk ljn eyk -P jum kll PC aho sok SCAN vyl csm
D:\\VpadExe\\NODEADDR MENU.DB -P

@rem sdn buk ldk yik xbk sto
D:\\VpadExe\\NODEADDR TIPS.DB

@rem sdn buk dwk bak pzl rek bxk
D:\\VpadExe\\NODEADDR DIAG.DB

@rem sdn buk bwn crm vyn bxk
D:\\VpadExe\\DTC DTC.DB


@rem nwl vtk@yyn hak cak jum qkk ypk nqk yrn dsk
D:\\VpadExe\\StartA DTC.DB


@rem yek ysl ypk wvk
D:\\VpadExe\\EnZY MENU.DB zl 1
D:\\VpadExe\\EnZY TIPS.DB zl 1
D:\\VpadExe\\EnZY DIAG.DB zl 1
D:\\VpadExe\\EnZY DTC.DB zl 1

@rem vyk ysl ypk wvk llk nek igk sum lpl
D:\\VpadExe\\saveComId.exe
@rem vyk ysl ypk wvk    0 vml dvk,1 cek oan kpk,2 lgn dvk,3 nek avk
D:\\VpadExe\\AES MENU.DB 1
D:\\VpadExe\\AES TIPS.DB 1
D:\\VpadExe\\AES DIAG.DB 1
D:\\VpadExe\\AES DTC.DB 1

copy MENU.DBE ${nikc_YDDL}
copy TIPS.DBE ${nikc_YDDL}
copy DIAG.DBE ${nikc_YDDL}
copy DTC.DBE  ${nikc_YDDL}
exit
`
    return rj_bat
}
module.exports = bat_vkrf