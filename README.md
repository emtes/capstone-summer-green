# summergreen

Process monitoring and management CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/summergreen.svg)](https://npmjs.org/package/summergreen)
[![Downloads/week](https://img.shields.io/npm/dw/summergreen.svg)](https://npmjs.org/package/summergreen)
[![License](https://img.shields.io/npm/l/summergreen.svg)](https://github.com/emtes/capstone-summer-green/blob/master/package.json)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<!-- toc -->
* [summergreen](#summergreen)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g summergreen
$ summergreen COMMAND
running command...
$ summergreen (-v|--version|version)
summergreen/0.1.0 linux-x64 node-v14.6.0
$ summergreen --help [COMMAND]
USAGE
  $ summergreen COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`summergreen help [COMMAND]`](#summergreen-help-command)
* [`summergreen monitor`](#summergreen-monitor)
* [`summergreen start FILE`](#summergreen-start-file)

## `summergreen help [COMMAND]`

display help for summergreen

```
USAGE
  $ summergreen help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `summergreen monitor`

Display system resource usage

```
USAGE
  $ summergreen monitor

OPTIONS
  -s, --snapshot
```

_See code: [src/commands/monitor.js](https://github.com/emtes/capstone-summer-green/blob/v0.1.0/src/commands/monitor.js)_

## `summergreen start FILE`

Starts cluster with given JS files

```
USAGE
  $ summergreen start FILE

ARGUMENTS
  FILE  File to execute

OPTIONS
  -l, --logging  Logs worker status and other details
  -m, --max      Matches cluster size to num CPUs
```

_See code: [src/commands/start.js](https://github.com/emtes/capstone-summer-green/blob/v0.1.0/src/commands/start.js)_
<!-- commandsstop -->
