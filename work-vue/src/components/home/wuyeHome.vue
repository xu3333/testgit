<template>
  <div>
    <nav-menu/>
    <router-view/>
  </div>
</template>

<script>
    import wuyeNavmenu from "./wuyeNavmenu"
    export default {
        name: "wuyeHome",
        components:{wuyeNavmenu}
    }
</script>

<style scoped>

</style>
