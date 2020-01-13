<template>
  <div>
    <yezhu-navmenu></yezhu-navmenu>
    <router-view></router-view>
  </div>
</template>

<script>
    import yezhuNavmenu from "./yezhuNavmenu";
    export default {
        name: "yezhuHome",
        components:{yezhuNavmenu}
    }
</script>

<style scoped>

</style>
