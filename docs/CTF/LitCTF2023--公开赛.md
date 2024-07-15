---
title: LiCTF2023--公开赛
slug: /CTF/2023LiCTF
---

# web

## 我Flag呢？
![image.png](https://img.crzliang.cn/img/202407152311522.png)

看源代码：

![image.png](https://img.crzliang.cn/img/202407152311523.png)

## Ping
![image.png](https://img.crzliang.cn/img/202407152311524.png)

直接在输入框输入不能执行命令，尝试抓包改包

![image.png](https://img.crzliang.cn/img/202407152311525.png)

执行**ls**，列出了当前目录下的文件，

![image.png](https://img.crzliang.cn/img/202407152311526.png)

flag在根目录下，直接读

![image.png](https://img.crzliang.cn/img/202407152311527.png)

![image.png](https://img.crzliang.cn/img/202407152311528.png)

## Follow me and hack me

![image.png](https://img.crzliang.cn/img/202407152311529.png)


SELECT username,password FROM users WHERE id = ((((((1))))))

SELECT username,password FROM users WHERE id = ((((((1)))))) union select database()--+))))))

# Misc

## 签到

按题意得

## What_1s_BASE

![image.png](https://img.crzliang.cn/img/202407152311530.png)

## Take me hand

![image.png](https://img.crzliang.cn/img/202407152311531.png)

## 404notfound

![image.png](https://img.crzliang.cn/img/202407152311532.png)

# Crypto

## Hex?Hex！

![image.png](https://img.crzliang.cn/img/202407152311533.png)

## 梦想是红色的

![image.png](https://img.crzliang.cn/img/202407152311534.png)

# Reverse

## 世界上最棒的程序员

![image.png](https://img.crzliang.cn/img/202407152311535.png)
