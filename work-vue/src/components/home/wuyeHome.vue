<template>
  <div>
    <wuye-navmenu></wuye-navmenu>
    <router-view/>
  </div>
</template>

<script>
    import wuyeNavmenu from "./wuyeNavmenu";
    export default {
        name: "wuyeHome",
        components:{wuyeNavmenu}
    }
</script>

<style scoped>

</style>
