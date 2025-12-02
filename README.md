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
$ gendiff --format json file1.json file2.yml
[{"key":"follow","type":"removed","value":false},{"key":"host","type":"unchanged","value":"hexlet.io"},{"key":"proxy","type":"removed","value":"123.234.53.22"},{"key":"timeout","type":"changed","oldValue":50,"newValue":20},{"key":"verbose","type":"added","value":true}]
```
[![asciicast](https://asciinema.org/a/k4Lx76wZo7lekjE5qMpgQuX80.svg)](https://asciinema.org/a/k4Lx76wZo7lekjE5qMpgQuX80)