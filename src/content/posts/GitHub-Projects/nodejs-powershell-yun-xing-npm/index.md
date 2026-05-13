---
title: node.js - 在 PowerShell 上运行 npm 会询问 "你要如何打开这个文件"
published: 2025-07-23
updated: 2026-05-13
description: '解决在Windows PowerShell中运行npm命令时弹出文件选择窗口的问题，分享排查过程和最终解决方案'
tags: [技巧, Node.js, npm, PowerShell, Windows, 问题修复]
category: '技巧'
draft: false 
---

# 奇遇

今天准备打开 VSCode 玩一会 vue， 使用 npm run serve 命令后直接给我干个打开文件窗口，给我整的一头雾水。。。。。

# 试错

接下来我踏上解决这个错误的路程，以下是我心路历程：

1.  检查环境变量，重新复制粘贴 node 路径，没错啊。

1.  重新安装 npm 也没问题啊。

1.  在 PowerShell 里使用命令查看 node、vue 版本，都可以正常显示，头大。

1.  郁闷了，那就重新安装 nodejs 吧，安装包版改为了压缩包版，还不行！！！

1.  什么破电脑，刚买来还没过 7 天无理由，难不成就要让我重装系统？？？黑人问号？？？

# 偶然

百度了半天也没找到结果，果断打开了谷歌，皇天不负有心人，还真让我给找到了！！！

# 踏破铁鞋无觅处

以下为解决方法：

1.  在 powershell 中运行命令 get-command npm

get-command npm  

1.  它可能会给你错误的路径，蓝色标线所示。

![](./upload/node.js%20-%20%E5%9C%A8%20PowerShell%20%E4%B8%8A%E8%BF%90%E8%A1%8C%20npm%20%E4%BC%9A%E8%AF%A2%E9%97%AE%20%E2%80%9C%E4%BD%A0%E8%A6%81%E5%A6%82%E4%BD%95%E6%89%93%E5%BC%80%E8%BF%99%E4%B8%AA%E6%96%87%E4%BB%B6%E2%80%9C_019da41d-e40e-71ab-89b2-5b16092f92dd.png)

1.  打开 Source 显示路径，找到 npm 这个文件，删除掉

![](./upload/node.js%20-%20%E5%9C%A8%20PowerShell%20%E4%B8%8A%E8%BF%90%E8%A1%8C%20npm%20%E4%BC%9A%E8%AF%A2%E9%97%AE%20%E2%80%9C%E4%BD%A0%E8%A6%81%E5%A6%82%E4%BD%95%E6%89%93%E5%BC%80%E8%BF%99%E4%B8%AA%E6%96%87%E4%BB%B6%E2%80%9C_019da41d-e493-71a9-b19e-0c5391a5ad07.webp)

1.  ok 可以啦，重新在 PowerShell 里输入命令 npm -v，终于正常显示版本号了。

# 小结

你若问我为什么 systsem32 文件夹下，会有个 npm 文件，当然啦，我也不知道，难道中了毒？

最后附上原文链接[https://www.coder.work/article/559669](https://www.coder.work/article/559669)