const cluster = require('cluster')
const os = require('os')
const { Command, flags } = require('@oclif/command')

class StartCmd extends Command {
  async run () {
    /** Gets the file name from command arguments */
    const { args, flags } = this.parse(StartCmd)
    const { file } = args

    /** Sets up given file to be master of cluster
     * When forking, the process will be a clone of this
     * new file as opposed to the CLI itself
     */
    cluster.setupMaster({ exec: file })

    /** Unless specificied, fork process as many times
     * as there are CPUs - 2.
     */
    let clusterSize
    switch (flags.max) {
      case true:
        clusterSize = os.cpus().length
        break
      default:
        clusterSize = os.cpus().length - 2
    }

    // TODO: Add safety by only using open ports
    /** Starting point for ports passed as env to each fork */
    let portEnvStart = 8000
    /** Fork workers */
    for (let i = 0; i < clusterSize; i++) {
      cluster.fork({ PORT: portEnvStart })
      portEnvStart += 1
    }

    /** Handle worker 'exit' */
    cluster.on('exit', this.handleForkExit)
  }

  /**
   * Manages the exit of any given worker
   * TODO: Add param types
   */
  handleForkExit (worker, code, signal) {
    // Take care of optional logging
    // Start new worker
    cluster.fork() // * Double check scope
  }
}

// TODO: Use Babel to allow these to be class public fields

StartCmd.description = 'Starts cluster with given JS files'

StartCmd.flags = {
  max: flags.boolean({
    char: 'm',
    description: 'Matches cluster size to num CPUs'
  }),
  // TODO: pass env for loud process too
  logging: flags.boolean({
    char: 'l',
    description: 'Logs worker status and other details'
  })
}

StartCmd.args = [
  { name: 'file', required: true, description: 'File to execute' }
]

module.exports = StartCmd
