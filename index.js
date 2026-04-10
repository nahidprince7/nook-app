const path = require('path')
const os = require('os')
const { startWatcher } = require('./src/watcher')
const { logStart } = require('./src/logger')

// Detect Downloads folder
const watchPath = process.argv[2] || path.join(os.homedir(), 'Downloads')

logStart(watchPath)
startWatcher(watchPath)