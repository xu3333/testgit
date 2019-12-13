<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <SideMenu @indexSelect="listByCategory" ref="sideMenu"></SideMenu>
    </el-aside>
    <el-main>
      <books class="books-area" ref="booksArea"></books>
    </el-main>
  </el-container>
</template>

<script>
    import SideMenu from '../common/SideMenu'
    import Books from '../common/Books'

    export default {
        name: 'AppLibrary',
        components: {Books, SideMenu},
        methods: {
            listByCategory () {
                let _this = this
                let cid = this.$refs.sideMenu.cid
                let url = 'categories/' + cid + '/books'
                this.$axios.get(url).then(resp => {
                    if (resp && resp.status === 200) {
                        _this.$refs.booksArea.books = resp.data
                    }
                })
            }
        }
    }
</script>

<style scoped>
  .books-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

