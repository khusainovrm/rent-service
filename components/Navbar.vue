<template>
  <div class="navbar">
    <div class="logo">
      Pepelane
    </div>
    <div class="moto">
      World's first affordable airshring
    </div>
    <div class="icons-container">
      <div class="icon-nightmode ml-10">
        Night node
      </div>
      <div class="icon-message ml-10">
        Message
      </div>
      <div class="icon-bell ml-10">
        Bell
      </div>
      <div class="icon-profile ml-10">
        Bessie Cooper
        photo-image
      </div>
    </div>
  </div>
</template>


<script>
export default {
}
</script>

<style scoped>
.navbar{
  width: 100%;
  background: gold;
  height: 46px;
  display: flex;
  align-items: center;
}

.icons-container {
  display: flex;
}
.logo, .moto {
  flex-grow: 1;
}
</style>
