import React, { useState } from 'react';

enum ItemType {
  Weapon = 'Weapon',
  Potion = 'Potion',
  Trophy = 'Trophy',
}

interface InventoryItem {
  name: string;
  type: ItemType;
}

interface Character {
  name: string;
  strength: number;
  agility: number;
  health: number;
  maxHealth: number;
  inventory: InventoryItem[];
  level: number;
  xp: number;
}

type MeleeMonster = {
  kind: 'melee';
  damage: number;
  armor: number;
};

type RangedMonster = {
  kind: 'ranged';
  damage: number;
  range: number;
};

type Monster = MeleeMonster | RangedMonster;

const updateCharacter = (
  character: Character,
  updates: Partial<Character>
): Character => ({
  ...character,
  ...updates,
});

const levelUp = (character: Character): Character => ({
  ...character,
  level: character.level + 1,
  strength: character.strength + 2,
  agility: character.agility + 2,
  maxHealth: character.maxHealth + 10,
  health: character.maxHealth + 10,
  xp: 0,
});

const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const describeMonster = (monster: Monster): string => {
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

const CharacterCreator: React.FC = () => {
  const [character, setCharacter] = useState<Character>({
    name: '',
    strength: 10,
    agility: 10,
    health: 100,
    maxHealth: 100,
    inventory: [],
    level: 1,
    xp: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCharacter((prevCharacter) =>
      updateCharacter(prevCharacter, {
        [name]: name === 'name' ? value : parseInt(value, 10),
      })
    );
  };

  const healCharacter = () => {
    setCharacter((prev) =>
      updateCharacter(prev, {
        health: Math.min(prev.health + 15, prev.maxHealth),
      })
    );
  };

  const fightMonster = (monster: Monster) => {
    setCharacter((prev) => {
      let damageTaken = monster.damage;

      if (monster.kind === 'melee') {
        damageTaken = Math.max(0, monster.damage - prev.strength);
      } else if (monster.kind === 'ranged') {
        damageTaken = Math.max(0, monster.damage - prev.agility / 2);
      }

      const xpReward = getRandomInt(30, 70);
      const updatedXp = prev.xp + xpReward;
      const xpThreshold = 100;

      if (updatedXp >= xpThreshold) {
        return levelUp({ ...prev, xp: updatedXp - xpThreshold });
      }

      return updateCharacter(prev, {
        health: Math.max(prev.health - damageTaken, 0),
        xp: updatedXp,
        inventory: [
          ...prev.inventory,
          { name: `${monster.kind} Monster Trophy`, type: ItemType.Trophy },
        ],
      });
    });
  };

  const monsters: Monster[] = [
    { kind: 'melee', damage: 10, armor: 5 },
    { kind: 'ranged', damage: 8, range: 15 },
  ];

  return (
    <div>
      <h1>Create Your Character</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={character.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Strength:
          <input
            type="number"
            name="strength"
            value={character.strength}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Agility:
          <input
            type="number"
            name="agility"
            value={character.agility}
            onChange={handleInputChange}
          />
        </label>
        <br />
      </form>
      <div>
        <h2>Your Character</h2>
        <p>Name: {character.name}</p>
        <p>Level: {character.level}</p>
        <p>XP: {character.xp} / 100</p>
        <p>Strength: {character.strength}</p>
        <p>Agility: {character.agility}</p>
        <p>
          Health: {character.health} / {character.maxHealth}
        </p>
        <p>Inventory:</p>
        <ul>
          {character.inventory.length > 0 ? (
            character.inventory.map((item, index) => (
              <li key={index}>
                {item.name} ({item.type})
              </li>
            ))
          ) : (
            <p>Empty</p>
          )}
        </ul>
      </div>
      <button onClick={healCharacter}>Heal</button>
      <div>
        <h2>Monsters</h2>
        <ul>
          {monsters.map((monster, index) => (
            <li key={index}>
              {describeMonster(monster)}{' '}
              <button onClick={() => fightMonster(monster)}>Fight</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterCreator;
