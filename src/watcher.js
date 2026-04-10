const chokidar = require('chokidar')
const { moveFile } = require('./mover')

function startWatcher(watchPath) {
  const watcher = chokidar.watch(watchPath, {
    persistent: true,       // keep the process alive
    ignoreInitial: true,    // don't process files already there on startup
    depth: 0,               // only watch the top level, not subfolders
    awaitWriteFinish: {     // wait until the file is fully written before firing
      stabilityThreshold: 1000,  // file size must be stable for 1 second
      pollInterval: 200
    }
  })

  watcher.on('add', async (filePath) => {
    await moveFile(filePath)
  })

  watcher.on('error', (error) => {
    console.error('Watcher error:', error)
  })

  return watcher
}

module.exports = { startWatcher }