const numowner = '0895348056622'
global.namebot = 'Dirzx Att'
global.title = 'Dirzx 𝐯4'
// Thumbnail Logo Bot
global.banner = 'https://telegra.ph/file/8ce26bf79317636d8a47c.jpg'
global.attacking = 'https://telegra.ph/file/6a51b7230cbf81cf16464.jpg'
global.tracking = 'hhttps://telegra.ph/file/8ce26bf79317636d8a47c.jpg'
global.brutall = 'https://telegra.ph/file/8ce26bf79317636d8a47c.jpg'
global.standby = 'https://telegra.ph/file/8ce26bf79317636d8a47c.jpg'
// kebutuhan cpanel
global.apikey = 'ptla mu'
global.linkPanel = 'isi link panel'
global.egg = '15'
global.loc = '1'

// Ga Perlu Di Ganti
global.owner = [numowner]  
global.mods = [numowner] 
global.prems = [numowner]
global.nameowner = 'Dirz'
global.numberowner = numowner
global.mail = 'ridhzz91@gmail.com' 
global.maxwarn = '2'

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
