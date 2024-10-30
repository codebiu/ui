## 源

```sh
# 国内 淘宝 镜像源
pnpm config set registry https://registry.npmmirror.com/
# 官方镜像源
pnpm config set registry https://registry.npmjs.org/

```

## lib

```sh
# base extention


# css 编译辅助
pnpm add -D unocss @unocss/reset
# 添加uno.config.ts
# main.ts 添加 import 'virtual:uno.css'


# unplugin ex
pnpm add -D unplugin-auto-import unplugin-vue-components unplugin-icons


# ui
pnpm add element-plus
# 添加

```

## 发布依赖

```html
<!-- 引入 VueUse 核心库 -->
<script src="https://unpkg.com/@vueuse/shared"></script>
<script src="https://unpkg.com/@vueuse/core"></script>
<!-- 引入 Element Plus -->
<link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
<script src="//unpkg.com/element-plus"></script>
```
