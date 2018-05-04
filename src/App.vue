<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	.fade-enter {
	  opacity:0;
	}
	.fade-leave{
	  opacity:1;
	}
	.fade-enter-active{
	  transition:opacity .5s;
	}
	.fade-leave-active{
	  opacity:0;
	  transition:opacity .5s;
	}
</style>
