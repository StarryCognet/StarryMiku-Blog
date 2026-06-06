---
title: 给你的文件夹换个皮肤——Folder11 Ico 图标库
published: 2026-06-06
updated: 2026-06-06
description: 'Folder-Ico 是一个社区驱动的 Windows 文件夹图标库，配合 Folder11 工具可以为你的每个软件文件夹换上专属图标，目前已收录数百款常见软件的 Windows 11 风格图标。'
tags: [GitHub项目推荐, GitHub, 软件, 工具, Windows, 美化]
category: 'GitHub项目推荐'
draft: false 
image: './folder11-cover.png'
---

Windows 11 的界面是挺好看的，但系统文件夹图标翻来覆去就那几样。尤其是 Program Files 里面，一眼望去全是一个模子刻出来的默认文件夹，想找什么东西全靠认名字。

要是每个软件的文件夹都能直接显示它自己的图标就好了。

还真可以。这就是 **Folder11** 干的事——而 **Folder-Ico** 是它的图标仓库。

---

## 这个项目是干嘛的

[Folder-Ico](https://github.com/icon11-community/Folder-Ico) 是 [Folder11](https://github.com/icon11-community/Folder11) 配套的图标库。Folder11 是一个能让你自定义 Windows 文件夹图标的工具（**1796 stars**），而 Folder-Ico 就是它背后的图标库（**3168 stars**）。

目前库里收了 **几百个常见软件的专属图标**，Chrome、VS Code、Steam、Blender、Unity、Photoshop……你平常用的基本都有。

而且每个图标都带有完整的元信息：

- 作者和作者链接
- 图标文件哈希值
- 提交日期
- 原始文件直链

甚至能追溯到每个图标是谁画的。

## 怎么用

装了 Folder11 的话，它会自动从 Folder-Ico 拉图标匹配到你的软件目录。三步搞定：

1. 下载 [Folder11](https://github.com/icon11-community/Folder11)
2. 打开扫一下你装了哪些程序
3. 图标自动匹配，一键应用

不想装工具也行，直接去 [在线预览页](https://icon11-community.github.io/icons) 翻翻看，找到喜欢的手动下载 .ico，然后右键文件夹 → 属性 → 自定义 → 更改图标。

## 都有哪些图标

目前覆盖的软件类别还挺全的：

**开发工具** — VS Code, Git, Docker, Node.js, Python, JetBrains 全家桶  
**创意软件** — Photoshop, Illustrator, Blender, Unity, Unreal Engine, CorelDRAW  
**游戏** — Steam, Epic, Xbox, Forza Horizon, EA App  
**日常软件** — Chrome, Firefox, Telegram, Discord, 7-Zip, 迅雷  
**硬件厂商** — ASUS, NVIDIA, AMD, MSI  

还有一些小众和进阶的也有：Altium Designer（画电路板的）、CCS（嵌入式）、ESP-IDF（IoT 开发）、Evolution X（刷机）等等。

图标走的是 **Windows 11 文件夹风格**——保留了 Windows 11 那个文件夹折角的设计，只是把中间的图标换成了对应软件的 Logo。放进系统文件夹里完全不违和。

## 谁在做这件事

这其实是个 **社区项目**，这才是最牛的地方。

Gtt1229、JangOetama、niisan 这几个是长期在贡献的熟面孔。任何人想加新图标，提个 Pull Request 就行。仓库的 CI 会自动处理图标验证和元信息生成，你只管提供 .ico 文件。

## 几个数字

- **3168 stars**
- **90 forks**
- 图标量已经覆盖了绝大多数常用软件
- 2021 年底开始的项目，到现在还在更新

## 适合谁

- **爱折腾桌面的人** — 让文件夹跟你主题搭配起来
- **开发者** — 项目目录一多，有图标的文件夹比纯文字好找十倍
- **游戏玩家** — Steam 库文件夹加上专属图标，看着就舒服
- **就是想整整齐齐的人** — 每个文件夹都带对应软件图标，就一个字：爽

## 链接

- GitHub 仓库：[icon11-community/Folder-Ico](https://github.com/icon11-community/Folder-Ico)
- 在线图标预览：[icon11-community.github.io/icons](https://icon11-community.github.io/icons)
- Folder11 主项目：[icon11-community/Folder11](https://github.com/icon11-community/Folder11)

如果你还没试过给文件夹换图标，这可能是最省事的办法。
