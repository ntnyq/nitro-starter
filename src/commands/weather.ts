import type { Command } from './index.ts'

export default {
  data: {
    name: 'weather',
    description: 'Gave me the weather!',
  },
  async execute(interaction) {
    await interaction.reply('Ok today weather is ...!')
  },
} satisfies Command
