import fs from 'fs'
import path from 'path'
import _ from 'lodash'

const parseFile = filepath => {
  const fullPath = path.resolve(process.cwd(), filepath)
  const data = fs.readFileSync(fullPath, 'utf-8')
  return JSON.parse(data)
}

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1)
  const data2 = parseFile(filepath2)

  const keys1 = Object.keys(data1)
  const keys2 = Object.keys(data2)
  const sortedKeys = _.sortBy(_.union(keys1, keys2))

  const diff = sortedKeys.map(key => {
    if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`
    }
    if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`
    }
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`
    }
    return `    ${key}: ${data1[key]}`
  })

  return `{\n${diff.join('\n')}\n}`
}

export default genDiff
