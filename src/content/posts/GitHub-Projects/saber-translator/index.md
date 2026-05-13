---
title: AI漫画翻译与阅读新范式-Saber-Translator食用指南
published: 2026-03-18
updated: 2026-05-13
description: 'Saber-Translator是一款基于GPL-3.0协议的开源AI漫画翻译工具,是专注漫画领域的综合性开源工具。'
image: './thumb.webp'
tags: [GitHub项目推荐, GitHub, AI, 漫画]
category: 'GitHub项目推荐'
draft: false 
---

在接触二次元和ACG文化时，语言障碍是一个大问题——想看海外漫画但不懂日语或英语；想分享作品却因翻译过程复杂、质量不高而放弃。传统翻译方式要么耗时费力，要么使用通用工具导致译文生硬，破坏阅读体验。Saber-Translator 是一个开源项目，旨在解决这些问题。它不仅是一个简单的翻译工具，这次原作者进行了一个大更新，集成了AI翻译、图像修复、内容管理和智能分析等功能。具体来说，Saber-Translator 是一款基于GPL-3.0协议的免费AI漫画翻译工具，支持多种操作系统。它的核心优势在于提高了翻译的精准度、画面还原度和效率。通过标准化流程（导入-检测-识别-翻译-修复-渲染-导出），它能够处理漫画中的气泡布局、艺术字和跨页文本等特殊场景，并利用Manga Insight智能分析引擎实现对内容的理解，是国内少见的专注于漫画领域的AI开源工具。

# 核心功能

1.  **文件导入**支持 JPG、PNG、WEBP 等主流图片格式，能批量导入漫画章节。

1.  **文本检测**采用 CTD 精确掩膜技术作为默认检测方案。

1.  **OCR识别**MangaOCR（日语专属优化）、PaddleOCR（多语言通用）、百度OCR、AI视觉OCR。

1.  **AI翻译配置**SiliconFlow / DeepSeek / Gemini / 火山引擎 / Ollama / Sakura 等。

1.  **画面修复与渲染**LAMA智能修复 / 纯色填充。

1.  **导出下载**PNG / ZIP / PDF / CBZ。

# 安装和使用

## 下载与安装

访问 GitHub 项目仓库：搜索 [**MashiroSaber03/Saber-Translator**](https://github.com/MashiroSaber03/Saber-Translator)，进入项目。

下载对应系统安装包：根据电脑性能来选择下载 CPU 还是 GPU 版，由于是分卷的形式注意要下载全面（建议使用bandzip进行解压）。

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-bc00-73c8-8170-622ba1a64856.webp)

选择001解压

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-bd88-72cc-a330-030a8e8e130e.png)

# 使用方式

直接双击 exe 启动即可。

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-c0bc-70fb-b14b-5424c8bd1a3c.png)

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-c131-711d-a950-806ed550ede1.webp)

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-c219-77f8-98a4-dde38e08c574.webp)

等待一段时间后，可按 ctrl+左键 点击或者直接在浏览器输入“127.0.0.1:5000”

进去后点击新建。

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-c343-7117-bed6-f99f3954774f.png)

点击自己新创建的书籍再次点新建章节--进入章节。

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-c3fb-70b3-8e71-6969fb4dba80.webp)

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-c530-700a-8e4b-9c215fd94ce4.webp)

第一次使用他会让你简单配置一下。

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-c624-77e8-aca0-d44c4e9188ab.webp)

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-c701-707e-9276-bd2cf3634372.webp)

项目内置了很多 **OCR识别** 按照想要翻译的原漫画的语言来，这里我示例用的是英文漫画，所以选择多语言--英文。

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-c7af-7768-bca7-1d0344803d16.png)

API这里根据自己拥有的API服务商或者中转站来配置 key 和 URL ，如果没有就去服务商那里获取一下，比如deepseek，硅基流动等，有的能力的也可以用chatGPT、Gemini这些服务商。

测试下来 MiniMax M2.5、DeepSeek V3、Qwen3.5翻译的快且质量比较好。

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-c839-741b-9795-2debb1ea0357.webp)

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-c97c-7381-a19f-286995def8b2.png)

导入图片后可以只翻译一张来试试效果。

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-ca25-730a-b625-86c4318f7d19.webp)

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-cb58-7096-a84c-a09fbff2a78f.webp)

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-cc2d-74fd-9418-3a72a8c28530.webp)

如果效果不满意可以点“切换编辑模式”来进行细节上的修改，比如我这里一段文字超出了气泡的范围，点击那一段文字调整一下字号或者调整一下方框的大小都可以，文本翻译不对也可以重新翻译、手动修改或AI校对一下。

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-cd5c-75fc-95fb-de87144e1c25.webp)

熟悉之后下次使用直接翻译所有图片就可以了，哪张图片有问题再单独调整。

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-ce55-73df-983c-bd1dd96d07cd.webp)

点击下载所有图片就可以把翻译后的所有图片打包成zip下载下来了

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-cee5-73e7-b0bd-0b01d0e21ef6.webp)

随便取一张看一下翻译效果怎么样，emmmm还可以，只是细节上有点小问题，自己手动修改一下就可以了，不过确实比一个个手动翻译方便了很多。

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-cf7e-765b-ad47-391542fb1594.webp)

原作者的翻译对比：

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-d05f-770f-b8c9-e113e2d54339.webp)

# 书架系统

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-d39e-739b-930a-cb94ad8b8a48.webp)

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-d44f-700d-bd54-6d0ec3b213f9.webp)

书架系统提供全面的漫画管理功能，帮助你有序地进行翻译项目：

-   **访问书架**：点击“书架”按钮进入。

-   **创建书籍**：点击“新建书籍”，输入名称，并可上传封面及添加标签。

-   **管理章节**：在书籍内，可以增删改排章节。

-   **翻译章节**：点击章节开始翻译，进度自动保存。

-   **阅读模式**：翻译完成后，可在阅读器中查看成果。

-   **标签管理**：于书架页面创建和管理标签，便于分类。

# Manga Insight 智能分析

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-d512-75c4-840f-5ba1e900a27e.webp)

## 1\. 分析任务管理

-   **分析模式**:

-   1.  **全书分析**: 适用于首次完整分析。

-   1.  **增量分析**: 只分析新增内容，适合连载更新。

-   1.  **章节分析**: 仅分析特定章节，便于重分析部分区域。

-   1.  **批量页面分析**: 针对多个选定页面进行精细化调整。

-   **任务控制**: 支持暂停、恢复和取消操作，实时查看进度。

-   **任务历史**: 查看以往任务的状态与结果。

## 2\. 四层级分析架构

-   **架构流程**:

-   1.  批量分析 (每5页) → 段落总结 → 章节总结 → 全书概述

-   **预设模式**:

-   1.  **简洁模式**: 批量分析 → 全书总结（短篇）

-   1.  **标准模式**: 批量分析 → 段落总结 → 全书总结（通用）

-   1.  **章节模式**: 批量分析 → 章节总结 → 全书总结（分章节漫画）

-   1.  **完整模式**: 批量分析 → 小结 → 章节总结 → 全书总结（长篇连载）

-   **上下文关联**: 在批量分析时自动参考前几批的结果，确保故事理解的连续性。

## 智能问答

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-d5e3-7119-a712-c7161249a607.webp)

基于检索增强生成 (RAG) 技术，支持对漫画内容进行智能问答：

-   **两种问答模式**：

-   1.  **精确模式**：通过向量检索定位相关页面，适合具体问题（例如：“第15页发生了什么？”）。

-   1.  **全局模式**：使用全书摘要作为上下文，适合总结性问题（例如：“故事的主题是什么？”）。

-   **混合检索**：结合70%的向量相似度和30%的关键词匹配策略。

-   **重排序**：利用Jina、Cohere等模型优化检索结果。

-   **推理检索**：将复杂问题分解成多个子问题并行处理后整合答案。

-   **父子块检索**：提供匹配内容的完整上下文，帮助理解剧情。

-   **引用定位**：回答中自动标注引用页码，并支持跳转至对应页面。

此外，还提供了多种概述模板：

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-d67e-7476-a932-b54423aa43ba.webp)

剧情时间线

![](./upload/%5BGitHub%5DAI%E6%BC%AB%E7%94%BB%E7%BF%BB%E8%AF%91%E4%B8%8E%E9%98%85%E8%AF%BB%E6%96%B0%E8%8C%83%E5%BC%8F-Saber-Translator%E9%A3%9F%E7%94%A8%E6%8C%87%E5%8D%97_019d9e72-d74a-74fe-a1c1-03546218da2a.webp)

# 总结

Saber-Translator 不只是个简单的翻译工具，它是专为漫画爱好者量身定做的全能解决方案。不仅帮你解决看不懂外文漫画的烦恼，还能让专业译者和内容创作者更高效、高质量地完成工作。而且它是开源免费的，功能设计特别适合漫画，智能分析能力也很强，在同类工具里绝对是佼佼者。无论是想快速看懂海外漫画的普通粉丝，还是追求高质量翻译的专业译者，或者是需要处理漫画内容的研究人员和创作者，Saber-Translator 都能完美满足你的需求。作为一个持续更新的开源项目，它依靠社区的力量不断改进功能、修复问题，未来还会支持更多语言，增加更多智能分析功能，解锁更多漫画翻译和阅读的新玩法。

作者是真的牛，如果感兴趣一定要给原作者一个starred，链接在下面

GitHub 项目地址：[MashiroSaber03/Saber-Translator](https://github.com/MashiroSaber03/Saber-Translator)