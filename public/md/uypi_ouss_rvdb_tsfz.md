# 工作助手使用指南

工作助手需要运行在 **node** 环境。
* [获取最新nodejs](https://nodejs.org/)

如果你下载的是[最新版工作助手](https://drive.weixin.qq.com/s?k=AFkAbAfYAAkQWfpA6V)，那么解压后的目录有以下这两个东西

* UYPI_OUSS
* 启动工作助手.bat

它们需要放在同一个目录下，双击bat文件就能启动服务器。会弹出一个命令符窗口（需要保持这个窗口一直运行），并调用电脑浏览器进入工作助手的网页的首页。

* ![目录示例](/img/drbz_nikc.png)


* ![cmd_lplp_drbz](./img/cmd_lplp_drbz.png)


* ![工作助手首页](/img/uypi_ouss_nmhy.png)


## 使用工作助手

在首页里你可以看到许多可以点击的按键，点击这些按键就可以打开相应的网页。如果你点击了某个按键，则进入相应的界面，这些界面一般有:

* **功能主题** 该主题对应当前界面的功能。
* **输入窗口** 输入窗口里需要输入执行当前功能所需的一些参数，比如: 文件路径、 文件编码等
* **提交按钮** 点击提交，就可以执行功能。
* **输出窗口** 输出窗口里显示执行功能后的输出信息。

* ![工作助手非首页界面](/img/uypi_ouss_ft_nmhy.png)


一般，这些界面都能够做到：

* 自动复制输出结果
* 保留上次输入信息 

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

#### 快速获取发码帧号
* ![vo_vy_cln](/img/vo_vy_cln.png)

第一步，对发码拍照并用微信提取文字，全选复制后，粘贴到vscode。你会发现是这样
* ![es_tb_rj_ldrg_ud_dk_hqvh](/img/es_tb_rj_ldrg_ud_dk_hqvh.png)

第二步，Ctrl+F查找 ‘03 22’. 然后按下Alt+enter，你会发现全选了03 22
* ![es_tb_rj_ldrg_ud_zjyj_es](/img/es_tb_rj_ldrg_ud_zjyj_es.png)

第三步，移动方向键，选择22开头的帧号，按下ctrl+c，复制这些帧号。

第四步，Ctrl+N新建临时文件，按下Ctrl+V粘贴刚才复制的，你会发现已经完美复制了帧号
* ![es_tb_rj_ldrg_ud_ahpm_es](/img/es_tb_rj_ldrg_ud_ahpm_es.png)



#### 浏览器使用技巧
浏览器的CTRL+F可以在当前页面进行文字查找，按F3就能跳转到下一个。如果你正在浏览文档，那么此方法可以帮助你定位到你想要的内容。
* ![riri_cln_zjyj_klch](/img/riri_cln_zjyj_klch.png)

#### 使用VR又快又好构建数据流项目

第一步，构建菜单名布局。
* ![tbnc_ljey_wu](/img/tbnc_ljey_wu.png)

第二步，统一构建VR数据流指令
* ![tbnc_vnwy_tu_tsjq](/img/tbnc_vnwy_tu_tsjq.png)

第三步，CTRL+N 新建临时文件，构建VR式数据流项目
* ![tbnc_vnwy_tu_nini](/img/tbnc_vnwy_tu_nini.png)

第四步，将数据流项目与设备进行对比校验。这里使用VR进行辅助对比。全选数据流项目，到VR指令解释窗口输入99=9{{ }}。粘贴数据流项目。
* ![tbnc_vnwy_tu_nini_zv_vr_dizc](/img/tbnc_vnwy_tu_nini_zv_vr_dizc.png)

第五步，点击提交，如果语法正确，则输出类似以下内容（该内容自动复制），否则输出错误提示。
* ![tbnc_vnwy_tu_nini_zv_dizc](/img/tbnc_vnwy_tu_nini_zv_dizc.png)

第六步，到vscode，CTRL+N新建临时文件，CTRL+V粘贴内容，你会发现成了这副模样
* ![tbnc_vnwy_tu_nini_zv_vscode_zjhq_dizc](/img/tbnc_vnwy_tu_nini_zv_vscode_zjhq_dizc.png)

第七步，根据内容提示，在发码上调出相应的值，看一下设备反应的值跟对比报告一不一样。比如这里的第一个项目的d4等于0xff时(需要控制其他字节为0)，设备是不是反应255，如果不是，则证明该条项目的算法错误，需要及时纠正。

第八步，校验没问题之后，不要急着转为彭语言，先把数据流项目复制到一开始创建的文件中。如下所示
* ![tbnc_vnwy_tu_nini_zv_sdbc_da_ye_nh](/img/tbnc_vnwy_tu_nini_zv_sdbc_da_ye_nh.png)

第九步，依次添加-对比-粘贴数据流项目
* ![tbnc_vnwy_tu_nini_zv_sdbc_sopc](/img/tbnc_vnwy_tu_nini_zv_sdbc_sopc.png)

然后全部数据流项目弄完后，CTRL+N新建临时文件，新建母菜单
* ![tbnc_vnwy_tu_nini_zv_tbnc_1_ljey](/img/tbnc_vnwy_tu_nini_zv_tbnc_1_ljey.png)

输入母菜单
* ![tbnc_vnwy_tu_nini_zv_vdzv_sopc_ljey](/img/tbnc_vnwy_tu_nini_zv_vdzv_sopc_ljey.png)

第十步，CTRL+A全选Ctrl+C复制，然后到VR解释窗口粘贴
* ![tbnc_vnwy_tu_nini_zv_vr_brtz_fs](/img/tbnc_vnwy_tu_nini_zv_vr_brtz_fs.png)

第十一步，点击提交，获取输出。一切完美。
* ![tbnc_vnwy_tu_nini_zv_vr_brtz_fs_jtyj](/img/tbnc_vnwy_tu_nini_zv_vr_brtz_fs_jtyj.png)

## 以下是友情推荐

* 世界上最好用的编程软件[vscode](https://code.visualstudio.com/)
* 国内最好的技术交流社区[CSDN](https://www.csdn.net/)
* 国内最良心的免费教学网站[菜鸟教程](https://www.runoob.com/)

## 谢谢浏览