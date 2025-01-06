import React, { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Card,
  List,
  Typography,
  Progress,
  Space,
} from "antd";

import { Character } from "../types/character";
import { Monster } from "../types/monster";
import { describeMonster, fightMonster } from "../logic/monster";
import { updateCharacter, healCharacter } from "../logic/character";

const { Title } = Typography;

/**
 * The main component for creating and managing a character.
 *
 * @returns A JSX element representing the character creation interface.
 */
const CharacterCreator: React.FC = () => {
  /**
   * The state representing the character.
   */
  const [character, setCharacter] = useState<Character>({
    name: "",
    strength: 10,
    agility: 10,
    health: 100,
    maxHealth: 100,
    inventory: [],
    level: 1,
    xp: 0,
  });

  /**
   * A list of monsters that the character can fight.
   */
  const monsters: Monster[] = [
    { kind: "melee", damage: 10, armor: 5 },
    { kind: "ranged", damage: 8, range: 15 },
  ];

  /**
   * Updates the character state using a static or dynamic updater.
   *
   * @param updater - A partial update object or a function generating updates.
   */
  const handleStateUpdate = (
    updater: Partial<Character> | ((current: Character) => Partial<Character>)
  ) => {
    setCharacter((prev) => updateCharacter(prev, updater));
  };

  /**
   * Handles input changes for character attributes.
   *
   * @param e - The input change event.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleStateUpdate(() => ({
      [name]: name === 'name' ? value : parseInt(value, 10),
    }));
  };

  /**
   * Handles fighting a monster and updates the character state accordingly.
   *
   * @param monster - The monster to fight.
   */
  const handleFightMonster = (monster: Monster) => {
    handleStateUpdate((current) => fightMonster(current, monster));
  };

  /**
   * Heals the character by a fixed amount.
   */
  const handleHealCharacter = () => {
    handleStateUpdate((current) => healCharacter(current, 15));
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
      <button onClick={handleHealCharacter}>Heal</button>
      <div>
        <h2>Monsters</h2>
        <ul>
          {monsters.map((monster, index) => (
            <li key={index}>
              {describeMonster(monster)}{' '}
              <button onClick={() => handleFightMonster(monster)}>Fight</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterCreator;
