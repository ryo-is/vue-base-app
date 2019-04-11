<template lang="pug">
  #app
    router-view
</template>

<style lang="scss">
@import "./config/config_setting";

body {
  background-color: $basic-dark-color;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $basic-light-color;
}
</style>
