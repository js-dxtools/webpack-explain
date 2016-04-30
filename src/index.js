import _get from 'lodash/get'
import { docUrl } from './helpers'

import * as properties from './properties'

const steps = [
  properties.entry,
]


export default function describe(config) {
  const executeStep = ({ path, description, body: bodyFn, docs }) => {
    const valueAtPath = _get(config, path)
    return {
      path,
      description,
      code: valueAtPath,
      body: bodyFn(valueAtPath),
      urls: docs && docs.map(docUrl),
    }
  }

  return steps.map(executeStep).filter(description => description)
}
