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
        const propertyName = node.name ?? node.key
        const newPath = path ? `${path}.${propertyName}` : propertyName
        switch (node.type) {
          case 'added':
            return `Property '${newPath}' was added with value: ${formatValue(node.value)}`
          case 'removed':
            return `Property '${newPath}' was removed`
          case 'updated':
            return `Property '${newPath}' was updated. From ${formatValue(node.value1)} to ${formatValue(node.value2)}`
          default:
            throw new Error(`Unknown type: ${node.type}`)
        }
      })

    return lines.join('\n')
  }

  return iter(diff, '')
}

export default formatPlain
