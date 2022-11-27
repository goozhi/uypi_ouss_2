在项目目录下创建名为public的子目录（因为这个目录中的所有文件都会直接对外开放，所以我们称这个目录为public）。接下来，你应该把static中间件加在所有路由之前：
app.use(express.static(__dirname + '/public'));
static中间件相当于给你想要发送的所有静态文件创建了一个路由，渲染文件并发送给客户端。接下来我们在public下面创建一个子目录img，并把logo.png文件放在其中。
现在我们可以直接指向/img/logo.png（注意：路径中没有public，这个目录对客户端来说是隐形的），static中间件会返回这个文件，并正确设定内容类型。接下来我们修改一下布局文件，以便让我们的logo出现在所有页面上：
<body>
<header>
<img src="/img/logo.png" alt="Meadowlark Travel Logo">
</header>