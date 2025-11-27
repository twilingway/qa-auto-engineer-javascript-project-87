# Gendiff

[![CI](https://github.com/twilingway/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/twilingway/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml)
[![Maintainability](https://sonarcloud.io/api/project_badges/measure?project=twilingway_qa-auto-engineer-javascript-project-87&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=twilingway_qa-auto-engineer-javascript-project-87)
[![Test Coverage](https://sonarcloud.io/api/project_badges/measure?project=twilingway_qa-auto-engineer-javascript-project-87&metric=coverage)](https://sonarcloud.io/summary/new_code?id=twilingway_qa-auto-engineer-javascript-project-87)

Gendiff is a utility for comparing configuration files.

## Installation

```bash
npm install -g @hexlet/code
```

## Usage

```bash
gendiff <filepath1> <filepath2>
```

### Example

[![asciicast](https://asciinema.org/a/YOUR_CAST_ID.svg)](https://asciinema.org/a/YOUR_CAST_ID)

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

### Демонстрация работы `plain` формата

[![asciicast](https://asciinema.org/a/Pe6QypnLEmFWssNAjCOJN1iii.svg)](https://asciinema.org/a/Pe6QypnLEmFWssNAjCOJN1iii)

**Plain:**

```
$ gendiff --format plain file1.json file2.json
Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true
```
