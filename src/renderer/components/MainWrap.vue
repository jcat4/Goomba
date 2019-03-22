<template>
    <div class="wrapper">
        <main class="main-wrap">

            <!-- ======================== LEFT ======================== -->
            <section class="left">
                <!--todo probably turn inputs into slots-->
                <div class="item">
                    <div class="input-description">Output File Destination</div>
                    <div class="input-wrap">
                        <input type="text" class="input">
                        <div class="button--input" @click="setOutputDir">
                            <font-awesome-icon icon="folder" />
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="input-description">Output File Name</div>
                    <div class="input-wrap">
                        <input type="text" class="input">
                    </div>
                </div>

                <div class="item folder-tree">
                    <FolderTree></FolderTree>
                </div>

                <div class="item file-select">
                    <FileSelect></FileSelect>
                </div>

            </section>

            <!-- ======================== MIDDLE ======================== -->
            <section class="middle">
                <div class="button--add-remove">
                    Add
                </div>

                <div class="button--add-remove">
                    Remove
                </div>

                <div class="button--clear">
                    Clear
                </div>
            </section>

            <!-- ======================== RIGHT ======================== -->
            <section class="right">
                <div class="item">
                    <div class="input-check-wrap">
                        <input type="checkbox" class="checkbox">
                        <!--<span class="checkmark"></span>-->
                        <div class="input-description">Splash Screen</div>
                    </div>
                    <div class="input-wrap">
                        <input type="text" class="input">
                        <div class="button--input">
                            <font-awesome-icon icon="folder" />
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="input-description">Configs</div>
                    <div class="load-save">
                        <span class="button--load-save">Load</span>
                        <span class="input-wrap--inline">
                            <input type="text" class="input">
                            <div class="button--input">
                                 <font-awesome-icon icon="folder" />
                            </div>
                        </span>
                    </div>
                    <div class="load-save">
                        <span class="button--load-save">Save</span>
                        <span class="input-wrap--inline">
                            <input type="text" class="input">
                            <div class="button--input">
                                 <font-awesome-icon icon="folder" />
                            </div>
                        </span>
                    </div>
                </div>

                <div class="item file-list-final">
                    <FinalList></FinalList>
                </div>
            </section>
        </main>

        <footer>
            <div class="button--compile">
                Compile!
            </div>
        </footer>
    </div>
</template>

<script>
    import FolderTree from './MainWrap/FolderTree'
    import FileSelect from './MainWrap/FileSelect'
    import FinalList from './MainWrap/FinalList'

    const electron = require("electron")
    const dialog = electron.remote.dialog

    export default {
        name: 'main-wrap',
        components: {FolderTree, FileSelect, FinalList},
        methods: {
            openFolder() {
                return dialog.showOpenDialog({ properties: ['openDirectory'] })
            },
            setOutputDir() {
                console.log(this.openFolder())
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
    @import "../global_vars";

    /*========= Main Window =========*/

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
        box-sizing: border-box;
        overflow-y: hidden;
    }

    .wrapper {
        height: 100vh;
        width: 100vw;
    }

    .main-wrap {
        display: flex;
        justify-content: space-between;
        height: calc(100vh - 80px);
        padding: $main-padding;
        background: #fbfbfb;
    }

    /*for testing*/
    .block {
        /*outline: 1px solid black;*/
        margin: 5px;
        margin: 0;
    }

    /*========= Left, Middle, Right, Bottom Pieces =========*/

    .left, .middle, .right {
        display: flex;
        flex-flow: column;
    }

    .left {
        padding-right: $inner-padding;
    }

    .middle {
        width: 50%;
        min-width: 100px;
        max-width: 200px;
        padding: 0 $inner-padding;
        justify-content: flex-end;
    }

    .right {
        padding-left: $inner-padding;
    }

    .left, .right {
        width: 50%;
        min-width: 250px;
    }

    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 80px;
        border-top: 1px solid #f2f2f2;
        display: flex;
        z-index: 50;
        // todo set background or some other styling
    }

    /*========= Global =========*/

    .item {

    }

    .item--flex {
        display: flex;
    }

    .item:not(:first-of-type) {
        margin-top: $main-padding;
    }

    /*========= Inputs =========*/

    $wrap-height: 30px;
    $input-height: 25px;

    .input-wrap {
        height: $wrap-height;
        border-radius: $border-rad;
        background: white;
        -webkit-box-shadow: $shadow-settings;
        display: flex;
        align-items: center;
        padding: 0 5px;
    }

    .input-wrap--inline {
        @extend .input-wrap;
        display: inline-flex;
        margin-left: $main-padding;
        flex-grow: 1;
        min-width: 0;
    }

    .input {
        flex-grow: 1;
        outline: none;
        border: none;
        border-radius: $border-rad;
        height: $input-height;
        font-size: 1em;
        margin-right: 5px;
        min-width: 0;
    }

    .input-description {
        color: grey;
        font-size: 0.8rem;
        margin-bottom: 3px;
        display: inline-block;
    }

    .input-check-wrap {
        display: flex;
        align-items: center;
        margin-bottom: 3px;
    }

    .input-check-wrap > input {
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        margin-right: 5px;
        background-color: #eee;
    }

    /*========= Buttons =========*/

    $compile-btn-height: 40px;

    .button--compile {
        background: #4edd6b;
        color: white;
        border-radius: 500px;
        line-height: $compile-btn-height;
        height: $compile-btn-height;
        width: 50%;
        min-width: 130px;
        max-width: 300px;
        margin: auto;
        text-align: center;
        -webkit-box-shadow: $shadow-settings;
    }

    .button--compile:active,
    .button--compile:hover {
        cursor: pointer;
    }

    .button--input {
        min-width: $input-height; // need this for inline inputs
        width: $input-height;
        height: $input-height;
        display: inline-block;
        border-radius: $border-rad;
        text-align: center;
        line-height: $input-height;
        border: 2px solid $main-color;
        cursor: pointer;
        color: $main-color;
    }

    .middle div {
        margin-top: $main-padding;
    }

    .button--add-remove {
        border-radius: 500px;
        -webkit-box-shadow: $shadow-settings;
        padding: 7px;
        text-align: center;
        background-color: $main-color;
        color: white;
    }

    .button--add-remove:hover,
    .button--add-remove:active {
        cursor: pointer;
    }

    .button--clear {
        border-radius: 500px;
        border: 1.5px solid $main-color;
        text-align: center;
        color: $main-color;
        -webkit-box-shadow: $shadow-settings;
    }

    .button--clear:hover,
    .button--clear:active {
        cursor: pointer;
    }

    $load-save-btn-height: $input-height + 5; // account for input "padding" :/

    .button--load-save {
        background-color: $main-color;
        color: white;
        display: inline-block;
        border-radius: 500px;
        height: $load-save-btn-height;
        line-height: $load-save-btn-height;
        min-width: 60px;
        text-align: center;
        -webkit-box-shadow: $shadow-settings;
    }

    .button--load-save:hover,
    .button--load-save:active {
        cursor: pointer;
    }

    /*========= Component Item Wrappers =========*/

    .folder-tree {
        height: 30%;
    }

    .file-select {
        @extend .flex-grow;
    }

    .load-save {
        display: flex;
        align-items: center;
    }

    .load-save:last-of-type {
        margin-top: $main-padding;
    }

    .file-list-final {
        @extend .flex-grow;
    }


</style>
