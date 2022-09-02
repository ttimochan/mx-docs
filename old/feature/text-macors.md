---
---

<script setup>
import Badge from '../.vitepress/components/badge.vue'
</script>

# 文本宏替换

::: warning
这是一个实验性特征，可能会造成系统的不稳定。

经过测试，使用大量文本宏会造成请求文章的接口变慢。
:::

## 简介

::: tip
使用使功能需要先在后台中开启，设置 - 系统 - 文本设定 - 文本宏替换
:::

Required: <Badge text="mx-server >=3.26.0" />

Environment: Server/NodeJS

文本宏是一个以 `[[ ]]` 包裹的语法，例如 `[[ $created ]]` 是一个合法的语法。在文章中可以插入文本宏，和 Markdown 一样，但是这个语法不是用 Markdown 解析和渲染，而是直接会在服务端进行替换。因此可以通过这个特征在文章中插入一些来自服务端的数据，也可以执行一些函数。

例如说一篇文章的标题为「实例标题」，他的正文内容为：

```
一个句子。[[ $title ]]
```

将会输出。

```md
一个句子。实例标题
```

又比如说：

```md
<p align="right">更新于 [[ #dayjs($modified).format('YY-MM') ]]</p>
```

将会输出。

```md
<p align="right">更新于 22-04</p>
```

这是一个动态的数据，`dayjs` 函数由服务端提供。

::: warning
所有的函数方法均在服务端执行，请注意内存的泄露造成系统的不稳定。
:::

## 语法格式

以 `[[ ` 开头，` ]]` 结尾，注意一个空格是必须的。

### 访问变量

访问变量使用 `$` 前缀。

目前可以访问的变量有：当前记录的所有字段（数据库记录值）。

`title` `created` `slug` `nid` `_id` ..

如：

```
[[ $created ]]
```

### 使用函数

::: warning
使用函数可能会造成系统不稳定。

函数的执行和 Serverless 的执行保持一致。
:::

执行函数使用 `#` 前缀。

你可以使用任意 JS 代码去执行一个函数，也可以是一个 JS 语句。

如：

```
[[ #$title.slice(0, 5) ]]
```

使用内置方法。

如：

```
[[ #dayjs($created).format('YYYY') ]]
```

内置方法目前有：

- [dayjs](https://day.js.org/zh-CN/)
- formatNow(time: Date | string): string, 相对时间

- center(text: string): string, 居中
- right(text: string): string, 居右

- opacity(text: string, opacity: number): string, 透明文本
- blur(text: string, blur: number): string, 高斯模糊化文字
- color(text: string, color: string): string, 给文字上色
- size(text: string): string, 给文字上色