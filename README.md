# Gendiff

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
