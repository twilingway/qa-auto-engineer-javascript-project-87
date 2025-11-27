const formatStylish = diff => {
  const result = diff.map(node => {
    switch (node.type) {
      case 'added':
        return `  + ${node.key}: ${node.value}`
      case 'deleted':
        return `  - ${node.key}: ${node.value}`
      case 'changed':
        return `  - ${node.key}: ${node.value1}\n  + ${node.key}: ${node.value2}`
      case 'unchanged':
        return `    ${node.key}: ${node.value}`
      default:
        throw new Error(`Unknown node type: ${node.type}`)
    }
  })
  return `{\n${result.join('\n')}\n}`
}

export default formatStylish
