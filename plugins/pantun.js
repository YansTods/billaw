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
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: 'πππ£π πΉππ£π‘πππ₯π¦π πππ¨ππ:π', mimetype: dpdf, fileLength: fsizedoc, pageCount: fpagedoc,
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
' π‘  π  π¦πππππππ πΎπππ ππΆπππΆπΎ ππ ππππππΎ ππΎππΆ ππππΎ ππΆππΆ πΉπππΆπ πππ·πΎπ½ πΎππΉπΆπ½ πΏπππΆπ½ ππΆππΆπππΆ πππππ π·ππππΆπ½πΆπ πΉπππΎ πΈπΎπππΆ π΅πΎππΆ ππΆπΉπΆ πΆππ½πΎππππΆ π½πΆπππ π·ππππΎππΆπ½  π  π‘',
]
