import process from 'node:process'
// import { URL } from 'node:url'
import { Client, Events, GatewayIntentBits } from 'discord.js'
// import { loadCommands, loadEvents } from '~/src/utils/loaders'
// import { registerEvents } from '~/src/utils/registerEvents'

/**
 * Initialize the client
 */
const client = new Client({
  shards: 'auto',
  intents: [GatewayIntentBits.Guilds],
})

client.on('debug', console.log)

client.once(Events.ClientReady, event => {
  console.log(`Ready! logged in as ${event.user.tag}`)
})

// const events = await loadEvents(new URL('events/', import.meta.url))
// const commands = await loadCommands(new URL('commands/', import.meta.url))

// // Register the event handlers
// registerEvents(commands, events, client)

// Login to the client
try {
  await client.login(process.env.DISCORD_TOKEN)
  console.log('success')
} catch (error) {
  console.log(error)
}
