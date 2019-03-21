<template>
    <div class="wrap">
        <nav>

        </nav>
        <main>
            final files, boi
        </main>
    </div>
</template>

<script>
    export default {
        name: "FileList",
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
        height: 100%;
        flex-grow: 1;
    }

    .wrap {
        border-radius: $border-rad;
        -webkit-box-shadow: $shadow-settings;
        height: 100%;
        @extend .flex-grow;
    }
</style>
