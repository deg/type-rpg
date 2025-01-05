import { Monster } from '../types/monster';
import { Character } from '../types/character';
import { ItemType } from '../types/inventory';
import { getRandomInt } from '../utils/random';
import { updateCharacter, levelUp } from './character';

export const describeMonster = (monster: Monster): string => {
  switch (monster.kind) {
    case 'melee':
      return `Melee Monster: Damage = ${monster.damage}, Armor = ${monster.armor}`;
    case 'ranged':
      return `Ranged Monster: Damage = ${monster.damage}, Range = ${monster.range}`;
    default:
      const _exhaustiveCheck: never = monster;
      return _exhaustiveCheck;
  }
};

export const fightMonster = (
  character: Character,
  monster: Monster
): Character => {
  let damageTaken = monster.damage;

  if (monster.kind === 'melee') {
    damageTaken = Math.max(0, monster.damage - character.strength);
  } else if (monster.kind === 'ranged') {
    damageTaken = Math.max(0, monster.damage - character.agility / 2);
  }

  const xpReward = getRandomInt(30, 70);
  const updatedXp = character.xp + xpReward;
  const xpThreshold = 100;

  if (updatedXp >= xpThreshold) {
    return levelUp({ ...character, xp: updatedXp - xpThreshold });
  }

  return updateCharacter(character, {
    health: Math.max(character.health - damageTaken, 0),
    xp: updatedXp,
    inventory: [
      ...character.inventory,
      { name: `${monster.kind} Monster Trophy`, type: ItemType.Trophy },
    ],
  });
};
