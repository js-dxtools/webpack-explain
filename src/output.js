/* eslint-disable prefer-template */
import chalk from 'chalk'
import indentString from 'indent-string'
import wrap from 'wordwrap'
import jsonStringify from 'json-stringify-pretty-compact'

const STYLES = {
  path: 'yellow',
  url: 'gray',
  highlight: 'green',
  code: 'gray',
}
const WIDTH = 100
const wrapText = (s, times) => wrap(times * 2, WIDTH)(s)
const indent = (s, times) => indentString(s, '  ', times)

export function formatUrls(urls) {
  return `\n${chalk.italic[STYLES.url](urls.join('\t'))}`
}

export function formatPath(path, bold = false) {
  const base = `${chalk[STYLES.path](path)}`
  return bold ? chalk.bold(base) : base
}

export function formatCode(code) {
  const codeJson = jsonStringify(code).trim()
  return chalk[STYLES.code](`${codeJson}\n`)
}

export function formatText(text) {
  return text
    .replace(/\*\*([^\*]+)\*\*/g, chalk[STYLES.highlight]('$1'))
    .replace(/`([^`]+)`/, formatPath('$1')) + '\n'
}

export function printDescription(wholeDescription) {
  console.info('')
  wholeDescription.forEach(({ path, body, description, urls, code }) => {
    const indentAmount = path.split('.').length + 1
    const formattedTitle = wrapText(
      `${formatPath(path, true)}: ${formatText(description)}`, indentAmount)
    const formattedCode = indent(`${formatCode(code)} `, indentAmount + 1)
    const formattedBody = wrapText(
      `${formatText(body)} ` +
      `${formatUrls(urls)}`,
      indentAmount
    )
    console.info(formattedTitle)
    console.info(formattedCode)
    console.info(formattedBody)
  })
  console.info('')
}
