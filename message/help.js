const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");
let setting = JSON.parse(fs.readFileSync('./config.json'))
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/20YY')
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, ucapanWaktu) => {
	return `*── 「 ${setting.botName} 」 ──*
	
 _*${ucapanWaktu} @${sender.split('@')[0]} 👋*_

 Library : *Baileys-MD*
 Prefix : ( ${prefix} )
 Tanggal Server : ${tanggal}
 Waktu Server : ${jam}

 *MAIN MENU*
 *≻* ${prefix}menu
 *≻* ${prefix}owner
 *≻* ${prefix}speed
 *≻* ${prefix}runtime
 *≻* ${prefix}exif
 *≻* ${prefix}sendsession

 *CONVERTER/TOOLS*
 *≻* ${prefix}sticker
 *≻* ${prefix}toimg
 *≻* ${prefix}tovid

 *ANONYMOUS CHATS*
 *≻* ${prefix}anonymous
 *≻* ${prefix}start
 *≻* ${prefix}next
 *≻* ${prefix}stop
 *≻* ${prefix}sendprofile`
}
