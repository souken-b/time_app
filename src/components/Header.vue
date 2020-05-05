<template>
  <div class="header">
    <div class="header_inner">
        <img class="title_img" src="@/assets/title.png">
      <div class="header_navitem">
        <img class="setting_btn" src="@/assets/setting_button.png">
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
  .title_img {
    width: 150px;
    height: 75px;
    flex: none;
    margin-left: 15%;
  }
  .setting_btn {
    width: 160px;
    height: 80px;
  }
  .header {
    margin-top: 5%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header_inner {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .header_navitem {
    margin-left: auto;
    margin-right: 10%;
    display: inline-flex;
  }
</style>
