---
title: 解决已经开了梯子但是在Idea中使用git（GitHub）还是连接超时的问题
published: 2025-12-11
updated: 2026-05-13
description: '解决在已开启代理的情况下，IntelliJ IDEA中Git连接GitHub仍然超时的问题，通过配置git代理走系统代理的方法'
tags: [技巧, GitHub, Git, IDEA, 网络, 教程]
category: '技巧'
draft: false 
---

# 问题：

已经开了梯子但是在Idea中使用git（GitHub）还是连接超时Recv failure: Connection was reset。此时需要让git走代理。

# 解决方案：

**1.对右下角网络点击右键 -> 打开网络和Internet设置**![](./upload/%E8%A7%A3%E5%86%B3%E5%B7%B2%E7%BB%8F%E5%BC%80%E4%BA%86%E6%A2%AF%E5%AD%90%E4%BD%86%E6%98%AF%E5%9C%A8Idea%E4%B8%AD%E4%BD%BF%E7%94%A8git%EF%BC%88GitHub%EF%BC%89%E8%BF%98%E6%98%AF%E8%BF%9E%E6%8E%A5%E8%B6%85%E6%97%B6%E7%9A%84%E9%97%AE%E9%A2%98_019da41d-e2b9-7478-a64d-409e94a2cc17.png)

**2.代理 -> 查看到地址和端口号127.0.0.1:7890**![](./upload/%E8%A7%A3%E5%86%B3%E5%B7%B2%E7%BB%8F%E5%BC%80%E4%BA%86%E6%A2%AF%E5%AD%90%E4%BD%86%E6%98%AF%E5%9C%A8Idea%E4%B8%AD%E4%BD%BF%E7%94%A8git%EF%BC%88GitHub%EF%BC%89%E8%BF%98%E6%98%AF%E8%BF%9E%E6%8E%A5%E8%B6%85%E6%97%B6%E7%9A%84%E9%97%AE%E9%A2%98_019da41d-e397-744e-b204-532d9a8bbea3.webp)

**3.在终端（cmd）输入命令**

git config --global http.proxy http://127.0.0.1:7890  

**4.查看是否设置成功**

git config --global -l  

**至此完成**相当丝滑 ^ ^![](./upload/%E8%A7%A3%E5%86%B3%E5%B7%B2%E7%BB%8F%E5%BC%80%E4%BA%86%E6%A2%AF%E5%AD%90%E4%BD%86%E6%98%AF%E5%9C%A8Idea%E4%B8%AD%E4%BD%BF%E7%94%A8git%EF%BC%88GitHub%EF%BC%89%E8%BF%98%E6%98%AF%E8%BF%9E%E6%8E%A5%E8%B6%85%E6%97%B6%E7%9A%84%E9%97%AE%E9%A2%98_019da41d-e56d-773f-8016-b948cac27071.png)

来自: [【完美解决】GitHub连接超时问题 Recv failure: Connection was reset-CSDN博客](https://blog.csdn.net/weixin_44223180/article/details/133059575)