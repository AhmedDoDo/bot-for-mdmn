const Discord = require('discord.js');
const ToxicCodes = new Discord.Client();
const prefix = '$';
ToxicCodes.on("ready", ()=>{
ToxicCodes.user.setActivity('ToxicCodes Development', {type : 'watching'});
console.log('Loding')
setTimeout(() => {
  console.log('Loding.')//Baron - Toxic Codes
}, 500)
setTimeout(() => {
  console.log('Loding..')//Baron - Toxic Codes
}, 1000)
setTimeout(() => {
  console.log('Loding...')//Baron - Toxic Codes
}, 1500)
setTimeout(() => {
  console.log(`Logged as ${ToxicCodes.user.tag}`)//Baron - Toxic Codes
}, 2000)
})
ToxicCodes.on("message", message =>{//Baron - Toxic Codes
//السطر ال تحت لمنع تكرار انشاء الرتب لو عاوز تغير اسم الرتب غيرها وحط اسمها فى السطر ال تحت كمان علشان ميحصلش سبام
let roles = message.guild.roles.find(all=> all.name === "⇁『KiNG 』‏‏༄  ❥", "⇁『LEADER』‏‏༄  ❥", "⇁『BiG BOSS 』‏‏༄  ❥", "⇁『CAPTAIN 』‏‏༄  ❥", "⇁『SERGEANT 』‏‏༄  ❥",
"⇁『youtuber 』‏‏༄  ❥", "⇁『ACTIVE 』‏‏༄  ❥");//Baron - Toxic Codes
if(message.content.startsWith(prefix + "roles")) {//Baron - Toxic Codes
  if(message.author.bot) return;//Baron - Toxic Codes
  if(roles) return message.reply('**الرتب موجوده بالفعل**')//Baron - Toxic Codes
  //دى بقا الرتب ال انت عاوزو يعملها
  let roleking = message.guild.roles.find(r => r.name === "⇁『KiNG 』‏‏༄  ❥");//Baron - Toxic Codes
  if(!roleking) {
  message.guild.createRole({//Baron - Toxic Codes
  name: '⇁『KiNG 』‏‏༄  ❥',
  color: 'RANDOM',
  position: (1),
  hoist: (true),
  permissions: 'ADMINISTRATOR'
})
  }
let roleleader = message.guild.roles.find(r => r.name === "⇁『LEADER』‏‏༄  ❥");//Baron - Toxic Codes
if(!roleleader) {
 message.guild.createRole({//Baron - Toxic Codes
    name: '⇁『LEADER』‏‏༄  ❥',//Baron - Toxic Codes
    color: 'RANDOM',
    position: (2),//Baron - Toxic Codes
    hoist: (true),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
}//Baron - Toxic Codes
let rolebigboss = message.guild.roles.find(r => r.name === "⇁『BiG BOSS 』‏‏༄  ❥");//Baron - Toxic Codes
if(!rolebigboss) {//Baron - Toxic Codes
  message.guild.createRole({
    name: '⇁『BiG BOSS 』‏‏༄  ❥',
    color: 'RANDOM',
     position: (3),//Baron - Toxic Codes
     hoist: (true),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
}//Baron - Toxic Codes
let rolecaptain = message.guild.roles.find(r => r.name === "⇁『CAPTAIN 』‏‏༄  ❥");//Baron - Toxic Codes
if(!rolecaptain) {//Baron - Toxic Codes
message.guild.createRole({
    name: '⇁『CAPTAIN 』‏‏༄  ❥',
    color: 'RANDOM',
    postion: (4),
    hoist: (true),//Baron - Toxic Codes
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
}
let rolesergant = message.guild.roles.find(r => r.name === "⇁『SERGEANT 』‏‏༄  ❥");//Baron - Toxic Codes
if(!rolesergant) {
 message.guild.createRole({
    name: '⇁『SERGEANT 』‏‏༄  ❥',
    color: 'RANDOM',//Baron - Toxic Codes
    postion: (5),
    hoist: (true),//Baron - Toxic Codes
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
}//Baron - Toxic Codes
let roleyoutuber = message.guild.roles.find(r => r.name === "⇁『youtuber 』‏‏༄  ❥");
if(!roleyoutuber) {//Baron - Toxic Codes
  message.guild.createRole({
    name: '⇁『youtuber 』‏‏༄  ❥',
    color: 'RANDOM',
    postion: (6),
    hoist: (true),//Baron - Toxic Codes
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
    'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
}
let roleactive = message.guild.roles.find(r => r.name === "⇁『ACTIVE 』‏‏༄  ❥");//Baron - Toxic Codes
if(!roleactive) {//Baron - Toxic Codes
 message.guild.createRole({
  name: '⇁『ACTIVE 』‏‏༄  ❥',
  color: 'RANDOM',
  postion: (7),
  hoist: (true),//Baron - Toxic Codes
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',//Baron - Toxic Codes
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']//Baron - Toxic Codes
})
message.guild.createRole({//Baron - Toxic Codes
  name: 'Fortnite',
  color: 'RANDOM',//Baron - Toxic Codes
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',//Baron - Toxic Codes
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']//Baron - Toxic Codes
})
message.guild.createRole({//Baron - Toxic Codes
  name: 'playerunknowns',
  color: 'RANDOM',
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']//Baron - Toxic Codes
})//Baron - Toxic Codes
message.guild.createRole({
  name: 'counter-strike',
  color: 'RANDOM',//Baron - Toxic Codes
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron - Toxic Codes
message.guild.createRole({
  name: 'creative-destruction',//Baron - Toxic Codes
  color: 'RANDOM',
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.guild.createRole({//Baron - Toxic Codes
  name: 'overwatch',
  color: 'RANDOM',
  postion: (7),//Baron - Toxic Codes
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron - Toxic Codes
message.guild.createRole({
  name: 'minecraft',//Baron - Toxic Codes
  color: 'RANDOM',
  postion: (7),//Baron - Toxic Codes
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron - Toxic Codes
message.guild.createRole({//Baron - Toxic Codes
  name: 'league-of-legends',
  color: 'RANDOM',//Baron - Toxic Codes
  postion: (7),
  permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
  'READ_MESSAGE_HISTORY', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})//Baron - Toxic Codes
message.channel.send(message.member + '**جارى انشاء الرتب**').then((m)=> {
  setTimeout(() => {//Baron - Toxic Codes
    m.edit('**تم انشاء الرتب بنجاح**')
  }, 3000);//Baron - Toxic Codes
})
}//Baron - Toxic Codes
}
})//Baron - Toxic Codes
ToxicCodes.on("message", message =>{
  let roleyoutuber = message.guild.roles.find(r => r.name === "⇁『youtuber 』‏‏༄  ❥");
  let rolepubg = message.guild.roles.find(r => r.name === "playerunknowns");
  let rolecsgo = message.guild.roles.find(r => r.name === "counter-strike");
  let rolecd = message.guild.roles.find(r => r.name === "creative-destruction");
  let roleow = message.guild.roles.find(r => r.name === "overwatch");
  let rolemc = message.guild.roles.find(r => r.name === "minecraft");
  let rolelol = message.guild.roles.find(r => r.name === "league-of-legends");
  let rolefortnite = message.guild.roles.find(r => r.name === "Fortnite");
//Baron - Toxic Codes
  let roles = message.guild.roles.find(all=> all.name === "⇁『KiNG 』‏‏༄  ❥", "⇁『LEADER』‏‏༄  ❥", "⇁『BiG BOSS 』‏‏༄  ❥", "⇁『CAPTAIN 』‏‏༄  ❥", "⇁『SERGEANT 』‏‏༄  ❥",
"⇁『youtuber 』‏‏༄  ❥", "⇁『ACTIVE 』‏‏༄  ❥");//Baron - Toxic Codes
  if(message.content.startsWith(prefix + "channels")) {
if(!roles) return message.reply("**من فضلك قم بانشاء الرتب اولا اكتب $roles**")//Baron - Toxic Codes
if(roles) {//Baron - Toxic Codes
message.reply("**جارى انشاء الرومات**").then((c)=> {//Baron - Toxic Codes
setTimeout(() => {
  c.edit("**تم انشاء الرومات بنجاح**")//Baron - Toxic Codes
}, 10000);
})
message.guild.createChannel(`${message.guild.name}-TEXT` , 'category').then(tb => {//Baron - Toxic Codes
  message.guild.createChannel('welcome' , 'text').then(nws => {
    nws.setParent(tb);
    nws.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false,
      MENTION_EVERYONE: false//Baron - Toxic Codes
})
  })
  message.guild.createChannel('info' , 'text').then(inf => {//Baron - Toxic Codes
    inf.setParent(tb);//Baron - Toxic Codes
    inf.overwritePermissions(message.guild.id, {//Baron - Toxic Codes
      SEND_MESSAGES: false,
      MENTION_EVERYONE: false//Baron - Toxic Codes
})
  })
    message.guild.createChannel('news' , 'text').then(nws => {//Baron - Toxic Codes
      nws.setParent(tb);
      nws.overwritePermissions(message.guild.id, {//Baron - Toxic Codes
        SEND_MESSAGES: false,
        MENTION_EVERYONE: false//Baron - Toxic Codes
})
    })//Baron - Toxic Codes
      message.guild.createChannel('chat' , 'text').then(cht => {//Baron - Toxic Codes
        cht.setParent(tb);
        cht.overwritePermissions(message.guild.id, {
          MENTION_EVERYONE: false//Baron - Toxic Codes
  })
      })
        message.guild.createChannel('bot-commands' , 'text').then(cmd => {//Baron - Toxic Codes
          cmd.setParent(tb);
          cmd.overwritePermissions(message.guild.id, {//Baron - Toxic Codes
            MENTION_EVERYONE: false//Baron - Toxic Codes
    })
        })
          message.guild.createChannel('youtubers' , 'text').then(yt => {//Baron - Toxic Codes
            yt.setParent(tb);//Baron - Toxic Codes
            yt.overwritePermissions(roleyoutuber, {
              SEND_MESSAGES: true
          })
          yt.overwritePermissions(message.guild.id, {//Baron - Toxic Codes
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          })
          })//Baron - Toxic Codes
          message.guild.createChannel('pic' , 'text').then(pic => {//Baron - Toxic Codes
            pic.setParent(tb);
            pic.overwritePermissions(message.guild.id, {
              MENTION_EVERYONE: false
      })
          })
            message.guild.createChannel('cut-tweet' , 'text').then(cut => {
              cut.setParent(tb);
              cut.overwritePermissions(message.guild.id, {
                MENTION_EVERYONE: false
        })//Baron - Toxic Codes
            })
  })
  message.guild.createChannel(`Games-Chat` , 'category').then(tb => {//Baron - Toxic Codes
  message.guild.createChannel('Fortnite' , 'text').then(wlc => {
    wlc.setParent(tb);
    wlc.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
  })//Baron - Toxic Codes
  wlc.overwritePermissions(rolefortnite, {
    SEND_MESSAGES: true,
    MENTION_EVERYONE: false
})
  })//Baron - Toxic Codes
  message.guild.createChannel('playerunknowns' , 'text').then(ch => {//Baron - Toxic Codes
    ch.setParent(tb);
    ch.overwritePermissions(message.guild.id, {//Baron - Toxic Codes
      SEND_MESSAGES: false,
      MENTION_EVERYONE: false
})
ch.overwritePermissions(rolepubg, {//Baron - Toxic Codes
  SEND_MESSAGES: true,
  MENTION_EVERYONE: false//Baron - Toxic Codes
})
  })
    message.guild.createChannel('counter-strike' , 'text').then(ch => {//Baron - Toxic Codes
      ch.setParent(tb);
      ch.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false,//Baron - Toxic Codes
        MENTION_EVERYONE: false
})
ch.overwritePermissions(rolecsgo, {
  SEND_MESSAGES: true,
  MENTION_EVERYONE: false
})//Baron - Toxic Codes
    })
      message.guild.createChannel('creative-destruction' , 'text').then(ch => {//Baron - Toxic Codes
        ch.setParent(tb);
        ch.overwritePermissions(rolecd, {
          SEND_MESSAGES: true,//Baron - Toxic Codes
          MENTION_EVERYONE: false
      })
      ch.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false,
        MENTION_EVERYONE: false
      })//Baron - Toxic Codes
      })
        message.guild.createChannel('overwatch' , 'text').then(ch => {//Baron - Toxic Codes
          ch.setParent(tb);
          ch.overwritePermissions(roleow, {
            SEND_MESSAGES: true,//Baron - Toxic Codes
            MENTION_EVERYONE: false
        })
        ch.overwritePermissions(message.guild.id, {
          SEND_MESSAGES: false,
          MENTION_EVERYONE: false
        })//Baron - Toxic Codes
        })
          message.guild.createChannel('minecraft' , 'text').then(ch => {//Baron - Toxic Codes
            ch.setParent(tb);
            ch.overwritePermissions(rolemc, {
              SEND_MESSAGES: true,
              MENTION_EVERYONE: false
          })
          ch.overwritePermissions(message.guild.id, {//Baron - Toxic Codes
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false
          })
          })//Baron - Toxic Codes
          message.guild.createChannel('league-of-legends' , 'text').then(ch => {
            ch.setParent(tb);//Baron - Toxic Codes
            ch.overwritePermissions(rolelol, {
              SEND_MESSAGES: true,
              MENTION_EVERYONE: false
          })//Baron - Toxic Codes
          ch.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false,
            MENTION_EVERYONE: false//Baron - Toxic Codes
          })
          })
  })
  message.guild.createChannel(`.${message.guild.name} | 🔊 .` , 'category').then(tb => {//Baron - Toxic Codes
  message.guild.createChannel('「الـقـرأن الـكـريــم | 📜」' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.overwritePermissions(message.guild.id, {
      SPEAK: false//Baron - Toxic Codes
})
message.guild.createChannel('「Events | 🎲 .」' , 'voice').then(ch => {
  ch.setParent(tb);
  ch.setUserLimit(50)//Baron - Toxic Codes
  ch.overwritePermissions(message.guild.id, {
    SPEAK: false,
//Baron - Toxic Codes
})
})
  })
})
message.guild.createChannel(`.Talking | ✋🏽 .` , 'category').then(tb => {
  message.guild.createChannel(`「${message.guild.name} | 🔊 .」` , 'voice').then(ch => {//Baron - Toxic Codes
    ch.setParent(tb);
    ch.setUserLimit(50)//Baron - Toxic Codes
})
message.guild.createChannel('「Sounds | ♫ .」' , 'voice').then(ch => {//Baron - Toxic Codes
  ch.setParent(tb);
  ch.setUserLimit(50)//Baron - Toxic Codes
})
  })
  message.guild.createChannel(`» Games | الالعاب .` , 'category').then(tb => {//Baron - Toxic Codes
    message.guild.createChannel(`Fortnite | فورتنآيت .` , 'voice').then(ch => {
      ch.setParent(tb);//Baron - Toxic Codes
      ch.overwritePermissions(message.guild.id, {
        CONNECT: false,
   
    })
    ch.overwritePermissions(rolefortnite, {
      CONNECT: true,//Baron - Toxic Codes
 
  })
  })//Baron - Toxic Codes
  message.guild.createChannel('Minecraft | مآينكرآفت' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.overwritePermissions(message.guild.id, {//Baron - Toxic Codes
      CONNECT: false,
 
  })
  ch.overwritePermissions(rolemc, {//Baron - Toxic Codes
    CONNECT: true,
 
})
  })//Baron - Toxic Codes
  message.guild.createChannel(`Creative | كريآتف .` , 'voice').then(ch => {
    ch.setParent(tb);//Baron - Toxic Codes
    ch.overwritePermissions(message.guild.id, {
      CONNECT: false,
 
  })
  ch.overwritePermissions(rolecd, {
    CONNECT: true,//Baron - Toxic Codes
 
})
})
message.guild.createChannel('Legends | لوول' , 'voice').then(ch => {//Baron - Toxic Codes
  ch.setParent(tb);
  ch.overwritePermissions(message.guild.id, {
    CONNECT: false,
 
})//Baron - Toxic Codes
ch.overwritePermissions(rolelol, {
  CONNECT: true,//Baron - Toxic Codes
 
})
})
    })
  message.guild.createChannel(`» DJ | الموسيقي .` , 'category').then(tb => {//Baron - Toxic Codes
    message.guild.createChannel(`» Art.` , 'voice').then(ch => {
      ch.setParent(tb);
      ch.setUserLimit(15)//Baron - Toxic Codes
  })
  message.guild.createChannel(`» Fun.` , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(15)
})//Baron - Toxic Codes
message.guild.createChannel(`» Life.` , 'voice').then(ch => {
  ch.setParent(tb);
  ch.setUserLimit(15)//Baron - Toxic Codes
})
message.guild.createChannel(`» Sing.` , 'voice').then(ch => {
ch.setParent(tb);
ch.setUserLimit(15)
})//Baron - Toxic Codes
})
  message.guild.createChannel(`» Privates | خآص .` , 'category').then(tb => {//Baron - Toxic Codes
    message.guild.createChannel(`» Single.` , 'voice').then(ch => {
      ch.setParent(tb);
      ch.setUserLimit(1)
  })//Baron - Toxic Codes
  message.guild.createChannel('» Doubles.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(2)
  })//Baron - Toxic Codes
  message.guild.createChannel('» Triples.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(3)
  })//Baron - Toxic Codes
  message.guild.createChannel('» Forth.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(4)
  })//Baron - Toxic Codes
  message.guild.createChannel('» Classic.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(10)
  })//Baron - Toxic Codes
  message.guild.createChannel('» Group.' , 'voice').then(ch => {
    ch.setParent(tb);
    ch.setUserLimit(15)
  })
    })//Baron - Toxic Codes
 }
}
})//Baron - Toxic Codes
ToxicCodes.login('token bot here');