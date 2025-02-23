import { consola } from 'consola'
import { name } from '../package.json'

export const logger = consola.withTag(name)
