import { Component } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld'
import * as tsx from 'vue-tsx-support'
import { getModule } from 'vuex-module-decorators'
import Test from '@/store/modules/test'

@Component({
  name: 'App',
  components: {
    HelloWorld
  }
})
export default class App extends tsx.Component<{}> {
  private test = 'hello world!!!!'
  private testModule!: Test
  public created() {
    this.testModule = getModule(Test, this.$store)
    this.testModule.updateTest('new test')
  }
  public render(): Vue.VNode {
    return (
      <div>
        <HelloWorld
          msg={this.testModule.test}
          num={1}
          obj={{ test: this.test }}
        />
      </div>
    )
  }
}
