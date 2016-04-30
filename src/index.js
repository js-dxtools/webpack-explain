import _get from 'lodash/get'

const steps = [
  {
    path: 'resolve',
    description: (resolve) => `${JSON.stringify(resolve)} is awesome.`,
  },
]


export default function describe(config) {
  const executeStep = ({ path, description: descriptionFn }) => {
    const valueAtPath = _get(config, path)
    return descriptionFn(valueAtPath)
  }

  return steps.map(executeStep).filter(description => description)
}
