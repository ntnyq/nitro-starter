import type {
  CommandInteraction,
  RESTPostAPIApplicationCommandsJSONBody,
} from 'discord.js'
import { z } from 'zod'
import type { StructurePredicate } from '~/src/utils/loaders'

/**
 * Defines the structure of a command
 */
export interface Command {
  /**
   * The data for the command
   */
  data: RESTPostAPIApplicationCommandsJSONBody

  /**
   * The function to execute when the command is called
   * @param interaction The interaction of the command
   */
  execute(interaction: CommandInteraction): Promise<void> | void
}

/**
 * Defines the schema for a command.
 */
export const schema = z.object({
  data: z.record(z.any(), z.any()),
  execute: z.function(),
})

/**
 * Defines the predicate to check if an object is a valid Command type.
 */
export const predicate: StructurePredicate<Command> = (
  structure: unknown,
): structure is Command => schema.safeParse(structure).success
