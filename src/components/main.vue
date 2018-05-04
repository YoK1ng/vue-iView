<style scoped lang="less">
	.layout {
		position: fixed;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}

	.ivu-layout {
		width: 100%;
		height: 100%;
	}

	.ivu-layout-header {
		padding: 0px 20px;
		background: #2d8cf0;
		box-shadow: 1px 1px 5px #999;
		position: relative;
		z-index: 3;
	}

	.layout-logo {
		color: #fff;
		font-size: 22px;
		float: left;
	}

	.ivu-menu {

		.ivu-menu-item{
			padding: 0px;
		}
		a {
			color: #fff;
			float: left;
			height: 100%;
			width: 100%;
			position: relative;
			z-index: 2;
			padding: 2px 20px 2px 40px;
		}
		i {
			position: absolute;
			top: 26px;
			left: 23px;
			z-index: 1;
		}
		.ivu-menu-item-active {
			background: rgba(255, 255, 255, 0.2);
		}
	}
	.ivu-menu-dark{
		background: none;
	}
	button{
		border: 0px;
		background: none;
		cursor: pointer;
	}
</style>
<template>
	<div class="layout">
		<Layout>
			<Header>
				<Row>
					<Col span="3">
						<div class="layout-logo">VUE-IVIEW </div>
					</Col>

					<Col span="18">
						<Menu mode="horizontal" theme="dark" active-name="1" :style="{margin:'0px auto',width:navW}">
							<MenuItem name="1">
							<Icon type="ios-navigate"></Icon>
							<router-link :to="{name:'home'}">首页</router-link>
							</MenuItem>
							<MenuItem name="2">
							<Icon type="ios-keypad"></Icon>
							<router-link :to="{name:'nav_2'}">系统</router-link>
							</MenuItem>
							<MenuItem name="3">
							<Icon type="ios-analytics"></Icon>
							<router-link :to="{name:'nav_1'}">模板</router-link>
							</MenuItem>
							<MenuItem name="4">
							<Icon type="ios-paper"></Icon>
							<router-link :to="{name:'nav_2'}">会员</router-link>
							</MenuItem>
						</Menu>
					</Col>

					<Col span="3">
						<Dropdown :style="{float: 'right'}">
							<a href="javascript:void(0)" :style="{color:'#fff'}">
								<Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" /> admin
								<Icon type="arrow-down-b"></Icon>
							</a>
							<DropdownMenu slot="list">
								<DropdownItem>个人设置</DropdownItem>
								<DropdownItem>修改密码</DropdownItem>
								<DropdownItem disabled>VIP用户</DropdownItem>
								<DropdownItem divided>退出系统</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</Col>
				</Row>

			</Header>
			<Layout>
				<transition name="fade" mode="out-in">
					<router-view/>
				</transition>
			</Layout>
		</Layout>
	</div>
</template>
<script>
	import nav_1 from "@/components/nav_1"

	export default {
		components:{
			nav_1
		},
		data() {
			return {
				navW:'400px',
			}
		},
	}
</script>