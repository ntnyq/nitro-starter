import { type Client, Events } from 'discord.js'
import type { Command } from '~/src/commands'
import type { Event } from '~/src/events'

export function registerEvents(
  commands: Map<string, Command>,
  events: Event[],
  client: Client,
): void {
  // Create an event to handle command interactions
  const interactionCreateEvent: Event<Events.InteractionCreate> = {
    name: Events.InteractionCreate,
    async execute(interaction) {
      if (interaction.isCommand()) {
        const command = commands.get(interaction.commandName)

        if (!command) {
          throw new Error(`Command '${interaction.commandName}' not found.`)
        }

        await command.execute(interaction)
      }
    },
  }

  for (const event of [...events, interactionCreateEvent]) {
    client[event.once ? 'once' : 'on'](event.name, async (...args) =>
      event.execute(...args),
    )
  }
}
