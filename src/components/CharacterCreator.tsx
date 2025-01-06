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
   * A list of monsters that the character can fight.
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
  const handleInputChange = (field: string, value: string | number) => {
    handleStateUpdate({ [field]: value });
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
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Title>Create Your Character</Title>
      <Card>
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input
              value={character.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Strength">
            <InputNumber
              min={1}
              value={character.strength}
              onChange={(value) => handleInputChange("strength", value!)}
            />
          </Form.Item>
          <Form.Item label="Agility">
            <InputNumber
              min={1}
              value={character.agility}
              onChange={(value) => handleInputChange("agility", value!)}
            />
          </Form.Item>
        </Form>
      </Card>

      <Card>
        <Title level={3}>Your Character</Title>
        <p>
          <strong>Name:</strong> {character.name}
        </p>
        <p>
          <strong>Level:</strong> {character.level}
        </p>
        <Progress
          percent={(character.xp / 100) * 100}
          status="active"
          showInfo
          format={(percent) => `XP: ${Math.round(percent!)}%`}
        />
        <p>
          <strong>Health:</strong> {character.health} / {character.maxHealth}
        </p>
        <Button type="primary" onClick={handleHealCharacter}>
          Heal Character
        </Button>
      </Card>

      <Card>
        <Title level={3}>Monsters</Title>
        <List
          dataSource={monsters}
          renderItem={(monster) => (
            <List.Item>
              <Space>
                {describeMonster(monster)}
                <Button type="default" onClick={() => handleFightMonster(monster)}>
                  Fight
                </Button>
              </Space>
            </List.Item>
          )}
        />
      </Card>
    </Space>
  );
};

export default CharacterCreator;
