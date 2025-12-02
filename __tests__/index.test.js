import fs from 'fs'
import path from 'path'
import genDiff from '../src/index.js'

const getFixturePath = filename => path.join('fixtures', filename)

const expectedStylish = fs.readFileSync(getFixturePath('stylish.txt'), 'utf-8').trim()

const expectedPlain = fs.readFileSync(getFixturePath('plain.txt'), 'utf-8').trim()

const expectedJson = fs.readFileSync(getFixturePath('json.txt'), 'utf-8').trim()

describe('genDiff', () => {
  test.each(['json', 'yml'])('gendiff %s', (format) => {
    const filepath1 = getFixturePath(`file1.${format}`)
    const filepath2 = getFixturePath(`file2.${format}`)

    expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectedStylish)
    expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expectedPlain)
    expect(genDiff(filepath1, filepath2, 'json')).toEqual(expectedJson)
    expect(genDiff(filepath1, filepath2)).toEqual(expectedStylish)
  })
})
