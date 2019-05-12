LOH教材制作
===
* knowledgeid: -LedXZi8fzaKO45rL-Kv
* author: tei952
* authorid: iHmcxnnRDWPOJAE38On1nCdq0ir2

## 1.0 LOH教材制作基础
```
LOH教材制作基础是Markdown文件转换成为JSON格式。
同时也支持将Markdown转化为HTML和PDF
MarkDown文件格式要求请参照目录下的js.md
```
## 2.0 使用方法
```
NOTE: 命令都是在终端里进行的。

在开始之前，请确认你已经安装node.js

1. 下载并解压或者clone到本地
2. 进入LOHMD2N 目录，
3. 执行命令：`npm install `
4. 然后把需要批量转换的Markdown 文件放到 `./Markdowns` 目录下。
5. 执行命令: `gulp`
6. 工具会自动把Markdown 文件批量转换成相应的文件。
```

## 3.0 Task (任务说明-命令说明)
```
任务|命令| 说明
----|----|-----
MD2HTML | gulp MD2HTML | 把 markdown 转换成 HTML 文件。
MD2PDF | gulp MD2PDF | 把 markdown 转换成 PDF 文件。
MD2JSON| gulp MD2JSON| 把 markdown 转换成 JSON 文件。
watching | gulp watching| 监视 Markdowns 文件夹，一旦 markdown 文件被更改(新建、修改、删除)时自动进行转换。
default | gulp 或者 gulp default | 一次批量把markdown 文件转换成相应的HTML/JSON/PDF文件。
```

## 4.0 MD文件说明
```
knowledgeid 知识编号
author: 作者名称
authorid: 作者编号
以上三项由LOH系统提供
课件每页类型如下
0 html
1 select
2 input
3 youtube
4 picture
5 audio
6 multiselect
7 advertisment
8 flash
```
