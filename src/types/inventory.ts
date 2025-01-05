export enum ItemType {
  Weapon = 'Weapon',
  Potion = 'Potion',
  Trophy = 'Trophy',
}

export interface InventoryItem {
  name: string;
  type: ItemType;
}
