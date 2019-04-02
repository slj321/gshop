<template>
	<div class="footer-guide">
		<a href="javascript:void(0);" class="guide_item" :class="{on:'/msite'===$route.path}" @click="goTo('./msite')">
			<span class="item_icon">
				<i class="iconfont icon-waimai"></i>
			</span> 
			<span>外卖</span>
		</a>
		<a href="javascript:void(0);" class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
			<span class="item_icon">
				<i class="iconfont icon-search"></i>
			</span>
			<span>搜索</span>
		</a>
		<a href="javascript:void(0);" class="guide_item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
			<span class="item_icon">
				<i class="iconfont icon-order"></i>
			</span>
			<span>订单</span>
		</a>
		<a href="javascript:void(0);" class="guide_item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
			<span class="item_icon">
				<i class="iconfont icon-personal"></i>
			</span>
			<span>我的</span>
		</a>
	</div>
</template>

<script>
	export default{
		methods:{
			goTo(path){
				this.$router.replace(path)
			}
		}
	}
</script>

<style>	
	.footer-guide{border-top: 1px solid #e4e4e4;position: fixed;z-index: 100;left: 0;right: 0;bottom: 0;background-color: #fff;width: 100%;height: 50px;display: flex;}
	.footer-guide .guide_item{display: flex;flex: 1;text-align: center;flex-direction: column; align-items: center;margin: 5px;color: #999;}
	.footer-guide .guide_item.on{color: #02a774;}
	.footer-guide .guide_item span{font-size: 12px;margin-top: 2px;margin-bottom: 2px;}
	.footer-guide .guide_item span .iconfont{font-size: 22px;}
</style>