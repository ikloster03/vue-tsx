import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld'
import * as tsx from 'vue-tsx-support'

@Component({
  name: 'App',
  components: {
    HelloWorld
  }
})
export default class App extends tsx.Component<{}> {
  private test = 'hello world!!!!'
  render(): Vue.VNode {
    return (
      <div>
        <HelloWorld msg={this.test} />
      </div>
    )
  }
}
