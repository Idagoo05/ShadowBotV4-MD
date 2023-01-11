import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*⚠️ ETIQUETE UNA IMAGEN CON EL COMANDO*'
let img = await q.download?.()
let url = await uploadImage(img)
let anu = await fetch(`https://api.lolhuman.xyz/api/read-qr?apikey=${lolkeysapi}&img=${url}`)
let json = await anu.json()
await m.reply(`*El Texto del Codigo QR Es:* ${json.result}`)}
handler.command = /^(readqr)$/i
export default handler
