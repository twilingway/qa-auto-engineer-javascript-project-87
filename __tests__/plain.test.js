import url from 'url'
import path, { dirname } from 'path'
import fs from 'fs'
import genDiff from '../src/index.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

const plainResult = readFile('result_plain.txt')
const deepPlainResult = readFile('result_deep_plain.txt')

describe('gendiff plain format', () => {
  test('should compare two JSON files in plain format', () => {
    const filepath1 = getFixturePath('file1.json')
    const filepath2 = getFixturePath('file2.json')
    expect(genDiff(filepath1, filepath2, 'plain')).toEqual(plainResult)
  })

  test('should compare two YAML files in plain format', () => {
    const filepath1 = getFixturePath('file1.yml')
    const filepath2 = getFixturePath('file2.yml')
    expect(genDiff(filepath1, filepath2, 'plain')).toEqual(plainResult)
  })

  test('should compare two nested JSON files in plain format', () => {
    const filepath1 = getFixturePath('file_deep1.json')
    const filepath2 = getFixturePath('file_deep2.json')
    expect(genDiff(filepath1, filepath2, 'plain')).toEqual(deepPlainResult)
  })

  test('should compare two nested YAML files in plain format', () => {
    const filepath1 = getFixturePath('file_deep1.yml')
    const filepath2 = getFixturePath('file_deep2.yml')
    expect(genDiff(filepath1, filepath2, 'plain')).toEqual(deepPlainResult)
  })
})
