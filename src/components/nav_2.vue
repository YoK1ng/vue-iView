<template>
	<Layout>
		 <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :style="{background: '#fff'}">
			<Menu active-name="1-2" theme="light" width="auto" :style="{height:'100%'}" :class="menuitemClasses" :open-names="['1']">
				<Submenu name="1">
					<template slot="title">
						<Icon type="ios-navigate"></Icon>
						信息
					</template>
					<MenuItem name="1-1" :style="{paddingLeft:'0px'}"><router-link :to="{name:'list'}"><Icon type="document-text"></Icon> 表格</router-link></MenuItem>
					<MenuItem name="1-2" :style="{paddingLeft:'0px'}"><router-link :to="{name:'form'}"><Icon type="document-text"></Icon> 表单</router-link></MenuItem>
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
		data () {
            return {
                isCollapsed: false
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        }
	}
</script>

<style scoped="">
	.ivu-layout-sider{
		z-index: 2;
	}
	li.ivu-menu-item{
		padding: 0px;
	}
	a{
		width: 100%;
		height: 100%;
		display: block;
		padding: 14px 24px;
		color: #444;
	}
	.router-link-active{
		color: #2d8cf0;
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