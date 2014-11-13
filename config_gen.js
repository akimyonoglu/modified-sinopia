#!/usr/bin/env node
var config = require('sinopia/lib/config_gen')()
  , yaml = require('js-yaml')
  , fs = require('fs')

fs.writeFileSync('/tmp/config.yaml', config.yaml)
