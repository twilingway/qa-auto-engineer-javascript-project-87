const stringify = (value, level) => {
  if (typeof value !== 'object' || value === null) {
    return value
  }

  const indentForKeys = '    '.repeat(level)
  const indentForBracket = '    '.repeat(level - 1)

  const lines = Object.entries(value).map(([key, val]) => {
    return `${indentForKeys}${key}: ${stringify(val, level + 1)}`
  })

  return `{\n${lines.join('\n')}\n${indentForBracket}}`
}

const formatStylish = (diff) => {
  const iter = (currentValue, level) => {
    const spaceForAddedDeleted = ' '.repeat(level * 4 - 2)
    const spaceForUnchangedNested = ' '.repeat(level * 4)
    const indentForBracket = '    '.repeat(level - 1)

    const lines = currentValue.map((node) => {
      const formattedValue = stringify(node.value, level + 1)
      const formattedValue1 = stringify(node.value1, level + 1)
      const formattedValue2 = stringify(node.value2, level + 1)

      switch (node.type) {
        case 'added':
          return `${spaceForAddedDeleted}+ ${node.key}: ${formattedValue}`
        case 'deleted':
          return `${spaceForAddedDeleted}- ${node.key}: ${formattedValue}`
        case 'changed':
          return `${spaceForAddedDeleted}- ${node.key}: ${formattedValue1}\n${spaceForAddedDeleted}+ ${node.key}: ${formattedValue2}`
        case 'unchanged':
          return `${spaceForUnchangedNested}${node.key}: ${formattedValue}`
        case 'nested':
          return `${spaceForUnchangedNested}${node.key}: ${iter(node.children, level + 1)}`
        default:
          throw new Error(`Unknown node type: ${node.type}. Node details: ${JSON.stringify(node)}`)
      }
    })
    return `{\n${lines.join('\n')}\n${indentForBracket}}`
  }

  return iter(diff, 1)
}

export default formatStylish
