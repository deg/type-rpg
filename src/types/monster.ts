export type MeleeMonster = {
  kind: 'melee';
  damage: number;
  armor: number;
};

export type RangedMonster = {
  kind: 'ranged';
  damage: number;
  range: number;
};

export type Monster = MeleeMonster | RangedMonster;
