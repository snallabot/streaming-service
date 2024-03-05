import { Client } from "oceanic.js"
import { VoiceConnectionStatus } from "@discordjs/voice"

const token = process.env.BOT_TOKEN
const client = new Client({ auth: `Bot ${token}`, gateway: { intents: ["GUILDS", "GUILD_VOICE_STATES"] } },)

client.on("ready", () => {
    console.log("Client is ready as", client.user.tag);
    const guild = client.guilds.get("972269092440530994")

    const voiceConnection = client.joinVoiceChannel({
        channelID: "1214389110089981992",
        guildID: "972269092440530994", // The ID of the guild the channel belongs to
        selfDeaf: true, // Whether our client joins deafened
        selfMute: true, // Whether our client joins muted
        voiceAdapterCreator: guild.voiceAdapterCreator // The voiceAdapterCreator the guild provides
    })
    voiceConnection.on(VoiceConnectionStatus.Disconnected, () => {
        voiceConnection.rejoin(); // In case we get disconnected, rejoin
    });

    voiceConnection
})
