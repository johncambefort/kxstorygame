import { PropsWithChildren } from "react";
import { Poem } from "../models/poem";
import { getPoemMock } from "../mocks/poems.mocks";
import { Navbar } from "./Navbar";

interface Props {}

const PoemList: React.FC<PropsWithChildren<Props>> = () => {
  const poems: Poem[] = [
    getPoemMock(),
    getPoemMock({ id: 2, game_id: 3, title: "Boom", lines: "blah" }),
  ];

  const renderedPoems = (
    <>
      <Navbar />
      <ul>
        {poems.map((poem) => (
          <li key={poem.title}>{poem.title}</li>
        ))}
      </ul>
    </>
  );

  return renderedPoems;
};

export default PoemList;
