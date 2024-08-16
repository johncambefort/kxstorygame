export interface Poem {
  id: number;
  title: string;
  lines: string;
  game_id: number;
}

export interface ServerPoem {
  id: number;
  title: string;
  lines: string;
  game_id: number;
  created_at: Date;
  updated_at: Date;
}
