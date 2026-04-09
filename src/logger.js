const chalk = require('chalk')

function logMove(filename, folder) {
  console.log(
    chalk.green('✔ Moved ') +
    chalk.white.bold(filename) +
    chalk.gray(' → ') +
    chalk.cyan(folder + '/')
  )
}

function logSkip(filename, reason) {
  console.log(
    chalk.yellow('⚠ Skipped ') +
    chalk.white(filename) +
    chalk.gray(` — ${reason}`)
  )
}

function logError(filename, message) {
  console.log(
    chalk.red('✖ Error ') +
    chalk.white(filename) +
    chalk.gray(` — ${message}`)
  )
}

function logStart(watchPath) {
  console.log(chalk.bold.blue('\n  File Automator'))
  console.log(chalk.gray('  Watching: ') + chalk.white(watchPath))
  console.log(chalk.gray('  Press Ctrl+C to stop\n'))
}

module.exports = { logMove, logSkip, logError, logStart }