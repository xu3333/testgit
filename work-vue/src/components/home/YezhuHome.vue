<template>
  <div>
    <yezhu-navmenu></yezhu-navmenu>
    <router-view></router-view>
  </div>
</template>

<script>
    import yezhuNavmenu from "./YezhuNavmenu";
    export default {
        name: "yezhuHome",
        components:{yezhuNavmenu}
    }
</script>

<style scoped>

</style>
