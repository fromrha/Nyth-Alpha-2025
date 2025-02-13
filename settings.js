const fs = require('fs')
const chalk = require('chalk')

global.botName = 'Nyth-Alpha'
global.ownerNumber = '6282114692838'
global.ownerName = 'Shinrinyoku'
global.website = 'http://fromrha.framer.website/'
global.wagc = [
	"https://whatsapp.com/channel/0029VaLHOzB89ind3OdqBi2v",
	"https://whatsapp.com/channel/0029Vb28TDc7NoZs8MVZF30E"] 
global.packname = 'Creator'
global.author = 'Shinrinyoku'
global.creator = '6282114692838@s.whatsapp.net'
global.premium = ['6282114692838']
global.hituet = 0
global.prefa = ['','.','/','!'];
global.footer = 'Nyth Alpha - 2025'

global.saluran = '120363185390263663@newsletter'
global.saluranName = 'Powered By Fromrha'
global.sessionName = 'session'

global.github = {
      Token: '', //Token Guthub , Cara ambilnya Liat Yt
      Owner: 'Fromrha', //Nama Github
      Repo: 'database' //Nama Repository Github
}

global.botcahx = '-'

global.setmenu = 'ButtonV2' 
global.typereply = 'v4'
global.autoblocknumber = '92'
global.antiforeignnumber = '91'
global.welcome = true;
global.anticall = false;
global.autoswview = false;
global.adminevent = false;
global.groupevent = false;

global.limit = {
	free: 30,
	premium: 9999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	admin: 'Fitur ini khusus buat admin aja ya, Kak! 🫢',
	botAdmin: 'Mora harus jadi admin dulu biar bisa jalanin ini! 😭',
	done: 'Sudah selesai! ✅✨',
	error: 'Eh, ada yang salah nih... coba lagi ya, Kak! 😖',
	group: 'Eits, fitur ini cuma bisa dipakai di grup~ 🫡',
	limit: 'Yah, batas penggunaan Kakak udah habis... 😢',
	noCmd: 'Hmm... perintahnya gak ada di daftar Mora nih. Coba cek lagi ya, Kak! 🤔',
	nsfw: 'Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣',
	owner: 'Hanya pemilik yang bisa akses fitur ini, Kak! 👑',
	premium: 'Fitur ini cuma buat pengguna premium, Kak! 🌟',
	private: 'Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌',
	success: 'Yeay, berhasil! 🎉',
	wait: 'Tunggu sebentar ya, Kak... Mora lagi proses nih! ⏳🤗'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})