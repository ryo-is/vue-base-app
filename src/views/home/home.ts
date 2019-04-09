import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/helloWorld/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
