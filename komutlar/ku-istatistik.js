const Discord = require('discord.js')
const moment = require("moment");
const db = require('quick.db')
const os = require("os");
const client = require("moment-duration-format");
const Spectrum = new Set();
exports.run = async (client, message, args) => {
    let dil = await db.get(`language_${message.guild.id}`)
    if(dil === 'tr') {
        if (Spectrum.has(message.author.id)) {
           return message.channel.send("`5` Saniyede da Bir Kullanabilirsiniz - " + `<@${message.author.id}>`);
    } else {
        Spectrum.add(message.author.id);
        setTimeout(() => {
        message.delete();
          Spectrum.delete(message.author.id);
        }, 5000);// milisaniye cinsinden
    } 
let uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
let bel = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
let bel2 = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)
let aylartoplam = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
  }
 let aylar = aylartoplam 
 let duration = client.uptime

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)



 const Embed = new Discord.MessageEmbed()
  .setTitle(`Carnoxis İstatistik.`)
 .setDescription(`
            **Sahip Bilgileri**
           <a:twitchbit:801155287842947133> Kurucular ➤➤ **<@!666223000739381258> <@!449536056019124234> <@!477050335685509124>**
           <a:twitchbit:801155287842947133> İD ➤➤ **\`666223000739381258, 477050335685509124, 449536056019124234\`**\n
           **Bot Sunucuları**
           <a:twitchbit:801155287842947133> Sunucu Sayısı ➤➤ **\`${client.guilds.cache.size.toLocaleString()}/90\`**
           <a:twitchbit:801155287842947133> Kullanıcı Sayısı ➤➤**\`${client.users.cache.size}/120000\`**
           <a:twitchbit:801155287842947133> Kanal  sayısı ➤➤  **\`${client.channels.cache.size.toLocaleString()}\`\n**  
           **Versiyon Bilgileri**
           <a:twitchbit:801155287842947133> DiscordJS ➤➤ **\`v${Discord.version}\`**
           <a:twitchbit:801155287842947133> NodeJS ➤➤ **\`${process.version}\`**\n
           **Bot Kullanım bilgileri**
           <a:twitchbit:801155287842947133> Kuruluş ➤➤ **\`${s}\`**
           <a:twitchbit:801155287842947133> Ping ➤➤ **\`${client.ws.ping}ms\`**
           <a:twitchbit:801155287842947133> Bit  ➤➤ **\`${os.arch()}\`**
           <a:twitchbit:801155287842947133> İşletim Sistemi ➤➤ **\`${os.platform()}\`**
           <a:twitchbit:801155287842947133> Çalışma Süresi ➤➤  **\`${uptime}\`**
           <a:twitchbit:801155287842947133> Bellek Kullanımı ➤➤ **\`${bel}/1GB\`**
           <a:twitchbit:801155287842947133> Toplam Bellek Miktarı ➤➤ **\`${bel2}/9GB\`**
           <a:twitchbit:801155287842947133> Yüklü Modül sayısı ➤➤ **\`200+\`**
           <a:twitchbit:801155287842947133> Komut Sayısı  ➤➤   **\`${client.commands.size}\`** 
           <a:twitchbit:801155287842947133> CPU  \`\`\`fix\n➤➤ ${os.cpus().map((i) => `${i.model}`)[0]}\`\`\`
            **Bot ekstra bilgiler**
           <a:twitchbit:801155287842947133> Ana Komut ➤➤ **\`r!yardım\` + \`r!kayıtsistemi\` + \`Yeni Komutlar\`** 
           <a:twitchbit:801155287842947133> Veri Kaydı ➤➤ **\`quick.db\`**
           <a:twitchbit:801155287842947133> quick.db Komut sayısı ➤➤ **\`50+\`**
           <a:twitchbit:801155287842947133> Destek Sunucusu ➤➤ [Destek Sunucusu](https://discord.gg/mMMpTt5)
`)          
//${db.all().lenght} (databasedeki veri sayısını göstericekdir isterseniz ekleyin)
  message.channel.send(Embed)
    }
    if(dil === 'en') {
     let uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
let bel = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
let bel2 = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)
let aylartoplam = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November ",
        "12": "December"
  }
 let aylar = aylartoplam 
 let duration = client.uptime

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)



 const Embed = new Discord.MessageEmbed()
  .setTitle(`Carnoxis Statistics.`)
 .setDescription(`
            **Owner Information**
           <a:twitchbit:801155287842947133> Founders ➤➤ **<@!666223000739381258> <@!449536056019124234> <@!477050335685509124>**
           <a:twitchbit:801155287842947133> ID ➤➤ **\`666223000739381258, 477050335685509124, 449536056019124234\`**\n
           **Bot Servers**
           <a:twitchbit:801155287842947133> Number of servers ➤➤ **\`${client.guilds.cache.size.toLocaleString()}/90\`**
           <a:twitchbit:801155287842947133> Number of Member ➤➤**\`${client.users.cache.size}/120000\`**
           <a:twitchbit:801155287842947133> Number of Channel ➤➤  **\`${client.channels.cache.size.toLocaleString()}\`\n**  
           **Version Information**
           <a:twitchbit:801155287842947133> DiscordJS ➤➤ **\`v${Discord.version}\`**
           <a:twitchbit:801155287842947133> NodeJS ➤➤ **\`${process.version}\`**\n
           **Bot usage information**
           <a:twitchbit:801155287842947133> Establishment ➤➤ **\`${s}\`**
           <a:twitchbit:801155287842947133> Ping ➤➤ **\`${client.ws.ping}ms\`**
           <a:twitchbit:801155287842947133> Bit  ➤➤ **\`${os.arch()}\`**
           <a:twitchbit:801155287842947133> OS ➤➤ **\`${os.platform()}\`**
           <a:twitchbit:801155287842947133> Operation time ➤➤  **\`${uptime}\`**
           <a:twitchbit:801155287842947133> Memory Usage ➤➤ **\`${bel}/1GB\`**
           <a:twitchbit:801155287842947133> Total Amount of Memory ➤➤ **\`${bel2}/40GB\`**
           <a:twitchbit:801155287842947133> Number of Modules Installed ➤➤ **\`200+\`**
           <a:twitchbit:801155287842947133> Number of Commands  ➤➤   **\`${client.commands.size}\`** 
           <a:twitchbit:801155287842947133> CPU  \`\`\`fix\n➤➤ ${os.cpus().map((i) => `${i.model}`)[0]}\`\`\`
            **Bot extra info**
           <a:twitchbit:801155287842947133> Main Command ➤➤ **\`c?help\` + \`c?moderation\` + \`New Systems\`** 
           <a:twitchbit:801155287842947133> Data Recording ➤➤ **\`quick.db\`**
           <a:twitchbit:801155287842947133> quick.db Command count ➤➤ **\`50+\`**
           <a:twitchbit:801155287842947133> Support server ➤➤ [Support Server](https://discord.gg/aH23r9k7Yc)
`)          
//${db.all().lenght} (databasedeki veri sayısını göstericekdir isterseniz ekleyin)
  message.channel.send(Embed) 
    }
    };
 
exports.conf = { 
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'statistics'],
  permLevel: 0
};
 
exports.help = {
  name: 'i',
  description: 'Reklam Sistemini Akif Eder',
  usage: 'reklam-engelle'
};