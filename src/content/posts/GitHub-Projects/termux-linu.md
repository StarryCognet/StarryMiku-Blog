---
title: 使用手机Termux安装一键安装 Linux 发行版
published: 2026-04-17
updated: 2026-05-13
description: '介绍如何在Android手机上通过Termux和proot-distro工具无需root权限即可安装完整的Linux发行版，包括Alpine、Arch、Debian等'
tags: [技巧, GitHub, Linux, Android, Termux, 教程]
category: '技巧'
draft: false 
---


# 3.2 Proot 与 proot-distro：一键安装 Linux 发行版[#](https://geek-blogs.com/blog/linux-on-android-without-root/#32-proot-yu3-prootdistro-yi1-jian4-an1-zhuang1-linux-fa1-xing2-ban3)

Termux 原生仅提供基础工具，需通过 **proot** 和 **proot-distro** 安装完整 Linux 发行版。

## 安装 proot 与 proot-distro：[#](https://geek-blogs.com/blog/linux-on-android-without-root/#an1-zhuang1-proot-yu3-prootdistro)

pkg install proot-distro -y # proot-distro 是管理 Linux 发行版的工具  

## 查看支持的发行版：[#](https://geek-blogs.com/blog/linux-on-android-without-root/#cha2-kan4-zhi1-chi2-de-fa1-xing2-ban3)

proot-distro list  

输出示例（包含常见发行版）：

Available distributions:  
alpine  
archlinux  
debian  
fedora  
opensuse  
ubuntu # 推荐新手使用 Ubuntu  

## 安装 Ubuntu（以 Ubuntu 22.04 为例）：[#](https://geek-blogs.com/blog/linux-on-android-without-root/#an1-zhuang1-ubuntu-yi3-ubuntu2204-wei4-li4)

proot-distro install ubuntu # 下载约 500MB，耗时取决于网络  

## 启动 Ubuntu：[#](https://geek-blogs.com/blog/linux-on-android-without-root/#qi3-dong4-ubuntu)

proot-distro login ubuntu # 首次启动会初始化用户环境  

成功进入后，命令行前缀会变为 **root@localhost**，表示已在 Ubuntu 环境中。

# 3.3 基础配置与命令行使用[#](https://geek-blogs.com/blog/linux-on-android-without-root/#33-ji1-chu3-pei4-zhi4-yu3-ming4-ling4-xing2-shi3-yong4)

## 基础操作：[#](https://geek-blogs.com/blog/linux-on-android-without-root/#ji1-chu3-cao1-zuo4)

-   **用户管理**：默认以 **root** 登录，可创建普通用户：
    

adduser username # 按提示设置密码，授予 sudo 权限：usermod -aG sudo username  

-   **包管理**：使用 Ubuntu 的 **apt** 安装工具：
    

apt update && apt install -y git vim python3 # 安装 Git、Vim、Python  

-   **文件共享**：Termux 与 Linux 环境共享存储，路径为 **/data/data/com.termux/files/home**（在 Ubuntu 中访问：**cd /root/storage/shared**，需先在 Termux 中运行 **termux-setup-storage** 授予存储权限）。