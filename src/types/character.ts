import { InventoryItem } from './inventory';

export interface Character {
  name: string;
  strength: number;
  agility: number;
  health: number;
  maxHealth: number;
  inventory: InventoryItem[];
  level: number;
  xp: number;
}
