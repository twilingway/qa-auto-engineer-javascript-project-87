import fs from 'fs'
import path from 'path'
import genDiff from '../src/index.js'

const getFixturePath = filename => path.join('fixtures', filename)

const readFixture = filename => fs.readFileSync(getFixturePath(filename), 'utf-8').trim()

const expectedStylish = readFixture('stylish.txt')
const expectedPlain = readFixture('plain.txt')
const expectedJson = readFixture('json.txt')

const formats = ['json', 'yml']

describe('genDiff', () => {
  test.each(formats)('gendiff %s', (format) => {
    const filepath1 = getFixturePath(`file1.${format}`)
    const filepath2 = getFixturePath(`file2.${format}`)

    expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectedStylish)
    expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expectedPlain)
    expect(genDiff(filepath1, filepath2, 'json')).toEqual(expectedJson)
    expect(genDiff(filepath1, filepath2)).toEqual(expectedStylish)
  })
})
