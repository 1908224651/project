<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
let navmenu1 = ref()
let navmenu2 = ref()
import { useRouter } from 'vue-router'
const router = useRouter()
onMounted(async () => {
	//   let res = await axios.get('http://127.0.0.1:7003/api/navmenu1'); //请求地址
	//   let res1 = await axios.get('http://127.0.0.1:7003/api/navmenu2');
	//   navmenu1.value = res.data;
	//   navmenu2.value = res1.data;
	//   console.log( navmenu1.value);
})
const baodan = () => {
	router.push({
		path: '/find'
	})
}
const jiedan = () => {
	router.push({
		path: '/message'
	})
}
const workOrder = () => {
	router.push({
		path: '/workOrder'
	})
}
</script>

<template>
	<div style="height: 100%">
		<ul class="ulBox">
			<li @click="baodan" class="liBox"><img class="colorOne imgBox" src="@/assets/images/first.png" alt="" /><span>报单</span></li>
			<li @click="jiedan" class="liBox"><img class="colorTwo imgBox" src="@/assets/images/second.png" alt="" /><span>接单</span></li>
			<li @click="workOrder" class="liBox"><img class="colorThree imgBox" src="@/assets/images/third.png" alt="" /><span>我的工单</span></li>
		</ul>
	</div>
</template>

<style scoped>
.ulBox {
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 55px;
	margin-top: 20px;
}
.imgBox {
	width: 50px;
	height: 50px;
}
.liBox {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.flexColumn {
	display: flex;
	flex-direction: column;
}
.box {
	background-color: #47afa4;
	flex: 2;
	width: 200px;
	height: 100px;
	margin: 10px;
	border-radius: 8px;
}
.boxBottom {
	background-color: #65b9e9;
	width: 200px;
	height: 100px;
	margin: 10px;
	border-radius: 8px;
}
.dashboadrd-collapse {
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	width: 100%;

	.dashboadrd-collapse-handle {
		width: 20px;
		visibility: visible;
	}

	.dashboadrd-detail-list {
		transition: all 0.3s ease-in-out;
		width: 100%;
		height: 100%;
		padding: 20px 24px;
	}

	&.is-collapsed {
		width: 20px;

		.dashboadrd-detail-list {
			width: 0;
			padding: 0;
		}
	}
}
.dashboadrd-total-group {
	margin: 0 16px;

	& > p {
		font-size: 16px;
		font-weight: bold;
		line-height: 24px;
		margin: 0 0 10px 0;
		white-space: nowrap;
	}

	& > .detail {
		font-size: 24px;
		font-weight: bold;
		line-height: 24px;

		.unit {
			font-size: 14px;
			font-weight: normal;
		}
	}
}
</style>
<style scoped>
/* p{
	font-size: 20px;
} */
.dashboadrd {
	font-size: 14px;
	width: 100%;
	height: 200px;
}
.flexColumn {
	display: flex;
	flex-direction: column;
}

.flexRow {
	display: flex;
	flex-direction: row;
}
.flex1 {
	flex: 1;
}
.flexWidth {
	flex: 1 90px;
}
.cardm10 {
	margin: 5px;
	border-radius: 5px;
}
.cardBox {
	flex: 1;
}
.colorOne {
	background-color: #2db13b;
}
.colorTwo {
	background-color: #65b9e9;
}
.colorThree {
	background-color: #47afa4;
}
.colorFour {
	background-color: #ffa600;
}
.font {
	font-size: 18px;
	color: white;
	font-weight: bold;
}
.img {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.jcCenter {
	justify-content: center;
}
.dashboadrd-panel {
	display: flex;
	font-size: 14px;
	width: 300px;
	align-items: center;
	flex: 1;
	padding: 20px 24px;
	margin-bottom: 8px;
	border-radius: 8px;
	color: #fff;
	overflow: hidden;
	position: relative;

	& + & {
		margin-left: 8px;
	}

	& > img {
		width: 40px;
		height: 40px;
		border-radius: 100%;
	}

	.dashboadrd-total-group {
		margin: 0 16px;

		& > p {
			font-size: 16px;
			font-weight: bold;
			line-height: 24px;
			margin: 0 0 10px 0;
			white-space: nowrap;
		}

		& > .detail {
			font-size: 24px;
			font-weight: bold;
			line-height: 24px;

			.unit {
				font-size: 14px;
				font-weight: normal;
			}
		}
	}

	.dashboadrd-collapse {
		background-color: inherit;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex: 1;
		width: 0;
	}
	.dashboadrd-collapse-handle {
		flex: none;
		width: 0;
		height: 100%;
		box-shadow: -4px 0 4px 4px rgba(0, 0, 0, 0.22);
		border-radius: 0 8px 8px 0;
		display: flex;
		align-items: center;
		justify-content: center;
		visibility: hidden;
		cursor: pointer;
	}
	.dashboadrd-detail-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 70px;

		& > li {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			list-style: none;
			line-height: 24px;
			font-size: 14px;
		}
	}
}

.cursor-handle {
	cursor: pointer;
}

.bg-style-11 {
	background: #2db13b;
}

.bg-style-12 {
	background: #ff777c;
}

.bg-style-13 {
	background: #65b9e9;
}

.bg-style-14 {
	background: #ffa600;
}

.bg-style-15 {
	background: #47afa4;
}

.bg-style-16 {
	background: #7483ff;
}
@media screen and (max-width: 1300px) {
	.dashboadrd-collapse-handle {
		width: 20px;
		visibility: visible;
	}
	.dashboadrd-collapse {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
	}
	.dashboadrd-detail-list {
		transition: all 0.3s ease-in-out;
		width: 100%;
		height: 100%;
		padding: 20px 24px;
	}
	.dashboadrd-panel {
		&.is-collapsed {
			width: 20px;
		}
	}
}
.dashboadrd-detail-list {
	width: 0;
	padding: 0;
}
</style>
