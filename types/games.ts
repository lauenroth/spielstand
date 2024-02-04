export interface ScoreField {
  name?: string;
  type: 'score';
}

export interface SumField {
  name: string;
  type: 'sumField';
}

export interface FieldRule {
  field: string;
  comparison: '<' | '>' | '<=' | '>=' | '=';
  value: number;
  info: string;
}

export interface InfoField {
  name: string;
  type: 'infoField';
  default?: string;
  rules: FieldRule[];
}

export type Field = ScoreField | SumField | InfoField;

export type PlayersType = 'players' | 'teams';

export interface Game {
  name: string;
  isRoundBased: boolean;
  players: {
    type: PlayersType;
    num: number;
  };
  fields: Field[];
  footer: Field[];
  winningRules: {
    field: string;
    minScore: number;
  };
}
