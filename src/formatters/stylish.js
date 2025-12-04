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
  const lines = diff.map((node) => {
    const indent = '  '
    const unchangedIndent = '    '

    switch (node.type) {
      case 'added':
        return `${indent}+ ${node.key}: ${stringify(node.value, 2)}`
      case 'removed':
        return `${indent}- ${node.key}: ${stringify(node.value, 2)}`
      case 'updated':
        return `${indent}- ${node.name}: ${stringify(node.value1, 2)}\n${indent}+ ${node.name}: ${stringify(node.value2, 2)}`
      case 'unchanged':
        return `${unchangedIndent}${node.key}: ${stringify(node.value, 2)}`
      default:
        throw new Error(`Unknown node type: ${node.type}`)
    }
  })

  return `{\n${lines.join('\n')}\n}`
}

export default formatStylish
