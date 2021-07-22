Electron React Boilerplate


在运行以上命令时，npm会下载一个electron基础包，然后执行这个包的postInstall， 利用它所依赖的electron-download来下载平台实际需要的electron压缩包.
而这个压缩包会在s3上面下载，基本很难下载下来，即使翻墙也很费劲。

下面直接说解决方案，顺便提供了sass等库的下载方法

进入C:/Users/{用户名}/.npmrc

增加如下内容

registry=https://registry.npm.taobao.org
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
phantomjs_cdnurl=http://npm.taobao.org/mirrors/phantomjs
electron_mirror=http://npm.taobao.org/mirrors/electron/

