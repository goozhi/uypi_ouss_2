# 工作助手使用指南

## 工作助手入门

* [工作助手入门](http://localhost:3009/uypi_ouss_zvow_rjok_ld_html)

## 轻松使用

使用[VR语言](http://localhost:3009/VR_VKJP)可以帮助你直接输入命令调用home页列出的功能或者执行其他强大的功能。


### VR语言预览
VR语言的一大特色是在彭语言中用于开发sysData的一系列指令的基础上，开发了另一种方便用户即时编写的语言。它可以帮助你快速构建数据流项目、进行特殊功能的流程控制的开发。在数据流项目构建方面，VR尽可能地帮助用户提高在即时编写方面的效率，但并未考虑到代码的可读性。但在特殊功能方面，VR借鉴markdown，让用户以简洁优雅的语法构建流程控制。
* VR代码
```js

menu=数据流{{
    str={{
        车速{220001}=4
        SOC{220002}=5 %
        温度{220003}=6 1 -40 摄氏度
    }}
}}

menu=版本信息{{
    ecu={{
        VIN{22F190}16 4-19
        生产日期{22f197}88 5年6月7日
        配置信息{22f101}3f 4 元素1 元素2 元素3
    }}
}}
```

* 执行结果

```js

+1[数据流](Spec)
$Str();
*"车速",{22 00 01},cf,d4*(1)+(0),.0,;// =4
*"SOC", {22 00 02},cf,d5*(1)+(0),.0,%;// =5 %
*"温度",{22 00 03},cf,d6*(1)+(-40),.0,℃;// =6 1 -40 ℃
***
$$$

+1[版本信息](Spec)
$Ecu();
*"VIN",     {22 F1 90},16,d4-d19;
*"生产日期",{22 f1 97},bb,d5,"年",d6,"月",d7,"日";
*"配置信息",{22 f1 01},3f,d4,'00:元素1','01:元素2','02:元素3','oth:未定义';
***
$$$
```

以下是VR特殊功能的流程控制示例，以中文作为指令语言、采用markdown语法。markdown语言简单优雅，在各大编程软件中（如vscode）都可以进行自动渲染。
* ![kuoe_afoa_klch.png](/img/kuoe_afoa_klch.png)

上面这段代码，等同于下面用彭语言编写的这段代码。

```js
# VIN写入
$Lab(L_1)
$Display(){"请稍等"};
$Send(){10 03};
$F(1,100,0);
$PSW27(23);

$Button();

&"当前VIN为",{22 f1 90},0a,d4-d20;
&&&
"写入"L_2;
"退出"L_exit;
$Lab(L_2)
$Display(){"请输入17位VIN"};

$InputBox(0a,len=17,f[1])
"确定"L_3;
"退出"L_exit;
$Lab(L_3)
$Display(){"正在发送中，请稍等"};
$Send(){2e f1 90 f[1][1]16};
$Display(enter){"已发送完成，可返回查看结果"};
$GotoLab(L_1);

$Lab(L_exit)
```





### 以下是友情帮助

* [快速获取发码器上的帧号](http://localhost:3009/ywzb_kfou_zv_nwvt_vo_vy_es_rjok_ld_html)

* [浏览器使用技巧](http://localhost:3009/riri_cl_rvdb_wtjn_rjok_ld_html)

* [使用VR又快又好构建数据流项目](http://localhost:3009/ywzb_kfou_zv_vr_vnwy_tu_ngnc_rjok_ld_html)

* [VSCODE使用指南](http://localhost:3009/ywzb_kfou_zv_vscode_rvdb_tsfz_rjok_ld_html)

## 以下是友情推荐

* 世界上最好用的编程软件[vscode](https://code.visualstudio.com/)
* 国内最好的技术交流社区[CSDN](https://www.csdn.net/)
* 国内最良心的免费教学网站[菜鸟教程](https://www.runoob.com/)

## 谢谢浏览