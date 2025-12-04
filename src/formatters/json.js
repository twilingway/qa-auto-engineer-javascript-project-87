const formatJson = (diff) => {
  const transformedDiff = diff.map((node) => {
    if (node.type === 'updated') {
      return {
        key: node.name,
        type: 'changed',
        oldValue: node.value1,
        newValue: node.value2,
      }
    }
    return node
  })
  return JSON.stringify(transformedDiff)
}

export default formatJson
