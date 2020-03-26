import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'test' })
export default class TestModule extends VuexModule {
  public test = ''

  public get isEmpty() {
    return this.test.length === 0
  }

  @Action
  public async updateTest(test: string) {
    const newTest = await new Promise(resolve => {
      setTimeout(() => {
        resolve(test)
      }, 5000)
    })

    this.context.commit('setTest', newTest)
  }

  @Mutation
  public setTest(test: string) {
    this.test = test
  }
}
