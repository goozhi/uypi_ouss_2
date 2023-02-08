# 使用VR又快又好构建数据流项目

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
