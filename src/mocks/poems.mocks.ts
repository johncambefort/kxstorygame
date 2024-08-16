import { Poem } from "../models/poem";

export const getPoemMock = (data: Partial<Poem> = {}): Poem => {
  return {
    id: 1,
    game_id: 1,
    title: "Little fox",
    lines: "The little fox\r\njumpedoverthemoon",
    ...data,
  };
};
