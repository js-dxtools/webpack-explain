import { type, join, pluralized } from '../../helpers'

const formatModuleCount = (modules) => {
  if (type(modules) === 'array') {
    return `**${modules.length}** ${pluralized(modules.length, 'module')}`
  } else {
    return '**1** module'
  }
}

export default {
  path: 'entry',
  description: 'Defines one or multiple entry points for the bundle.',
  body: (entry) => {
    let s = ''
    if (type(entry) === 'object') {
      const entryNames = Object.keys(entry)
      if (entryNames.length === 1) {
        s += `You defined one entry point called **${entryNames[0]}**. `
        const modules = entry[entryNames[0]]
        s += `You have ${formatModuleCount(modules)}` +
            ' which will be loaded on startup of this entry.'
      } else {
        const entryPointNamesFormatted = join(entryNames, (s_) => `**${s_}**`)
        s += `You defined ${entryNames.length} entry points called ${entryPointNamesFormatted}.\n`
        s += entryNames.map((entryName) => {
          const modules = entry[entryName]
          return ` - **${entryName}** has ${formatModuleCount(modules)} ` +
            'which will be loaded on its startup.'
        }).join('\n')
      }
      s += [
        '\n\n2 Notes:',
        ' - In case of arrays the last entry will be exported.',
        ' - Remember to override `output.filename` using the [name] placeholder. ' +
            'Look at the first link for more info.',
      ].join('\n')
    } else if (type(entry) === 'array') {
      s += `You have ${formatModuleCount(entry)}` +
            ' which will be loaded on startup. The last one will be exported.'
    } else if (type(entry) === 'string') {
      s += `**${entry}** is the bundle entry.`
    }

    return s
  },
  docs: ['multiple-entry-points.html', 'configuration.html#entry'],
}

