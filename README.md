# halo-mdx

Halo mdx插件

## 简介

该插件新增了一个halo编辑器, 允许使用Vue3 + MDX语法编写文章。

[下载插件](https://github.com/Curtion/plugin-halo-mdx/releases)

## 开发环境

- Java 21+
- Node.js 18+
- pnpm

## 开发

```bash

# 前端开发
cd ui
pnpm install
pnpm dev

# 前端依赖升级
npx taze major -w

# 启动Halo
./gradlew haloServer

# 重新加载
./gradlew reload
```

## 本地构建

```bash
./gradlew build
```

构建完成后，可以在 `build/libs` 目录找到插件 jar 文件。

## 发布

1. git tag新建标签
2. github release 发布一个新版本
3. 等待github action

## 许可证

[GPL-3.0](./LICENSE) © Curtion 
