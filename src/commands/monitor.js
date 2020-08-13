const os = require('os')
const { Command, flags } = require('@oclif/command')

const getSystemDat = () => ({
  numCPUs: os.cpus().length,
  uptime: os.uptime()
})

class MonitorCmd extends Command {
  static async run () {
    const { flags } = this.parse(MonitorCmd)
    if (flags.snapshot) {
      const { numCPUs, uptime } = getSystemDat()

      return this.log(`
        Uptime: ${uptime} seconds
        Logical cores: ${numCPUs}`)
    }
  }
}

MonitorCmd.description = 'Display system resource usage'

MonitorCmd.flags = { snapshot: flags.boolean({ char: 's' }) }

module.exports = MonitorCmd
