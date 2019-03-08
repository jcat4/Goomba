<template>
  <div class="wrapper">
    <main>
      <section class="left">

        <!--todo probably turn inputs into slots-->
        <div class="item">
          <div class="input-description">Output File Destination</div>
          <div class="input-wrap">
            <input type="text" class="input in--output-dest">
            <div class="button--input">oi</div>
          </div>
        </div>

        <div class="item">
          <div class="input-description">Output File Name</div>
          <div class="input-wrap">
            <input type="text" class="input in--output-dest">
          </div>
        </div>

        <div class="item">
          <FolderTree></FolderTree>
        </div>

      </section>

      <section class="middle">
        middle
      </section>

      <section class="right">
        right
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
  import FolderTree from './LandingPage/FolderTree'

  export default {
    name: 'landing-page',
    components: { FolderTree },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  $main-color: orange;

  $main-padding: 10px;
  $inner-padding: ($main-padding / 2);

  $shadow-settings: 0 0 5px 1px rgba(0,0,0,0.1);

  /*========= Main Window =========*/

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    box-sizing: border-box;
  }

  .wrapper {
    height: 100vh;
    width: 100vw;
  }

  main {
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

  .left {
    /*background: red;*/
    padding-right: $inner-padding;
  }

  .middle {
    background: white;
    width: 50%;
    min-width: 100px;
    max-width: 200px;
    padding: 0 $inner-padding;
  }

  .right {
    padding-left: $inner-padding;
    background: blue;
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
    border-top: 1px solid black;
    display: flex;
    z-index: 50;
    // todo set background or some other styling
  }

  /*========= Global =========*/

  .item {

  }

  .item:not(:first-of-type) {
    margin-top: $main-padding;
  }

  /*========= Inputs =========*/

  $wrap-height: 30px;
  $input-height: 25px;

  .input-wrap {
    height: $wrap-height;
    border-radius: 5px;
    background: white;
    -webkit-box-shadow: $shadow-settings;
    display: flex;
    align-items: center;
    padding: 0 5px;
    /*border: 1px solid green;*/
  }

  .input {
    /*width: 80%;*/
    flex-grow: 1;
    outline: none;
    border: none;
    /*border: 1px solid lightgrey;*/
    border-radius: 5px;
    /*-webkit-box-shadow: $shadow-settings;*/
    height: $input-height;
    /*display: inline-block;*/
    font-size: 1em;
    /*background: blue;*/
    margin-right: 5px;
  }

  .input-description {
    color: grey;
    font-size: 0.8rem;
    margin-bottom: 3px;
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
    width: $input-height;
    height: $input-height;
    display: inline-block;
    border-radius: 5px;
    text-align: center;
    line-height: $input-height;
    border: 1px solid $main-color;
    cursor: pointer;
  }
</style>
