import fs from 'fs'
import path from 'path'
import buildDiff from './diffBuilder.js'
import parse from './parsers.js'
import format from './formatters/index.js'

const getFullPath = filepath => path.resolve(process.cwd(), filepath)
const getFormat = filepath => path.extname(filepath).slice(1)

const readData = (filepath) => {
  const fullPath = getFullPath(filepath)
  return parse(fs.readFileSync(fullPath, 'utf-8'), getFormat(fullPath))
}

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = readData(filepath1)
  const data2 = readData(filepath2)

  const diff = buildDiff(data1, data2)

  return format(diff, formatName)
}

export default genDiff
