const formatValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]'
  }
  if (typeof value === 'string') {
    return `'${value}'`
  }
  return String(value)
}

const formatPlain = (diff) => {
  const iter = (currentValue, path) => {
    const lines = currentValue
      .filter(node => node.type !== 'unchanged')
      .map((node) => {
        const newPath = path ? `${path}.${node.key}` : node.key
        switch (node.type) {
          case 'added':
            return `Property '${newPath}' was added with value: ${formatValue(node.value)}`
          case 'removed':
            return `Property '${newPath}' was removed`
          case 'changed':
            return `Property '${newPath}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`
          case 'nested':
            return iter(node.children, newPath)
          default:
            throw new Error(`Unknown type: ${node.type}`)
        }
      })

    return lines.join('\n')
  }

  return iter(diff, '')
}

export default formatPlain
