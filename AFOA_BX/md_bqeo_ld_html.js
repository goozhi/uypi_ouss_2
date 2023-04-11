const md_RJOK_html_fs = require('./md_RJOK_html_fs');

function md_bqeo_ld_html(BQEO_1) {
    var rj_style = `
    code {
        padding: 4px;
        margin: 0 auto;
        width: auto;
        font-size: larger;
        height: auto;
      }
      
      .attribute{
        color: #9CDCFE;
      }
      
      .code-area {
        padding: 4px;
        margin: 0 auto;
        width: auto;
        font-size: smaller;
        height: auto;
        min-height: 96px;
        background: #1E1E1E;
        border: 1px solid #ccc;
        color: #f0f0f2;
        display: inline-block;
      }
      
      .btn_VR {
        width: 200px;
        color: #777;
      }
      
      .form_vr {
        width: 100%;
      }
      
      .code-area-3 {
        padding: 4px;
        margin: 0 auto;
        width: auto;
        height: auto;
        min-height: 96px;
        background: #000;
        border: 1px solid #ccc;
        color: #fff;
        /* white-space: nowrap; */
        display: inline-block;
      }
      
      .code-area-2:hover {
        border-radius: 10px;
        /* font-size: larger; */
      }
      
      .code-area-2:active {
        border-radius: 5px;
      }
      
      .code-area-2 {
        padding: 4px;
        margin: 0 auto;
        width: auto;
        height: auto;
        min-height: 96px;
        background: #fff;
        border: 1px solid #ccc;
        color: #000;
        white-space: nowrap;
        display: inline-block;
      }
      
      .code-area-2::selection {
        color: black;
        background-color: rgba(241, 244, 80, 0.5);
      }
      
      
      .keywords {
        color: #c678dd;
      }
      
      .mark1 {
        background-color: #eeeff0;
        border: 1px solid #ccc;
      }
      
      .identifier {
        color: #9CDCFE;
      }
      
      .variable {
        color: #61aeee;
      }
      
      .white-space {
        display: inline-block;
        width: .5em;
      }
      
      .regexp {
        color: #D16966;
      }
      
      .frame {
        color: #d19a66;
      }
      
      .punctuator {
        color: #fff;
      }
      
      .Constructors {
        color: #98c379;
      }
      
      .keyword {
        color: #DCDCAA
      }
      
      .gnfo_zt_const {
        color: #358CD6
      }
      
      .gtaw_diwr {
        color: #4FC1FF
      }
      
      .gtaw_ft_diwr {
        color: #9CDCFE
      }
      
      .string {
        color: #CE9178
      }
      
      .ar_siih_tb {
        color: #1B9FF1
      }
      
      .comment {
        color: #6A8A35
      }
      
      .function {
        color: #DCDCAA
      }
      
      .ar_siih_hj {
        color: #F1D710
      }
      
      .number {
        color: #98c379;
      }    `
    var RJSE_1 = `<head><meta charset="utf-8"><style>${rj_style}</style></head>${md_RJOK_html_fs(BQEO_1)}`
    return RJSE_1
}
module.exports = md_bqeo_ld_html