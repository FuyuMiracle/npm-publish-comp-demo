<template>
	<fyConfigProvider :locale="locale">
		<div class="fy-card">
			<el-button>我是 fyCard 组件</el-button>
			<el-pagination
				v-model:current-page="currentPage"
				v-model:page-size="pageSize"
				:page-sizes="[100, 200, 300, 400]"
				layout="total,sizes,prev,pager,next,jumper"
			></el-pagination>
		</div>
	</fyConfigProvider>
</template>
<script lang="ts" setup>
import { ref, inject } from "vue";
import fyConfigProvider from "../fyConfigProvider/index";
import { ElButton, ElPagination } from "element-plus";
const locale = inject("$locale");
const currentPage = ref(4);
const pageSize = ref(100);
</script>
<style lang="scss" scoped></style>
