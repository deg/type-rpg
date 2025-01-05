import { Character } from '../types/character';

/**
 * Updates the character state by merging static or dynamic updates.
 *
 * @param character - The current character state.
 * @param updater - A `Partial<Character>` or a function that generates updates.
 * @returns The updated character object.
 */
export const updateCharacter = (
  character: Character,
  updater: Partial<Character> | ((current: Character) => Partial<Character>)
): Character => {
  const updates = typeof updater === 'function' ? updater(character) : updater;
  return { ...character, ...updates };
};

/**
 * Levels up the character, improving stats and resetting XP.
 *
 * @param character - The current character.
 * @returns The updated character with increased level and stats.
 */
export const levelUp = (character: Character): Character =>
  updateCharacter(character, {
    level: character.level + 1,
    strength: character.strength + 2,
    agility: character.agility + 2,
    maxHealth: character.maxHealth + 10,
    health: character.maxHealth + 10, // Fully heal
    xp: 0, // Reset XP
  });

/**
 * Stateless healing logic for a character.
 *
 * @param character - The current character.
 * @param healAmount - The amount of health to restore.
 * @returns The updated fields to apply.
 */
export const healCharacter = (
  character: Character,
  healAmount: number
): Partial<Character> => ({
  health: Math.min(character.health + healAmount, character.maxHealth),
});
