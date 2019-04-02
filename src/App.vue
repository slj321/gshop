<template>
	<!--上面是路由部分，下面是导航链接部分-->
	<div>    
		<router-view/>
		<FooterGuide v-show="$route.meta.showFooter"/>
	</div>
</template>

<script>
	import FooterGuide from './components/FooterGuide/FooterGuide.vue'
	export default{     //映射成标签
		components:{
			FooterGuide
		}
	}
</script>

<style>

</style>