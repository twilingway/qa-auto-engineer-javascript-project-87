import url from 'url'
import path, { dirname } from 'path'
import fs from 'fs'
import genDiff from '../src/index.js'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

const expected = readFile('result_flat.txt')

test.each([
  ['file1.json', 'file2.json'],
  ['file1.yml', 'file2.yml'],
])('compare flat files (%s, %s)', (filename1, filename2) => {
  const filepath1 = getFixturePath(filename1)
  const filepath2 = getFixturePath(filename2)
  expect(genDiff(filepath1, filepath2)).toEqual(expected)
})
