<template>
	<el-config-provider :locale="locale">
		<slot></slot>
	</el-config-provider>
</template>

<script lang="ts" setup>
import { ElConfigProvider } from "element-plus";
defineProps({
	locale: {
		//语言包
		type: Object,
	},
});
</script>
