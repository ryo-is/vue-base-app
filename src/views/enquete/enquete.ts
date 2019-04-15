import { Component, Vue } from "vue-property-decorator"
import { EnqueteAppAPIClass } from "@/gqlServices/enquete_app_api_service"
import {
  EnqueteType
} from "@/types"

@Component({})
export default class Enquete extends Vue {
  public enquete: EnqueteType = null;

  public async created() {
    console.log(this.$route.params.enquete_id)
    this.enquete = await EnqueteAppAPIClass.getEnquete(this.$route.params.enquete_id)
    console.log(this.enquete)
  }
}
