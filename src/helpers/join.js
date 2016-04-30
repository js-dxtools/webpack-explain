import _dropRight from 'lodash/dropRight'
import _last from 'lodash/last'
import _noop from 'lodash/noop'

export default function join(strings, formatStringFn = _noop) {
  if (!strings) {
    return ''
  } else if (strings.length === 1) {
    return formatStringFn(strings[0])
  } else {
    const allButLastJoinedWithComma = _dropRight(strings, 1).map(formatStringFn).join(', ')
    return `${allButLastJoinedWithComma} and ${formatStringFn(_last(strings))}`
  }
}
