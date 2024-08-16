import { PropsWithChildren } from "react";
import { Poem } from "../models/poem";
import { Divider } from "@chakra-ui/react";

interface Props {
  poem: Poem;
}

const Poem: React.FC<PropsWithChildren<Props>> = ({ poem }) => {
  const renderedPoem = (
    <div>
      <h2>{poem.title}</h2>
      <Divider />
      <p>{poem.lines}</p>
    </div>
  );

  return renderedPoem;
};

export default Poem;
