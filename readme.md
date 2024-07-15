# PIXIV.RE UI
<center>Pixiv插画爬取工具喵~<br>
基于Bash构建 / 拓展至H5</center>

## 介绍
你要让我怎么介绍.png<br>
就是觉得pixiv.nl没有UI，不方便一键批量下载，所以才搞得简易ui<br>
~~CUI不需要写页面布局，H5布局抄一下就行，多快~~<br>
~~也绝对不是因为pixiv.moe半挂了才一怒之下做的~~

# 使用
本工程支持两种使用方式：

## HTML `全平台支持……吧？`
在线使用→[https://kdxhub.github.io/pixiv.re_ui/](https://kdxhub.github.io/pixiv.re_ui/)<br>

> 仅对最新版本浏览器提供支持，验收使用最新版Edge。

## Bash `Linux/Android`
这个工具的最初版本！体验原汁原味？

### Linux
在终端执行下方命令即可

```shell
bash $(curl -L "https://kdxhub.github.io/pixiv.re_ui/client/pixiv.sh")
```

本工具也支持命令行参数，请下载[此脚本](https://kdxhub.github.io/pixiv.re_ui/client/pixiv.sh)，输入```bash pixiv.sh help```查看帮助列表。

### 安卓
你需要[Termux](//termux.dev)或者ZeroTermux等终端模拟器来使用此工具<br>
安装后执行下方命令

```shell
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/apt/termux-main stable main@' $PREFIX/etc/apt/sources.list
apt update && apt upgrade && apt install curl
bash $(curl -L "https://kdxhub.github.io/pixiv.re_ui/client/pixiv.sh")
```

如果您已安装支持`curl`的终端模拟器，请直接执行：
```shell
bash $(curl -L "https://kdxhub.github.io/pixiv.re_ui/client/pixiv.sh")
```

# 参考与来源
本仓库基于AGPL 3.0协议开源。<br>
见于[我们的LICENSE](//kdx233.github.io/licen)

本工程借鉴了以下来源，对此表示鸣谢。<br>
若有侵权请联系删除<br>
* [Soberjs UI库](//soberjs.com)