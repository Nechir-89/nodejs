const { v4: uuid } = require('uuid')

console.log(uuid())


const { format, formatDistance, subDays } = require('date-fns')

console.log(format(new Date(), 'MM-dd-yyyy hh:mm:ss'))


const birthday = new Date(1989, 2, 1)
console.log(birthday);

console.log(formatDistance(new Date(), birthday, { addSuffix: true }));