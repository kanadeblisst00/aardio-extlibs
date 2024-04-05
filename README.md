## 简介

这是我封装的一些aardio库，目前的库列表：

- goquery: 封装goquery，用于css选择器解析html
- htmlquery: 封装htmlquery，用于xpath解析html
- jsonquery: 封装jsonquery，用于解析json
- kisunny: sunny.dll的封装，用于监听本地数据包，类似mitmproxy
- tlsClient: tls-client封装，用于http请求。支持http2.0和tls指纹
- xmlquery: 封装xmlquery，用于解析xml
- kiredis: redis客户端
- pyaardio: 封装Python风格的库方法
- kilink: 创建windows软链接

#### 目录结构

- dist: 打包后的文件，可以在`extlibs.aardio`里远程下载安装
- dlg: 用于远程下载的`extlibs.aardio`
- lib: 库代码
- res: 库的使用案例

## 使用方法

先下载`dlg/extlibs.aardio`文件放到`aardio\tools`目录下，可以重命名为``5.extlibs.aardio`

接着重新打开编辑器就可以在工具栏目下看到一个`非官方扩展库`，用法和官方扩展一样(选择某项安装即可)，右键可查看使用案例。

![](http://cdn.ikanade.cn/1711437791902.png)

![](http://cdn.ikanade.cn/1711437840616.png)

#### 搭建自己的扩展库

这个仓库的代码就是搭建的全部代码。将你需要打包的库放在lib目录下，然后运行项目`main.aardio`就会将lib下的所有库打包成tar文件放在`dist\package`目录下

还会将res目录存放的案例打包成zip放到`dist\samples`下，而`dist\exlibs.json`是所有库的汇总信息，`extlibs.aardio`获取的信息就是这个文件里的

后面只需把项目里的git地址换成你自己的git地址，因为github访问慢，所以里面的地址是我自己建的镜像仓库，每隔10分钟同步一次github这个仓库。

## 常见问题

#### 如何卸载

并没有可以卸载模块的工具，需要你自己去`aardio\lib`删除相应的文件，然后删除`aardio\extensions\extlibver.table`对应的名称,这个文件就记录已经安装的模块
