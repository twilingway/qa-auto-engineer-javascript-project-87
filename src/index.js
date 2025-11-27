import fs from 'fs'
import path from 'path'
import buildDiff from './diffBuilder.js'
import parse from './parsers.js'
import format from './formatters/index.js'

const getFullPath = filepath => path.resolve(process.cwd(), filepath)
const getFormat = filepath => path.extname(filepath).slice(1)

const genDiff = (filepath1, filepath2, formatName) => {
  const fullPath1 = getFullPath(filepath1)
  const fullPath2 = getFullPath(filepath2)

  const data1 = parse(fs.readFileSync(fullPath1, 'utf-8'), getFormat(fullPath1))
  const data2 = parse(fs.readFileSync(fullPath2, 'utf-8'), getFormat(fullPath2))

  const diff = buildDiff(data1, data2)

  return format(diff, formatName)
}

export default genDiff
