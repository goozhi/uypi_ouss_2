# 工程文档

## 布局和数据

我使用了嵌套对象对菜单布局和所有电子控制单元的资料进行描述。并使用了公共文件夹用于共享版本信息、读码清码、数据流等文件，提高了文件的利用率。

彭语言以电子控制单元作为节点，所以在嵌套对象中也需要用某个特定属性来表明某个对象就是电子控制单元，而我的程序就是通过递归扫描子对象是否含有**coms**属性来判断该对象是否是电子控制单元的。然后再递归扫描**type**属性来识别版本信息、数据流或者其他。


## 模板的创建

实际上任何人都可以创建属于自己的js模板。只要最后返回一个可被prj指令正确解析的对象就行。你也可以使用prj=init对新的项目进行初始化，这会使用默认模板。当然，你也可以使用prj=build=obj来输出一个嵌套对象，看看prj可用对象到底是什么样子的，可借此二次开发一个新的模板。

## 调试

使用prj=build可以将项目写进`云电动力`的Vehicle目录里，方便调试。若调试没问题，则使用prj=build=txt来输出txt文件。

## js可用属性

下面将讲述一些js文件中可用的属性。

### rela
```js
{
    coms: [{ res: 0XFD00, rela: -0x100}]
}
```
**rela** 可以告诉程序相对于已经声明的请求或应答ID，另一个请求或应答ID的值。

### params

```js
{
    type:'strm', use:'strm1.v', params:['sortcandata=11']
}
```
**params** 可以告诉程序数据流指令$Str的参数。

### codeid & codefrm
```js
{
    type:'func', use:'readcode_1.v', codeid:8, codefrm:'190209'
}
```

**codeid** 向程序指定故障码库ID。

**codefrm** 向程序指定用于请求读取故障码的帧。

### send
```js
{
    type:'func', use:'func_1.peng', send:{'2e f0 10':'ff 00 00 ff'}
}
```
**send** 告诉程序在引入了peng文件中的内容后，需要修改send指令的参数。使用该属性能够让若干个特殊功能灵活调用同一个peng文件。

### psw27
```js
{
    特殊功能1:{ type: 'func', use: 'func_2.peng', psw27: { 1: 'todo' } },
    特殊功能2:{ type: 'func', use: 'func_2.peng', psw27: { 1: 34 } }
}
```

**psw27** 告诉程序在引入了peng文件中的内容后，需要修改psw27指令的参数，`psw27: { 1: 34 }`表示修改第一个psw27指令的参数为34，`psw27: { 1: 'todo' } }`表示第一个psw27参数未知，待处理，用于标记。

### frms
```js
{
    左前轮胎压传感器: {
        type: 'func', use: 'func_3.peng', frms: { '2e 03 02': "2e 03 02 00 00 00 00" }
    },
    右前轮胎压传感器: {
        type: 'func', use: 'func_3.peng', frms: { '2e 03 02': "2e 03 03 00 00 00 00" }
    },
    左后轮胎压传感器: {
        type: 'func', use: 'func_3.peng', frms: { '2e 03 02': "2e 03 04 00 00 00 00" }
    },
    右后轮胎压传感器: {
        type: 'func', use: 'func_3.peng', frms: { '2e 03 02': "2e 03 05 00 00 00 00" }
    },
}
```
**frms** 告诉程序在引入了peng文件中的内容后，需要修改指定的帧数据。`frms: { '2e 03 02': "2e 03 05 00 00 00 00" }`表示将2e 03 02那一帧的数据全部替换为`2e 03 05 00 00 00 00`。使用该属性可以修改任何用花括号括起来的帧数据。

### action
```js
{
    右后常开阀: { type: 'func', use: 'action_1.peng', action: { '通电2s': "2f 5b 05 03", '断电': '2f 5b 05 00' } },
    左前常开阀: { type: 'func', use: 'action_1.peng', action: { '通电2s': "2f 5b 06 03", '断电': '2f 5b 06 00' } },
    右前常开阀: { type: 'func', use: 'action_1.peng', action: { '通电2s': "2f 5b 07 03", '断电': '2f 5b 07 00' } },
}
```

**action** 告诉程序在引入了peng文件中的内容后，需要修改指定的动作测试的帧数据。这个属性能提高文件的利用率。

### coverbtn

```js
{
    type:'func',
    use:'action_1.peng',
    coverbtn:{
        禁止标定:'2e 39 09 00',
        使能标定:'2e 39 09 01',
    }
}
```

**coverbtn** 告诉程序在引入了peng文件中的内容后，需要删除第一个按钮指令的按钮参数，然后用指定的按钮名和帧数据作为当前按钮参数。这个属性能提高文件的利用率。

## project.json

### exePath
```json
{
    "exePath":"D:/DIAGBYZ4/NER/LKD/LKD"
}
```

上面属性用于用户自定义加密文件的输出路径。该属性目前仅能用于project.json中统一声明。

## 谢谢浏览