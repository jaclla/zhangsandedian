import mdItCustomAttrs from "markdown-it-custom-attrs";
import {defineConfig} from "vitepress";
export default defineConfig({
	base: "/",//部署到GitHub Pages时的仓库名
	title: "AI2Share",
	lang: "zh-CN",
	description: "AI2Share",
	head: [
		["meta", {name: "author", content: "AI2Share"}],
		["meta", {name: "keywords", content: "AI2Share"}],
		["link", {rel: "icon", href: "/logo.jpg"}],
		["link", {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"}],
		["script", {src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"}],
	],
	markdown: {config: (md) => md.use(mdItCustomAttrs, "image", {"data-fancybox": "gallery"})},
	// lastUpdated: true,
	themeConfig: {
		logo: "/logo.jpg",

		outline: {
			level: [2, 4], // 显示2-4级标题
			// level: 'deep', // 显示2-6级标题
			label: '当前页大纲' // 文字显示
		},

		footer: {
			message: "MIT License.",
			copyright: "Copyright © 2024 AI2Share",
		},
		nav: [
			{text: "首页", link: "/", activeMatch: "/home"},
			{text: "特性", link: "/pages/character", activeMatch: "/pages/character/"},
			{text: "API服务", link: "/pages/api", activeMatch: "/pages/api/"},
			{text: "了解", link: "https://page.ai2share.store/", activeMatch: "/pages/understand/"},
			{text: "关于", link: "/pages/about", activeMatch: "/pages/about/"},
			{text: "登录", link: "https://app.ai2share.store/", activeMatch: "/pages/login"},
			
		],

		appearance: false
	},
	vite: {
		plugins: [],
	},
	appearance: false,
});
