<template>
	<Layout>
		<Sider :style="{background:'#fff'}">
			<Menu active-name="1-1" theme="light" width="auto" :style="{height:'100%'}" :open-names="['1']">
				<Submenu name="1">
					<template slot="title">
						<Icon type="ios-navigate"></Icon>
						<span>系统</span>
					</template>
					<MenuItem name="1-1" :style="{paddingLeft:'25px'}">
						<Icon type="document-text"></Icon>
                        <span><router-link :to="{name:'list'}">表格</router-link></span>
					</MenuItem>
					<MenuItem name="1-2" :style="{paddingLeft:'25px'}">
						<Icon type="document-text"></Icon>
						<span><router-link :to="{name:'form'}">表单</router-link></span>
					</MenuItem>
				</Submenu>
				<Submenu name="2">
					<template slot="title">
						<Icon type="ios-navigate"></Icon>
						<span>用户</span>
					</template>
					<MenuItem name="2-1" :style="{paddingLeft:'25px'}">
						<Icon type="document-text"></Icon>
                        <span><router-link :to="{name:'list'}">表格</router-link></span>
					</MenuItem>
					<MenuItem name="2-2" :style="{paddingLeft:'25px'}">
						<Icon type="document-text"></Icon>
						<span><router-link :to="{name:'form'}">表单</router-link></span>
					</MenuItem>
				</Submenu>
				<Submenu name="3">
					<template slot="title">
						<Icon type="ios-navigate"></Icon>
						<span>信息</span>
					</template>
					<MenuItem name="3-1" :style="{paddingLeft:'25px'}">
						<Icon type="document-text"></Icon>
                        <span><router-link :to="{name:'list'}">表格</router-link></span>
					</MenuItem>
					<MenuItem name="3-2" :style="{paddingLeft:'25px'}">
						<Icon type="document-text"></Icon>
						<span><router-link :to="{name:'form'}">表单</router-link></span>
					</MenuItem>
				</Submenu>
			</Menu>
		</Sider>
		<Layout :style="{padding: '24px'}">
			<transition name="fade" mode="out-in">
				<router-view/>
			</transition>
		</Layout>
	</Layout>
</template>

<script>
	export default {

	}
</script>

<style scoped="">
	.ivu-layout-sider {
		z-index: 2;
	}

	a {
		color: #444;
	}

	.router-link-active {
		color: #2d8cf0;
	}

	 .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }

</style>