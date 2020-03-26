import { Component } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld'
import * as tsx from 'vue-tsx-support'
import { getModule } from 'vuex-module-decorators'
import Test from '@/store/modules/test'
const IS_LOAD = 'app is load'
@Component({
  name: 'App',
  components: {
    HelloWorld
  }
})
export default class App extends tsx.Component<{}> {
  private test = 'hello world!!!!'
  private testModule!: Test
  public async created() {
    this.$wait.start(IS_LOAD)
    this.testModule = getModule(Test, this.$store)
    await this.testModule.updateTest('new test')
    this.$wait.end(IS_LOAD)
  }
  public render(): Vue.VNode {
    return (
      <v-wait for={IS_LOAD}>
        <template slot="waiting"> Waiting...</template>
        <HelloWorld
          msg={this.testModule.test}
          num={1}
          obj={{ test: this.test }}
        />
      </v-wait>
    )
  }
}
