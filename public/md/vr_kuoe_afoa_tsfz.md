# VR特殊功能指南
![logo](/img/logo2.png)

VR特殊功能的流程控制，以中文作为指令语言、采用markdown语法，可读性强，编写速度不逊于直接采用彭语言进行编辑。markdown语言简单优雅，在各大编程软件中（如vscode）都可以进行自动渲染。

## 指令解析

### 步骤块

一个'## '到下一个‘## ’或者下一个标签止，为一个步骤块，建立VR流程控制必须至少有一个步骤块，否则报错。‘## 行代码’是一个步骤块，表示里面执行的功能指令翻译成彭语言都是一行完成的。如下所示

```js
## 行代码
* 发送10 01
* 打印请稍候
* 等待5000
```

‘## ’加‘选择框’或者‘输入框’，表示要创建彭语言中的Button或者InputBox指令。其中的数据流项目可以用一对中文点号`···`或一对反引号'```'括起来，表示里面的是数据流项目。这里的中文点号和反引号在键盘上是同一个按键，当你前换成中文时，按下它就是点号，切换成英文时，按下它就是反引号。
```js
    ## 选择框
    ···
    当前VIN为{22f190}09 4-20
    ···
    * 写入 2
    * 退出 exit
```


VR语言流程控制中的'*'加空格表示要启用一个指令，后面加中文关键词就能启用相应的彭语言指令了。如，你要打印一行文字，直接编写下面这段代码。

```js
## 行代码
* 打印你想要打印的文字
```

这里的‘打印’就是关键词，它在VR解释成彭语言后会被删掉。最后VR输出的就是‘$Display(){"你想要打印的文字"}’。一般‘* ’后面跟的都是中文关键词，全程使用中文来表述更具有可读性，毕竟你的大脑不用在英文和中文之间进行切换。目前VR特殊功能流程控制支持的‘* ’功能有以下几个。

```js
## 行代码

* 打印请稍等
* 发送10 03
* 帧数组复位1到100为0
* 过密码23
* 打印正在发送中，请稍等
* 发送2e f1 90 f[1][1]16
* 注意已发送完成，可返回查看结果
* 跳转到1
* 跳转1
* 发送33 33 33 33回应帧传入帧数组1
* 等待5000
```

以下是控制框示例
```js
# 动作测试
## 控制框
* 打开 22 22 22 22
* 关闭 22 22 22 23
```

在所有的对话框中，* +文字均表示要启用一个按钮，实际上在解释这个指令的时候，会先把在文字前面加上“点击”两个字作为中文关键词，然后传给解释行代码步骤块的函数进行解释。所以用"* "作为开头实际上就是要被列为行代码。

以下是输入框示例

```js
## 输入框
长度为17 类型为0a 传入帧数组1
* 确定 1
* 退出 exit
```

以下是条件判断示例
```JS
## 若
若帧数组1的元素1的值为1
* 注意值为1
* 跳转到1

若为2
* 注意值为2
* 跳转到2

若为其他
* 跳转到exit
```

### 标签
跳转标签用 星号 加 文字 加 星号 表示。VR在解释标签时会自动在前面加上"L_"，如以下代码等同于$lab(L_1)。

```JS
*1*
```

作者目前未在开发特殊功能，开发数据流去了，所以也就开发了这几个。请见谅。

## 解释成彭语言
使用上面介绍的语言对特殊功能进行编辑后，可以将其复制到VR语言解释窗口，输入0={{}}，并在花括号中间粘贴，点击提交即可转为彭语言。你可以结合VR菜单指令，顺便生成一个菜单：1=特殊功能菜单{{1=子特殊功能菜单{{0={{粘贴你的VR特殊功能代码}}}}}}。

## 谢谢浏览