import Vue from 'vue'
import Router from 'vue-router'
import vmain from '@/components/main'
import vnav1 from '@/components/nav_1'
import vnav2 from '@/components/nav_2'
import list from '@/components/list'
import form from '@/components/form'
import home from '@/components/home'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      component: vmain,

      children:[
        {path:'/',redirect:'nav_1/home'},
        {
        	path:'nav_1',
        	name:'nav_1',
        	component:vnav1,
        	redirect:'nav_1/list',
        	children:[
        		{path:'home',name:'home',component:home},
		        {path:'list',name:'list',component:list},
		        {path:'form',name:'form',component:form},
		      ]
        },
        {
        	path:'nav_2',
        	name:'nav_2',
        	component:vnav2,
        	redirect:'nav_2/form',
        	children:[
		        {path:'/',component:list},
		        {path:'list',component:list},
		        {path:'form',component:form},
		      ]
        },
      ]
    },
    { path: '*', redirect: '/' },
  ]
})
