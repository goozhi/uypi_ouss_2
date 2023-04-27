# 工程文档

## JavaScript

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

## 谢谢浏览