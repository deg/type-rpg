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
}

const CharacterCreator: React.FC = () => {
  const [character, setCharacter] = useState<Character>({
    name: '',
    strength: 10,
    agility: 10,
    health: 100,
    maxHealth: 100,
    inventory: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: name === 'name' ? value : parseInt(value, 10),
    }));
  };

  const fightMonster = () => {
    setCharacter((prev) => ({
      ...prev,
      health: Math.max(prev.health - 20, 0), // Character loses 20 health
      inventory: [
        ...prev.inventory,
        { name: 'Monster Trophy', type: ItemType.Trophy }, // Gains a trophy
      ],
    }));
  };

  const healCharacter = () => {
    setCharacter((prev) => ({
      ...prev,
      health: Math.min(prev.health + 15, prev.maxHealth), // Regain 15 health
    }));
  };

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
        <label>
          Health:
          <input
            type="number"
            name="health"
            value={character.health}
            onChange={handleInputChange}
            readOnly
          />
        </label>
      </form>
      <button onClick={fightMonster}>Fight Monster</button>
      <button onClick={healCharacter}>Heal</button>
      <div>
        <h2>Your Character</h2>
        <p>Name: {character.name}</p>
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
    </div>
  );
};

export default CharacterCreator;
