import { Component, Prop } from 'vue-property-decorator'
import * as tsx from 'vue-tsx-support'

export interface TestObj {
  test: string
}
export interface HelloWorldProps {
  msg: string
  num: number
  obj: TestObj
}

@Component({
  name: 'HelloWorld'
})
export default class HelloWorld extends tsx.Component<HelloWorldProps> {
  @Prop() private msg!: string
  @Prop() private num!: number
  @Prop() private obj!: TestObj

  render(): Vue.VNode {
    return (
      <div>
        <div>
          {this.msg}: {this.num}
        </div>
        <div>{this.obj.test}</div>
      </div>
    )
  }
}
