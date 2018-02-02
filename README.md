# parcel-demo

尝试使用parcel打包react项目

* 2018-2-2 增加分页面打包功能
* 不灵活的配置：零配置的 Parcel 关闭了很多配置项，在一些需要的配置的场景下无法改变。例如：
```javascript
无法控制输出文件名的 Hash 值和名称；
无法控制构建输出目录结构；
无法映射路径以缩短导入语句；
HTTP 开发服务器不支持 HistoryApi ；
```
* 缺点
```javascript
不支持 SourceMap ：在开发模式下，Parcel 也不会输出 SourceMap，目前只能去调试可读性极低的代码；
不支持剔除无效代码 ( TreeShaking )：很多时候我们只用到了库中的一个函数，结果 Parcel 把整个库都打包了进来；
一些依赖会 让Parcel 出错：当你的项目依赖了一些 Npm 上的模块时，有些 Npm 模块会让 Parcel 运行错误；
HTTP 开发服务器不支持 HistoryApi ；
```