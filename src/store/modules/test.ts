import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'test' })
export default class TestModule extends VuexModule {
  public test = ''

  public get isEmpty() {
    return this.test.length === 0
  }

  @Action
  public updateTest(test: string) {
    this.context.commit('setTest', test)
  }

  @Mutation
  public setTest(test: string) {
    this.test = test
  }
}
