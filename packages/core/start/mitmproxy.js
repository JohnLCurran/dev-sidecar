// eslint-disable-next-line no-unused-vars
const server = require('@docmirror/mitmproxy')
let configPath = 'C:/Users/Administrator/.dev-sidecar/running.json'
if (process.argv && process.argv.length > 3) {
  configPath = process.argv[2]
}

const fs = require('fs')
const path = require('path')
const configJson = fs.readFileSync(configPath)
const config = JSON.parse(configJson)
const scriptDir = '../../gui/extra/scripts/'
config.setting.script.defaultDir = path.join(__dirname, scriptDir)
server.start(config)
