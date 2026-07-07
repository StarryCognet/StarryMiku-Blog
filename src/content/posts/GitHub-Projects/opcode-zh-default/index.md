---
title: opcode-zh-default：让 OpenCode 默认输出中文的小工具
published: 2026-07-07
description: 一个简单的 OpenCode Skill/指令集，自动让 AI 助手默认使用中文思考和回复
image: ''
tags: [GitHub项目推荐, GitHub, 开源, 工具, 效率工具, OpenCode, AI]
category: 'GitHub项目推荐'
draft: false
---

## 痛点和想法

最近在用 OpenCode（一个 AI 代码助手 CLI），每次对话都要手动跟它说"你可以用中文回复"或者"请用中文"。说多了就很烦，而且有时候忘了说，它就开始飙英文，思路接不上。

我就想，能不能搞个一劳永逸的办法，让它**默认就输出中文**？

于是就有了 [opcode-zh-default](https://github.com/StarryCognet/opcode-zh-default)。

## 这是什么

一个给 OpenCode 用的 Skill + 常驻指令集。安装之后，AI 助手会自动：

- **思考过程用中文**（Thinking 部分）
- **回复用中文**（Reply 部分）
- **代码注释用中文**
- **文档和错误提示用中文**

专业术语、API 名称、代码变量名这些该保留英文的照常保留，不影响写代码。

## 安装方式

项目仓库：<https://github.com/StarryCognet/opcode-zh-default>

### 方式一：全局安装（推荐）

```bash
git clone https://github.com/StarryCognet/opcode-zh-default.git ~/.config/opencode/skills/zh-default
```

然后在全局配置 `~/.config/opencode/opencode.json` 中添加：

```json
{
  "skills": {
    "paths": ["~/.config/opencode/skills/zh-default"]
  },
  "instructions": ["~/.config/opencode/instructions/zh-language.md"]
}
```

重启 OpenCode 后生效。

### 方式二：项目级安装（只对当前项目生效）

把仓库里的 `instructions/zh-language.md` 复制到你项目的根目录，然后在项目的 `opencode.json` 中引用：

```json
{
  "instructions": ["./zh-language.md"]
}
```

### 方式三：只装 Skill（自动触发）

把 `skills/chinese-default/` 目录放到 OpenCode 的 Skill 扫描路径下即可。Skill 的描述覆盖了各种查询场景，会自动触发中文规则。

## 文件结构

```
opcode-zh-default/
├── skills/
│   └── chinese-default/
│       └── SKILL.md          # Skill 文件（自动触发）
└── instructions/
    └── zh-language.md        # 常驻指令文件
```

## 注意事项

- **需要重启 OpenCode**：配置改动后，重启新会话才会生效
- **全局 vs 项目级**：全局安装对所有项目生效，项目级安装只影响当前项目
- 如果既装了全局 Skill 又装了项目级指令，不会冲突，指令最终会合并

## 最后

源码很少，逻辑很简单。如果你也被 AI 助手突然飙英文困扰，可以试试这个。如果有什么改进意见，欢迎提 Issue 或者 PR。

项目地址：[https://github.com/StarryCognet/opcode-zh-default](https://github.com/StarryCognet/opcode-zh-default)
