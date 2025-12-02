# Gendiff

[![CI](https://github.com/twilingway/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/twilingway/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml)

Gendiff is a utility for comparing configuration files.

## Installation

```bash
npm install -g @hexlet/code
```

## Usage
```bash 
gendiff -h
```
[![asciicast](https://asciinema.org/a/RHeHpfd4FDYL61U0J64aDn1YH.svg)](https://asciinema.org/a/RHeHpfd4FDYL61U0J64aDn1YH)

```bash
gendiff <filepath1> <filepath2>
```

### Example

**JSON:**

```
$ gendiff file1.json file2.json
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
```
[![asciicast](https://asciinema.org/a/Rrrr7UaapYjMkWN15YEgQHfWd.svg)](https://asciinema.org/a/Rrrr7UaapYjMkWN15YEgQHfWd)

**YAML:**

```
$ gendiff file1.yml file2.yml
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
```
[![asciicast](https://asciinema.org/a/mRx2ZvhzfMstD5dMn6pvGWIfP.svg)](https://asciinema.org/a/mRx2ZvhzfMstD5dMn6pvGWIfP)


### Демонстрация работы `plain` формата


**Plain:**

```
$ gendiff --format plain file1.json file2.json
Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true
```

[![asciicast](https://asciinema.org/a/zgNOHec0OAyXuBSmoplXVaDhy.svg)](https://asciinema.org/a/zgNOHec0OAyXuBSmoplXVaDhy)

### Демонстрация работы `json` формата

[![asciicast](https://asciinema.org/a/612091.svg)](https://asciinema.org/a/612091)

**JSON:**

```
$ gendiff --format json file_deep1.json file_deep2.yml
[{"key":"common","type":"nested","children":[{"key":"follow","type":"added","value":false},{"key":"setting1","type":"unchanged","value":"Value 1"},{"key":"setting2","type":"deleted","value":200},{"key":"setting3","type":"changed","value1":true,"value2":null},{"key":"setting4","type":"added","value":"blah blah"},{"key":"setting5","type":"added","value":{"key5":"value5"}},{"key":"setting6","type":"deleted","value":{"key":"value","doge":{"wow":""}}}]},{"key":"group1","type":"nested","children":[{"key":"baz","type":"changed","value1":"bas","value2":"bars"},{"key":"foo","type":"unchanged","value":"bar"},{"key":"nest","type":"changed","value1":{"key":"value"},"value2":"str"}]},{"key":"group2","type":"deleted","value":{"abc":12345,"deep":{"id":45}}},{"key":"group3","type":"added","value":{"deep":{"id":{"number":45}},"fee":100500}}]
```
