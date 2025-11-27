import url from 'url'
import path, { dirname } from 'path'
import fs from 'fs'
import genDiff from '../src/index.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

const stylishResult = readFile('result_flat.txt')
const plainResult = readFile('result_plain.txt')
const deepStylishResult = readFile('result_deep_stylish.txt')
const deepPlainResult = readFile('result_deep_plain.txt')

test.each([
  ['file1.json', 'file2.json', 'stylish', stylishResult],
  ['file1.yml', 'file2.yml', 'stylish', stylishResult],
  ['file1.json', 'file2.json', 'plain', plainResult],
  ['file1.yml', 'file2.yml', 'plain', plainResult],
  ['file_deep1.json', 'file_deep2.json', 'stylish', deepStylishResult],
  ['file_deep1.yml', 'file_deep2.yml', 'stylish', deepStylishResult],
  ['file_deep1.json', 'file_deep2.json', 'plain', deepPlainResult],
  ['file_deep1.yml', 'file_deep2.yml', 'plain', deepPlainResult],
])('compare files (%s, %s, %s)', (filename1, filename2, format, expected) => {
  const filepath1 = getFixturePath(filename1)
  const filepath2 = getFixturePath(filename2)
  expect(genDiff(filepath1, filepath2, format)).toEqual(expected)
})
