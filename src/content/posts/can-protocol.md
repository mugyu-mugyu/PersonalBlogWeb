---
title: CAN 通信详解
published: 2026-06-24
description: 别只知道波特率，CAN 通信从原理到位时序，一次理解透。
category: 通信协议
draft: false
image: ./can-protocol-images/title.png
---

CAN（Controller Area Network，控制器局域网）是一种多主、广播、差分串行总线，核心优势是非破坏性仲裁、高抗干扰、自动错误处理，广泛用于汽车、工业、BMS、机器人等实时控制场景。下面将会从物理层、链路层、仲裁机制、帧结构、位时序进行解析。

# CAN 网络拓扑与硬件组成

这篇文章目前处于草稿状态，尚未发布。因此，它不会对普通读者可见。内容仍在进行中，可能需要进一步编辑和审查。

当文章准备发布时，您可以在 Frontmatter 中将 "draft" 字段更新为 "false"：

```markdown
---
title: 草稿示例
published: 2026-06-21
tags: [Markdown, 博客, 演示]
category: 示例
draft: false
---
