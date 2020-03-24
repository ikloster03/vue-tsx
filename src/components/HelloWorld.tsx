import { Component, Prop } from 'vue-property-decorator'
import * as tsx from 'vue-tsx-support'

export interface HelloWorldProps {
  msg: string
}

@Component({
  name: 'HelloWorld'
  // props: {
  //   msg: { type: String, required: true }
  // },
  // render(this: HelloWorld): Vue.VNode {
  //   const { msg } = this.$props
  //   return <div>{msg}</div>
  // }
})
export default class HelloWorld extends tsx.Component<HelloWorldProps> {
  @Prop({ type: String, required: true as true }) private msg!: string
  render(): Vue.VNode {
    // const { msg } = this.$props
    return <div>{this.msg}</div>
  }
}
