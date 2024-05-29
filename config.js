const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="yasirkhan9982606@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/SN3Yfzjy/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʏᴀꜱɪʀ ᴋʜᴀɴ" 


global.devs = "923211865537" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923211865537";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923211865537,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_38_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNixcbiAgICAgICAgMjI5LFxuICAgICAgICA4NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1LFxuICAgICAgICAyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDg0LFxuICAgICAgICA3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMyLFxuICAgICAgICA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDczLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDMsXG4gICAgICAgIDcwLFxuICAgICAgICA0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY5LFxuICAgICAgICA4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxODcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ1LFxuICAgICAgICA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJaK3JiNGJDK1hZa3RoUFdmWHhyZElRSzYvUW5VM2ZTQ2ZsbnRGWEt1WEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjExODY1NTM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMjg1NzBBQjY1QkJFOUMwRjE4MTE0QzM0NjNEQzQyNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcwMTg3MjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMTE4NjU1MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJENkVDMEIwMkUyNzE5RUIyODUwRkYwNDRGQ0I2OUQ2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzAxODczMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIxMTg2NTUzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkU3NUREREE4NEI5OERCQUUwMkY4RTA3RjY5QkM3RjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3MDE4NzM1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpoaG5WMlFXUzdpMW1qODJKb0xibVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWNkYTNjNzQtZWVmMi00NDY3LWI5MWEtZGMyODFhNzU5YWQzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MixcbiAgICAgIDI0OCxcbiAgICAgIDQyLFxuICAgICAgNTcsXG4gICAgICAxMzIsXG4gICAgICAxMjQsXG4gICAgICAyOCxcbiAgICAgIDE2OCxcbiAgICAgIDcyLFxuICAgICAgNDMsXG4gICAgICAxOTIsXG4gICAgICA3NSxcbiAgICAgIDIxNCxcbiAgICAgIDMyLFxuICAgICAgMjM3LFxuICAgICAgMTI2LFxuICAgICAgMjYsXG4gICAgICAxOCxcbiAgICAgIDEzNCxcbiAgICAgIDI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAxODIsXG4gICAgICAxODUsXG4gICAgICA4MSxcbiAgICAgIDIzLFxuICAgICAgMTk4LFxuICAgICAgNjcsXG4gICAgICAyMjYsXG4gICAgICAxMzksXG4gICAgICAyMjMsXG4gICAgICAyMTksXG4gICAgICA2MSxcbiAgICAgIDk3LFxuICAgICAgMjMyLFxuICAgICAgNDgsXG4gICAgICAyMjYsXG4gICAgICAyNTMsXG4gICAgICAzOSxcbiAgICAgIDI0MSxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01UNmdOQUNFT1RBM3JJR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaVhRbWJzbnY1VDZmOHpmdjkybDdMaWtBQW5BMldrZUVKa1BaNlllK1dpWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyNjcxYzRlbC9Wb3RzY0JmNlY3cEpNNVRJT3Z0VWdkT28raGRMVWpPdEQxd3FJRlJLOGFrdVJ4RE9NWHkvOXFpZHRhb0FxandLTzlGNHhtSzdNMzFDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFT3dDb25IY2t3a3pRZ21TbzZMTWF5VFhzdExLdlN0MWFFQWZPSzNjSHdTaFd5Um15VjlUVGZtQTgwT2R2am5CeGdyZHFscFJ6Q3YzaXB6OTZYU0VEUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIxMTg2NTUzNzoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAyMjMzMjQ5NTUwNTU2OjI1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJvdFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjExODY1NTM3OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcwMTg3MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDaUlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNpSS5qc29uIjogIntcImtleURhdGFcIjpcInllbU1lT3BNdXVvTGtCMHJiNGJZbFRiOW1vSC9jL3FEUXQ5dW5yQUNTa0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzA0NjU4NzUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDaUouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTVENrWTQvL0Vkb2U4VmgwQ05IVk01Y3VaRVJMNVZ6cXFuU1NkYkJTSkdVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNDY1ODc1NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3MDE2OTQ3OTIxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2lLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVTNsTURMbHkwTHhsZGRlekYvY0ZuemhjT24yUnQ5ZmFuT3k4K05yTnB2UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDQ2NTg3NTUsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzAxODA3NzE3OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: YᗩᔕIᖇ Kᕼᗩᑎ Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 𝐶𝑟𝑒𝑎𝑡𝑒𝑑 𝐵𝑦 𝑌𝑎𝑠𝑖𝑟 』```", //*『Contact』*\n Whatsapp 03186385943"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Ꭹꮧꮥꭵꮢ-Ꮶꮒꮧꮑ",
  ownername:process.env.OWNER_NAME|| "ɪᴛ' x ʏᴀꜱɪʀ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ʏᴀꜱɪʀ"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
