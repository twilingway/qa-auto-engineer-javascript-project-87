import formatStylish from './stylish.js'

export default (diff, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return formatStylish(diff)
    default:
      throw new Error(`Unknown format: ${formatName}`)
  }
}
