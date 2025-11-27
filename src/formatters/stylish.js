const stringify = (value, level) => {
  if (typeof value !== 'object' || value === null) {
    return value
  }

  const indentForKeys = '    '.repeat(level) // Отступ для ключей внутри объекта
  const indentForBracket = '    '.repeat(level - 1) // Отступ для закрывающей скобки

  const lines = Object.entries(value).map(([key, val]) => {
    return `${indentForKeys}${key}: ${stringify(val, level + 1)}`
  })

  return `{\n${lines.join('\n')}\n${indentForBracket}}`
}

const formatStylish = diff => {
  const iter = (currentValue, level) => {
    const spaceForAddedDeleted = ' '.repeat(level * 4 - 2) // Отступ для '+', '-'
    const spaceForUnchangedNested = ' '.repeat(level * 4) // Отступ для ' ' и 'nested' ключа
    const indentForBracket = '    '.repeat(level - 1) // Отступ для закрывающей скобки текущего объекта

    const lines = currentValue.map(node => {
      const formattedValue = stringify(node.value, level + 1) // Передаем следующий уровень для stringify
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

  return iter(diff, 1) // Начинаем с 1 уровня
}

export default formatStylish
