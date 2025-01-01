import React, { useState } from "react";

interface Character {
  name: string;
  strength: number;
  agility: number;
  health: number;
}

const CharacterCreator: React.FC = () => {
  const [character, setCharacter] = useState<Character>({
    name: "",
    strength: 10,
    agility: 10,
    health: 100,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [name]: name === "name" ? value : parseInt(value, 10),
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
          />
        </label>
      </form>
      <div>
        <h2>Your Character</h2>
        <p>Name: {character.name}</p>
        <p>Strength: {character.strength}</p>
        <p>Agility: {character.agility}</p>
        <p>Health: {character.health}</p>
      </div>
    </div>
  );
};

export default CharacterCreator;
