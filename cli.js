#!/usr/bin/env node
var isatz = require('./')
var args = process.argv.slice(2)
isatz(args, console.log)
