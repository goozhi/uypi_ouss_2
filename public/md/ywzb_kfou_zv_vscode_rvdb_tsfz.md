# VSCODE使用指南

## 多光标、列编辑

vscode列编辑是在选择的每行的同一列进行统一编辑，插入相同的字符。可提高整体编辑效率。列编辑的实现方式有多种，都有一个共同的特点，就是调出多个光标。你可根据实际情况选择合适的方式调出多光标。
* ![ywzb_kfou_zv_vscode_rvdb_tsfz.png](/img/ywzb_kfou_zv_vscode_rvdb_tsfz.png)
### 直接列出光标
你可以使用 `shift + ctrl + alt + 上下方向键` 直接列出光标。

### 在被选中的字符串末尾调出光标
你可以使用 `Shift + Alt + I ` 在所有被选中的字符串末尾调出光标。

### 选中搜索的所有结果
在你使用搜索框搜索后，如果有多个结果，若使用`ALT + ENTER`，则选中所有的搜索结果，然后移动左右方向键可调出光标。

## 正则表达式搜索
`ctrl + f`后，可调出搜索框，`alt + r`可开启正则表达式搜索。有关正则表达式的介绍和教程请参见[菜鸟教程](https://www.runoob.com/js/js-obj-regexp.html)
* ![ywzb_kfou_zv_vscode_rvdb_tsfz_2.png](/img/ywzb_kfou_zv_vscode_rvdb_tsfz_2.png)

## 文件夹内设置默认文件打开编码
vscode默认打开文件的编码是`utf8`。vscode可以在默认文件夹内设置默认文件打开的编码，如，你想在‘D:/test/’的目录下，指定文件默认打开的编码为`GB2312`，则你需要在该目录下创建名为`.vscode`的文件夹，然后在该文件夹内创建名为`settings.json`，文件里面编写`{"files.encoding": "GB2312"}`内容，保存。这样vscode在打开test目录下的文件时就会以`GB2312`打开。

## 设置语法关联
vscode支持用户自定义特定文件使用特定语法，并高亮代码。如果你想要扩展名为txt的文件拥有java代码高亮，则仅需要在settings中的associations添加`"*.txt":"java"`就可以了。
* ![ywzb_kfou_zv_vscode_ebpj_gnqg](/img/ywzb_kfou_zv_vscode_ebpj_gnqg.png)

## 谢谢浏览