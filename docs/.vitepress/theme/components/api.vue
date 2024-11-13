<template>
	<div class="bg-white">
		<!-- Hero Section with Two Columns -->
		<div class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
			<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<!-- Left Column -->
					<div>
						<h1 class="gradient-text text-5xl font-bold mb-12">
							<div class="flex items-center gap-2">
								企业级API服务
							</div>
						</h1>
						<p class="text-lg text-gray-600 mb-10"><strong>大模型聚合平台</strong></p>
						<div class="mb-10">
							<p class="font-mono font-black tracking-widest">
								<span class="tracking-normal">—————— </span>OpenAI引领了一场人工智能的革命
							</p>
						</div>

						<!-- 按钮组 -->
						<div class="flex gap-4 mb-10">
							<a href="https://api.gpt2share.com/"
								 class="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:opacity-90">
								前往工作台
							</a>
							<a href="https://gpt-best.apifox.cn/" class="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200">
								API文档
							</a>
						</div>

						<!-- 业务接入展示 -->
						<div>
							<h3 class="text-sm text-gray-500 mb-2">40+ 业务线已经接入</h3>
							<div class="grid grid-cols-8 gap-4">
								<img src="https://img.fy6b.com/2024/08/12/2714d790e250a.png" alt="业务接入"
										 class="col-span-8 w-full object-contain" style="max-height: 60px;"/>
							</div>

							<!-- 添加常用应用支持 -->
							<h3 class="text-sm text-gray-500 mt-6 mb-2">常用应用支持</h3>
							<div class="flex flex-wrap items-center gap-7">
								<!-- Lobe -->
								<img src="https://lobehub.com/_next/static/media/logo.98482105.png" class="flex-center w-10 h-10"/>
								<!-- OpenCat -->
								<img src="https://api2d.com/opencat.logo.png" class="flex-center w-10 h-10"/>

								<!-- BotJun -->
								<img src="https://api2d.com/botjun.logo.png" class="flex-center w-10 h-10"/>
							</div>
						</div>
					</div>

					<!-- Right Column - Professional Operation -->
					<div class="bg-white p-8 rounded-xl shadow-lg">
						<h3 class="text-2xl font-bold mb-4">专业运营</h3>
						<p class="text-gray-600 mb-8">
							我们致力于提供可持续且高质量的服务，运用先进的技术架构保障API服务的稳定性与高可用性。
						</p>

						<div class="space-y-6">
							<!-- 按量付费 -->
							<div class="flex items-start gap-4">
								<div class="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white flex-shrink-0">
									💰
								</div>
								<div>
									<h4 class="font-semibold mb-1">按量付费</h4>
									<p class="text-gray-600 text-sm">根据实际使用量付费，余额不过期，可随时充值，灵活高效。</p>
								</div>
							</div>

							<!-- 广泛支持 -->
							<div class="flex items-start gap-4">
								<div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white flex-shrink-0">
									🌐
								</div>
								<div>
									<h4 class="font-semibold mb-1">广泛支持</h4>
									<p class="text-gray-600 text-sm">兼容OpenAI官方库及多数开源聊天应用</p>
								</div>
							</div>

							<!-- 透明计费 -->
							<div class="flex items-start gap-4">
								<div class="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white flex-shrink-0">
									📊
								</div>
								<div>
									<h4 class="font-semibold mb-1">透明计费</h4>
									<p class="text-gray-600 text-sm">提供详细的请求消耗统计，价格透明，无隐性消费，让您用得放心。</p>
								</div>
							</div>

							<!-- 超高并发 -->
							<div class="flex items-start gap-4">
								<div class="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white flex-shrink-0">
									⚡
								</div>
								<div>
									<h4 class="font-semibold mb-1">超高并发</h4>
									<p class="text-gray-600 text-sm">默认支持大部分用户的并发需求，若有超高需求，请联系客服进行咨询。</p>
								</div>
							</div>

							<!-- 高稳定性 -->
							<div class="flex items-start gap-4">
								<div class="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white flex-shrink-0">
									🔒
								</div>
								<div>
									<h4 class="font-semibold mb-1">高稳定性</h4>
									<p class="text-gray-600 text-sm">提供公开日志，记录每次模型请求速度，稳定性远超逆向中转，确保服务可靠。</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Features Section -->
		<div class="mx-auto max-w-7xl px-6 lg:px-8 py-24">
			<div class="mx-auto max-w-2xl lg:text-center">
				<h2 class="text-base font-semibold leading-7 text-indigo-600">专业服务</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					为您提供专业的大模型API服务
				</p>
			</div>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
				<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
					<!-- Feature 1 -->
					<div class="flex flex-col">
						<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
							<svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
								<path
									d="M10 1a6 6 0 00-6 6v1h12V7a6 6 0 00-6-6zM4 9v9a2 2 0 002 2h8a2 2 0 002-2V9H4zm7 3a1 1 0 11-2 0 1 1 0 012 0z"/>
							</svg>
							按量付费
						</dt>
						<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
							<p class="flex-auto">根据实际使用量付费，余额不过期，可随时充值，灵活高效。</p>
						</dd>
					</div>

					<!-- Feature 2 -->
					<div class="flex flex-col">
						<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
							<svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
								<path d="M13 7H7v6h6V7z"/>
								<path fill-rule="evenodd"
											d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"/>
							</svg>
							超高并发
						</dt>
						<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
							<p class="flex-auto">默认支持大部分用户的并发需求，若有超高需求，请联系客服进行咨询。</p>
						</dd>
					</div>

					<!-- Feature 3 -->
					<div class="flex flex-col">
						<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
							<svg class="h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd"
											d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"/>
							</svg>
							广泛支持
						</dt>
						<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
							<p class="flex-auto">兼容OpenAI官方库及多数开源聊天应用。</p>
						</dd>
					</div>
				</dl>
			</div>
		</div>

		<!-- Advantages Section -->
		<div class="bg-white py-24 sm:py-32">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl lg:text-center">
					<h2 class="text-base font-semibold leading-7 text-indigo-600">我们的优势</h2>
					<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						为什么选择我们的API服务
					</p>
				</div>
				<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						<!-- 应用程序接口 -->
						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
								🌍 #1 应用程序接口
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
								<p class="flex-auto">100%使用官方企业高速渠道，已稳定运行1年，承诺永久运营！</p>
								<p class="mt-2">触及8个地区，超过5万客户</p>
							</dd>
						</div>

						<!-- 兼容性与支持 -->
						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
								📝 兼容性与支持
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
								<p class="flex-auto">完全兼容OpenAI接口协议，确保集成无缝。</p>
								<p class="mt-2">无缝对接OpenAI接口支持的应用</p>
							</dd>
						</div>

						<!-- 灵活计费 -->
						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
								💰 灵活计费
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
								<p class="flex-auto">无需担心额度过期或封号风险，MySQL8.2超高并发不限速，智能负载均衡算法，日承接量超100万刀。</p>
								<p class="mt-2">按量计费保障灵活性</p>
							</dd>
						</div>

						<!-- 全球布局 -->
						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
								⚡ 全球布局
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
								<p class="flex-auto">部署于7台离OpenAI最近的CN2线路服务器，自动负载均衡确保快速响应。</p>
								<p class="mt-2">全球用户快速响应</p>
							</dd>
						</div>

						<!-- 服务保障 -->
						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
								⏰ 服务保障
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
								<p class="flex-auto">7*24小时自助充值，确保服务不会中断，支持开发票公对公。</p>
								<p class="mt-2">服务不间断，便捷充值</p>
							</dd>
						</div>

						<!-- 透明计费 -->
						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
								🎈 透明计费
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
								<p class="flex-auto">与官方计费倍率同步，公平无猫腻，性价比最高的API源头，已有70+中转代理。</p>
								<p class="mt-2">无隐藏费用，透明计费</p>
							</dd>
						</div>

						<!-- Midjourney -->
						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
								🎨 Midjourney
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
								<p class="flex-auto">集成反代服务和中文翻译接口，实现高发及快速响应。</p>
								<p class="mt-2">支持最新版Midjourney Proxy Plus</p>
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>

		<!-- Support Section -->
		<div class="bg-white py-24 sm:py-32">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl text-center">
					<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">24/7/365 全天候支持</h2>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						我们时刻恭候您的咨询，提供专业的技术支持和服务保障。
					</p>
					<div class="mt-10 flex items-center justify-center gap-x-6">
						<a href="https://api.gpt2share.com/"
							 class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							立即开始使用
						</a>
						<a href="https://page.gpt2share.com/use-cases/gptapi-qi-ye-zhong-zhuan-fu-wu" class="text-sm font-semibold leading-6 text-gray-900">了解更多 <span aria-hidden="true">→</span></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.gradient-text {
	background: linear-gradient(87deg, rgb(95, 165, 230), rgb(121, 64, 231));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
