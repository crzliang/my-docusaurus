---
slug: 1721210594
title: Github_Actions自动部署docusaurus到服务器
authors: crzliang
tags: 
  - Github Actions
  - docusaurus
---
## 条件

- 拥有GitHub账号
- 已经构建好docusaurus
- 拥有自己的服务器

## 操作

### 服务器生成ssh密钥

运行 `ssh-keygen`命令即可生成公钥和私钥，只要把公钥添加到项目的环境变量中即可

![image-20240717174904412](D:\图片\typora_img\image-20240717174904412.png)

### 添加环境变量

首先要在项目的setting中添加ssh密钥，使用密钥进行连接服务器有助于提高安全性

![image-20240717174643302](D:\图片\typora_img\image-20240717174643302.png)

![image-20240717175057832](D:\图片\typora_img\image-20240717175057832.png)

以此类推再添加 `REMOTE_HOST`、`REMOTE_USER`、`TARGET`

其中 `REMOTE_HOST`对应服务器的IP地址或域名，`REMOTE_USER`对应远程登录的用户名，例如我的就是 `ubuntu`，`TARGET`对应你要上传的目录地址，我的是：`/home/ubuntu/docusaurus/src`

![image-20240717175355539](D:\图片\typora_img\image-20240717175355539.png)
