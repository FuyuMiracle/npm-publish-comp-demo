<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
</script>

<template>
	<fyConfigProvider :locale="zhCn">
		<HelloWorld />
	</fyConfigProvider>
</template>

<style scoped></style>
