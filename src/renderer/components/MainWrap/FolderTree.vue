<template>
  <div class="wrap">
    <nav>

    </nav>
    <main>
      folders, boi
    </main>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../global_vars";

  nav {
    @extend .item-nav;
  }

  main {
    /*height: 100%;*/
  }

  .wrap {
    border-radius: $border-rad;
    -webkit-box-shadow: $shadow-settings;
    height: 100%;
  }
</style>
