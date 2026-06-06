---
title: 给你的文件夹换个皮肤——Folder11 Ico 图标库
published: 2026-06-06
updated: 2026-06-06
description: 'Folder-Ico 是一个社区驱动的 Windows 文件夹图标库，配合 Folder11 工具可以为你的每个软件文件夹换上专属图标，目前已收录数百款常见软件的 Windows 11 风格图标。'
tags: [GitHub项目推荐, GitHub, 软件, 工具, Windows, 美化]
category: 'GitHub项目推荐'
draft: false 
---

Windows 11 的界面很漂亮，但系统文件夹图标来来回回就那几个。尤其是程序目录，全是千篇一律的默认文件夹，找起来全靠认名字。

有没有办法让每个软件的文件夹显示它自己的图标？

有。这就是 **Folder11** 做的事——而 **Folder-Ico** 是它的图标弹药库。

---

## 这是什么

[Folder-Ico](https://github.com/icon11-community/Folder-Ico) 是一个社区驱动的 Windows 文件夹图标库，专门为 [Folder11](https://github.com/icon11-community/Folder11) 项目服务。简单说，Folder11 是一个能让你自定义 Windows 文件夹图标的工具（**1796 stars**），而 Folder-Ico 就是它背后的图标仓库（**3168 stars**）。

目前仓库里收录了 **几百个常见软件的专属图标**，从 Chrome、VS Code、Steam 到 Blender、Unity、Photoshop，你能想到的软件基本都有。

每个图标不是随便丢进去的——它有完整的元信息记录：
- 作者与作者链接
- 图标文件哈希值
- 提交日期
- 原始图标文件直链

甚至可以追溯到每个图标是谁画的。

## 怎么用

如果你安装了 Folder11 工具，它会自动从 Folder-Ico 仓库拉取图标匹配到你的软件目录。只需：

1. 下载 [Folder11](https://github.com/icon11-community/Folder11)
2. 打开软件，它会扫描你的已安装程序
3. Folder-Ico 自动匹配图标，一键应用

如果你不想装工具，也可以直接到 [在线预览页](https://icon11-community.github.io/icons) 浏览所有图标，找到喜欢的后手动下载 .ico 文件，右键文件夹 → 属性 → 自定义 → 更改图标。

## 图标都长什么样

目前已收录的图标覆盖了几乎所有常见软件类别：

**开发工具** — VS Code, Git, Docker, Node.js, Python, JetBrains 全家桶  
**创意软件** — Photoshop, Illustrator, Blender, Unity, Unreal Engine, CorelDRAW  
**游戏** — Steam, Epic, Xbox, Forza Horizon, EA App  
**日常软件** — Chrome, Firefox, Telegram, Discord, 7-Zip, 迅雷  
**硬件厂商** — ASUS, NVIDIA, AMD, MSI  

也覆盖了不少小众和进阶软件：Altium Designer（EDA）、CCS（嵌入式）、ESP-IDF（IoT 开发）、Evolution X（刷机）等。

图标风格统一为 **Windows 11 文件夹风格**——保留了 Windows 11 标志性的文件夹折角设计，只是把文件夹中间的图标换成了对应软件的 Logo。混在系统文件夹里毫无违和感。

## 谁在做这件事

最让人佩服的是这完全是一个 **社区项目**。

Folder-Ico 的贡献者名单里有不少熟面孔——Gtt1229、JangOetama、niisan 等都是长期贡献者。任何人都可以通过 Pull Request 提交新图标。仓库的 CI 自动化流程会处理图标验证和元信息生成，你只需要提供 .ico 文件就行。

## 一些数字

- **3168 stars** 在 GitHub 上
- **90 forks**，说明有人在持续参与
- 图标数量已经覆盖绝大部分常用软件
- 项目从 2021 年底开始，至今仍在活跃更新

## 适合谁

- **Windows 美化爱好者** — 让文件夹也融入你的桌面主题
- **开发者** — 项目目录众多，有图标的文件夹比纯文本好找十倍
- **游戏玩家** — Steam 库文件夹加上专属图标，视觉效果拉满
- **强迫症患者** — 所有文件夹整整齐齐，每个都带对应软件图标

## 链接

- GitHub 仓库：[icon11-community/Folder-Ico](https://github.com/icon11-community/Folder-Ico)
- 在线图标预览：[icon11-community.github.io/icons](https://icon11-community.github.io/icons)
- Folder11 主项目：[icon11-community/Folder11](https://github.com/icon11-community/Folder11)

如果你还没试过给自己的文件夹换图标，这可能是最省事的方式。
