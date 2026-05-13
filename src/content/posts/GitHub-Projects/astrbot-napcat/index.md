---
title: AstrBot+NapCat实现QQ微信大模型聊天机器人
published: 2025-10-03
updated: 2026-05-13
description: 'title: 如何通过AstrBot和NapCat搭建QQ/微信大模型聊天机器人'
image: './astrbotlogo.webp'
tags: [GitHub项目推荐, GitHub, AI, 软件, 工具, Windows]
category: 'GitHub项目推荐'
draft: false 
---

# 一、部署 AstrBot

## 1\. 下载安装器

打开 [AstrBot GitHub Releases 页面](https://github.com/Soulter/AstrBotLauncher/releases/latest)，下载 \`Source code (zip)\` 并解压到电脑。

## 2\. 运行安装器

解压后，打开文件夹，在地址栏输入 \`Powershell\` 并打开。

![](./upload/%5BGitHub%5DAstrBot+NapCat%E5%AE%9E%E7%8E%B0QQ%E5%BE%AE%E4%BF%A1%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA_019d9e6b-be07-764f-8e07-d5202d8c1b71.webp)

将 \`launcher\_astrbot\_en.bat\` 批处理文件拖进去回车运行。

注意：

如果提示 \`Windows 已保护您的电脑\`，点击 \`更多信息\`，然后点击 \`仍要运行\`。

如果未检测到 Python 环境，脚本会提示并退出。确保已安装 \`Python 3.10\` 及以上版本，并配置好环境变量。

配置 Python 解释器路径：

-   打开 \`launcher\_astrbot\_en.bat\` 文件，找到 \`set PYTHON\_CMD=python\` 这一行，将 \`python\` 改为你的 Python 解释器路径或指令。
    

-   如果没有检测到 Python 环境，脚本将会提示并退出。 + 脚本将自动检测目录下是否有\`AstrBot\`文件夹，如果没有，将会从[GitHub](https://github.com/Soulter/AstrBot/releases/latest)自动下载最新的 AstrBot 源码。下载好后，会自动安装 AstrBot 的依赖并运行。
    

## 3\. 完成部署

-   脚本将自动检测目录下是否有 \`AstrBot\` 文件夹，如果没有，会从 GitHub 自动下载最新的 AstrBot 源码。下载好后，会自动安装 AstrBot 的依赖并运行。
    

**查看日志：**

如果一切顺利，会看到 AstrBot 打印出的日志，显示类似 \`🌈 管理面板已启动，可访问\` 并附带链接。打开链接可访问 AstrBot 管理面板，默认用户名和密码是 \`astrbot\` 和 \`astrbot\`。

**常见问题：**

-   **管理面板打开时遇到 404 错误：**在 release 页面下载 \`dist.zip\`，解压拖到 \`AstrBot/data\` 下。还不行请重启电脑。
    

-   **报错：Python is not installed ：**如果已安装 Python 并重启仍报错，说明环境变量不对。可通过搜索 Python，打开文件位置，右键快捷方式，打开文件所在位置，复制文件地址，修改 \`launcher\_astrbot\_en.bat\` 文件中的 \`PYTHON\_CMD\` 为 Python 解释器路径或指令。或重装 Python，勾选 \`Add Python to PATH\`，重启电脑。
    

# 二、部署 NapCat

## 1\. 下载 NapCat

打开 [NapCatQQ GitHub 仓库](https://github.com/NapNeko/NapCatQQ)，根据系统选择下载方式。

## 2\. 通过一键脚本部署

**Windows**

参考 NapCat.Shell - Win 手动启动教程

NapCat.Win.一键版本

特殊说明: 一键版仅适用无需安装QQ和NapCat 已内置

-   前往[NapCatQQ 的 release 页面](https://github.com/NapNeko/NapCatQQ/releases)下载无头绿色版本解压
    

-   启动对应BAT即可
    

如果需要快速启动 新建Bat文件写入如下例子

NapCatWinBootMain.exe 10001

**通过 Docker 部署**

在终端执行以下命令：

docker run -d \\

\-e NAPCAT\_GID=$(id -g) \\

\-e NAPCAT\_UID=$(id -u) \\

\-p 3000:3000 \\

\-p 3001:3001 \\

\-p 6099:6099 \\

\--name napcat \\

\--restart=always \\

mlikiowa/napcat-docker:latest

查看日志：

-   执行成功后，查看日志获取登录二维码和管理面板 URL。使用 QQ 扫描二维码登录。
    

# 三、连接 AstrBot 和 NapCat

## 1\. 配置 aiocqhttp

在 AstrBot 管理面板中，选择左边栏的 \`配置\`，点击 \`消息平台\` 选项卡，点击 \`+\` 号，选择 \`aiocqhttp\`，填写配置项，如下图所示：

![](./upload/%5BGitHub%5DAstrBot+NapCat%E5%AE%9E%E7%8E%B0QQ%E5%BE%AE%E4%BF%A1%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA_019d9e6b-bf65-75a8-a052-a5f231057e94.webp)

-   ID(id)： 随意填写，用于区分不同的消息平台实例。系统会自动填充。
    

-   启用(enable)：勾选。
    

-   反向 WebSocket 主机地址：填写机器 IP 地址，如 \`0.0.0.0\`。
    

-   反向 WebSocket 端口：填写端口，如 \`6199\`。
    

## 2\. 配置管理员

点击 \`其他配置\` 选项卡，找到 \`管理员 ID\`，填写 QQ 号（不是机器人的 QQ 号）。

## 3\. 保存配置

点击右下角 \`保存\`，AstrBot 重启并应用配置。

## 4\. 在 NapCatQQ 中添加 WebSocket 客户端

切换回 NapCatQQ 管理面板，点击 \`网络配置 -> 添加网络配置\`，名称随意填写，类型选择 \`WebSocket 客户端\`。填写：

![](./upload/%5BGitHub%5DAstrBot+NapCat%E5%AE%9E%E7%8E%B0QQ%E5%BE%AE%E4%BF%A1%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA_019d9e6b-c006-7398-83e1-bdd281796fab.webp)

-   启用：勾选。
    

-   URL：填写 \`ws://<宿主机 IP>:<端口>/ws\`，如 \`ws://1.2.3.4:6199/ws\`。
    

-   消息格式：选择 \`Array\`。
    

## 5\. 完成连接

点击 \`保存\`，此时 AstrBot 和 NapCatQQ 应连接成功。使用私聊方式在 QQ 对机器人发送 \`/help\` 检查连接是否成功。

# 四、下载链接

[AstrBot GitHub Releases](https://github.com/Soulter/AstrBotLauncher/releases/latest)

[NapCatQQ GitHub 仓库](https://github.com/NapNeko/NapCatQQ)