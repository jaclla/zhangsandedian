# 设计样式说明

本项目基于 VitePress + Tailwind。此改版引入了统一的设计令牌（CSS Variables）与常用组件原子类，尽量不改动现有内容与结构即可换新样式。

## 入口与结构
- 样式入口：`docs/.vitepress/theme/css/custom.css`（Tailwind 层、组件工具类）
- 主题样式：`docs/.vitepress/theme/styles/index.scss`（设计令牌、导航/页脚/首页卡片等全局外观）
- 主题挂载：`docs/.vitepress/theme/index.ts`

## 设计令牌（可按需调整）
定义于 `index.scss` 中的 `:root`、`.dark` 块：
- 颜色：`--vp-c-brand*`（品牌主色）、`--vp-surface*`（表面层）、`--vp-border`、`--vp-shadow`
- 导航：`--vp-nav-bg`、`--vp-nav-border`

## Tailwind 组件原子类
位于 `custom.css` 的 `@layer components`：
- `.btn-primary`：主按钮（圆角胶囊）
- `.btn-outline`：描边按钮
- `.chip`：小徽标
- `.section`：统一分段内边距

不想改模板也可直接使用全局样式（如导航毛玻璃、首页卡片化等）覆盖到现有结构。

## 深浅色模式
- 在 `docs/.vitepress/config.mts` 启用了 `appearance: true`，顶部将显示主题切换
- 常见文本/背景在暗色下自动适配（例如 `.dark .text-gray-900` 等）

## 调色建议
- 仅替换 `:root` / `.dark` 中的 `--vp-c-brand*` 与 `--vp-surface*` 即可整体换肤
- 若需要统一替换 Tailwind 的 `text-indigo-*` 等类，建议在组件中改用 `.text-[var(--vp-c-brand)]` 或新增语义类

## 后续改进（可选）
- 提炼按钮/卡片到组件，减少重复类
- 为页面关键模块补充响应式微调与交互动效

