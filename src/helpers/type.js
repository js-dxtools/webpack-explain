import find from 'lodash/find'
const typesAndInstances = [
  { instance: Date, type: 'date' },
  { instance: RegExp, type: 'regex' },
  { instance: Boolean, type: 'boolean' },
  { instance: Number, type: 'number' },
  { instance: Array, type: 'array' },
  { instance: Function, type: 'function' },
]

export default function type(value) {
  if (value === null) {
    return 'null'
  }
  const { type: foundType } = find(
    typesAndInstances,
    ({ instance }) => value instanceof instance
  ) || {}
  return foundType || typeof value
}
