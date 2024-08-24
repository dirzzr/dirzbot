let handler = async (m, { conn }) => {
  try {
      function formatUptime(uptimeInSeconds) {
    const hours = Math.floor(uptimeInSeconds / 3600);
    const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeInSeconds % 60);

    return `${hours}:${minutes}:${seconds}`;
}
const uptimeInSeconds = process.uptime();
const quotes = ['The True Power Of Sigma Skibid', 'PermenMD Never Die!', 'Merusak Lebih Menyenangkan', 'Hidup Itu Berat', 'Ngoding? Tidak Aku Hanya Copy Paste', 'Woy Ini Script Mahal', 'Hanya Yang Terbaik Yang Akan Menang', 'Bacot Bocah Bened Skillnya Itu Itu Aja', 'PUBG, ML, FF, HOK, PB, BS Edyan', 'Semakin Dewasa Semakin Gede Jir', 'Jika Punyamu Kecil Berarti Untuk Anak Kecil', 'Hey Bung Umur Hanyalah Angka', 'No Wife No Problem, Wifi Mati Banting Modem']
const formattedUptime = formatUptime(uptimeInSeconds);

    const m2 = ` ◦  𝙿𝚎𝚛𝚖𝚎𝚗𝙼𝚒𝚜𝚌 𝚅4
≡ *ඞ* Random Info? Baca Body Thumbnail Wak
\`\`\`- Uptime: ${formattedUptime}\`\`\`
\`\`\`- Bot Name: ${global.namebot}\`\`\`
\`\`\`- Version: 4.0\`\`\`

\`\`\`- Tracking Command\`\`\`
\`| .ipinfo |\` ɢᴇᴛᴛɪɴɢ ɪɴꜰᴏ ꜰʀᴏᴍ ɪᴘ
\`| .dw-check |\` ᴄʜᴇᴄᴋ ʏᴏᴜʀ ᴅᴀᴛᴀ ᴏɴ ᴅᴀʀᴋᴡᴇʙ
\`\`\`-------------------\`\`\`
\`\`\`- Attacking Command\`\`\`
\`| .methods |\` ʟɪꜱᴛ ᴅᴅᴏꜱ ᴍᴇᴛʜᴏᴅꜱ
\`| .pkudet |\` ᴘᴛᴇʀᴏᴅ ᴀᴄᴄ ʀᴇᴍᴏᴠᴇʀ
\`| .ddos |\` ɪɴᴛɪ ᴅᴀʀɪ ʙᴏᴛ ɪɴɪ 😹
\`| .gyat |\` ꜱɪɢᴍᴀ ᴍᴇᴡɪɴɢ ᴘᴏᴡᴇʀ?
\`| .kill_ssh |\` ᴠᴘꜱ ᴋɪʟʟᴇʀ
\`| .mcbot |\` ᴍᴄ ʙᴏᴛ ꜰʟᴏᴏᴅᴇʀ
\`\`\`-------------------\`\`\`
\`\`\`- Preparation Command\`\`\`
\`| .proxy |\` ᴘʀᴏxʏ ꜱᴄʀᴀᴘᴇʀ
\`| .ua |\` ᴜᴀ ɢᴇɴᴇʀᴀᴛᴏʀ
\`\`\`-------------------\`\`\`
\`\`\`- Owner Command\`\`\`
\`| .addprem |\` ᴍᴀᴋᴇ ᴛʜᴇᴍ ᴘʀᴇᴍɪᴜᴍ
\`| .delprem |\` ᴍᴀᴋᴇ ᴛʜᴇᴍ ᴜɴᴘʀᴇᴍ
\`| .listprem |\` ᴡʜᴏ ᴘʀᴇᴍɪᴜᴍ?
\`| .self |\` ᴍᴀᴋᴇ ʏᴏᴜʀ ʙᴏᴛ ᴘʀɪᴠᴀᴛᴇ
\`\`\`-------------------\`\`\`
\`\`\`- Pterodactyl Panel Command\`\`\`
\`| .cpanel |\` ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ ᴘᴛᴇʀᴏᴅ
\`| .listsrv |\` ꜱʜᴏᴡ ᴀʟʟ ꜱᴇʀᴠᴇʀ
\`| .listusr |\` ꜱʜᴏᴡ ᴀʟʟ ᴜꜱᴇʀ
\`| .delsrv |\` ᴅᴇʟᴇᴛᴇ ꜱᴇʀᴠᴇʀ
\`| .delusr |\` ᴅᴇʟᴇᴛᴇ ᴜꜱᴇʀ
\`\`\`-------------------\`\`\`
\`\`\`-Fun Command\`\`\`
\`| .cekkhodam |\` ᴄʜᴇᴄᴋ ʏᴏᴜʀ ꜱᴘɪʀɪᴛ
\`| .vccgen |\` ꜰᴀᴋᴇ ᴄʀᴇᴅɪᴛ ᴄᴀʀᴅ ɢᴇɴ
\`| .enc |\` ᴇɴᴄʏᴘᴛ ʏᴏᴜʀ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ
\`\`\`-------------------\`\`\``;

conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: global.title,
body: quotes[Math.floor(Math.random() * quotes.length)],
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: global.banner,
sourceUrl: ``
}}, text: m2}, {quoted: m})
	  } catch (e) {
    conn.reply(m.chat, 'Menu Error Bejir', m);
    throw e;
  }
};

handler.help = ['misc'];
handler.tags = ['main'];
handler.command = /^(misc)$/i;
module.exports = handler
