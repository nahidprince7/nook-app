const fse    = require('fs-extra')
const path   = require('path')
const categories = require('./categories')
const { logMove, logSkip, logError } = require('./logger')

async function moveFile(filePath) {
  const ext    = path.extname(filePath).toLowerCase()
  const folder = categories[ext]

  // Skip hidden files like .DS_Store, Thumbs.db
  const filename = path.basename(filePath)
  if (filename.startsWith('.') || filename === 'Thumbs.db' || filename === 'desktop.ini') {
    return
  }

  // No category match → move to Others
  const destFolder = folder || 'Others'
  const destDir    = path.join(path.dirname(filePath), destFolder)
  const destPath   = path.join(destDir, filename)

  // Create destination folder if it doesn't exist
  await fse.ensureDir(destDir)

  // Retry loop — handles Windows file locking (EBUSY / EPERM)
  let retries = 5
  while (retries--) {
    try {
      await fse.move(filePath, destPath, { overwrite: false })
      logMove(filename, destFolder)
      return
    } catch (err) {
      if ((err.code === 'EBUSY' || err.code === 'EPERM') && retries > 0) {
        await sleep(500) // wait 500ms, then retry
      } else if (err.code === 'EEXIST') {
        logSkip(filename, 'already exists in destination')
        return
      } else {
        logError(filename, err.message)
        return
      }
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

module.exports = { moveFile }