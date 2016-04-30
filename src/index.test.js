import pacConfig from '../test/example-configs/pac.development'
import describeConfig from './'

describe('describe', () => {
  it('describes a config', () => {
    const description = describeConfig(pacConfig)
    console.info('[index.test.js] description: ', description)
  })
})
