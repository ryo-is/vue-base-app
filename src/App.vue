<template lang="pug">
  #app
    router-view
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import {
  EnqueteHistoriesType
} from "@/types"

@Component({})
export default class App extends Vue {

  public created() {
    const enqueteHistories: EnqueteHistoriesType | null = JSON.parse(localStorage.getItem("history"))
    if (enqueteHistories === null) {
      this.initEnqueteHistories()
    }
  }

  /**
   * アンケート履歴の初期化
   */
  public initEnqueteHistories() {
    const initHistories: EnqueteHistoriesType = {
      enqueteIds: []
    }
    localStorage.setItem("history", JSON.stringify(initHistories))
  }
}
</script>


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
