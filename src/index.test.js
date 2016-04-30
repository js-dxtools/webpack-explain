import pacConfig from '../test/example-configs/pac.development'
import describeConfig from './'
import { printDescription } from './output'
import chalk from 'chalk'

describe('describe', () => {
  it('describes a config', () => {
    console.info(chalk.black('\n\n----------------------------------------------------------\n\n'))
    const description = describeConfig(pacConfig)
    printDescription(description)
    console.info(chalk.black('\n\n----------------------------------------------------------\n\n'))
  })
})
