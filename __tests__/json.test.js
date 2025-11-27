import url from 'url'
import path, { dirname } from 'path'
import fs from 'fs'
import genDiff from '../src/index.js'
import buildDiff from '../src/diffBuilder.js'
import parse from '../src/parsers.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '__fixtures__', filename)
const readFile = filepath => fs.readFileSync(filepath, 'utf-8')
const getFormat = filepath => path.extname(filepath).slice(1)

const getExpectedJson = (filepath1, filepath2) => {
  const data1 = parse(readFile(filepath1), getFormat(filepath1))
  const data2 = parse(readFile(filepath2), getFormat(filepath2))
  const diff = buildDiff(data1, data2)
  return JSON.stringify(diff)
}

describe('JSON formatter', () => {
  const file1Json = getFixturePath('file1.json')
  const file2Json = getFixturePath('file2.json')
  const fileDeep1Json = getFixturePath('file_deep1.json')
  const fileDeep2Json = getFixturePath('file_deep2.json')

  test('flat JSON diff', () => {
    const expected = getExpectedJson(file1Json, file2Json)
    expect(genDiff(file1Json, file2Json, 'json')).toEqual(expected)
  })

  test('deep JSON diff', () => {
    const expected = getExpectedJson(fileDeep1Json, fileDeep2Json)
    expect(genDiff(fileDeep1Json, fileDeep2Json, 'json')).toEqual(expected)
  })
})
