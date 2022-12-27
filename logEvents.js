const { v4: uuid } = require('uuid')
const { format } = require('date-fns')
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')



exports.logEvents = async (message) => {
  const dateTime = `${format(new Date(), 'MM-dd-yyyy hh:mm:ss')}\t`
  const logItem = `${uuid()}\t${dateTime}\t${message}\n`
  const directory = path.join(__dirname, 'logs')
  const file = path.join(__dirname, 'logs', 'eventLogs.txt')
  try {
    !fs.existsSync(directory) && await fsPromises.mkdir(directory)
    await fsPromises.appendFile(file, logItem)
    console.log(logItem)
  } catch (err) {
    console.error(err)
  }
}
