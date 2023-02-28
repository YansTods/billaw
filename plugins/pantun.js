import fetch from 'node-fetch'
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu =`
${pickRandom(global.pantun)}
`
     const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: '𝕄𝕒𝕣𝕚 𝔹𝕖𝕣𝕡𝕒𝕟𝕥𝕦𝕟 𝕂𝕒𝕨𝕒𝕟:𝕕', mimetype: dpdf, fileLength: fsizedoc, pageCount: fpagedoc,
            caption: anu,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: ' OFFICIAL GROUP',
                        url: sgc
                    }
                },
                {
                    urlButton: {
                        displayText: ' SUBSCRIBE ME',
                        url: 'https://youtu.be/'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'NEXT',
                        id: '.bacot'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
}
handler.help = ['pantun']
handler.tags = ['quotes']
handler.command = /^(bacot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.pantun = [
' buah semangka masuk botol, muka anda kaya kontol.',
' 🍡  🎀  𝒦𝓊𝓉𝓊𝓃𝓉𝓊𝓉 𝒾𝓁𝓂𝓊 𝓈𝒶𝓂𝓅𝒶𝒾 𝓀𝑒 𝓃𝑒𝑔𝑒𝓇𝒾 𝒞𝒾𝓃𝒶 𝒟𝑒𝓂𝒾 𝓂𝒶𝓈𝒶 𝒹𝑒𝓅𝒶𝓃 𝓁𝑒𝒷𝒾𝒽 𝒾𝓃𝒹𝒶𝒽 𝐿𝑒𝓁𝒶𝒽 𝓇𝒶𝓈𝒶𝓃𝓎𝒶 𝓉𝑒𝓇𝓊𝓈 𝒷𝑒𝓇𝓉𝒶𝒽𝒶𝓃 𝒹𝑒𝓂𝒾 𝒸𝒾𝓃𝓉𝒶 𝐵𝒾𝓁𝒶 𝓅𝒶𝒹𝒶 𝒶𝓀𝒽𝒾𝓇𝓃𝓎𝒶 𝒽𝒶𝓇𝓊𝓈 𝒷𝑒𝓇𝓅𝒾𝓈𝒶𝒽  🎀  🍡',
]
